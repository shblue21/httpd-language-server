import { apache24Catalog } from './catalog/apache-2.4.js';
import type { DirectiveSpec, HttpdCatalog, TargetPlatform } from './catalog/index.js';
import { evaluateCondition, isConditionalSection, type ConditionState } from './httpd-conditions.js';
import type { IncludeGraph } from './httpd-include-graph.js';
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
        return this.analyzeDocuments([{ document, condition: 'active' }]);
    }

    analyzeConfiguration(document: HttpdDocument, graph: IncludeGraph): HttpdRequirements {
        const documents: Array<{
            document: HttpdDocument;
            condition: Exclude<ConditionState, 'inactive'>;
        }> = [{ document, condition: 'active' }];
        for (const occurrence of graph.occurrences) {
            const included = graph.documents.get(occurrence.targetUri.toString());
            if (included) {
                documents.push({
                    document: included.value,
                    condition: occurrence.condition
                });
            }
        }
        return this.analyzeDocuments(documents);
    }

    private analyzeDocuments(
        documents: readonly {
            document: HttpdDocument;
            condition: Exclude<ConditionState, 'inactive'>;
        }[]
    ): HttpdRequirements {
        const state: MutableRequirements = {
            conditions: [],
            defines: new Map(),
            loadedModuleAliases: new Set(),
            loadedModules: new Set(['core']),
            minimumVersion: '2.4.0',
            modules: new Map(),
            targetPlatforms: undefined,
            undefinedDefines: new Set()
        };
        for (const entry of documents) {
            this.visitStatements(entry.document.statements, state, entry.condition);
        }
        return {
            conditions: state.conditions,
            defines: state.defines,
            loadedModules: state.loadedModules,
            minimumVersion: state.minimumVersion,
            modules: [...state.modules.values()],
            serverRoot: state.serverRoot,
            targetPlatforms: state.targetPlatforms
                ? state.targetPlatforms.size > 0
                    ? [...state.targetPlatforms].sort()
                    : 'conflict'
                : 'unknown'
        };
    }

    moduleState(requirements: HttpdRequirements, providers: readonly string[]): ModuleRequirementState {
        return providers.some(provider => requirements.loadedModules.has(provider))
            ? 'loaded'
            : 'unknown';
    }

    private visitStatements(
        statements: readonly Statement[],
        state: MutableRequirements,
        parentCondition: Exclude<ConditionState, 'inactive'>
    ): void {
        for (const statement of statements) {
            if (isDirective(statement)) {
                if (parentCondition === 'active') {
                    this.updateFacts(statement.name, statement.arguments, state);
                }
                this.recordRequirements(statement.name, 'directive', parentCondition, state);
            } else if (isSection(statement)) {
                this.recordRequirements(statement.open.name, 'section', parentCondition, state);
                const condition = evaluateCondition(
                    statement.open.name,
                    statement.open.arguments,
                    state,
                    this.catalog
                );
                const effective = parentCondition === 'unknown' && condition !== 'inactive'
                    ? 'unknown'
                    : condition;
                if (isConditionalSection(statement.open.name)) {
                    state.conditions.push({ name: statement.open.name, state: effective });
                }
                if (effective !== 'inactive') {
                    this.visitStatements(statement.statements, state, effective);
                    if (parentCondition === 'active' && effective === 'unknown') {
                        invalidateConditionallyChangedFacts(statement.statements, state);
                    }
                }
            }
        }
    }

    private updateFacts(name: string, args: readonly string[], state: MutableRequirements): void {
        switch (name.toLowerCase()) {
            case 'define':
                if (args[0]) {
                    state.defines.set(args[0], args[1] ?? true);
                    state.undefinedDefines.delete(args[0]);
                }
                break;
            case 'undefine':
                if (args[0]) {
                    state.defines.delete(args[0]);
                    state.undefinedDefines.add(args[0]);
                }
                break;
            case 'loadmodule': {
                if (args[0]) {
                    state.loadedModuleAliases.add(args[0].toLowerCase());
                }
                if (args[1]) {
                    state.loadedModuleAliases.add(basename(args[1]).toLowerCase());
                }
                const module = this.catalog.getModuleByIdentifier(args[0] ?? '')
                    ?? this.catalog.getModuleByFileName(args[1] ?? '');
                if (module) {
                    state.loadedModules.add(module.id);
                    this.updatePlatforms([module.id], state);
                    for (const requirement of state.modules.values()) {
                        if (requirement.providers.includes(module.id)) {
                            requirement.state = 'loaded';
                        }
                    }
                }
                break;
            }
            case 'serverroot':
                state.serverRoot = args[0];
                break;
        }
    }

    private recordRequirements(
        name: string,
        kind: DirectiveSpec['kind'],
        condition: Exclude<ConditionState, 'inactive'>,
        state: MutableRequirements
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
                state: providers.some(provider => state.loadedModules.has(provider))
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

interface MutableRequirements {
    conditions: Array<{ name: string; state: ConditionState }>;
    defines: Map<string, string | true>;
    loadedModules: Set<string>;
    loadedModuleAliases: Set<string>;
    minimumVersion: string;
    modules: Map<string, ModuleRequirement>;
    serverRoot?: string;
    targetPlatforms?: Set<TargetPlatform>;
    undefinedDefines: Set<string>;
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

function invalidateConditionallyChangedFacts(
    statements: readonly Statement[],
    state: MutableRequirements
): void {
    for (const statement of statements) {
        if (isDirective(statement)) {
            const name = statement.arguments[0];
            if (name && (statement.name.toLowerCase() === 'define' || statement.name.toLowerCase() === 'undefine')) {
                state.defines.delete(name);
                state.undefinedDefines.delete(name);
            } else if (statement.name.toLowerCase() === 'serverroot') {
                state.serverRoot = undefined;
            }
        } else if (isSection(statement)) {
            invalidateConditionallyChangedFacts(statement.statements, state);
        }
    }
}
