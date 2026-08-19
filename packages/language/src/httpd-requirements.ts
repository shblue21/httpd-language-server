import { apache24Catalog } from './catalog/apache-2.4.js';
import type { DirectiveSpec, HttpdCatalog } from './catalog/index.js';
import { isDirective, isSection, type HttpdDocument, type Statement } from './generated/ast.js';

export type ModuleRequirementState = 'loaded' | 'unknown';
export type ConditionState = 'active' | 'inactive' | 'unknown';

export interface ModuleRequirement {
    providers: readonly string[];
    state: ModuleRequirementState;
}

export interface HttpdRequirements {
    conditions: readonly { name: string; state: ConditionState }[];
    defines: ReadonlyMap<string, string | true>;
    loadedModules: ReadonlySet<string>;
    minimumVersion: string;
    modules: readonly ModuleRequirement[];
}

export class HttpdRequirementAnalyzer {
    constructor(private readonly catalog: HttpdCatalog = apache24Catalog) {}

    analyze(document: HttpdDocument): HttpdRequirements {
        const state: MutableRequirements = {
            conditions: [],
            defines: new Map(),
            loadedModules: new Set(['core']),
            minimumVersion: '2.4.0',
            modules: new Map()
        };
        this.visitStatements(document.statements, state, 'active');
        return {
            conditions: state.conditions,
            defines: state.defines,
            loadedModules: state.loadedModules,
            minimumVersion: state.minimumVersion,
            modules: [...state.modules.values()]
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
                this.recordRequirements(statement.name, 'directive', state);
            } else if (isSection(statement)) {
                this.recordRequirements(statement.open.name, 'section', state);
                const condition = this.evaluateCondition(
                    statement.open.name,
                    statement.open.arguments,
                    state
                );
                const effective = parentCondition === 'unknown' && condition !== 'inactive'
                    ? 'unknown'
                    : condition;
                if (isConditionalSection(statement.open.name)) {
                    state.conditions.push({ name: statement.open.name, state: effective });
                }
                if (effective !== 'inactive') {
                    this.visitStatements(statement.statements, state, effective);
                }
            }
        }
    }

    private evaluateCondition(
        name: string,
        args: readonly string[],
        state: MutableRequirements
    ): ConditionState {
        const argument = args[0] ?? '';
        const negated = argument.startsWith('!');
        const value = negated ? argument.slice(1) : argument;
        let knownTrue = false;

        switch (name.toLowerCase()) {
            case 'ifdefine':
                knownTrue = state.defines.has(value);
                break;
            case 'ifmodule': {
                const module = this.catalog.getModuleByIdentifier(value)
                    ?? this.catalog.getModuleByFileName(value);
                knownTrue = Boolean(module && state.loadedModules.has(module.id));
                break;
            }
            case 'ifversion':
                return 'unknown';
            default:
                return 'active';
        }

        if (!knownTrue) {
            return 'unknown';
        }
        return negated ? 'inactive' : 'active';
    }

    private updateFacts(name: string, args: readonly string[], state: MutableRequirements): void {
        switch (name.toLowerCase()) {
            case 'define':
                if (args[0]) {
                    state.defines.set(args[0], args[1] ?? true);
                }
                break;
            case 'undefine':
                if (args[0]) {
                    state.defines.delete(args[0]);
                }
                break;
            case 'loadmodule': {
                const module = this.catalog.getModuleByIdentifier(args[0] ?? '')
                    ?? this.catalog.getModuleByFileName(args[1] ?? '');
                if (module) {
                    state.loadedModules.add(module.id);
                }
                break;
            }
        }
    }

    private recordRequirements(
        name: string,
        kind: DirectiveSpec['kind'],
        state: MutableRequirements
    ): void {
        for (const directive of this.catalog.getDirectives(name).filter(entry => entry.kind === kind)) {
            if (directive.since && compareVersions(directive.since, state.minimumVersion) > 0) {
                state.minimumVersion = directive.since;
            }

            const providers = [...directive.modules].sort();
            const key = providers.join('|');
            const current = state.modules.get(key);
            const requirement: ModuleRequirement = {
                providers,
                state: providers.some(provider => state.loadedModules.has(provider))
                    ? 'loaded'
                    : 'unknown'
            };
            if (!current || current.state === 'loaded') {
                state.modules.set(key, requirement);
            }
        }
    }
}

interface MutableRequirements {
    conditions: Array<{ name: string; state: ConditionState }>;
    defines: Map<string, string | true>;
    loadedModules: Set<string>;
    minimumVersion: string;
    modules: Map<string, ModuleRequirement>;
}

function isConditionalSection(name: string): boolean {
    const normalized = name.toLowerCase();
    return normalized === 'ifdefine' || normalized === 'ifmodule' || normalized === 'ifversion';
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
