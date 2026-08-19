export type DirectiveKind = 'directive' | 'section';
export type TargetPlatform = 'unix' | 'windows';

export type DirectiveContext =
    | 'server'
    | 'virtual-host'
    | 'directory'
    | 'htaccess'
    | 'proxy';

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
    sourceFile?: string;
    platforms?: readonly TargetPlatform[];
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
    id: string;
    owner: string;
    name: string;
    kind: DirectiveKind;
    modules: readonly string[];
    contexts: readonly DirectiveContext[];
    override: readonly string[];
    status: string;
    description: string;
    syntax: string;
    default?: string;
    compatibility?: string;
    documentation: string;
    arguments?: ArgumentCount;
}
