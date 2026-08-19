import type { DirectiveSpec, ModuleSpec } from './types.js';

export class HttpdCatalog {
    readonly directives: readonly DirectiveSpec[];
    readonly modules: readonly ModuleSpec[];

    private readonly directivesByName = new Map<string, DirectiveSpec[]>();
    private readonly directiveIds = new Set<string>();
    private readonly modulesByFileName = new Map<string, ModuleSpec>();
    private readonly modulesById = new Map<string, ModuleSpec>();
    private readonly modulesByIdentifier = new Map<string, ModuleSpec>();
    private readonly modulesBySourceFile = new Map<string, ModuleSpec>();

    constructor(modules: readonly ModuleSpec[], directives: readonly DirectiveSpec[]) {
        this.modules = modules;
        this.directives = directives;

        for (const module of modules) {
            const key = normalizeName(module.id);
            if (this.modulesById.has(key)) {
                throw new Error(`Duplicate HTTPD module catalog entry: ${module.id}`);
            }
            this.modulesById.set(key, module);
            for (const identifier of module.identifiers) {
                this.addModuleAlias(this.modulesByIdentifier, identifier, module, 'identifier');
            }
            for (const fileName of module.fileNames) {
                this.addModuleAlias(this.modulesByFileName, basename(fileName), module, 'file name');
            }
            if (module.sourceFile) {
                this.addModuleAlias(this.modulesBySourceFile, module.sourceFile, module, 'source file');
            }
        }

        for (const directive of directives) {
            if (this.directiveIds.has(directive.id)) {
                throw new Error(`Duplicate HTTPD directive catalog entry: ${directive.id}`);
            }
            this.directiveIds.add(directive.id);

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

    getModuleByIdentifier(identifier: string): ModuleSpec | undefined {
        return this.modulesByIdentifier.get(normalizeName(identifier))
            ?? this.modulesBySourceFile.get(normalizeName(basename(identifier)));
    }

    getModuleByFileName(fileName: string): ModuleSpec | undefined {
        return this.modulesByFileName.get(normalizeName(basename(fileName)));
    }

    private addModuleAlias(
        aliases: Map<string, ModuleSpec>,
        alias: string,
        module: ModuleSpec,
        kind: string
    ): void {
        const key = normalizeName(alias);
        const existing = aliases.get(key);
        if (existing && existing.id !== module.id) {
            throw new Error(`Duplicate HTTPD module ${kind} ${alias}: ${existing.id}, ${module.id}.`);
        }
        aliases.set(key, module);
    }
}

function normalizeName(name: string): string {
    return name.toLowerCase();
}

function basename(path: string): string {
    return path.split(/[\\/]/).at(-1) ?? path;
}
