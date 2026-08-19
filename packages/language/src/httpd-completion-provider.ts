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
        const seen = new Set<string>();
        const items: CompletionItem[] = [];

        for (const directive of apache24Catalog.directives) {
            const key = directive.name.toLowerCase();
            if (
                directive.kind !== cursor.kind
                || !directive.contexts.includes(context)
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

    if (line[indentation] === '#' || character < indentation) {
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

    while (section) {
        const context = sectionContext(section.open.name);
        if (context) {
            return context;
        }
        section = isSection(section.$container) ? section.$container : undefined;
    }
    return htaccess ? 'htaccess' : 'server';
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

function sectionContext(name: string): DirectiveContext | undefined {
    switch (name.toLowerCase()) {
        case 'virtualhost':
            return 'virtual-host';
        case 'directory':
        case 'directorymatch':
        case 'files':
        case 'filesmatch':
        case 'location':
        case 'locationmatch':
            return 'directory';
        case 'proxy':
        case 'proxymatch':
            return 'proxy';
        default:
            return undefined;
    }
}

function emptyCompletionList(): CompletionList {
    return { isIncomplete: false, items: [] };
}
