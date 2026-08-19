import { AstUtils, type ValidationAcceptor, type ValidationChecks } from 'langium';
import {
    type Directive,
    type HttpdAstType,
    type HttpdDocument,
    type Section,
    type SectionOpen
} from './generated/ast.js';
import type { DirectiveKind } from './catalog/types.js';
import {
    validateArgumentShapes,
    validateCatalogEntry
} from './httpd-catalog-validation.js';
import { getNodeContext, getNodeSectionName } from './httpd-context.js';
import { HttpdIncludeGraph } from './httpd-include-graph.js';
import type { HttpdServices } from './httpd-module.js';
import { HttpdRequirementAnalyzer } from './httpd-requirements.js';
import { HttpdServiceRegistry } from './httpd-service-registry.js';

export function registerValidationChecks(services: HttpdServices): void {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.HttpdValidator;
    const checks: ValidationChecks<HttpdAstType> = {
        HttpdDocument: [
            validator.checkOrphanSectionClosings,
            validator.checkIncludeGraph,
            validator.checkRequirements
        ],
        Section: [validator.checkSectionPair, validator.checkSectionDelimiters],
        SectionOpen: validator.checkSectionOpen,
        Directive: validator.checkDirective
    };
    registry.register(checks, validator);
}

export class HttpdValidator {
    constructor(
        private readonly includeGraph: HttpdIncludeGraph,
        private readonly requirements: HttpdRequirementAnalyzer,
        private readonly serviceRegistry: HttpdServiceRegistry
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
            const prefix = cycle.condition === 'unknown' ? 'Conditional include cycle' : 'Include cycle';
            accept(cycle.condition === 'unknown' ? 'warning' : 'error', `${prefix} detected: ${cycle.path.map(uri => uri.path.split('/').at(-1)).join(' -> ')}.`, {
                node: cycle.origin,
                property: 'arguments',
                index: 0
            });
        }
        for (const missing of graph.missingIncludes) {
            const message = missing.condition === 'unknown'
                ? `Conditional include "${missing.path}" cannot be resolved from this workspace.`
                : `Cannot resolve required include "${missing.path}" from this workspace.`;
            accept(missing.condition === 'unknown' ? 'warning' : 'error', message, {
                node: missing.origin,
                property: 'arguments',
                index: 0
            });
        }
        for (const issue of graph.syntaxIssues) {
            accept(issue.condition === 'unknown' ? 'warning' : 'error', `Included file "${issue.uri.path.split('/').at(-1)}" has syntax errors: ${issue.message}`, {
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
        for (const include of graph.truncatedIncludes) {
            accept('warning', 'Include expansion reached a safety limit; analysis is incomplete.', {
                node: include,
                property: 'arguments',
                index: 0
            });
        }
    }

    checkRequirements(document: HttpdDocument, accept: ValidationAcceptor): void {
        if (this.requirements.analyze(document).targetPlatforms === 'conflict') {
            accept('error', 'This configuration requires incompatible target platforms.', {
                node: document
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

    checkSectionOpen(section: SectionOpen, accept: ValidationAcceptor): void {
        this.checkCatalogEntry(section, 'section', accept);
    }

    private checkCatalogEntry(
        node: Directive | SectionOpen,
        kind: DirectiveKind,
        accept: ValidationAcceptor
    ): void {
        const includedContexts = this.serviceRegistry.getIncludedContexts(AstUtils.getDocument(node).uri);
        const context = includedContexts.length > 0 ? includedContexts : getNodeContext(node);
        const includedSections = this.serviceRegistry.getIncludedSectionNames(AstUtils.getDocument(node).uri);
        for (const issue of validateCatalogEntry(
            node.name,
            kind,
            node.arguments.length,
            context,
            includedSections.length > 0 ? includedSections : getNodeSectionName(node)
        )) {
            accept(issue.severity, issue.message, {
                node,
                property: 'name'
            });
        }
        for (const issue of validateArgumentShapes(node.name, kind, node.arguments)) {
            accept(issue.severity, issue.message, {
                node,
                property: 'name'
            });
        }
    }
}
