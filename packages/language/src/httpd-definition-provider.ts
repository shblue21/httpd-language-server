import {
    CstUtils,
    GrammarUtils,
    UriUtils,
    type LangiumDocument,
    type URI
} from 'langium';
import type { DefinitionProvider } from 'langium/lsp';
import type {
    CancellationToken,
    DefinitionParams,
    LocationLink,
    Range
} from 'vscode-languageserver';
import { isDirective, type Directive, type HttpdDocument } from './generated/ast.js';
import { HttpdIncludeGraph, type IncludeOccurrence } from './httpd-include-graph.js';
import { isIncludeDirective } from './httpd-include-resolver.js';

const FILE_START: Range = {
    start: { line: 0, character: 0 },
    end: { line: 0, character: 0 }
};

export class HttpdDefinitionProvider implements DefinitionProvider {
    constructor(private readonly includes: HttpdIncludeGraph) {}

    async getDefinition(
        document: LangiumDocument,
        params: DefinitionParams,
        cancelToken?: CancellationToken
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

        const analyses = await this.includes.analyzeConfigurations(
            document as LangiumDocument<HttpdDocument>,
            cancelToken
        );
        if (cancelToken?.isCancellationRequested || !this.includes.isCurrentDocument(document)) {
            return undefined;
        }
        const targets = new Map<string, URI>();
        for (const analysis of analyses) {
            for (const occurrence of analysis.graph.occurrences) {
                if (!matchesDirective(occurrence, document, node)) {
                    continue;
                }
                const key = UriUtils.normalize(occurrence.targetUri);
                if (!targets.has(key)) {
                    targets.set(key, occurrence.targetUri);
                }
            }
        }
        return targets.size === 0 ? undefined : [...targets.values()].map(target => ({
            originSelectionRange: argument.range,
            targetUri: target.toString(),
            targetRange: FILE_START,
            targetSelectionRange: FILE_START
        }));
    }
}

function matchesDirective(
    occurrence: IncludeOccurrence,
    document: LangiumDocument,
    node: Directive
): boolean {
    const occurrenceNode = occurrence.source.$cstNode;
    const documentNode = node?.$cstNode;
    return UriUtils.normalize(occurrence.sourceUri) === UriUtils.normalize(document.uri)
        && occurrenceNode?.offset === documentNode?.offset
        && occurrenceNode?.length === documentNode?.length;
}

function containsOffset(node: { offset: number; length: number }, offset: number): boolean {
    return node.offset <= offset && offset < node.offset + node.length;
}
