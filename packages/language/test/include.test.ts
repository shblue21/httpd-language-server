import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { URI } from 'langium';
import { NodeFileSystem } from 'langium/node';
import { parseHelper } from 'langium/test';
import { createHttpdServices, type HttpdDocument } from '../src/index.js';
import { resolveConfigurationPath } from '../src/httpd-include-resolver.js';

let directory: string;
let services: ReturnType<typeof createHttpdServices>;

beforeAll(async () => {
    directory = await mkdtemp(join(tmpdir(), 'httpd-language-server-'));
    await writeFile(join(directory, 'fragment.inc'), 'ServerName included.example\n');
    await mkdir(join(directory, 'conf.d'));
    await writeFile(join(directory, 'conf.d', '10-first.conf'), 'Listen 80\n');
    await writeFile(join(directory, 'conf.d', '20-second.conf'), 'Listen 443\n');
    await writeFile(join(directory, 'conf.d', 'A-upper.conf'), 'Listen 8080\n');
    await writeFile(join(directory, 'conf.d', 'a-lower.conf'), 'Listen 8081\n');
    await writeFile(join(directory, 'conf.d', 'ignored.txt'), 'ignored\n');
    await writeFile(join(directory, 'shared.inc'), 'Require all granted\n');
    await writeFile(
        join(directory, 'module.inc'),
        'LoadModule headers_module modules/mod_headers.so\nHeader set X-Test enabled\n'
    );
    services = createHttpdServices(NodeFileSystem);
});

afterAll(async () => {
    await rm(directory, { recursive: true, force: true });
});

describe('HTTPD includes', () => {
    test('resolves target paths without depending on the host operating system', () => {
        const document = URI.parse('file:///workspace/httpd.conf');

        expect(resolveConfigurationPath(document, 'conf/extra.conf').path).toBe(
            '/workspace/conf/extra.conf'
        );
        expect(resolveConfigurationPath(document, '/etc/httpd/extra.conf').path).toBe(
            '/etc/httpd/extra.conf'
        );
        expect(resolveConfigurationPath(document, 'C:/Apache24/conf/extra.conf').path).toBe(
            '/C:/Apache24/conf/extra.conf'
        );
    });

    test('navigates to a relative include target', async () => {
        const parse = parseHelper<HttpdDocument>(services.Httpd);
        const document = await parse('Include fragment.inc\n', {
            documentUri: URI.file(join(directory, 'httpd.conf')).toString(),
            validation: true
        });
        const links = await services.Httpd.lsp.DefinitionProvider?.getDefinition(document, {
            textDocument: { uri: document.uri.toString() },
            position: { line: 0, character: 10 }
        });

        expect(links?.map(link => link.targetUri)).toEqual([
            URI.file(join(directory, 'fragment.inc')).toString()
        ]);
        expect(services.shared.ServiceRegistry.hasServices(
            URI.file(join(directory, 'fragment.inc'))
        )).toBe(true);
        expect(services.shared.ServiceRegistry.hasServices(
            URI.file(join(directory, 'unrelated.conf'))
        )).toBe(false);
        expect(document.diagnostics).toHaveLength(0);
    });

    test('includes logical configuration facts in requirement analysis', async () => {
        const parse = parseHelper<HttpdDocument>(services.Httpd);
        const document = await parse('Include module.inc\n', {
            documentUri: URI.file(join(directory, 'requirements.httpd')).toString(),
            validation: true
        });
        const graph = await services.Httpd.workspace.IncludeGraph.build(document);
        const requirements = services.Httpd.semantic.Requirements.analyzeConfiguration(
            document.parseResult.value,
            graph
        );

        expect(requirements.loadedModules).toContain('mod_headers');
        expect(requirements.modules).toContainEqual({
            condition: 'active',
            providers: ['mod_headers'],
            required: true,
            state: 'loaded'
        });
    });

    test('uses a discoverable ServerRoot as the include base', async () => {
        const root = join(directory, 'server-root');
        await mkdir(join(root, 'conf'), { recursive: true });
        await writeFile(join(root, 'conf', 'extra.inc'), 'Listen 8080\n');
        const parse = parseHelper<HttpdDocument>(services.Httpd);
        const document = await parse('ServerRoot server-root\nInclude conf/extra.inc\n', {
            documentUri: URI.file(join(directory, 'server-root.httpd')).toString(),
            validation: true
        });
        const links = await services.Httpd.lsp.DefinitionProvider?.getDefinition(document, {
            textDocument: { uri: document.uri.toString() },
            position: { line: 1, character: 12 }
        });

        expect(links?.[0].targetUri).toBe(URI.file(join(root, 'conf', 'extra.inc')).toString());
    });

    test('does not read absolute or escaping target paths from the host', async () => {
        const parse = parseHelper<HttpdDocument>(services.Httpd);
        const absolute = join(directory, 'fragment.inc');
        const document = await parse(`Include "${absolute}"\nInclude ../outside.conf\n`, {
            documentUri: URI.file(join(directory, 'safe.httpd')).toString(),
            validation: true
        });

        const absoluteLinks = await services.Httpd.lsp.DefinitionProvider?.getDefinition(document, {
            textDocument: { uri: document.uri.toString() },
            position: { line: 0, character: 12 }
        });
        expect(absoluteLinks).toBeUndefined();
        expect(document.diagnostics).toHaveLength(0);
    });

    test('substitutes definitions in include paths without configuration prompts', async () => {
        const parse = parseHelper<HttpdDocument>(services.Httpd);
        const document = await parse('Define SITE fragment\nInclude ${SITE}.inc\n', {
            documentUri: URI.file(join(directory, 'defined.httpd')).toString(),
            validation: true
        });
        const links = await services.Httpd.lsp.DefinitionProvider?.getDefinition(document, {
            textDocument: { uri: document.uri.toString() },
            position: { line: 1, character: 12 }
        });

        expect(links?.[0].targetUri).toBe(URI.file(join(directory, 'fragment.inc')).toString());
    });

    test('applies definitions in source order', async () => {
        const parse = parseHelper<HttpdDocument>(services.Httpd);
        const document = await parse(`
Define SITE fragment
Include \${SITE}.inc
UnDefine SITE
Include \${SITE}.inc
`, {
            documentUri: URI.file(join(directory, 'ordered-defines.httpd')).toString(),
            validation: true
        });
        const first = await services.Httpd.lsp.DefinitionProvider?.getDefinition(document, {
            textDocument: { uri: document.uri.toString() },
            position: { line: 2, character: 12 }
        });
        const second = await services.Httpd.lsp.DefinitionProvider?.getDefinition(document, {
            textDocument: { uri: document.uri.toString() },
            position: { line: 4, character: 12 }
        });

        expect(first?.[0].targetUri).toBe(URI.file(join(directory, 'fragment.inc')).toString());
        expect(second).toBeUndefined();
    });

    test('reports missing required includes but not missing optional includes', async () => {
        const parse = parseHelper<HttpdDocument>(services.Httpd);
        const document = await parse('Include missing.inc\nIncludeOptional optional.inc\n', {
            documentUri: URI.file(join(directory, 'missing.httpd')).toString(),
            validation: true
        });

        expect(document.diagnostics?.map(diagnostic => diagnostic.message)).toEqual([
            'Cannot resolve required include "missing.inc" from this workspace.'
        ]);
    });

    test('skips inactive includes and preserves unknown branches as conditional warnings', async () => {
        const parse = parseHelper<HttpdDocument>(services.Httpd);
        const document = await parse(`
Define ON
<IfDefine !ON>
    Include inactive-missing.inc
</IfDefine>
<IfVersion >= 2.4.0>
    Include conditional-missing.inc
</IfVersion>
Define MAYBE yes
<IfVersion >= 2.4.0>
    UnDefine MAYBE
</IfVersion>
<IfDefine MAYBE>
    Include joined-missing.inc
</IfDefine>
`, {
            documentUri: URI.file(join(directory, 'conditions.httpd')).toString(),
            validation: true
        });
        const messages = document.diagnostics?.map(diagnostic => diagnostic.message);

        expect(messages).not.toContain(
            'Cannot resolve required include "inactive-missing.inc" from this workspace.'
        );
        expect(messages).toContain(
            'Conditional include "conditional-missing.inc" cannot be resolved from this workspace.'
        );
        expect(messages).toContain(
            'Conditional include "joined-missing.inc" cannot be resolved from this workspace.'
        );
    });

    test('resolves wildcard includes in alphabetical order', async () => {
        const parse = parseHelper<HttpdDocument>(services.Httpd);
        const document = await parse('Include conf.d/*.conf\n', {
            documentUri: URI.file(join(directory, 'glob.httpd')).toString(),
            validation: true
        });
        const links = await services.Httpd.lsp.DefinitionProvider?.getDefinition(document, {
            textDocument: { uri: document.uri.toString() },
            position: { line: 0, character: 12 }
        });

        expect(links?.map(link => URI.parse(link.targetUri).path.split('/').at(-1))).toEqual([
            '10-first.conf',
            '20-second.conf',
            'A-upper.conf',
            'a-lower.conf'
        ]);
    });

    test('tracks occurrence contexts and reports cycles in arbitrary-extension files', async () => {
        const rootPath = join(directory, 'cycle.httpd');
        await writeFile(join(directory, 'a.inc'), 'Include b.inc\n');
        await writeFile(join(directory, 'b.inc'), 'Include cycle.httpd\n');
        await writeFile(join(directory, 'broken.inc'), '<Directory "/srv/www">\n');
        await writeFile(rootPath, 'Include a.inc\n');

        const parse = parseHelper<HttpdDocument>(services.Httpd);
        const document = await parse(`
<Directory "/srv/www">
    Include shared.inc
</Directory>
<VirtualHost *:80>
    Include shared.inc
</VirtualHost>
Include a.inc
Include broken.inc
`, {
            documentUri: URI.file(rootPath).toString(),
            validation: true
        });
        const graph = await services.Httpd.workspace.IncludeGraph.build(document);
        const shared = graph.occurrences.filter(occurrence =>
            occurrence.targetUri.path.endsWith('/shared.inc')
        );

        expect(shared.map(occurrence => occurrence.context)).toEqual(['directory', 'virtual-host']);
        expect(document.diagnostics?.map(diagnostic => diagnostic.message)).toContain(
            'Include cycle detected: cycle.httpd -> a.inc -> b.inc -> cycle.httpd.'
        );
        expect(document.diagnostics?.some(diagnostic =>
            typeof diagnostic.message === 'string'
            && diagnostic.message.startsWith('Included file "broken.inc" has syntax errors:')
        )).toBe(true);
        expect(document.diagnostics?.map(diagnostic => diagnostic.message)).toContain(
            'Included file "shared.inc": Require is not valid in virtual-host context. Allowed: directory, htaccess.'
        );
        expect(graph.documents.has(URI.file(join(directory, 'shared.inc')).toString())).toBe(true);
    });
});
