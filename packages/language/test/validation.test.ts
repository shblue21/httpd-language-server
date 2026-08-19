import { beforeAll, describe, expect, test } from 'vitest';
import { EmptyFileSystem } from 'langium';
import { parseHelper } from 'langium/test';
import { createHttpdServices, type HttpdDocument } from '../src/index.js';

let parse: ReturnType<typeof parseHelper<HttpdDocument>>;

beforeAll(() => {
    const services = createHttpdServices(EmptyFileSystem);
    const doParse = parseHelper<HttpdDocument>(services.Httpd);
    parse = input => doParse(input, { validation: true });
});

describe('HTTPD validation', () => {
    test('rejects mismatched section names', async () => {
        const document = await parse('<Directory "/srv/www">\n</Location>\n');
        const diagnostic = document.diagnostics?.find(item =>
            item.message === 'Closing section </Location> does not match <Directory>.'
        );
        expect(diagnostic?.range.start).toEqual({ line: 1, character: 2 });
    });

    test('rejects AllowOverride in Location context', async () => {
        const document = await parse('<Location "/admin">\nAllowOverride All\n</Location>\n');
        expect(document.diagnostics?.map(diagnostic => diagnostic.message)).toContain(
            'AllowOverride is only valid in a <Directory> section.'
        );
    });

    test('keeps incomplete and case-insensitive sections available for editing', async () => {
        const incomplete = await parse('<Directory "/srv/www">\nRequire all granted\n');
        expect(incomplete.parseResult.value.statements).toHaveLength(1);
        expect(incomplete.parseResult.parserErrors).toHaveLength(1);

        const caseInsensitive = await parse('<DIRECTORY "/srv/www">\n</directory>\n');
        expect(caseInsensitive.diagnostics?.map(diagnostic => diagnostic.message)).not.toContain(
            'Closing section </directory> does not match <DIRECTORY>.'
        );
    });
});
