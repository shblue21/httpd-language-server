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
        const document = await parse('AllowOverride All\nInclude\nVendorThing value #fff\nListen 80\n');
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

    test('allows directory directives in Proxy sections', async () => {
        const document = await parse('<Proxy "*">\nRequire all granted\n</Proxy>\n');

        expect(document.diagnostics).toHaveLength(0);
    });

    test('keeps Directory-only overrides out of Location sections', async () => {
        const document = await parse('<Location "/admin">\nAllowOverride All\n</Location>\n');

        expect(document.diagnostics?.map(diagnostic => diagnostic.message)).toContain(
            'AllowOverride is only valid in <directory> sections.'
        );
    });

    test('validates a focused high-value argument shape', async () => {
        const document = await parse('Listen bananas\nListen 127.0.0.1:8080\n');

        expect(document.diagnostics?.map(diagnostic => diagnostic.message)).toEqual([
            'Listen has an invalid address or port argument.'
        ]);
    });

    test('reports incompatible target platform requirements', async () => {
        const document = await parse(`
LoadModule mpm_winnt_module modules/mod_mpm_winnt.so
ChrootDir /srv/chroot
`);

        expect(document.diagnostics?.map(diagnostic => diagnostic.message)).toContain(
            'This configuration requires incompatible target platforms.'
        );
    });
});
