import type { DirectiveSpec, ModuleSpec } from './types.js';

export class HttpdCatalog {
    readonly directives: readonly DirectiveSpec[];
    readonly modules: readonly ModuleSpec[];

    private readonly directivesByName = new Map<string, DirectiveSpec[]>();
    private readonly modulesById = new Map<string, ModuleSpec>();

    constructor(modules: readonly ModuleSpec[], directives: readonly DirectiveSpec[]) {
        this.modules = modules;
        this.directives = directives;

        for (const module of modules) {
            const key = normalizeName(module.id);
            if (this.modulesById.has(key)) {
                throw new Error(`Duplicate HTTPD module catalog entry: ${module.id}`);
            }
            this.modulesById.set(key, module);
        }

        for (const directive of directives) {
            for (const module of directive.modules) {
                if (!this.modulesById.has(normalizeName(module))) {
                    throw new Error(`Unknown module ${module} for directive ${directive.name}.`);
                }
            }

            const key = normalizeName(directive.name);
            const entries = this.directivesByName.get(key) ?? [];
            entries.push(directive);
            this.directivesByName.set(key, entries);
        }
    }

    getDirectives(name: string): readonly DirectiveSpec[] {
        return this.directivesByName.get(normalizeName(name)) ?? [];
    }

    getModule(id: string): ModuleSpec | undefined {
        return this.modulesById.get(normalizeName(id));
    }
}

function normalizeName(name: string): string {
    return name.toLowerCase();
}
