import { apache24Catalog } from './catalog/apache-2.4.js';
import type { HttpdCatalog } from './catalog/catalog.js';

export type ConditionState = 'active' | 'inactive' | 'unknown';

export interface ConditionFacts {
    defines: ReadonlyMap<string, string | true>;
    loadedModuleAliases?: ReadonlySet<string>;
    loadedModules: ReadonlySet<string>;
    undefinedDefines?: ReadonlySet<string>;
}

export function evaluateCondition(
    name: string,
    args: readonly string[],
    facts: ConditionFacts,
    catalog: HttpdCatalog = apache24Catalog
): ConditionState {
    const argument = args[0] ?? '';
    const negated = argument.startsWith('!');
    const value = negated ? argument.slice(1) : argument;
    let truth: 'true' | 'false' | 'unknown' = 'unknown';

    switch (name.toLowerCase()) {
        case 'ifdefine':
            if (facts.defines.has(value)) {
                truth = 'true';
            } else if (facts.undefinedDefines?.has(value)) {
                truth = 'false';
            }
            break;
        case 'ifmodule': {
            if (facts.loadedModuleAliases?.has(value.toLowerCase())) {
                truth = 'true';
                break;
            }
            const module = catalog.getModuleByIdentifier(value)
                ?? catalog.getModuleByFileName(value);
            if (module && facts.loadedModules.has(module.id)) {
                truth = 'true';
            }
            break;
        }
        case 'ifversion':
            return 'unknown';
        default:
            return 'active';
    }

    if (truth === 'unknown') {
        return 'unknown';
    }
    const active = truth === 'true';
    return negated === active ? 'inactive' : 'active';
}

export function isConditionalSection(name: string): boolean {
    const normalized = name.toLowerCase();
    return normalized === 'ifdefine' || normalized === 'ifmodule' || normalized === 'ifversion';
}
