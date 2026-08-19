import { AstUtils, type ValidationAcceptor, type ValidationChecks } from 'langium';
import {
    type Directive,
    type HttpdAstType,
    type HttpdDocument,
    type Section,
    type SectionOpen
} from './generated/ast.js';
import { apache24Catalog } from './catalog/apache-2.4.js';
import type { DirectiveKind, DirectiveSpec } from './catalog/types.js';
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
        const directives = apache24Catalog.getDirectives(node.name)
            .filter(directive => directive.kind === kind);
        if (directives.length === 0) {
            accept('warning', `Unknown HTTPD ${kind} "${node.name}".`, {
                node,
                property: 'name'
            });
            return;
        }

        const context = getNodeContext(node);
        if (!directives.some(directive => directive.contexts.includes(context))) {
            const contexts = [...new Set(directives.flatMap(directive => directive.contexts))];
            accept('error', `${node.name} is not valid in ${context} context. Allowed: ${contexts.join(', ')}.`, {
                node,
                property: 'name'
            });
        }

        if (!directives.some(directive => acceptsArgumentCount(directive, node.arguments.length))) {
            const expected = directives.map(directive => formatArgumentCount(directive)).join(' or ');
            accept('error', `${node.name} expects ${expected}; received ${node.arguments.length}.`, {
                node,
                property: 'name'
            });
        }
    }
}

function acceptsArgumentCount(directive: DirectiveSpec, count: number): boolean {
    return !directive.arguments
        || (count >= directive.arguments.min && (directive.arguments.max === undefined || count <= directive.arguments.max));
}

function formatArgumentCount(directive: DirectiveSpec): string {
    const { min, max } = directive.arguments!;
    if (max === undefined) {
        return `at least ${min} arguments`;
    }
    if (min === max) {
        return `${min} argument${min === 1 ? '' : 's'}`;
    }
    return `${min}-${max} arguments`;
}
