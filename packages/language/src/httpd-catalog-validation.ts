import { apache24Catalog } from './catalog/apache-2.4.js';
import type {
    DirectiveContext,
    DirectiveKind,
    DirectiveSpec
} from './catalog/types.js';

export interface CatalogIssue {
    message: string;
    severity: 'error' | 'warning';
}

export function validateCatalogEntry(
    name: string,
    kind: DirectiveKind,
    argumentCount: number,
    context: DirectiveContext
): readonly CatalogIssue[] {
    const directives = apache24Catalog.getDirectives(name)
        .filter(directive => directive.kind === kind);
    if (directives.length === 0) {
        return [{ severity: 'warning', message: `Unknown HTTPD ${kind} "${name}".` }];
    }

    const issues: CatalogIssue[] = [];
    if (!directives.some(directive => directive.contexts.includes(context))) {
        const contexts = [...new Set(directives.flatMap(directive => directive.contexts))];
        issues.push({
            severity: 'error',
            message: `${name} is not valid in ${context} context. Allowed: ${contexts.join(', ')}.`
        });
    }

    if (!directives.some(directive => acceptsArgumentCount(directive, argumentCount))) {
        const expected = directives.map(formatArgumentCount).join(' or ');
        issues.push({
            severity: 'error',
            message: `${name} expects ${expected}; received ${argumentCount}.`
        });
    }
    return issues;
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
