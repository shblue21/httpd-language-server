import { apache24Catalog } from './catalog/apache-2.4.js';
import type {
    DirectiveContext,
    DirectiveKind,
    DirectiveSpec
} from './catalog/types.js';
import { getContextCapabilities } from './httpd-context.js';

export interface CatalogIssue {
    message: string;
    severity: 'error' | 'warning';
}

export function validateCatalogEntry(
    name: string,
    kind: DirectiveKind,
    argumentCount: number,
    context: DirectiveContext | readonly DirectiveContext[]
): readonly CatalogIssue[] {
    const directives = apache24Catalog.getDirectives(name)
        .filter(directive => directive.kind === kind);
    if (directives.length === 0) {
        return [{ severity: 'warning', message: `Unknown HTTPD ${kind} "${name}".` }];
    }

    const issues: CatalogIssue[] = [];
    const activeContexts = typeof context === 'string' ? [context] : context;
    const capabilities = [...new Set(activeContexts.flatMap(getContextCapabilities))];
    if (!directives.some(directive => directive.contexts.some(item => capabilities.includes(item)))) {
        const allowedContexts = [...new Set(directives.flatMap(directive => directive.contexts))];
        issues.push({
            severity: 'error',
            message: `${name} is not valid in ${activeContexts.join(' or ')} context. Allowed: ${allowedContexts.join(', ')}.`
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

export function validateArgumentShapes(
    name: string,
    kind: DirectiveKind,
    args: readonly string[]
): readonly CatalogIssue[] {
    const directives = apache24Catalog.getDirectives(name)
        .filter(directive => directive.kind === kind && directive.argumentShape);
    if (directives.length === 0 || directives.some(directive => matchesShape(directive, args))) {
        return [];
    }
    return [{
        severity: 'error',
        message: `${name} has an invalid address or port argument.`
    }];
}

function matchesShape(directive: DirectiveSpec, args: readonly string[]): boolean {
    if (directive.argumentShape === 'listen') {
        const value = args[0] ?? '';
        return /^\d+$/.test(value)
            || /^.+:\d+$/.test(value)
            || /^\[[^\]]+\]:\d+$/.test(value)
            || value.startsWith('/');
    }
    return true;
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
