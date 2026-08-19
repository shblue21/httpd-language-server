import {
    URI,
    UriUtils,
    type FileSystemProvider,
    type LangiumDocument
} from 'langium';
import { minimatch } from 'minimatch';
import type { Directive } from './generated/ast.js';

const MAX_DIRECTORY_DEPTH = 32;
const MAX_INCLUDED_FILES = 1_000;

export type IncludeResolution =
    | { status: 'resolved'; targets: readonly URI[]; truncated: boolean }
    | { status: 'missing'; targets: readonly [] }
    | { status: 'unknown'; targets: readonly [] };

export class HttpdIncludeResolver {
    constructor(private readonly fileSystem: FileSystemProvider) {}

    async resolve(
        document: Pick<LangiumDocument, 'uri'> & Partial<Pick<LangiumDocument, 'parseResult'>>,
        directive: Directive,
        configurationBase?: URI,
        definitions?: ReadonlyMap<string, string | true>
    ): Promise<IncludeResolution> {
        if (!isIncludeDirective(directive) || directive.arguments.length !== 1) {
            return { status: 'unknown', targets: [] };
        }

        const variables = definitions ?? new Map();
        const path = substituteVariables(directive.arguments[0], variables);
        if (path === undefined) {
            return { status: 'unknown', targets: [] };
        }

        const normalized = path.replaceAll('\\', '/');
        const absolute = isAbsoluteConfigurationPath(normalized);
        if (absolute) {
            return { status: 'unknown', targets: [] };
        }
        try {
            const base = configurationBase ?? UriUtils.dirname(document.uri);
            if (pathEscapesBase(normalized)) {
                return { status: 'unknown', targets: [] };
            }
            const result = hasGlob(normalized)
                ? await this.resolveGlob(base, normalized)
                : await this.resolvePath(base, normalized);
            if (result.targets.length > 0 || result.truncated) {
                return { status: 'resolved', ...result };
            }
        } catch {
            return { status: 'unknown', targets: [] };
        }

        return absolute
            ? { status: 'unknown', targets: [] }
            : { status: 'missing', targets: [] };
    }

    async resolveServerRoot(
        base: URI,
        value: string,
        definitions: ReadonlyMap<string, string | true>
    ): Promise<URI | undefined> {
        const expanded = substituteVariables(value, definitions);
        if (
            expanded === undefined
            || isAbsoluteConfigurationPath(expanded)
            || pathEscapesBase(expanded.replaceAll('\\', '/'))
        ) {
            return undefined;
        }
        const candidate = UriUtils.resolvePath(base, expanded.replaceAll('\\', '/'));
        return await this.fileSystem.exists(candidate) && (await this.fileSystem.stat(candidate)).isDirectory
            ? candidate
            : undefined;
    }

    private async resolvePath(base: URI, path: string): Promise<ResolvedTargets> {
        const target = resolveFromBase(base, path);
        if (!await this.fileSystem.exists(target)) {
            return { targets: [], truncated: false };
        }

        const stat = await this.fileSystem.stat(target);
        if (stat.isFile) {
            return { targets: [target], truncated: false };
        }
        if (stat.isDirectory) {
            return this.collectFiles(target, true);
        }
        return { targets: [], truncated: false };
    }

    private async resolveGlob(baseUri: URI, path: string): Promise<ResolvedTargets> {
        const firstGlob = path.search(/[*?[]/);
        const prefixEnd = path.lastIndexOf('/', firstGlob);
        const basePath = prefixEnd === -1 ? '' : path.slice(0, prefixEnd);
        const pattern = path.slice(prefixEnd + 1);
        const base = basePath
            ? resolveFromBase(baseUri, basePath)
            : baseUri;
        if (!await this.fileSystem.exists(base) || !(await this.fileSystem.stat(base)).isDirectory) {
            return { targets: [], truncated: false };
        }

        const candidates = await this.collectFiles(base, pattern.includes('/'));
        return {
            targets: candidates.targets.filter(candidate =>
                minimatch(UriUtils.relative(base, candidate), pattern, {
                dot: false,
                nobrace: true,
                nocomment: true,
                noext: true,
                noglobstar: true,
                nonegate: true,
                windowsPathsNoEscape: true
                })
            ),
            truncated: candidates.truncated
        };
    }

    private async collectFiles(directory: URI, recursive: boolean): Promise<ResolvedTargets> {
        const files: URI[] = [];
        const pending: Array<{ directory: URI; depth: number }> = [{ directory, depth: 0 }];
        let truncated = false;

        while (pending.length > 0 && files.length < MAX_INCLUDED_FILES) {
            const current = pending.shift()!;
            const entries = await this.fileSystem.readDirectory(current.directory);
            entries.sort((left, right) => comparePaths(left.uri.path, right.uri.path));
            for (const entry of entries) {
                if (entry.isFile) {
                    files.push(entry.uri);
                } else if (recursive && entry.isDirectory && current.depth < MAX_DIRECTORY_DEPTH) {
                    pending.push({ directory: entry.uri, depth: current.depth + 1 });
                } else if (recursive && entry.isDirectory) {
                    truncated = true;
                }
                if (files.length >= MAX_INCLUDED_FILES) {
                    truncated = true;
                    break;
                }
            }
        }

        return {
            targets: files.sort((left, right) => comparePaths(left.path, right.path)),
            truncated: truncated || pending.length > 0
        };
    }
}

interface ResolvedTargets {
    targets: readonly URI[];
    truncated: boolean;
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

function pathEscapesBase(path: string): boolean {
    let depth = 0;
    for (const segment of path.split('/')) {
        if (!segment || segment === '.') {
            continue;
        }
        if (segment === '..') {
            if (depth === 0) {
                return true;
            }
            depth--;
        } else {
            depth++;
        }
    }
    return false;
}

function comparePaths(left: string, right: string): number {
    return left < right ? -1 : left > right ? 1 : 0;
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
