import { beforeAll, describe, expect, test } from 'vitest';
import { EmptyFileSystem, type LangiumDocument } from 'langium';
import { parseHelper } from 'langium/test';
import {
    createHttpdServices,
    type HttpdDocument,
    isDirective,
    isSection
} from '../src/index.js';

let parse: ReturnType<typeof parseHelper<HttpdDocument>>;

beforeAll(() => {
    const services = createHttpdServices(EmptyFileSystem);
    parse = parseHelper<HttpdDocument>(services.Httpd);
});

describe('HTTPD grammar', () => {
    test('parses directives and nested sections', async () => {
        const document: LangiumDocument<HttpdDocument> = await parse(`
ServerName example.test

<Directory "/srv/www">
    AllowOverride All
    Require all granted
</Directory>
`);

        expect(document.parseResult.parserErrors).toHaveLength(0);
        expect(document.parseResult.lexerErrors).toHaveLength(0);
        expect(document.parseResult.value.statements).toHaveLength(2);
        expect(isDirective(document.parseResult.value.statements[0])).toBe(true);
        expect(isSection(document.parseResult.value.statements[1])).toBe(true);
    });

    test('parses logical lines and Apache-style quoted arguments', async () => {
        const document = await parse(String.raw`SetEnv EXAMPLE foo\
bar
Header set X-Test "literal\n"
`);

        expect(document.parseResult.parserErrors).toHaveLength(0);
        expect(document.parseResult.lexerErrors).toHaveLength(0);
        const directives = document.parseResult.value.statements.filter(isDirective);
        expect(directives[0].arguments).toEqual(['EXAMPLE', 'foobar']);
        expect(directives[1].arguments).toEqual(['set', 'X-Test', String.raw`literal\n`]);
    });

    test('continues comment lines without consuming following directives', async () => {
        const document = await parse(String.raw`# Disabled configuration \
ServerName ignored.example
Listen 80
`);

        expect(document.parseResult.parserErrors).toHaveLength(0);
        expect(document.parseResult.lexerErrors).toHaveLength(0);
        const directives = document.parseResult.value.statements.filter(isDirective);
        expect(directives.map(directive => directive.name)).toEqual(['Listen']);
    });
});
