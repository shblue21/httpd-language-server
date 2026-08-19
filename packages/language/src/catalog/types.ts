export type DirectiveKind = 'directive' | 'section';

export type DirectiveContext =
    | 'server'
    | 'virtual-host'
    | 'directory'
    | 'htaccess';

export interface VersionMetadata {
    since?: string;
    until?: string;
    changedIn?: readonly string[];
    deprecatedIn?: string;
    removedIn?: string;
}

export interface ModuleSpec extends VersionMetadata {
    id: string;
    identifiers: readonly string[];
    fileNames: readonly string[];
    status: string;
    bundled: boolean;
    dependencies: readonly string[];
    description: string;
    compatibility?: string;
    documentation: string;
}

export interface ArgumentCount {
    min: number;
    max?: number;
}

export interface DirectiveSpec extends VersionMetadata {
    name: string;
    kind: DirectiveKind;
    modules: readonly string[];
    contexts: readonly DirectiveContext[];
    override: readonly string[];
    description: string;
    syntax: string;
    default?: string;
    compatibility?: string;
    documentation: string;
    arguments?: ArgumentCount;
}
