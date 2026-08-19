import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
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
        expect(document.diagnostics).toHaveLength(0);
    });

    test('reports missing required includes but not missing optional includes', async () => {
        const parse = parseHelper<HttpdDocument>(services.Httpd);
        const document = await parse('Include missing.inc\nIncludeOptional optional.inc\n', {
            documentUri: URI.file(join(directory, 'missing-httpd.conf')).toString(),
            validation: true
        });

        expect(document.diagnostics?.map(diagnostic => diagnostic.message)).toEqual([
            'Cannot resolve required include "missing.inc" from this workspace.'
        ]);
    });
});
