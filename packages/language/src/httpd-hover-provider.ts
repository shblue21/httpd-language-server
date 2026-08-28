import { CstUtils, GrammarUtils, type LangiumDocument } from 'langium';
import type { HoverProvider } from 'langium/lsp';
import {
    MarkupKind,
    type CancellationToken,
    type Hover,
    type HoverParams
} from 'vscode-languageserver';
import { apache24Catalog } from './catalog/apache-2.4.js';
import { isDirective, isSectionOpen, type HttpdDocument } from './generated/ast.js';
import { HttpdIncludeGraph } from './httpd-include-graph.js';
import { HttpdRequirementAnalyzer, type HttpdRequirements } from './httpd-requirements.js';

export class HttpdHoverProvider implements HoverProvider {
    constructor(
        private readonly requirements: HttpdRequirementAnalyzer,
        private readonly includes: HttpdIncludeGraph
    ) {}

    async getHoverContent(
        document: LangiumDocument,
        params: HoverParams,
        cancelToken?: CancellationToken
    ): Promise<Hover | undefined> {
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

        const analyses = await this.includes.analyzeConfigurations(
            document as LangiumDocument<HttpdDocument>,
            cancelToken
        );
        if (cancelToken?.isCancellationRequested || !this.includes.isCurrentDocument(document)) {
            return undefined;
        }
        const requirements = analyses.map(analysis =>
            this.requirements.analyzeConfiguration(
                analysis.root.parseResult.value,
                analysis.graph
            )
        );
        const includedContexts = [...new Set(
            analyses.flatMap(analysis => analysis.occurrences.map(occurrence => occurrence.context))
        )].sort();
        const htaccess = document.uri.path.endsWith('/.htaccess');
        return {
            contents: {
                kind: MarkupKind.Markdown,
                value: directives.map(directive => formatDirective(
                    directive,
                    this.requirements,
                    requirements,
                    includedContexts,
                    htaccess
                )).join('\n\n---\n\n')
            },
            range: nameNode.range
        };
    }
}

function formatDirective(
    directive: (typeof apache24Catalog.directives)[number],
    analyzer: HttpdRequirementAnalyzer,
    requirements: readonly HttpdRequirements[],
    includedContexts: readonly string[],
    htaccess: boolean
): string {
    const metadata = [
        `**Module:** ${directive.modules.map(module => `\`${module}\``).join(' or ')}`,
        `**Module state:** ${formatModuleState(
            requirements.map(item => analyzer.moduleState(item, directive.modules))
        )}`,
        `**Configuration minimum:** ${formatVariants(
            requirements.map(item => item.minimumVersion)
        )}`,
        `**Target platform:** ${formatVariants(
            requirements.map(item => formatTargetPlatforms(item.targetPlatforms))
        )}`,
        `**Context:** ${directive.contexts.join(', ')}`
    ];
    if (includedContexts.length > 0) {
        metadata.push(`**Included as:** ${includedContexts.join(', ')}`);
    }
    metadata.push(`**Status:** ${directive.status}`);
    if (directive.since) {
        metadata.push(`**Since:** ${directive.since}`);
    }
    if (htaccess && directive.override.length > 0) {
        metadata.push(`**Requires AllowOverride:** ${directive.override.join(', ')}`);
    }

    return [
        `### ${directive.name}`,
        `\`${directive.syntax.replaceAll('`', '\\`')}\``,
        directive.description,
        metadata.join('  \n'),
        `[Apache HTTP Server 2.4 documentation](${directive.documentation})`
    ].join('\n\n');
}

function formatModuleState(states: readonly ('loaded' | 'unknown')[]): string {
    if (states.every(state => state === 'loaded')) {
        return 'loaded (required)';
    }
    if (states.every(state => state === 'unknown')) {
        return 'required; load state unknown';
    }
    return 'varies by including configuration';
}

function formatVariants(values: readonly string[]): string {
    const unique = [...new Set(values)].sort();
    return unique.length === 1
        ? unique[0]
        : `varies by including configuration (${unique.join(', ')})`;
}

function formatTargetPlatforms(
    platforms: HttpdRequirements['targetPlatforms']
): string {
    return typeof platforms === 'string' ? platforms : platforms.join(' or ');
}

function containsOffset(node: { offset: number; length: number }, offset: number): boolean {
    return node.offset <= offset && offset < node.offset + node.length;
}
