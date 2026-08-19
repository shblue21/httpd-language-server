import { AstUtils, type ValidationAcceptor, type ValidationChecks } from 'langium';
import {
    type Directive,
    type HttpdAstType,
    type HttpdDocument,
    type Section,
    type SectionOpen
} from './generated/ast.js';
import type { DirectiveKind } from './catalog/types.js';
import { validateCatalogEntry } from './httpd-catalog-validation.js';
import { getNodeContext } from './httpd-context.js';
import { HttpdIncludeGraph } from './httpd-include-graph.js';
import { HttpdIncludeResolver, isIncludeDirective } from './httpd-include-resolver.js';
import type { HttpdServices } from './httpd-module.js';

export function registerValidationChecks(services: HttpdServices): void {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.HttpdValidator;
    const checks: ValidationChecks<HttpdAstType> = {
        HttpdDocument: [validator.checkOrphanSectionClosings, validator.checkIncludeGraph],
        Section: [validator.checkSectionPair, validator.checkSectionDelimiters],
        SectionOpen: validator.checkSectionOpen,
        Directive: [validator.checkDirective, validator.checkIncludeTarget]
    };
    registry.register(checks, validator);
}

export class HttpdValidator {
    constructor(
        private readonly includes: HttpdIncludeResolver,
        private readonly includeGraph: HttpdIncludeGraph
    ) {}

    checkOrphanSectionClosings(document: HttpdDocument, accept: ValidationAcceptor): void {
        document.orphanClosings.forEach((close, index) => {
            accept('error', `Closing section </${close.name}> has no matching opening section.`, {
                node: document,
                property: 'orphanClosings',
                index
            });
        });
    }

    async checkIncludeGraph(document: HttpdDocument, accept: ValidationAcceptor): Promise<void> {
        const graph = await this.includeGraph.build(AstUtils.getDocument(document));
        for (const cycle of graph.cycles) {
            accept('error', `Include cycle detected: ${cycle.path.map(uri => uri.path.split('/').at(-1)).join(' -> ')}.`, {
                node: cycle.origin,
                property: 'arguments',
                index: 0
            });
        }
        for (const issue of graph.syntaxIssues) {
            accept('error', `Included file "${issue.uri.path.split('/').at(-1)}" has syntax errors: ${issue.message}`, {
                node: issue.origin,
                property: 'arguments',
                index: 0
            });
        }
        for (const issue of graph.semanticIssues) {
            accept(issue.severity, `Included file "${issue.uri.path.split('/').at(-1)}": ${issue.message}`, {
                node: issue.origin,
                property: 'arguments',
                index: 0
            });
        }
    }

    checkSectionPair(section: Section, accept: ValidationAcceptor): void {
        if (!section.close) {
            return;
        }
        if (section.open.name.toLowerCase() !== section.close.name.toLowerCase()) {
            accept('error', `Closing section </${section.close.name}> does not match <${section.open.name}>.`, {
                node: section.close,
                property: 'name'
            });
        }
    }

    checkSectionDelimiters(section: Section, accept: ValidationAcceptor): void {
        if (!section.open.terminated) {
            accept('error', `Opening section <${section.open.name}> is missing ">".`, {
                node: section.open
            });
        }
        if (section.close && !section.close.terminated) {
            accept('error', `Closing section </${section.close.name}> is missing ">".`, {
                node: section.close
            });
        }
    }

    checkDirective(directive: Directive, accept: ValidationAcceptor): void {
        this.checkCatalogEntry(directive, 'directive', accept);
    }

    async checkIncludeTarget(directive: Directive, accept: ValidationAcceptor): Promise<void> {
        if (!isIncludeDirective(directive) || directive.name.toLowerCase() === 'includeoptional') {
            return;
        }

        const resolution = await this.includes.resolve(AstUtils.getDocument(directive), directive);
        if (resolution.status === 'missing') {
            accept('error', `Cannot resolve required include "${directive.arguments[0]}" from this workspace.`, {
                node: directive,
                property: 'arguments',
                index: 0
            });
        }
    }

    checkSectionOpen(section: SectionOpen, accept: ValidationAcceptor): void {
        this.checkCatalogEntry(section, 'section', accept);
    }

    private checkCatalogEntry(
        node: Directive | SectionOpen,
        kind: DirectiveKind,
        accept: ValidationAcceptor
    ): void {
        const context = getNodeContext(node);
        for (const issue of validateCatalogEntry(
            node.name,
            kind,
            node.arguments.length,
            context
        )) {
            accept(issue.severity, issue.message, {
                node,
                property: 'name'
            });
        }
    }
}
