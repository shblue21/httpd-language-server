import { beforeAll, describe, expect, test } from 'vitest';
import { EmptyFileSystem } from 'langium';
import { expectCompletion, expectHover } from 'langium/test';
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

    test('shows official directive metadata on hover', async () => {
        await expectHover(services)({
            text: 'CacheSoc<|>ache shmcb',
            index: 0,
            hover: /### CacheSocache[\s\S]*\*\*Module:\*\* `mod_cache_socache`[\s\S]*\*\*Since:\*\* 2\.4\.5[\s\S]*Apache HTTP Server 2\.4 documentation/
        });
    });
});
