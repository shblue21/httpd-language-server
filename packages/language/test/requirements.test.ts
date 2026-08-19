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
ServerRoot "/srv/httpd"
Define STAGE production
ProxyPass /api http://backend.example
CacheSocache shmcb
ChrootDir /srv/chroot
`);
        const requirements = services.semantic.Requirements.analyze(document.parseResult.value);

        expect(document.parseResult.parserErrors).toHaveLength(0);
        expect(requirements.loadedModules).toContain('mod_proxy');
        expect(requirements.defines.get('STAGE')).toBe('production');
        expect(requirements.minimumVersion).toBe('2.4.5');
        expect(requirements.serverRoot).toBe('/srv/httpd');
        expect(requirements.targetPlatforms).toEqual(['unix']);
        expect(requirements.modules).toEqual(expect.arrayContaining([
            { condition: 'active', providers: ['mod_proxy'], required: true, state: 'loaded' },
            { condition: 'active', providers: ['mod_cache_socache'], required: true, state: 'unknown' }
        ]));
    });

    test('keeps unresolved conditions unknown and skips proven inactive branches', async () => {
        const document = await parse(`
LoadModule proxy_module modules/mod_proxy.so
Define ENABLED yes
<IfDefine ENABLED>
    Define ACTIVE yes
</IfDefine>
<IfDefine !ENABLED>
    Define INACTIVE yes
</IfDefine>
<IfModule proxy_module>
    Define MODULE_ACTIVE yes
</IfModule>
<IfModule !mod_proxy.c>
    Define MODULE_INACTIVE yes
</IfModule>
<IfVersion >= 2.4.0>
    Define VERSION_UNKNOWN yes
</IfVersion>
UnDefine DISABLED
<IfDefine DISABLED>
    Define UNDEFINED_INACTIVE yes
</IfDefine>
<IfDefine !DISABLED>
    Define UNDEFINED_ACTIVE yes
</IfDefine>
LoadModule vendor_module modules/mod_vendor.so
<IfModule vendor_module>
    Define VENDOR_ACTIVE yes
</IfModule>
`);
        const requirements = services.semantic.Requirements.analyze(document.parseResult.value);

        expect(requirements.conditions.map(condition => condition.state)).toEqual([
            'active',
            'inactive',
            'active',
            'inactive',
            'unknown',
            'inactive',
            'active',
            'active'
        ]);
        expect([...requirements.defines.keys()]).toEqual([
            'ENABLED',
            'ACTIVE',
            'MODULE_ACTIVE',
            'UNDEFINED_ACTIVE',
            'VENDOR_ACTIVE'
        ]);
    });

    test('upgrades an earlier requirement when a later LoadModule proves availability', async () => {
        const document = await parse(`
ProxyPass /api http://backend.example
LoadModule proxy_module modules/mod_proxy.so
`);
        const requirements = services.semantic.Requirements.analyze(document.parseResult.value);

        expect(requirements.modules).toContainEqual({
            condition: 'active',
            providers: ['mod_proxy'],
            required: true,
            state: 'loaded'
        });
    });

    test('detects conflicting target platform requirements', async () => {
        const document = await parse(`
LoadModule mpm_winnt_module modules/mod_mpm_winnt.so
ChrootDir /srv/chroot
`);
        const requirements = services.semantic.Requirements.analyze(document.parseResult.value);

        expect(requirements.targetPlatforms).toBe('conflict');
    });

    test('forgets facts that an unknown branch may change', async () => {
        const document = await parse(`
Define MAYBE yes
<IfVersion >= 2.4.0>
    UnDefine MAYBE
</IfVersion>
<IfDefine MAYBE>
    Define AFTER_MAYBE yes
</IfDefine>
`);
        const requirements = services.semantic.Requirements.analyze(document.parseResult.value);

        expect(requirements.conditions.map(condition => condition.state)).toEqual([
            'unknown',
            'unknown'
        ]);
        expect(requirements.defines.has('MAYBE')).toBe(false);
        expect(requirements.defines.has('AFTER_MAYBE')).toBe(false);
    });
});
