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
});
