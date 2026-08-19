import {
    URI,
    UriUtils,
    type FileSystemProvider,
    type LangiumDocument
} from 'langium';
import type { Directive } from './generated/ast.js';

export type IncludeResolution =
    | { status: 'resolved'; targets: readonly URI[] }
    | { status: 'missing'; targets: readonly [] }
    | { status: 'unknown'; targets: readonly [] };

export class HttpdIncludeResolver {
    constructor(private readonly fileSystem: FileSystemProvider) {}

    async resolve(document: LangiumDocument, directive: Directive): Promise<IncludeResolution> {
        if (!isIncludeDirective(directive) || directive.arguments.length !== 1) {
            return { status: 'unknown', targets: [] };
        }

        const path = directive.arguments[0];
        if (path.includes('${') || /[*?[]/.test(path)) {
            return { status: 'unknown', targets: [] };
        }

        const absolute = isAbsoluteConfigurationPath(path);
        const target = absolute
            ? URI.file(path.replaceAll('\\', '/'))
            : UriUtils.resolvePath(UriUtils.dirname(document.uri), path.replaceAll('\\', '/'));
        if (await this.fileSystem.exists(target)) {
            const stat = await this.fileSystem.stat(target);
            if (stat.isFile) {
                return { status: 'resolved', targets: [target] };
            }
        }

        return absolute
            ? { status: 'unknown', targets: [] }
            : { status: 'missing', targets: [] };
    }
}

export function isIncludeDirective(directive: Directive): boolean {
    const name = directive.name.toLowerCase();
    return name === 'include' || name === 'includeoptional';
}

function isAbsoluteConfigurationPath(path: string): boolean {
    return path.startsWith('/') || /^[A-Za-z]:[\\/]/.test(path);
}
