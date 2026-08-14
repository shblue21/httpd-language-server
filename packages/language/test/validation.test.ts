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
        expect(document.diagnostics?.map(diagnostic => diagnostic.message)).toContain(
            'Closing section </Location> does not match <Directory>.'
        );
    });

    test('rejects AllowOverride in Location context', async () => {
        const document = await parse('<Location "/admin">\nAllowOverride All\n</Location>\n');
        expect(document.diagnostics?.map(diagnostic => diagnostic.message)).toContain(
            'AllowOverride is only valid in a <Directory> section.'
        );
    });
});
