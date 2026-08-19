import { CstUtils, GrammarUtils, type LangiumDocument } from 'langium';
import type { HoverProvider } from 'langium/lsp';
import { MarkupKind, type Hover, type HoverParams } from 'vscode-languageserver';
import { apache24Catalog } from './catalog/apache-2.4.js';
import { isDirective, isSectionOpen } from './generated/ast.js';

export class HttpdHoverProvider implements HoverProvider {
    getHoverContent(document: LangiumDocument, params: HoverParams): Hover | undefined {
        const root = document.parseResult.value.$cstNode;
        if (!root) {
            return undefined;
        }

        const offset = document.textDocument.offsetAt(params.position);
        const leaf = CstUtils.findLeafNodeAtOffset(root, offset);
        const node = leaf?.astNode;
        if (!node || (!isDirective(node) && !isSectionOpen(node))) {
            return undefined;
        }

        const nameNode = GrammarUtils.findNodeForProperty(node.$cstNode, 'name');
        if (!nameNode || !containsOffset(nameNode, offset)) {
            return undefined;
        }

        const kind = isSectionOpen(node) ? 'section' : 'directive';
        const directives = apache24Catalog.getDirectives(node.name)
            .filter(directive => directive.kind === kind);
        if (directives.length === 0) {
            return undefined;
        }

        return {
            contents: {
                kind: MarkupKind.Markdown,
                value: directives.map(formatDirective).join('\n\n---\n\n')
            },
            range: nameNode.range
        };
    }
}

function formatDirective(directive: (typeof apache24Catalog.directives)[number]): string {
    const metadata = [
        `**Module:** ${directive.modules.map(module => `\`${module}\``).join(' or ')}`,
        `**Context:** ${directive.contexts.join(', ')}`,
        `**Status:** ${directive.status}`
    ];
    if (directive.since) {
        metadata.push(`**Since:** ${directive.since}`);
    }

    return [
        `### ${directive.name}`,
        `\`${directive.syntax.replaceAll('`', '\\`')}\``,
        directive.description,
        metadata.join('  \n'),
        `[Apache HTTP Server 2.4 documentation](${directive.documentation})`
    ].join('\n\n');
}

function containsOffset(node: { offset: number; length: number }, offset: number): boolean {
    return node.offset <= offset && offset < node.offset + node.length;
}
