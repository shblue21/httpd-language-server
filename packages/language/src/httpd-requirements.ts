import { apache24Catalog } from './catalog/apache-2.4.js';
import type { DirectiveSpec, HttpdCatalog, TargetPlatform } from './catalog/index.js';
import { evaluateCondition, isConditionalSection, type ConditionState } from './httpd-conditions.js';
import { joinDefineFacts, type MutableDefineFacts } from './httpd-define-facts.js';
import type { IncludeGraph } from './httpd-include-graph.js';
import { isIncludeDirective } from './httpd-include-resolver.js';
import { isDirective, isSection, type HttpdDocument, type Statement } from './generated/ast.js';

export type ModuleRequirementState = 'loaded' | 'unknown';

export interface ModuleRequirement {
    condition: Exclude<ConditionState, 'inactive'>;
    required: true;
    providers: readonly string[];
    state: ModuleRequirementState;
}

export interface HttpdRequirements {
    conditions: readonly { name: string; state: ConditionState }[];
    defines: ReadonlyMap<string, string | true>;
    loadedModules: ReadonlySet<string>;
    minimumVersion: string;
    modules: readonly ModuleRequirement[];
    serverRoot?: string;
    targetPlatforms: readonly TargetPlatform[] | 'unknown' | 'conflict';
}

export class HttpdRequirementAnalyzer {
    constructor(private readonly catalog: HttpdCatalog = apache24Catalog) {}

    analyze(document: HttpdDocument): HttpdRequirements {
        const state = createRequirementsState();
        this.visitStatements(document.statements, state, 'active', state.facts);
        return finishRequirements(state);
    }

    analyzeConfiguration(document: HttpdDocument, graph: IncludeGraph): HttpdRequirements {
        const state = createRequirementsState();
        this.visitStatements(document.statements, state, 'active', state.facts, graph, [document]);
        return finishRequirements(state);
    }

    moduleState(requirements: HttpdRequirements, providers: readonly string[]): ModuleRequirementState {
        return providers.some(provider => requirements.loadedModules.has(provider))
            ? 'loaded'
            : 'unknown';
    }

    private visitStatements(
        statements: readonly Statement[],
        state: MutableRequirements,
        parentCondition: Exclude<ConditionState, 'inactive'>,
        facts: RequirementsFacts,
        graph?: IncludeGraph,
        stack: readonly HttpdDocument[] = []
    ): void {
        for (const statement of statements) {
            if (isDirective(statement)) {
                const loadedModule = this.updateFacts(statement.name, statement.arguments, facts);
                if (parentCondition === 'active' && loadedModule) {
                    this.updatePlatforms([loadedModule], state);
                    for (const requirement of state.modules.values()) {
                        if (requirement.providers.includes(loadedModule)) {
                            requirement.state = 'loaded';
                        }
                    }
                }
                this.recordRequirements(statement.name, 'directive', parentCondition, state, facts);
                if (graph && isIncludeDirective(statement)) {
                    for (const occurrence of graph.occurrences.filter(item => item.source === statement)) {
                        const included = graph.documents.get(occurrence.targetUri.toString())?.value;
                        if (!included || stack.includes(included)) {
                            continue;
                        }
                        const forkIncludedFacts = parentCondition === 'active'
                            && occurrence.condition === 'unknown';
                        const includedFacts = forkIncludedFacts
                            ? cloneRequirementsFacts(facts)
                            : facts;
                        this.visitStatements(
                            included.statements,
                            state,
                            occurrence.condition,
                            includedFacts,
                            graph,
                            [...stack, included]
                        );
                        if (forkIncludedFacts) {
                            joinRequirementsFacts(facts, includedFacts);
                        }
                    }
                }
            } else if (isSection(statement)) {
                this.recordRequirements(statement.open.name, 'section', parentCondition, state, facts);
                const conditional = isConditionalSection(statement.open.name);
                const ownCondition = conditional
                    ? evaluateCondition(
                        statement.open.name,
                        statement.open.arguments,
                        facts,
                        this.catalog
                    )
                    : 'active';
                const effective = parentCondition === 'unknown' && ownCondition !== 'inactive'
                    ? 'unknown'
                    : ownCondition;
                if (conditional) {
                    state.conditions.push({ name: statement.open.name, state: effective });
                }
                if (effective === 'inactive') {
                    continue;
                }
                const branchFacts = conditional && ownCondition === 'unknown'
                    ? cloneRequirementsFacts(facts)
                    : facts;
                this.visitStatements(
                    statement.statements,
                    state,
                    effective,
                    branchFacts,
                    graph,
                    stack
                );
                if (conditional && ownCondition === 'unknown') {
                    joinRequirementsFacts(facts, branchFacts);
                }
            }
        }
    }

    private updateFacts(
        name: string,
        args: readonly string[],
        facts: RequirementsFacts
    ): string | undefined {
        switch (name.toLowerCase()) {
            case 'define':
                if (args[0]) {
                    facts.defines.set(args[0], args[1] ?? true);
                    facts.undefinedDefines.delete(args[0]);
                }
                break;
            case 'undefine':
                if (args[0]) {
                    facts.defines.delete(args[0]);
                    facts.undefinedDefines.add(args[0]);
                }
                break;
            case 'loadmodule': {
                if (args[0]) {
                    facts.loadedModuleAliases.add(args[0].toLowerCase());
                }
                if (args[1]) {
                    facts.loadedModuleAliases.add(basename(args[1]).toLowerCase());
                }
                const module = this.catalog.getModuleByIdentifier(args[0] ?? '')
                    ?? this.catalog.getModuleByFileName(args[1] ?? '');
                if (module) {
                    facts.loadedModules.add(module.id);
                    return module.id;
                }
                break;
            }
            case 'serverroot':
                facts.serverRoot = args[0];
                break;
        }
        return undefined;
    }

    private recordRequirements(
        name: string,
        kind: DirectiveSpec['kind'],
        condition: Exclude<ConditionState, 'inactive'>,
        state: MutableRequirements,
        facts: RequirementsFacts
    ): void {
        for (const directive of this.catalog.getDirectives(name).filter(entry => entry.kind === kind)) {
            if (
                condition === 'active'
                && directive.since
                && compareVersions(directive.since, state.minimumVersion) > 0
            ) {
                state.minimumVersion = directive.since;
            }

            const providers = [...directive.modules].sort();
            const key = `${condition}:${providers.join('|')}`;
            const current = state.modules.get(key);
            const requirement: ModuleRequirement = {
                condition,
                providers,
                required: true,
                state: providers.some(provider => facts.loadedModules.has(provider))
                    ? 'loaded'
                    : 'unknown'
            };
            if (!current || (current.state === 'unknown' && requirement.state === 'loaded')) {
                state.modules.set(key, requirement);
            }
            if (condition === 'active') {
                this.updatePlatforms(providers, state);
                if (directive.platforms) {
                    this.updatePlatformCandidates(directive.platforms, state);
                }
            }
        }
    }

    private updatePlatforms(providers: readonly string[], state: MutableRequirements): void {
        const modules = providers.map(provider => this.catalog.getModule(provider));
        if (modules.some(module => !module?.platforms || module.platforms.length === 0)) {
            return;
        }

        this.updatePlatformCandidates(
            modules.flatMap(module => module?.platforms ?? []),
            state
        );
    }

    private updatePlatformCandidates(
        platforms: readonly TargetPlatform[],
        state: MutableRequirements
    ): void {
        const candidates = new Set(platforms);
        if (!state.targetPlatforms) {
            state.targetPlatforms = candidates;
            return;
        }
        state.targetPlatforms = new Set(
            [...state.targetPlatforms].filter(platform => candidates.has(platform))
        );
    }
}

interface RequirementsFacts extends MutableDefineFacts {
    loadedModules: Set<string>;
    loadedModuleAliases: Set<string>;
    serverRoot?: string;
}

interface MutableRequirements {
    conditions: Array<{ name: string; state: ConditionState }>;
    facts: RequirementsFacts;
    minimumVersion: string;
    modules: Map<string, ModuleRequirement>;
    targetPlatforms?: Set<TargetPlatform>;
}

function createRequirementsState(): MutableRequirements {
    return {
        conditions: [],
        facts: {
            defines: new Map(),
            loadedModuleAliases: new Set(),
            loadedModules: new Set(['core']),
            undefinedDefines: new Set()
        },
        minimumVersion: '2.4.0',
        modules: new Map(),
        targetPlatforms: undefined
    };
}

function finishRequirements(state: MutableRequirements): HttpdRequirements {
    return {
        conditions: state.conditions,
        defines: state.facts.defines,
        loadedModules: state.facts.loadedModules,
        minimumVersion: state.minimumVersion,
        modules: [...state.modules.values()],
        serverRoot: state.facts.serverRoot,
        targetPlatforms: state.targetPlatforms
            ? state.targetPlatforms.size > 0
                ? [...state.targetPlatforms].sort()
                : 'conflict'
            : 'unknown'
    };
}

function cloneRequirementsFacts(facts: RequirementsFacts): RequirementsFacts {
    return {
        defines: new Map(facts.defines),
        loadedModuleAliases: new Set(facts.loadedModuleAliases),
        loadedModules: new Set(facts.loadedModules),
        serverRoot: facts.serverRoot,
        undefinedDefines: new Set(facts.undefinedDefines)
    };
}

function joinRequirementsFacts(facts: RequirementsFacts, branch: RequirementsFacts): void {
    joinDefineFacts(facts, branch);
    retainSharedValues(facts.loadedModuleAliases, branch.loadedModuleAliases);
    retainSharedValues(facts.loadedModules, branch.loadedModules);
    if (facts.serverRoot !== branch.serverRoot) {
        facts.serverRoot = undefined;
    }
}

function retainSharedValues<T>(values: Set<T>, branchValues: ReadonlySet<T>): void {
    for (const value of values) {
        if (!branchValues.has(value)) {
            values.delete(value);
        }
    }
}

function compareVersions(left: string, right: string): number {
    const leftParts = left.split('.').map(Number);
    const rightParts = right.split('.').map(Number);
    for (let index = 0; index < Math.max(leftParts.length, rightParts.length); index++) {
        const difference = (leftParts[index] ?? 0) - (rightParts[index] ?? 0);
        if (difference !== 0) {
            return difference;
        }
    }
    return 0;
}

function basename(path: string): string {
    return path.split(/[\\/]/).at(-1) ?? path;
}
