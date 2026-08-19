import { CstUtils, GrammarUtils, type LangiumDocument } from 'langium';
import type { HoverProvider } from 'langium/lsp';
import { MarkupKind, type Hover, type HoverParams } from 'vscode-languageserver';
import { apache24Catalog } from './catalog/apache-2.4.js';
import { isDirective, isSectionOpen, type HttpdDocument } from './generated/ast.js';
import { HttpdIncludeGraph } from './httpd-include-graph.js';
import { HttpdRequirementAnalyzer, type HttpdRequirements } from './httpd-requirements.js';

export class HttpdHoverProvider implements HoverProvider {
    constructor(
        private readonly requirements: HttpdRequirementAnalyzer,
        private readonly includes: HttpdIncludeGraph
    ) {}

    async getHoverContent(document: LangiumDocument, params: HoverParams): Promise<Hover | undefined> {
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

        const graph = await this.includes.build(document as LangiumDocument<HttpdDocument>);
        const requirements = this.requirements.analyzeConfiguration(
            document.parseResult.value as HttpdDocument,
            graph
        );
        const htaccess = document.uri.path.endsWith('/.htaccess');
        return {
            contents: {
                kind: MarkupKind.Markdown,
                value: directives.map(directive => formatDirective(
                    directive,
                    this.requirements,
                    requirements,
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
    requirements: HttpdRequirements,
    htaccess: boolean
): string {
    const metadata = [
        `**Module:** ${directive.modules.map(module => `\`${module}\``).join(' or ')}`,
        `**Module state:** ${formatModuleState(analyzer.moduleState(requirements, directive.modules))}`,
        `**Configuration minimum:** ${requirements.minimumVersion}`,
        `**Target platform:** ${formatTargetPlatforms(requirements.targetPlatforms)}`,
        `**Context:** ${directive.contexts.join(', ')}`,
        `**Status:** ${directive.status}`
    ];
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

function formatModuleState(state: 'loaded' | 'unknown'): string {
    return state === 'loaded' ? 'loaded (required)' : 'required; load state unknown';
}

function formatTargetPlatforms(
    platforms: HttpdRequirements['targetPlatforms']
): string {
    return typeof platforms === 'string' ? platforms : platforms.join(' or ');
}

function containsOffset(node: { offset: number; length: number }, offset: number): boolean {
    return node.offset <= offset && offset < node.offset + node.length;
}
