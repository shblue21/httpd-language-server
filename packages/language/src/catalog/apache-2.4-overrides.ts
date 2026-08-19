import type { DirectiveSpec, ModuleSpec } from './types.js';

type ModuleOverride = Partial<Omit<ModuleSpec, 'id'>>;
type DirectiveOverride = Partial<Omit<DirectiveSpec, 'id' | 'owner' | 'name'>>;

export const APACHE_2_4_MODULE_OVERRIDES: Readonly<Record<string, ModuleOverride>> = {
    event: { fileNames: ['mod_mpm_event.so', 'mod_mpm_event.dll'] },
    mpm_winnt: { fileNames: ['mod_mpm_winnt.so', 'mod_mpm_winnt.dll'] },
    prefork: { fileNames: ['mod_mpm_prefork.so', 'mod_mpm_prefork.dll'] },
    worker: { fileNames: ['mod_mpm_worker.so', 'mod_mpm_worker.dll'] }
};

export const APACHE_2_4_DIRECTIVE_OVERRIDES: Readonly<Record<string, DirectiveOverride>> = {
    'core:directive:define': { arguments: { min: 1, max: 2 } },
    'core:directive:include': { arguments: { min: 1, max: 1 } },
    'core:directive:includeoptional': { arguments: { min: 1, max: 1 } },
    'core:directive:serverroot': { arguments: { min: 1, max: 1 } },
    'core:directive:undefine': { arguments: { min: 1, max: 1 } },
    'core:section:ifdefine': { arguments: { min: 1, max: 1 } },
    'core:section:ifmodule': { arguments: { min: 1, max: 1 } },
    'mod_so:directive:loadmodule': { arguments: { min: 2, max: 2 } },
    'mod_version:section:ifversion': { arguments: { min: 1, max: 2 } }
};
