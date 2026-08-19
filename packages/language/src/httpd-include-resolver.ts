import {
    URI,
    UriUtils,
    type FileSystemProvider,
    type LangiumDocument
} from 'langium';
import { minimatch } from 'minimatch';
import type { Directive } from './generated/ast.js';
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

    async resolve(document: Pick<LangiumDocument, 'uri'>, directive: Directive): Promise<IncludeResolution> {
        if (!isIncludeDirective(directive) || directive.arguments.length !== 1) {
            return { status: 'unknown', targets: [] };
        }

        const path = directive.arguments[0];
        if (path.includes('${')) {
            return { status: 'unknown', targets: [] };
        }

        const normalized = path.replaceAll('\\', '/');
        const absolute = isAbsoluteConfigurationPath(normalized);
        try {
            const targets = hasGlob(normalized)
                ? await this.resolveGlob(document.uri, normalized)
                : await this.resolvePath(document.uri, normalized);
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

    private async resolvePath(documentUri: URI, path: string): Promise<readonly URI[]> {
        const target = resolveConfigurationPath(documentUri, path);
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

    private async resolveGlob(documentUri: URI, path: string): Promise<readonly URI[]> {
        const firstGlob = path.search(/[*?[]/);
        const prefixEnd = path.lastIndexOf('/', firstGlob);
        const basePath = prefixEnd === -1 ? '' : path.slice(0, prefixEnd);
        const pattern = path.slice(prefixEnd + 1);
        const base = basePath
            ? resolveConfigurationPath(documentUri, basePath)
            : UriUtils.dirname(documentUri);
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

function hasGlob(path: string): boolean {
    return /[*?[]/.test(path);
}
