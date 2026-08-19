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

    test('validates directives through the official catalog without stopping on unknown names', async () => {
        const document = await parse('AllowOverride All\nInclude\nVendorThing value\nListen 80\n');
        const messages = document.diagnostics?.map(diagnostic => diagnostic.message);

        expect(messages).toContain('AllowOverride is not valid in server context. Allowed: directory.');
        expect(messages).toContain('Include expects 1 argument; received 0.');
        expect(messages).toContain('Unknown HTTPD directive "VendorThing".');
        expect(document.parseResult.value.statements).toHaveLength(4);
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

    test('recovers after incomplete and orphan section delimiters', async () => {
        const incomplete = await parse(
            '<Directory "/srv/www"\nRequire all granted\n</Directory\nListen 80\n'
        );
        expect(incomplete.parseResult.value.statements).toHaveLength(2);
        expect(incomplete.diagnostics?.map(diagnostic => diagnostic.message)).toEqual(
            expect.arrayContaining([
                'Opening section <Directory> is missing ">".',
                'Closing section </Directory> is missing ">".'
            ])
        );

        const orphan = await parse('</Location>\nListen 80\n');
        expect(orphan.parseResult.value.statements).toHaveLength(1);
        expect(orphan.diagnostics?.map(diagnostic => diagnostic.message)).toContain(
            'Closing section </Location> has no matching opening section.'
        );
    });
});
