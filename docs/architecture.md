# Architecture

Status: accepted architecture baseline, 2026-08-15.

## System boundaries

The product consists of a language-neutral delivery surface around a shared HTTPD semantic core.

```text
HTTPD source files
        |
        v
Langium CST and physical AST
        |
        v
Include occurrence graph
        |
        v
Configuration IR
        |
        v
Requirement and semantic analysis
        |
        +--> diagnostics
        +--> completion and hover
        +--> navigation
        +--> future code actions
```

Langium owns tolerant parsing, source ranges, document lifecycle, and Language Server Protocol integration. It does not by itself represent the expanded or effective meaning of an HTTPD configuration.

## Package boundaries

```text
packages/language  Langium grammar, catalog, workspace model, semantic compiler
packages/server    Editor-neutral LSP process adapter
packages/vscode    VS Code client and packaged server
packages/cli       Deferred adapter scaffold
```

Dependency direction remains one-way:

```text
server --> language
cli ----> language
vscode --> server
```

Semantic logic must not be implemented in `packages/vscode`, `packages/server`, or `packages/cli`.

## Outer grammar strategy

The outer grammar is deliberately permissive and stable.

- A directive is a name followed by arguments.
- A section is an opening tag, a statement body, and a matching closing tag.
- Comments, quoting, line continuation, and recovery preserve accurate source ranges.
- Official directive names are not grammar keywords.
- Unknown and future directives remain representable.

Directive-specific argument languages are attached after outer parsing. Examples include:

- `Require` authorization expressions;
- `ProxyPass` targets and options;
- `LogFormat` format strings;
- `RewriteCond` and `RewriteRule` expressions and flags; and
- `<If>` and related `ap_expr` sections.

These embedded parsers can be introduced incrementally without changing the generic document structure.

## Physical documents and logical occurrences

A physical file is parsed once into a source-preserving AST. It is not moved underneath an including AST node.

An include creates a logical occurrence:

```ts
interface IncludeOccurrence {
    sourceUri: string;
    includeSite: SourceRange;
    targetUri: string;
    inheritedContext: SemanticContext;
    order: number;
    condition: ConditionState;
}
```

The same physical file may have multiple occurrences with different inherited sections, conditions, and ordering. Syntax diagnostics belong to the physical document. Context-dependent semantic diagnostics belong to an occurrence and retain related locations back to the include site.

The occurrence graph, not Langium's AST parent relation, is the basis of expanded configuration analysis.

## Configuration IR

The semantic compiler lowers physical AST nodes and include occurrences into an HTTPD-specific intermediate representation. The IR records at least:

- source URI and source range;
- physical statement identity;
- logical occurrence identity;
- statement order;
- active section context;
- conditional state;
- directive catalog identity, when known;
- parsed or opaque argument representation;
- required module and version facts; and
- references to definitions, files, and named symbols.

The IR is independent of VS Code and LSP types. It is the future foundation for effective-configuration and request-behavior analysis.

## Module and directive catalog

The catalog is declarative data generated from authoritative documentation where possible and corrected by reviewed overrides where necessary.

```ts
interface ModuleSpec {
    id: string;
    identifiers: string[];
    fileNames: string[];
    bundled: boolean;
    dependencies: string[];
    since?: string;
    until?: string;
    documentation?: string;
}

interface DirectiveSpec {
    name: string;
    module: string;
    contexts: DirectiveContext[];
    argumentGrammar: ArgumentGrammarRef;
    since?: string;
    until?: string;
    changedIn?: string[];
    deprecatedIn?: string;
    removedIn?: string;
    documentation: string;
}
```

The precise TypeScript types may evolve during implementation, but the separation between module identity, load filename aliases, directive metadata, and semantic argument rules is required.

`LoadModule proxy_module modules/mod_proxy.so` contributes both the Apache module identifier (`proxy_module`) and the file alias (`mod_proxy.so`). Filename matching alone is not used as module identity.

### Catalog layout

The intended logical layout is:

```text
catalog/
  apache-2.4/
    core
    bundled modules
  third-party/
    selected declarative module catalogs
  overrides/
    reviewed corrections to generated metadata
```

Catalog packs are internal declarative datasets. They are not VS Code extensions and cannot execute code.

## Module-state analysis

The analyzer tracks module facts rather than assuming a distro default.

```text
LOADED    proven by active configuration
REQUIRED  implied by a directive or argument form
UNKNOWN   actual availability cannot be proven
```

Bundled does not mean loaded. A missing `LoadModule` is not enough to emit a missing-module error because the module may be statically compiled. A contradiction proven by the configuration can produce an error; an unproven load state produces a requirement or informational diagnostic.

## Version analysis

Every recognized directive and version-sensitive argument form contributes a compatibility constraint. The compiler intersects these constraints and reports the resulting supported range or a contradiction.

Version behavior belongs in catalog and semantic data, not in outer grammar alternatives. This permits future 2.2 support without replacing the parser.

## Platform handling

The architecture distinguishes:

- **host platform**: where VS Code and the LSP access files; and
- **target platform**: where the HTTPD configuration is intended to run.

Host-platform differences are isolated in URI and filesystem services. Target-platform facts are derived from configuration constructs. The target platform defaults to unknown, not to the host platform.

## VS Code behavior

The VS Code package is a thin client.

- It activates for the agreed root filenames and explicit language selection.
- It does not implement HTTPD semantics.
- It sends document and workspace events to the server.
- It renders diagnostics, completion, hover, navigation, and future code actions returned by the server.
- It does not require or prompt for an environment profile.

The language server discovers additional documents through the include graph rather than claiming every `*.conf` file in the workspace.

## Runtime boundary

Production code does not execute HTTPD. Maintainer-only conformance tests may compare analysis results with official HTTPD behavior in controlled test infrastructure, but no runtime binary, container, or subprocess is part of the distributed product or normal editing workflow.
