# Product Contract

Status: accepted design baseline, 2026-08-15.

## Product definition

HTTPD Language Server is a VS Code-first, runtime-free configuration compiler and language server for Apache HTTP Server configuration.

The user opens an HTTPD configuration file and receives useful language services immediately. The product does not require an installed HTTPD binary, a bundled HTTPD binary, a container, a setup wizard, or a project environment file.

The same semantic core may serve other clients later, but the first product surface is the VS Code extension. CLI product work and distribution are deferred.

## Non-negotiable principles

1. **Runtime-free product**: the distributed extension does not bundle, install, or execute HTTPD.
2. **Zero configuration**: users are not asked to describe their HTTPD environment before analysis begins.
3. **Configuration-derived requirements**: the compiler derives required modules, compatible versions, platform constraints, definitions, and file dependencies from the configuration.
4. **Platform-neutral language service**: the host OS running VS Code is not assumed to be the target server OS.
5. **VS Code first**: editing, navigation, diagnostics, completion, and hover take priority over CLI and CI surfaces.
6. **Preserve unknown syntax**: an unrecognized third-party directive must not prevent the rest of the document from being parsed and analyzed.
7. **No hidden guesses**: unknown environment facts remain unknown. They are not silently replaced with the host machine's environment.

## Initial compatibility scope

The first compatibility family is Apache HTTP Server 2.4.

- The shipped catalog describes official core and bundled 2.4 modules.
- Directive metadata records introduction, change, deprecation, and removal versions where known.
- The grammar must not hard-code 2.4 directive names as keywords, so older compatibility catalogs can be added without replacing the outer grammar.
- Apache HTTP Server 2.2 and older releases are deferred, but the catalog model must be capable of representing them.

The compiler is platform-neutral. Linux and Unix configurations may receive the earliest and largest test coverage, but Linux is not a product default and the editor host OS is never treated as the deployment target.

## File discovery

The VS Code extension activates automatically for:

- `httpd.conf`
- `apache2.conf`
- `.htaccess`

Files reached through `Include` and `IncludeOptional` are analyzed as part of the same logical configuration regardless of their filename extension.

The extension does not claim every `*.conf` file globally. A user can explicitly select the HTTPD language mode for an otherwise undiscovered standalone configuration fragment.

## Automatic requirement inference

The compiler calculates facts rather than asking the user to enter them.

### Modules

- `loaded`: observed through an active `LoadModule` statement.
- `required`: inferred from directives used by the configuration.
- `unknown`: load state cannot be proven, for example because a module may be statically compiled.

Absence of a `LoadModule` statement alone is not proof that a module is unavailable. In that case the editor reports a requirement, not a hard error.

### Versions

The compiler derives the compatible HTTPD version range from the directives and argument forms in use. It does not require the user to select a version before editing.

### Target platform

Common HTTPD semantics are analyzed without a target platform. Platform constraints are derived only when a directive, module, path form, or MPM introduces one. The local OS running the extension is not used as a target-platform assumption.

### Defines and conditionals

`Define`, environment substitutions, `IfDefine`, `IfModule`, and `IfVersion` contribute facts to the analysis. When a condition cannot be resolved, both possible branches remain represented rather than prompting the user for a value.

### `.htaccess`

When a parent server configuration is discoverable, `.htaccess` analysis uses its directory and override context. Otherwise the compiler reports the `AllowOverride` or `AllowOverrideList` capability required by the file instead of asking the user to configure a parent environment.

## Unknown and third-party directives

Unknown directives are parsed as ordinary directives with opaque arguments. They produce a non-fatal diagnostic and do not stop analysis of sibling statements, nested sections, or included files.

Third-party support is supplied through declarative module catalog data, not executable VS Code extensions or runtime plugins. Official and selected widely used third-party catalogs may be bundled with the product. Additional catalogs can be contributed to the repository.

## V0.1 product scope

V0.1 is complete when the VS Code extension provides:

- tolerant parsing with accurate source ranges;
- section pairing diagnostics;
- completion for official HTTPD 2.4 directives;
- official-documentation hover;
- basic argument-count and argument-shape validation;
- section-context validation;
- required-module and compatible-version inference;
- `Include` and `IncludeOptional` resolution;
- go-to-definition for included files; and
- useful diagnostics without any mandatory setup.

## Deferred product scope

The following are intentionally deferred beyond V0.1:

- CLI product development and publication;
- JSON and SARIF output;
- CI and GitHub Actions;
- formatting and broad refactoring;
- complete `mod_rewrite` execution;
- request-routing simulation;
- complete effective-configuration calculation;
- Apache HTTP Server 2.2 compatibility; and
- arbitrary external catalog installation.

## Success criterion

The core experience must remain:

> Open an HTTPD configuration in VS Code and receive immediate, source-linked analysis without installing HTTPD or describing the server environment first.
