import {
    interruptAndCheck,
    isOperationCancelled,
    UriUtils,
    type FileSystemProvider,
    type LangiumDocument,
    type LangiumDocuments,
    type LangiumParser,
    type ParseResult,
    type TextDocumentProvider,
    type URI
} from 'langium';
import type { CancellationToken } from 'vscode-languageserver';
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
import { HttpdServiceRegistry } from './httpd-service-registry.js';
import {
    isDirective,
    isSection,
    type Directive,
    type HttpdDocument,
    type Section,
    type Statement
} from './generated/ast.js';

const MAX_OCCURRENCES = 1_000;

export interface IncludeOccurrence {
    condition: Exclude<ConditionState, 'inactive'>;
    context: DirectiveContext;
    order: number;
    sectionName?: string;
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

export interface IncludeConfigurationAnalysis {
    graph: IncludeGraph;
    occurrences: readonly IncludeOccurrence[];
    root: LangiumDocument<HttpdDocument>;
}

export class HttpdIncludeGraph {
    constructor(
        private readonly includes: HttpdIncludeResolver,
        private readonly fileSystem: FileSystemProvider,
        private readonly parser: LangiumParser,
        private readonly serviceRegistry: HttpdServiceRegistry,
        private readonly textDocuments?: TextDocumentProvider,
        private readonly langiumDocuments?: LangiumDocuments
    ) {}

    async build(
        root: LangiumDocument<HttpdDocument>,
        cancelToken?: CancellationToken
    ): Promise<IncludeGraph> {
        const graph = await this.analyze(root, cancelToken);
        const rootKey = UriUtils.normalize(root.uri);
        const hasExternalRoot = this.serviceRegistry.getRootsForIncluded(root.uri).some(uri =>
            UriUtils.normalize(uri) !== rootKey
        );
        if (!hasExternalRoot) {
            this.serviceRegistry.replaceIncluded(root.uri, graph.occurrences);
        }
        return graph;
    }

    async analyze(
        root: LangiumDocument<HttpdDocument>,
        cancelToken?: CancellationToken
    ): Promise<IncludeGraph> {
        if (cancelToken) {
            await interruptAndCheck(cancelToken);
        }
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
        const facts: GraphFacts = {
            configurationBase: UriUtils.dirname(root.uri),
            defines: new Map(),
            loadedModuleAliases: new Set(),
            loadedModules: new Set(['core']),
            undefinedDefines: new Set()
        };
        await this.visitStatements(
            root.parseResult.value.statements,
            root.uri,
            getRootContext(root.uri.path),
            undefined,
            [root.uri],
            undefined,
            'active',
            facts,
            state,
            cancelToken
        );
        return state;
    }

    async analyzeConfigurations(
        document: LangiumDocument<HttpdDocument>,
        cancelToken?: CancellationToken
    ): Promise<readonly IncludeConfigurationAnalysis[]> {
        const documentKey = UriUtils.normalize(document.uri);
        const registeredRoots = this.serviceRegistry.getRootsForIncluded(document.uri);
        const externalRoots = registeredRoots.filter(uri =>
            UriUtils.normalize(uri) !== documentKey
        );
        const rootUris = externalRoots.length > 0 ? [...externalRoots] : [document.uri];
        rootUris.sort((left, right) => left.toString().localeCompare(right.toString()));

        const analyses: IncludeConfigurationAnalysis[] = [];
        const seenRoots = new Set<string>();
        for (const rootUri of rootUris) {
            if (cancelToken) {
                await interruptAndCheck(cancelToken);
            }
            const rootKey = UriUtils.normalize(rootUri);
            if (seenRoots.has(rootKey)) {
                continue;
            }
            seenRoots.add(rootKey);

            let root: LangiumDocument<HttpdDocument>;
            if (rootKey === documentKey) {
                root = document;
            } else {
                try {
                    const resolved = this.langiumDocuments?.getDocument(rootUri)
                        ?? await this.langiumDocuments?.getOrCreateDocument(rootUri, cancelToken);
                    if (!resolved) {
                        continue;
                    }
                    root = resolved as LangiumDocument<HttpdDocument>;
                } catch (error) {
                    if (isOperationCancelled(error)) {
                        throw error;
                    }
                    continue;
                }
            }
            const graph = await this.analyze(root, cancelToken);
            const occurrences = graph.occurrences.filter(occurrence =>
                UriUtils.normalize(occurrence.targetUri) === documentKey
            );
            if (rootKey !== documentKey && occurrences.length === 0) {
                continue;
            }
            analyses.push({ graph, occurrences, root });
        }

        if (analyses.length === 0) {
            analyses.push({
                graph: await this.analyze(document, cancelToken),
                occurrences: [],
                root: document
            });
        }
        return analyses;
    }

    isCurrentDocument(document: LangiumDocument): boolean {
        const current = this.langiumDocuments?.getDocument(document.uri);
        return !current
            || (current === document
                && current.textDocument.version === document.textDocument.version);
    }

    private async visitStatements(
        statements: readonly Statement[],
        uri: URI,
        context: DirectiveContext,
        sectionName: string | undefined,
        stack: readonly URI[],
        rootOrigin: Directive | undefined,
        condition: Exclude<ConditionState, 'inactive'>,
        facts: GraphFacts,
        state: MutableGraph,
        cancelToken?: CancellationToken
    ): Promise<void> {
        for (const statement of statements) {
            if (cancelToken) {
                await interruptAndCheck(cancelToken);
            }
            if (isSection(statement)) {
                this.recordSectionIssues(statement, uri, rootOrigin, condition, state);
                this.recordSemanticIssues(
                    statement.open.name,
                    'section',
                    statement.open.arguments,
                    context,
                    sectionName,
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
                    conditional ? sectionName : statement.open.name,
                    stack,
                    rootOrigin,
                    effectiveCondition,
                    branchFacts,
                    state,
                    cancelToken
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
                    sectionName,
                    uri,
                    rootOrigin,
                    condition,
                    state
                );
                await this.updateFacts(statement, facts);
                if (isIncludeDirective(statement)) {
                    await this.visitInclude(
                        statement,
                        uri,
                        context,
                        sectionName,
                        stack,
                        rootOrigin,
                        condition,
                        facts,
                        state,
                        cancelToken
                    );
                }
            }
        }
    }

    private async visitInclude(
        directive: Directive,
        sourceUri: URI,
        context: DirectiveContext,
        sectionName: string | undefined,
        stack: readonly URI[],
        rootOrigin: Directive | undefined,
        condition: Exclude<ConditionState, 'inactive'>,
        facts: GraphFacts,
        state: MutableGraph,
        cancelToken?: CancellationToken
    ): Promise<void> {
        if (!facts.configurationBase) {
            return;
        }
        if (cancelToken) {
            await interruptAndCheck(cancelToken);
        }
        const resolution = await this.includes.resolve(
            { uri: sourceUri },
            directive,
            facts.configurationBase,
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
            if (cancelToken) {
                await interruptAndCheck(cancelToken);
            }
            const origin = rootOrigin ?? directive;
            if (state.occurrences.length >= MAX_OCCURRENCES) {
                addUniqueDirective(state.truncatedIncludes, origin);
                return;
            }
            state.occurrences.push({
                condition,
                context,
                order: state.order++,
                sectionName,
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

            const result = await this.getDocument(
                targetUri,
                origin,
                condition,
                state,
                cancelToken
            );
            if (!result) {
                continue;
            }
            await this.visitStatements(
                result.value.statements,
                targetUri,
                context,
                sectionName,
                [...stack, targetUri],
                origin,
                condition,
                facts,
                state,
                cancelToken
            );
        }
    }

    private async getDocument(
        uri: URI,
        origin: Directive,
        condition: Exclude<ConditionState, 'inactive'>,
        state: MutableGraph,
        cancelToken?: CancellationToken
    ): Promise<ParseResult<HttpdDocument> | undefined> {
        if (cancelToken) {
            await interruptAndCheck(cancelToken);
        }
        const key = uri.toString();
        let result = state.documents.get(key);
        if (!result) {
            try {
                const text = this.textDocuments?.get(uri)?.getText()
                    ?? await this.fileSystem.readFile(uri);
                if (cancelToken) {
                    await interruptAndCheck(cancelToken);
                }
                result = this.parser.parse<HttpdDocument>(text);
                state.documents.set(key, result);
            } catch (error) {
                if (isOperationCancelled(error)) {
                    throw error;
                }
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
        for (const close of result.value.orphanClosings) {
            state.semanticIssues.push({
                message: `Closing section </${close.name}> has no matching opening section.`,
                origin,
                severity: condition === 'unknown' ? 'warning' : 'error',
                uri
            });
        }
        return result;
    }

    private recordSectionIssues(
        section: Section,
        uri: URI,
        rootOrigin: Directive | undefined,
        condition: Exclude<ConditionState, 'inactive'>,
        state: MutableGraph
    ): void {
        if (!rootOrigin) {
            return;
        }
        const messages: string[] = [];
        if (!section.open.terminated) {
            messages.push(`Opening section <${section.open.name}> is missing ">".`);
        }
        if (section.close && !section.close.terminated) {
            messages.push(`Closing section </${section.close.name}> is missing ">".`);
        }
        if (
            section.close
            && section.open.name.toLowerCase() !== section.close.name.toLowerCase()
        ) {
            messages.push(
                `Closing section </${section.close.name}> does not match <${section.open.name}>.`
            );
        }
        for (const message of messages) {
            state.semanticIssues.push({
                message,
                origin: rootOrigin,
                severity: condition === 'unknown' ? 'warning' : 'error',
                uri
            });
        }
    }

    private recordSemanticIssues(
        name: string,
        kind: 'directive' | 'section',
        args: readonly string[],
        context: DirectiveContext,
        sectionName: string | undefined,
        uri: URI,
        rootOrigin: Directive | undefined,
        condition: Exclude<ConditionState, 'inactive'>,
        state: MutableGraph
    ): void {
        if (!rootOrigin) {
            return;
        }
        const issues = [
            ...validateCatalogEntry(name, kind, args.length, context, sectionName),
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

    private async updateFacts(directive: Directive, facts: GraphFacts): Promise<void> {
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
            case 'serverroot':
                if (first && facts.configurationBase) {
                    facts.configurationBase = await this.includes.resolveServerRoot(
                        facts.configurationBase,
                        first,
                        facts.defines
                    );
                }
                break;
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
    configurationBase?: URI;
    defines: Map<string, string | true>;
    loadedModuleAliases: Set<string>;
    loadedModules: Set<string>;
    undefinedDefines: Set<string>;
}

function cloneFacts(facts: GraphFacts): GraphFacts {
    return {
        configurationBase: facts.configurationBase,
        defines: new Map(facts.defines),
        loadedModuleAliases: new Set(facts.loadedModuleAliases),
        loadedModules: new Set(facts.loadedModules),
        undefinedDefines: new Set(facts.undefinedDefines)
    };
}

function joinUnknownFacts(facts: GraphFacts, branch: GraphFacts): void {
    if (facts.configurationBase?.toString() !== branch.configurationBase?.toString()) {
        facts.configurationBase = undefined;
    }
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
