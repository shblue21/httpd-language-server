import { describe, expect, test } from 'vitest';
import { HttpdCatalog, type DirectiveSpec, type ModuleSpec } from '../src/index.js';

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
});
