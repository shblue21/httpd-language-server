import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { mkdir, mkdtemp, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { URI } from 'langium';
import { NodeFileSystem } from 'langium/node';
import { parseHelper } from 'langium/test';
import { createHttpdServices, type HttpdDocument } from '../src/index.js';
import { resolveConfigurationPath } from '../src/httpd-include-resolver.js';

let directory: string;
let externalDirectory: string;
let services: ReturnType<typeof createHttpdServices>;

beforeAll(async () => {
    directory = await mkdtemp(join(tmpdir(), 'httpd-language-server-'));
    externalDirectory = await mkdtemp(join(tmpdir(), 'httpd-language-server-external-'));
    await writeFile(join(directory, 'fragment.inc'), 'ServerName included.example\n');
    await mkdir(join(directory, 'conf.d'));
    await writeFile(join(directory, 'conf.d', '10-first.conf'), 'Listen 80\n');
    await writeFile(join(directory, 'conf.d', '20-second.conf'), 'Listen 443\n');
    await writeFile(join(directory, 'conf.d', 'A-upper.conf'), 'Listen 8080\n');
    await writeFile(join(directory, 'conf.d', 'a-lower.conf'), 'Listen 8081\n');
    await writeFile(join(directory, 'conf.d', 'ignored.txt'), 'ignored\n');
    await writeFile(join(directory, 'shared.inc'), 'Require all granted\n');
    await writeFile(join(externalDirectory, 'secret.conf'), 'ExternalSecret value\n');
    await symlink(externalDirectory, join(directory, 'external-link'), 'dir');
    await writeFile(
        join(directory, 'module.inc'),
        'LoadModule headers_module modules/mod_headers.so\nDefine ENABLED yes\nHeader set X-Test enabled\n'
    );
    services = createHttpdServices(NodeFileSystem);
});

afterAll(async () => {
    await rm(directory, { recursive: true, force: true });
    await rm(externalDirectory, { recursive: true, force: true });
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
        const document = await parse(`
Include module.inc
<IfModule headers_module>
    Define MODULE_FROM_INCLUDE yes
</IfModule>
<IfDefine ENABLED>
    Define DEFINE_FROM_INCLUDE yes
</IfDefine>
`, {
            documentUri: URI.file(join(directory, 'requirements.httpd')).toString(),
            validation: true
        });
        const graph = await services.Httpd.workspace.IncludeGraph.build(document);
        const requirements = services.Httpd.semantic.Requirements.analyzeConfiguration(
            document.parseResult.value,
            graph
        );

        expect(requirements.loadedModules).toContain('mod_headers');
        expect(requirements.conditions.map(condition => condition.state)).toEqual([
            'active',
            'active'
        ]);
        expect(requirements.defines.has('MODULE_FROM_INCLUDE')).toBe(true);
        expect(requirements.defines.has('DEFINE_FROM_INCLUDE')).toBe(true);
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

    test('does not apply a later ServerRoot to an earlier include', async () => {
        const parse = parseHelper<HttpdDocument>(services.Httpd);
        const document = await parse('Include conf/extra.inc\nServerRoot server-root\n', {
            documentUri: URI.file(join(directory, 'ordered-root.httpd')).toString(),
            validation: true
        });
        const links = await services.Httpd.lsp.DefinitionProvider?.getDefinition(document, {
            textDocument: { uri: document.uri.toString() },
            position: { line: 0, character: 12 }
        });

        expect(links).toBeUndefined();
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

    test('does not follow workspace symlinks to external files', async () => {
        const parse = parseHelper<HttpdDocument>(services.Httpd);
        const document = await parse('Include external-link/secret.conf\n', {
            documentUri: URI.file(join(directory, 'symlink.httpd')).toString(),
            validation: true
        });
        const links = await services.Httpd.lsp.DefinitionProvider?.getDefinition(document, {
            textDocument: { uri: document.uri.toString() },
            position: { line: 0, character: 15 }
        });

        expect(links).toBeUndefined();
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
        await writeFile(join(directory, 'mismatched.inc'), '<Directory "/srv">\n</Location>\n');
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
Include mismatched.inc
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
        expect(document.diagnostics?.map(diagnostic => diagnostic.message)).toContain(
            'Included file "mismatched.inc": Closing section </Location> does not match <Directory>.'
        );
        expect(graph.documents.has(URI.file(join(directory, 'shared.inc')).toString())).toBe(true);
    });

    test('uses the including root for fragment hover without publishing a fake root', async () => {
        const fragmentPath = join(directory, 'context-fragment.inc');
        const fragmentText = 'Header set X-Context enabled\n';
        await writeFile(fragmentPath, fragmentText);
        const parse = parseHelper<HttpdDocument>(services.Httpd);
        const root = await parse(`
LoadModule headers_module modules/mod_headers.so
<Directory "/srv/www">
    Include context-fragment.inc
</Directory>
`, {
            documentUri: URI.file(join(directory, 'context-root.httpd')).toString(),
            validation: true
        });
        const fragment = await parse(fragmentText, {
            documentUri: URI.file(fragmentPath).toString(),
            validation: true
        });

        expect(services.shared.ServiceRegistry.hasRoot(fragment.uri)).toBe(false);
        const rootsBefore = services.shared.ServiceRegistry.getRootsForIncluded(fragment.uri)
            .map(uri => uri.toString());
        let notifications = 0;
        const dispose = services.shared.ServiceRegistry.onDidChangeIncluded(() => notifications++);
        const hover = await services.Httpd.lsp.HoverProvider?.getHoverContent(fragment, {
            textDocument: { uri: fragment.uri.toString() },
            position: { line: 0, character: 2 }
        });
        dispose();

        const hoverText = (hover?.contents as { value?: string } | undefined)?.value ?? '';
        expect(hoverText).toContain('**Module state:** loaded (required)');
        expect(hoverText).toContain('**Included as:** directory');
        expect(notifications).toBe(0);
        expect(services.shared.ServiceRegistry.hasRoot(fragment.uri)).toBe(false);
        expect(services.shared.ServiceRegistry.getRootsForIncluded(fragment.uri)
            .map(uri => uri.toString())).toEqual(rootsBefore);
        expect(rootsBefore).toEqual([root.uri.toString()]);
    });

    test('resolves nested fragment definitions from inherited root facts without stale entries', async () => {
        const basePath = join(directory, 'definition-base');
        const fragmentPath = join(basePath, 'fragments', 'definition.inc');
        const childPath = join(basePath, 'nested', 'child.inc');
        await mkdir(join(basePath, 'fragments'), { recursive: true });
        await mkdir(join(basePath, 'nested'), { recursive: true });
        await writeFile(fragmentPath, 'Include ${SITE}/child.inc\n');
        await writeFile(childPath, 'Listen 8080\n');

        const parse = parseHelper<HttpdDocument>(services.Httpd);
        const root = await parse(`
ServerRoot definition-base
Define SITE nested
Include fragments/definition.inc
`, {
            documentUri: URI.file(join(directory, 'definition-root.httpd')).toString(),
            validation: true
        });
        const fragment = await parse('Include ${SITE}/child.inc\n', {
            documentUri: URI.file(fragmentPath).toString(),
            validation: true
        });

        let notifications = 0;
        const dispose = services.shared.ServiceRegistry.onDidChangeIncluded(() => notifications++);
        const links = await services.Httpd.lsp.DefinitionProvider?.getDefinition(fragment, {
            textDocument: { uri: fragment.uri.toString() },
            position: { line: 0, character: 12 }
        });
        dispose();

        expect(links?.map(link => link.targetUri)).toEqual([URI.file(childPath).toString()]);
        expect(notifications).toBe(0);
        expect(services.shared.ServiceRegistry.hasRoot(fragment.uri)).toBe(false);
        expect(services.shared.ServiceRegistry.isIncluded(URI.file(childPath))).toBe(true);

        services.shared.ServiceRegistry.replaceIncluded(root.uri, []);
        expect(services.shared.ServiceRegistry.isIncluded(fragment.uri)).toBe(false);
        expect(services.shared.ServiceRegistry.isIncluded(URI.file(childPath))).toBe(false);
    });

    test('preserves multi-root and multi-occurrence ambiguity in fragment queries', async () => {
        const fragmentPath = join(directory, 'multi-fragment.inc');
        const fragmentText = 'Header set X-Multi enabled\nInclude ${SITE}/child.inc\n';
        await writeFile(fragmentPath, fragmentText);
        await mkdir(join(directory, 'one'), { recursive: true });
        await mkdir(join(directory, 'two'), { recursive: true });
        await writeFile(join(directory, 'one', 'child.inc'), 'Listen 8081\n');
        await writeFile(join(directory, 'two', 'child.inc'), 'Listen 8082\n');

        const parse = parseHelper<HttpdDocument>(services.Httpd);
        await parse(`
LoadModule headers_module modules/mod_headers.so
Define SITE one
<Directory "/srv/one">
    Include multi-fragment.inc
</Directory>
<VirtualHost *:80>
    Include multi-fragment.inc
</VirtualHost>
`, {
            documentUri: URI.file(join(directory, 'multi-a.httpd')).toString(),
            validation: true
        });
        await parse(`
Define SITE two
Include multi-fragment.inc
`, {
            documentUri: URI.file(join(directory, 'multi-b.httpd')).toString(),
            validation: true
        });
        const fragment = await parse(fragmentText, {
            documentUri: URI.file(fragmentPath).toString(),
            validation: true
        });

        let notifications = 0;
        const dispose = services.shared.ServiceRegistry.onDidChangeIncluded(() => notifications++);
        const hover = await services.Httpd.lsp.HoverProvider?.getHoverContent(fragment, {
            textDocument: { uri: fragment.uri.toString() },
            position: { line: 0, character: 2 }
        });
        const links = await services.Httpd.lsp.DefinitionProvider?.getDefinition(fragment, {
            textDocument: { uri: fragment.uri.toString() },
            position: { line: 1, character: 12 }
        });
        dispose();

        const hoverText = (hover?.contents as { value?: string } | undefined)?.value ?? '';
        expect(hoverText).toContain('**Module state:** varies by including configuration');
        expect(hoverText).toContain('**Included as:** directory, server, virtual-host');
        expect(links?.map(link => URI.parse(link.targetUri).path.split('/').slice(-2).join('/')))
            .toEqual(['one/child.inc', 'two/child.inc']);
        expect(notifications).toBe(0);
        expect(services.shared.ServiceRegistry.hasRoot(fragment.uri)).toBe(false);
    });

    test('demotes a fragment-first inferred root when an including root is discovered', async () => {
        const fragmentPath = join(directory, 'fragment-first.httpd');
        const childPath = join(directory, 'fragment-first-child.inc');
        const fragmentText = 'Header set X-First enabled\nInclude fragment-first-child.inc\n';
        await writeFile(fragmentPath, fragmentText);
        await writeFile(childPath, 'Listen 8090\n');

        const parse = parseHelper<HttpdDocument>(services.Httpd);
        const fragment = await parse(fragmentText, {
            documentUri: URI.file(fragmentPath).toString(),
            validation: true
        });
        expect(services.shared.ServiceRegistry.hasRoot(fragment.uri)).toBe(true);
        expect(services.shared.ServiceRegistry.getRootsForIncluded(URI.file(childPath))
            .map(uri => uri.toString())).toEqual([fragment.uri.toString()]);

        const root = await parse(`
LoadModule headers_module modules/mod_headers.so
Include fragment-first.httpd
`, {
            documentUri: URI.file(join(directory, 'fragment-first-root.httpd')).toString(),
            validation: true
        });
        expect(services.shared.ServiceRegistry.hasRoot(fragment.uri)).toBe(false);
        expect(services.shared.ServiceRegistry.getRootsForIncluded(fragment.uri)
            .map(uri => uri.toString())).toEqual([root.uri.toString()]);
        expect(services.shared.ServiceRegistry.getRootsForIncluded(URI.file(childPath))
            .map(uri => uri.toString())).toEqual([root.uri.toString()]);

        const hover = await services.Httpd.lsp.HoverProvider?.getHoverContent(fragment, {
            textDocument: { uri: fragment.uri.toString() },
            position: { line: 0, character: 2 }
        });
        const hoverText = (hover?.contents as { value?: string } | undefined)?.value ?? '';
        expect(hoverText).toContain('**Module state:** loaded (required)');
        expect(hoverText).not.toContain('varies by including configuration');

        services.shared.ServiceRegistry.replaceIncluded(root.uri, []);
        expect(services.shared.ServiceRegistry.isIncluded(fragment.uri)).toBe(false);
        expect(services.shared.ServiceRegistry.isIncluded(URI.file(childPath))).toBe(false);
    });
});
