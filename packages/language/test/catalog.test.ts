import { describe, expect, test } from 'vitest';
import {
    APACHE_2_4_CATALOG_SOURCE,
    HttpdCatalog,
    apache24Catalog,
    type DirectiveSpec,
    type ModuleSpec
} from '../src/index.js';

const modules: ModuleSpec[] = [
    {
        id: 'core',
        identifiers: [],
        fileNames: [],
        status: 'Core',
        bundled: true,
        dependencies: [],
        description: 'Core server features.',
        documentation: 'https://httpd.apache.org/docs/2.4/mod/core.html'
    }
];

const directives: DirectiveSpec[] = [
    {
        id: 'core:directive:servername',
        owner: 'core',
        name: 'ServerName',
        kind: 'directive',
        modules: ['core'],
        contexts: ['server', 'virtual-host'],
        override: [],
        status: 'Core',
        description: 'Hostname and port that the server uses to identify itself.',
        syntax: 'ServerName [scheme://]domain-name|ip-address[:port]',
        documentation: 'https://httpd.apache.org/docs/2.4/mod/core.html#servername'
    }
];

describe('HTTPD catalog', () => {
    test('looks up directives and modules case-insensitively', () => {
        const catalog = new HttpdCatalog(modules, directives);

        expect(catalog.getDirectives('servername')).toEqual(directives);
        expect(catalog.getModule('CORE')).toEqual(modules[0]);
    });

    test('rejects directives whose module is absent', () => {
        expect(() => new HttpdCatalog([], directives)).toThrow(
            'Unknown module core for directive ServerName.'
        );
    });

    test('loads the pinned official Apache HTTP Server 2.4 catalog', () => {
        expect(APACHE_2_4_CATALOG_SOURCE).toMatchObject({
            tag: '2.4.68',
            moduleCount: 132,
            directiveCount: 730,
            referenceCount: 91
        });
        expect(apache24Catalog.modules).toHaveLength(132);
        expect(apache24Catalog.directives).toHaveLength(730);
        expect(new Set(apache24Catalog.directives.map(directive => directive.id)).size).toBe(730);

        expect(apache24Catalog.getDirectives('Include')[0].arguments).toEqual({ min: 1, max: 1 });
        expect(apache24Catalog.getDirectives('HeartbeatStorage')).toHaveLength(2);
        expect(apache24Catalog.getDirectives('ProxyPass')[0].modules).toContain('mod_proxy');
        expect(apache24Catalog.getDirectives('RewriteRule')[0].modules).toContain('mod_rewrite');
        expect(apache24Catalog.getDirectives('SSLEngine')[0].modules).toContain('mod_ssl');
        expect(apache24Catalog.getModule('event')?.fileNames).toContain('mod_mpm_event.so');
    });
});
