import type { LangiumDocument } from 'langium';
import type { CompletionProvider } from 'langium/lsp';
import {
    CompletionItemKind,
    type CompletionItem,
    type CompletionList,
    type CompletionParams
} from 'vscode-languageserver';
import { apache24Catalog } from './catalog/apache-2.4.js';
import type { DirectiveContext, DirectiveKind } from './catalog/types.js';
import {
    getContextCapabilities,
    getRootContext,
    getSectionContext
} from './httpd-context.js';
import { isSection, type HttpdDocument, type Section } from './generated/ast.js';

export class HttpdCompletionProvider implements CompletionProvider {
    readonly completionOptions = { triggerCharacters: ['<'] };

    getCompletion(document: LangiumDocument, params: CompletionParams): CompletionList {
        const cursor = getCursor(document, params);
        if (!cursor) {
            return emptyCompletionList();
        }

        const context = findCompletionContext(
            document.parseResult.value as HttpdDocument,
            cursor.offset,
            cursor.kind,
            document.uri.path.endsWith('/.htaccess')
        );
        const capabilities = getContextCapabilities(context);
        const seen = new Set<string>();
        const items: CompletionItem[] = [];

        for (const directive of apache24Catalog.directives) {
            const key = directive.name.toLowerCase();
            if (
                directive.kind !== cursor.kind
                || !directive.contexts.some(item => capabilities.includes(item))
                || !key.startsWith(cursor.prefix.toLowerCase())
                || seen.has(key)
            ) {
                continue;
            }
            seen.add(key);
            items.push({
                label: directive.name,
                kind: directive.kind === 'section'
                    ? CompletionItemKind.Class
                    : CompletionItemKind.Keyword,
                detail: directive.modules.join(' | '),
                documentation: directive.description,
                sortText: directive.name.toLowerCase(),
                textEdit: {
                    newText: directive.name,
                    range: cursor.range
                }
            });
        }

        return { isIncomplete: false, items };
    }
}

interface CompletionCursor {
    kind: DirectiveKind;
    offset: number;
    prefix: string;
    range: {
        start: { line: number; character: number };
        end: { line: number; character: number };
    };
}

function getCursor(document: LangiumDocument, params: CompletionParams): CompletionCursor | undefined {
    const source = document.textDocument.getText();
    const offset = document.textDocument.offsetAt(params.position);
    const lineStart = source.lastIndexOf('\n', Math.max(0, offset - 1)) + 1;
    const nextLine = source.indexOf('\n', offset);
    const lineEnd = nextLine === -1 ? source.length : nextLine;
    const line = source.slice(lineStart, lineEnd).replace(/\r$/, '');
    const character = offset - lineStart;
    const indentation = line.match(/^\s*/)?.[0].length ?? 0;

    if (isContinuationLine(source, lineStart) || line[indentation] === '#' || character < indentation) {
        return undefined;
    }

    let kind: DirectiveKind = 'directive';
    let tokenStart = indentation;
    if (line[indentation] === '<') {
        if (line[indentation + 1] === '/') {
            return undefined;
        }
        kind = 'section';
        tokenStart++;
    }

    const beforeCursor = line.slice(tokenStart, character);
    if (/\s|[<>]/.test(beforeCursor)) {
        return undefined;
    }

    let tokenEnd = character;
    while (tokenEnd < line.length && !/[\s<>]/.test(line[tokenEnd])) {
        tokenEnd++;
    }

    return {
        kind,
        offset,
        prefix: beforeCursor,
        range: {
            start: { line: params.position.line, character: tokenStart },
            end: { line: params.position.line, character: tokenEnd }
        }
    };
}

function isContinuationLine(source: string, lineStart: number): boolean {
    if (lineStart === 0) {
        return false;
    }
    let previousEnd = lineStart - 1;
    if (source[previousEnd - 1] === '\r') {
        previousEnd--;
    }
    const previousStart = source.lastIndexOf('\n', Math.max(0, previousEnd - 1)) + 1;
    return source.slice(previousStart, previousEnd).endsWith('\\');
}

function findCompletionContext(
    document: HttpdDocument,
    offset: number,
    kind: DirectiveKind,
    htaccess: boolean
): DirectiveContext {
    let section = findInnermostSection(document.statements, offset);
    if (kind === 'section' && section && containsOffset(section.open.$cstNode, offset)) {
        section = isSection(section.$container) ? section.$container : undefined;
    }

    return getSectionContext(section)
        ?? getRootContext(htaccess ? '/.htaccess' : '/httpd.conf');
}

function findInnermostSection(statements: HttpdDocument['statements'], offset: number): Section | undefined {
    for (const statement of statements) {
        if (!isSection(statement) || !containsOffset(statement.$cstNode, offset)) {
            continue;
        }
        return findInnermostSection(statement.statements, offset) ?? statement;
    }
    return undefined;
}

function containsOffset(node: { offset: number; length: number } | undefined, offset: number): boolean {
    return Boolean(node && node.offset <= offset && offset <= node.offset + node.length);
}

function emptyCompletionList(): CompletionList {
    return { isIncomplete: false, items: [] };
}
