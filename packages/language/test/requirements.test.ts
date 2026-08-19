import { beforeAll, describe, expect, test } from 'vitest';
import { EmptyFileSystem } from 'langium';
import { parseHelper } from 'langium/test';
import {
    createHttpdServices,
    type HttpdDocument,
    type HttpdServices
} from '../src/index.js';

let services: HttpdServices;
let parse: ReturnType<typeof parseHelper<HttpdDocument>>;

beforeAll(() => {
    services = createHttpdServices(EmptyFileSystem).Httpd;
    parse = parseHelper<HttpdDocument>(services);
});

describe('HTTPD zero-config requirements', () => {
    test('derives loaded modules, definitions, and minimum version from the document', async () => {
        const document = await parse(`
LoadModule proxy_module modules/mod_proxy.so
Define STAGE production
ProxyPass /api http://backend.example
CacheSocache shmcb
`);
        const requirements = services.semantic.Requirements.analyze(document.parseResult.value);

        expect(requirements.loadedModules).toContain('mod_proxy');
        expect(requirements.defines.get('STAGE')).toBe('production');
        expect(requirements.minimumVersion).toBe('2.4.5');
        expect(requirements.modules).toEqual(expect.arrayContaining([
            { providers: ['mod_proxy'], state: 'loaded' },
            { providers: ['mod_cache_socache'], state: 'unknown' }
        ]));
    });
});
