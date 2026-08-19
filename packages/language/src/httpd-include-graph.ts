import {
    type FileSystemProvider,
    type LangiumDocument,
    type LangiumParser,
    type ParseResult,
    type URI
} from 'langium';
import type { DirectiveContext } from './catalog/types.js';
import { validateCatalogEntry } from './httpd-catalog-validation.js';
import { getRootContext, getSectionOwnContext } from './httpd-context.js';
import { HttpdIncludeResolver, isIncludeDirective } from './httpd-include-resolver.js';
import {
    isDirective,
    isSection,
    type Directive,
    type HttpdDocument,
    type Statement
} from './generated/ast.js';

const MAX_OCCURRENCES = 1_000;

export interface IncludeOccurrence {
    context: DirectiveContext;
    order: number;
    source: Directive;
    sourceUri: URI;
    targetUri: URI;
}

export interface IncludeCycle {
    origin: Directive;
    path: readonly URI[];
}

export interface IncludedSyntaxIssue {
    message: string;
    origin: Directive;
    uri: URI;
}

export interface IncludedSemanticIssue {
    message: string;
    origin: Directive;
    severity: 'error' | 'warning';
    uri: URI;
}

export interface IncludeGraph {
    cycles: readonly IncludeCycle[];
    documents: ReadonlyMap<string, ParseResult<HttpdDocument>>;
    occurrences: readonly IncludeOccurrence[];
    semanticIssues: readonly IncludedSemanticIssue[];
    syntaxIssues: readonly IncludedSyntaxIssue[];
}

export class HttpdIncludeGraph {
    constructor(
        private readonly includes: HttpdIncludeResolver,
        private readonly fileSystem: FileSystemProvider,
        private readonly parser: LangiumParser
    ) {}

    async build(root: LangiumDocument<HttpdDocument>): Promise<IncludeGraph> {
        const state: MutableGraph = {
            cycles: [],
            documents: new Map([[root.uri.toString(), root.parseResult]]),
            occurrences: [],
            order: 0,
            reportedSyntaxIssues: new Set(),
            semanticIssues: [],
            syntaxIssues: []
        };
        const configurationBase = await this.includes.getConfigurationBase(root);
        await this.visitStatements(
            root.parseResult.value.statements,
            root.uri,
            getRootContext(root.uri.path),
            [root.uri],
            undefined,
            configurationBase,
            state
        );
        return state;
    }

    private async visitStatements(
        statements: readonly Statement[],
        uri: URI,
        context: DirectiveContext,
        stack: readonly URI[],
        rootOrigin: Directive | undefined,
        configurationBase: URI,
        state: MutableGraph
    ): Promise<void> {
        for (const statement of statements) {
            if (state.occurrences.length >= MAX_OCCURRENCES) {
                return;
            }
            if (isSection(statement)) {
                this.recordSemanticIssues(
                    statement.open.name,
                    'section',
                    statement.open.arguments.length,
                    context,
                    uri,
                    rootOrigin,
                    state
                );
                await this.visitStatements(
                    statement.statements,
                    uri,
                    getSectionOwnContext(statement.open.name) ?? context,
                    stack,
                    rootOrigin,
                    configurationBase,
                    state
                );
            } else if (isDirective(statement)) {
                this.recordSemanticIssues(
                    statement.name,
                    'directive',
                    statement.arguments.length,
                    context,
                    uri,
                    rootOrigin,
                    state
                );
                if (isIncludeDirective(statement)) {
                    await this.visitInclude(
                        statement,
                        uri,
                        context,
                        stack,
                        rootOrigin,
                        configurationBase,
                        state
                    );
                }
            }
        }
    }

    private async visitInclude(
        directive: Directive,
        sourceUri: URI,
        context: DirectiveContext,
        stack: readonly URI[],
        rootOrigin: Directive | undefined,
        configurationBase: URI,
        state: MutableGraph
    ): Promise<void> {
        const resolution = await this.includes.resolve({ uri: sourceUri }, directive, configurationBase);
        if (resolution.status !== 'resolved') {
            return;
        }

        for (const targetUri of resolution.targets) {
            const origin = rootOrigin ?? directive;
            state.occurrences.push({
                context,
                order: state.order++,
                source: directive,
                sourceUri,
                targetUri
            });

            const cycleStart = stack.findIndex(uri => uri.toString() === targetUri.toString());
            if (cycleStart !== -1) {
                state.cycles.push({ origin, path: [...stack.slice(cycleStart), targetUri] });
                continue;
            }

            const result = await this.getDocument(targetUri, origin, state);
            if (!result) {
                continue;
            }
            await this.visitStatements(
                result.value.statements,
                targetUri,
                context,
                [...stack, targetUri],
                origin,
                configurationBase,
                state
            );
        }
    }

    private async getDocument(
        uri: URI,
        origin: Directive,
        state: MutableGraph
    ): Promise<ParseResult<HttpdDocument> | undefined> {
        const key = uri.toString();
        let result = state.documents.get(key);
        if (!result) {
            try {
                result = this.parser.parse<HttpdDocument>(await this.fileSystem.readFile(uri));
                state.documents.set(key, result);
            } catch {
                return undefined;
            }
        }

        if (
            !state.reportedSyntaxIssues.has(key)
            && (result.lexerErrors.length > 0 || result.parserErrors.length > 0)
        ) {
            state.reportedSyntaxIssues.add(key);
            state.syntaxIssues.push({
                message: result.lexerErrors[0]?.message ?? result.parserErrors[0].message,
                origin,
                uri
            });
        }
        return result;
    }

    private recordSemanticIssues(
        name: string,
        kind: 'directive' | 'section',
        argumentCount: number,
        context: DirectiveContext,
        uri: URI,
        rootOrigin: Directive | undefined,
        state: MutableGraph
    ): void {
        if (!rootOrigin) {
            return;
        }
        for (const issue of validateCatalogEntry(name, kind, argumentCount, context)) {
            state.semanticIssues.push({
                message: issue.message,
                origin: rootOrigin,
                severity: issue.severity,
                uri
            });
        }
    }
}

interface MutableGraph {
    cycles: IncludeCycle[];
    documents: Map<string, ParseResult<HttpdDocument>>;
    occurrences: IncludeOccurrence[];
    order: number;
    reportedSyntaxIssues: Set<string>;
    semanticIssues: IncludedSemanticIssue[];
    syntaxIssues: IncludedSyntaxIssue[];
}
