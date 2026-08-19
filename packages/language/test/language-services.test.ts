import { beforeAll, describe, expect, test } from 'vitest';
import { EmptyFileSystem } from 'langium';
import { expectCompletion, expectHover, parseHelper } from 'langium/test';
import { createHttpdServices, type HttpdServices } from '../src/index.js';

let services: HttpdServices;

beforeAll(() => {
    services = createHttpdServices(EmptyFileSystem).Httpd;
});

describe('HTTPD language services', () => {
    test('completes directives for the current section context', async () => {
        const complete = expectCompletion(services);

        await complete({
            text: 'Ser<|>',
            index: 0,
            assert: completions => {
                expect(completions.items.map(item => item.label)).toContain('ServerName');
                expect(completions.items.map(item => item.label)).not.toContain('AllowOverride');
            }
        });
        await complete({
            text: '<Proxy "*">\nReq<|>\n</Proxy>',
            index: 0,
            assert: completions => {
                expect(completions.items.map(item => item.label)).toContain('Require');
            }
        });
        await complete({
            text: '<Directory "/srv/www">\nAllow<|>\n</Directory>',
            index: 0,
            assert: completions => {
                expect(completions.items.map(item => item.label)).toContain('AllowOverride');
                expect(completions.items.map(item => item.label)).not.toContain('Listen');
            }
        });
        await complete({
            text: '<Vir<|>',
            index: 0,
            assert: completions => {
                expect(completions.items.map(item => item.label)).toContain('VirtualHost');
            }
        });
    });

    test('does not complete directive names on continued physical lines', async () => {
        const complete = expectCompletion(services);
        for (const text of ['Header set X foo\\\n    <|>', '# comment \\\n    <|>']) {
            await complete({
                text,
                index: 0,
                assert: completions => expect(completions.items).toHaveLength(0)
            });
        }
    });

    test('shows official directive metadata on hover', async () => {
        const hover = expectHover(services);
        await hover({
            text: 'CacheSoc<|>ache shmcb',
            index: 0,
            hover: /### CacheSocache[\s\S]*\*\*Module:\*\* `mod_cache_socache`[\s\S]*\*\*Configuration minimum:\*\* 2\.4\.5[\s\S]*\*\*Since:\*\* 2\.4\.5[\s\S]*Apache HTTP Server 2\.4 documentation/
        });
        await hover({
            text: 'Req<|>uire all granted',
            index: 0,
            parseOptions: { documentUri: 'file:///.htaccess' },
            hover: /\*\*Module state:\*\* required; load state unknown[\s\S]*\*\*Requires AllowOverride:\*\* AuthConfig/
        });
    });

    test('does not offer unsafe rename before semantic references exist', async () => {
        const document = await parseHelper(services)('ServerName example.test\n');
        const range = await services.lsp.RenameProvider?.prepareRename(document, {
            textDocument: { uri: document.uri.toString() },
            position: { line: 0, character: 3 }
        });

        expect(range).toBeUndefined();
    });
});
