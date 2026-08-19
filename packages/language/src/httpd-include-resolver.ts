import {
    URI,
    UriUtils,
    type FileSystemProvider,
    type LangiumDocument
} from 'langium';
import { minimatch } from 'minimatch';
import { isDirective, isHttpdDocument, type Directive } from './generated/ast.js';
import { HttpdServiceRegistry } from './httpd-service-registry.js';

const MAX_DIRECTORY_DEPTH = 32;
const MAX_INCLUDED_FILES = 1_000;

export type IncludeResolution =
    | { status: 'resolved'; targets: readonly URI[] }
    | { status: 'missing'; targets: readonly [] }
    | { status: 'unknown'; targets: readonly [] };

export class HttpdIncludeResolver {
    constructor(
        private readonly fileSystem: FileSystemProvider,
        private readonly serviceRegistry: HttpdServiceRegistry
    ) {}

    async resolve(
        document: Pick<LangiumDocument, 'uri'> & Partial<Pick<LangiumDocument, 'parseResult'>>,
        directive: Directive,
        configurationBase?: URI,
        definitions?: ReadonlyMap<string, string | true>
    ): Promise<IncludeResolution> {
        if (!isIncludeDirective(directive) || directive.arguments.length !== 1) {
            return { status: 'unknown', targets: [] };
        }

        const variables = definitions ?? this.getDefinitions(document);
        const path = substituteVariables(directive.arguments[0], variables);
        if (path === undefined) {
            return { status: 'unknown', targets: [] };
        }

        const normalized = path.replaceAll('\\', '/');
        const absolute = isAbsoluteConfigurationPath(normalized);
        try {
            const base = configurationBase ?? await this.getConfigurationBase(document);
            const targets = hasGlob(normalized)
                ? await this.resolveGlob(base, normalized)
                : await this.resolvePath(base, normalized);
            if (targets.length > 0) {
                targets.forEach(target => this.serviceRegistry.registerIncluded(target));
                return { status: 'resolved', targets };
            }
        } catch {
            return { status: 'unknown', targets: [] };
        }

        return absolute
            ? { status: 'unknown', targets: [] }
            : { status: 'missing', targets: [] };
    }

    async getConfigurationBase(
        document: Pick<LangiumDocument, 'uri'> & Partial<Pick<LangiumDocument, 'parseResult'>>
    ): Promise<URI> {
        const fallback = UriUtils.dirname(document.uri);
        const root = document.parseResult?.value;
        if (!root || !isHttpdDocument(root)) {
            return fallback;
        }

        const serverRoot = root.statements.find(statement =>
            isDirective(statement) && statement.name.toLowerCase() === 'serverroot'
        );
        if (!serverRoot || !isDirective(serverRoot) || !serverRoot.arguments[0]) {
            return fallback;
        }

        const expanded = substituteVariables(serverRoot.arguments[0], this.getDefinitions(document));
        if (expanded === undefined) {
            return fallback;
        }
        const candidate = resolveConfigurationPath(
            document.uri,
            expanded.replaceAll('\\', '/')
        );
        return await this.fileSystem.exists(candidate) && (await this.fileSystem.stat(candidate)).isDirectory
            ? candidate
            : fallback;
    }

    getDefinitions(
        document: Partial<Pick<LangiumDocument, 'parseResult'>>
    ): ReadonlyMap<string, string | true> {
        const definitions = new Map<string, string | true>();
        const root = document.parseResult?.value;
        if (!root || !isHttpdDocument(root)) {
            return definitions;
        }

        for (const statement of root.statements) {
            if (!isDirective(statement) || !statement.arguments[0]) {
                continue;
            }
            if (statement.name.toLowerCase() === 'define') {
                definitions.set(statement.arguments[0], statement.arguments[1] ?? true);
            } else if (statement.name.toLowerCase() === 'undefine') {
                definitions.delete(statement.arguments[0]);
            }
        }
        return definitions;
    }

    private async resolvePath(base: URI, path: string): Promise<readonly URI[]> {
        const target = resolveFromBase(base, path);
        if (!await this.fileSystem.exists(target)) {
            return [];
        }

        const stat = await this.fileSystem.stat(target);
        if (stat.isFile) {
            return [target];
        }
        if (stat.isDirectory) {
            return this.collectFiles(target, true);
        }
        return [];
    }

    private async resolveGlob(baseUri: URI, path: string): Promise<readonly URI[]> {
        const firstGlob = path.search(/[*?[]/);
        const prefixEnd = path.lastIndexOf('/', firstGlob);
        const basePath = prefixEnd === -1 ? '' : path.slice(0, prefixEnd);
        const pattern = path.slice(prefixEnd + 1);
        const base = basePath
            ? resolveFromBase(baseUri, basePath)
            : baseUri;
        if (!await this.fileSystem.exists(base) || !(await this.fileSystem.stat(base)).isDirectory) {
            return [];
        }

        const candidates = await this.collectFiles(base, pattern.includes('/'));
        return candidates.filter(candidate =>
            minimatch(UriUtils.relative(base, candidate), pattern, {
                dot: true,
                windowsPathsNoEscape: true
            })
        );
    }

    private async collectFiles(directory: URI, recursive: boolean): Promise<readonly URI[]> {
        const files: URI[] = [];
        const pending: Array<{ directory: URI; depth: number }> = [{ directory, depth: 0 }];

        while (pending.length > 0 && files.length < MAX_INCLUDED_FILES) {
            const current = pending.shift()!;
            const entries = await this.fileSystem.readDirectory(current.directory);
            entries.sort((left, right) => left.uri.path.localeCompare(right.uri.path));
            for (const entry of entries) {
                if (entry.isFile) {
                    files.push(entry.uri);
                } else if (recursive && entry.isDirectory && current.depth < MAX_DIRECTORY_DEPTH) {
                    pending.push({ directory: entry.uri, depth: current.depth + 1 });
                }
                if (files.length >= MAX_INCLUDED_FILES) {
                    break;
                }
            }
        }

        return files.sort((left, right) => left.path.localeCompare(right.path));
    }
}

export function isIncludeDirective(directive: Directive): boolean {
    const name = directive.name.toLowerCase();
    return name === 'include' || name === 'includeoptional';
}

function isAbsoluteConfigurationPath(path: string): boolean {
    return path.startsWith('/') || /^[A-Za-z]:[\\/]/.test(path);
}

export function resolveConfigurationPath(documentUri: URI, path: string): URI {
    return isAbsoluteConfigurationPath(path)
        ? URI.file(path)
        : UriUtils.resolvePath(UriUtils.dirname(documentUri), path);
}

function resolveFromBase(base: URI, path: string): URI {
    return isAbsoluteConfigurationPath(path) ? URI.file(path) : UriUtils.resolvePath(base, path);
}

function hasGlob(path: string): boolean {
    return /[*?[]/.test(path);
}

function substituteVariables(
    value: string,
    definitions: ReadonlyMap<string, string | true>
): string | undefined {
    let unresolved = false;
    const result = value.replace(/\$\{([A-Za-z_][A-Za-z0-9_]*)\}/g, (_match, name: string) => {
        const replacement = definitions.get(name);
        if (replacement === undefined) {
            unresolved = true;
            return '';
        }
        if (replacement === true) {
            unresolved = true;
            return '';
        }
        return replacement;
    });
    return unresolved ? undefined : result;
}
