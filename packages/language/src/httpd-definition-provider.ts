import { CstUtils, GrammarUtils, type LangiumDocument } from 'langium';
import type { DefinitionProvider } from 'langium/lsp';
import type { DefinitionParams, LocationLink, Range } from 'vscode-languageserver';
import { isDirective } from './generated/ast.js';
import { HttpdIncludeResolver, isIncludeDirective } from './httpd-include-resolver.js';

const FILE_START: Range = {
    start: { line: 0, character: 0 },
    end: { line: 0, character: 0 }
};

export class HttpdDefinitionProvider implements DefinitionProvider {
    constructor(private readonly includes: HttpdIncludeResolver) {}

    async getDefinition(
        document: LangiumDocument,
        params: DefinitionParams
    ): Promise<LocationLink[] | undefined> {
        const root = document.parseResult.value.$cstNode;
        if (!root) {
            return undefined;
        }

        const offset = document.textDocument.offsetAt(params.position);
        const node = CstUtils.findLeafNodeAtOffset(root, offset)?.astNode;
        if (!node || !isDirective(node) || !isIncludeDirective(node)) {
            return undefined;
        }

        const argument = GrammarUtils.findNodeForProperty(node.$cstNode, 'arguments', 0);
        if (!argument || !containsOffset(argument, offset)) {
            return undefined;
        }

        const resolution = await this.includes.resolve(document, node);
        if (resolution.status !== 'resolved') {
            return undefined;
        }

        return resolution.targets.map(target => ({
            originSelectionRange: argument.range,
            targetUri: target.toString(),
            targetRange: FILE_START,
            targetSelectionRange: FILE_START
        }));
    }
}

function containsOffset(node: { offset: number; length: number }, offset: number): boolean {
    return node.offset <= offset && offset < node.offset + node.length;
}
