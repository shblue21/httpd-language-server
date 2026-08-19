import {
    type FileSystemProvider,
    type LangiumDocument,
    type LangiumParser,
    type ParseResult,
    type URI
} from 'langium';
import type { DirectiveContext } from './catalog/types.js';
import { apache24Catalog } from './catalog/apache-2.4.js';
import {
    validateArgumentShapes,
    validateCatalogEntry
} from './httpd-catalog-validation.js';
import {
    evaluateCondition,
    isConditionalSection,
    type ConditionState
} from './httpd-conditions.js';
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
    condition: Exclude<ConditionState, 'inactive'>;
    context: DirectiveContext;
    order: number;
    source: Directive;
    sourceUri: URI;
    targetUri: URI;
}

export interface IncludeCycle {
    condition: Exclude<ConditionState, 'inactive'>;
    origin: Directive;
    path: readonly URI[];
}

export interface IncludedSyntaxIssue {
    condition: Exclude<ConditionState, 'inactive'>;
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

export interface MissingInclude {
    condition: Exclude<ConditionState, 'inactive'>;
    origin: Directive;
    path: string;
}

export interface IncludeGraph {
    cycles: readonly IncludeCycle[];
    documents: ReadonlyMap<string, ParseResult<HttpdDocument>>;
    missingIncludes: readonly MissingInclude[];
    occurrences: readonly IncludeOccurrence[];
    semanticIssues: readonly IncludedSemanticIssue[];
    syntaxIssues: readonly IncludedSyntaxIssue[];
    truncatedIncludes: readonly Directive[];
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
            missingIncludes: [],
            occurrences: [],
            order: 0,
            semanticIssues: [],
            syntaxIssues: [],
            truncatedIncludes: []
        };
        const configurationBase = await this.includes.getConfigurationBase(root);
        const facts: GraphFacts = {
            defines: new Map(),
            loadedModuleAliases: new Set(),
            loadedModules: new Set(['core']),
            undefinedDefines: new Set()
        };
        await this.visitStatements(
            root.parseResult.value.statements,
            root.uri,
            getRootContext(root.uri.path),
            [root.uri],
            undefined,
            configurationBase,
            'active',
            facts,
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
        condition: Exclude<ConditionState, 'inactive'>,
        facts: GraphFacts,
        state: MutableGraph
    ): Promise<void> {
        for (const statement of statements) {
            if (isSection(statement)) {
                this.recordSemanticIssues(
                    statement.open.name,
                    'section',
                    statement.open.arguments,
                    context,
                    uri,
                    rootOrigin,
                    condition,
                    state
                );
                const conditional = isConditionalSection(statement.open.name);
                const ownCondition = conditional
                    ? evaluateCondition(statement.open.name, statement.open.arguments, facts)
                    : 'active';
                const effectiveCondition = conditional
                    ? condition === 'unknown' && ownCondition !== 'inactive'
                        ? 'unknown'
                        : ownCondition
                    : condition;
                if (effectiveCondition === 'inactive') {
                    continue;
                }
                const branchFacts = conditional && ownCondition === 'unknown'
                    ? cloneFacts(facts)
                    : facts;
                await this.visitStatements(
                    statement.statements,
                    uri,
                    getSectionOwnContext(statement.open.name) ?? context,
                    stack,
                    rootOrigin,
                    configurationBase,
                    effectiveCondition,
                    branchFacts,
                    state
                );
                if (conditional && ownCondition === 'unknown') {
                    joinUnknownFacts(facts, branchFacts);
                }
            } else if (isDirective(statement)) {
                this.recordSemanticIssues(
                    statement.name,
                    'directive',
                    statement.arguments,
                    context,
                    uri,
                    rootOrigin,
                    condition,
                    state
                );
                this.updateFacts(statement, facts);
                if (isIncludeDirective(statement)) {
                    await this.visitInclude(
                        statement,
                        uri,
                        context,
                        stack,
                        rootOrigin,
                        configurationBase,
                        condition,
                        facts,
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
        condition: Exclude<ConditionState, 'inactive'>,
        facts: GraphFacts,
        state: MutableGraph
    ): Promise<void> {
        const resolution = await this.includes.resolve(
            { uri: sourceUri },
            directive,
            configurationBase,
            facts.defines
        );
        if (resolution.status !== 'resolved') {
            if (
                resolution.status === 'missing'
                && directive.name.toLowerCase() === 'include'
                && directive.arguments[0]
            ) {
                state.missingIncludes.push({
                    condition,
                    origin: rootOrigin ?? directive,
                    path: directive.arguments[0]
                });
            }
            return;
        }
        if (resolution.truncated) {
            addUniqueDirective(state.truncatedIncludes, rootOrigin ?? directive);
        }

        for (const targetUri of resolution.targets) {
            const origin = rootOrigin ?? directive;
            if (state.occurrences.length >= MAX_OCCURRENCES) {
                addUniqueDirective(state.truncatedIncludes, origin);
                return;
            }
            state.occurrences.push({
                condition,
                context,
                order: state.order++,
                source: directive,
                sourceUri,
                targetUri
            });

            const cycleStart = stack.findIndex(uri => uri.toString() === targetUri.toString());
            if (cycleStart !== -1) {
                state.cycles.push({
                    condition,
                    origin,
                    path: [...stack.slice(cycleStart), targetUri]
                });
                continue;
            }

            const result = await this.getDocument(targetUri, origin, condition, state);
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
                condition,
                facts,
                state
            );
        }
    }

    private async getDocument(
        uri: URI,
        origin: Directive,
        condition: Exclude<ConditionState, 'inactive'>,
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

        if (result.lexerErrors.length > 0 || result.parserErrors.length > 0) {
            state.syntaxIssues.push({
                condition,
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
        args: readonly string[],
        context: DirectiveContext,
        uri: URI,
        rootOrigin: Directive | undefined,
        condition: Exclude<ConditionState, 'inactive'>,
        state: MutableGraph
    ): void {
        if (!rootOrigin) {
            return;
        }
        const issues = [
            ...validateCatalogEntry(name, kind, args.length, context),
            ...validateArgumentShapes(name, kind, args)
        ];
        for (const issue of issues) {
            state.semanticIssues.push({
                message: issue.message,
                origin: rootOrigin,
                severity: condition === 'unknown' ? 'warning' : issue.severity,
                uri
            });
        }
    }

    private updateFacts(directive: Directive, facts: GraphFacts): void {
        const [first, second] = directive.arguments;
        switch (directive.name.toLowerCase()) {
            case 'define':
                if (first) {
                    facts.defines.set(first, second ?? true);
                    facts.undefinedDefines.delete(first);
                }
                break;
            case 'undefine':
                if (first) {
                    facts.defines.delete(first);
                    facts.undefinedDefines.add(first);
                }
                break;
            case 'loadmodule': {
                if (first) {
                    facts.loadedModuleAliases.add(first.toLowerCase());
                }
                if (second) {
                    facts.loadedModuleAliases.add(basename(second).toLowerCase());
                }
                const module = apache24Catalog.getModuleByIdentifier(first ?? '')
                    ?? apache24Catalog.getModuleByFileName(second ?? '');
                if (module) {
                    facts.loadedModules.add(module.id);
                }
                break;
            }
        }
    }
}

interface MutableGraph {
    cycles: IncludeCycle[];
    documents: Map<string, ParseResult<HttpdDocument>>;
    missingIncludes: MissingInclude[];
    occurrences: IncludeOccurrence[];
    order: number;
    semanticIssues: IncludedSemanticIssue[];
    syntaxIssues: IncludedSyntaxIssue[];
    truncatedIncludes: Directive[];
}

interface GraphFacts {
    defines: Map<string, string | true>;
    loadedModuleAliases: Set<string>;
    loadedModules: Set<string>;
    undefinedDefines: Set<string>;
}

function cloneFacts(facts: GraphFacts): GraphFacts {
    return {
        defines: new Map(facts.defines),
        loadedModuleAliases: new Set(facts.loadedModuleAliases),
        loadedModules: new Set(facts.loadedModules),
        undefinedDefines: new Set(facts.undefinedDefines)
    };
}

function joinUnknownFacts(facts: GraphFacts, branch: GraphFacts): void {
    const names = new Set([
        ...facts.defines.keys(),
        ...facts.undefinedDefines,
        ...branch.defines.keys(),
        ...branch.undefinedDefines
    ]);
    for (const name of names) {
        const current = defineFact(facts, name);
        const possible = defineFact(branch, name);
        if (current.kind === possible.kind && current.value === possible.value) {
            continue;
        }
        facts.defines.delete(name);
        facts.undefinedDefines.delete(name);
    }
}

function defineFact(
    facts: GraphFacts,
    name: string
): { kind: 'defined' | 'undefined' | 'unknown'; value?: string | true } {
    if (facts.defines.has(name)) {
        return { kind: 'defined', value: facts.defines.get(name) };
    }
    if (facts.undefinedDefines.has(name)) {
        return { kind: 'undefined' };
    }
    return { kind: 'unknown' };
}

function basename(path: string): string {
    return path.split(/[\\/]/).at(-1) ?? path;
}

function addUniqueDirective(directives: Directive[], directive: Directive): void {
    if (!directives.includes(directive)) {
        directives.push(directive);
    }
}
