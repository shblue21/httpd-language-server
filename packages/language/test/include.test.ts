import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { URI } from 'langium';
import { NodeFileSystem } from 'langium/node';
import { parseHelper } from 'langium/test';
import { createHttpdServices, type HttpdDocument } from '../src/index.js';

let directory: string;
let services: ReturnType<typeof createHttpdServices>;

beforeAll(async () => {
    directory = await mkdtemp(join(tmpdir(), 'httpd-language-server-'));
    await writeFile(join(directory, 'fragment.inc'), 'ServerName included.example\n');
    await mkdir(join(directory, 'conf.d'));
    await writeFile(join(directory, 'conf.d', '10-first.conf'), 'Listen 80\n');
    await writeFile(join(directory, 'conf.d', '20-second.conf'), 'Listen 443\n');
    await writeFile(join(directory, 'conf.d', 'ignored.txt'), 'ignored\n');
    await writeFile(join(directory, 'shared.inc'), 'Require all granted\n');
    services = createHttpdServices(NodeFileSystem);
});

afterAll(async () => {
    await rm(directory, { recursive: true, force: true });
});

describe('HTTPD includes', () => {
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
            '20-second.conf'
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
        expect(graph.documents.has(URI.file(join(directory, 'shared.inc')).toString())).toBe(true);
    });
});
