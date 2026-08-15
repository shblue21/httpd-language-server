# Implementation Plan

Status: initial VS Code-first plan, 2026-08-15.

## Delivery strategy

Implementation proceeds as vertical slices through the VS Code extension. Each milestone must add a user-visible editor capability backed by tests in `packages/language`.

The CLI package remains buildable but receives no product features during V0.1.

## Milestone 1: outer language foundation

Goal: a loss-aware, editing-tolerant representation of HTTPD files.

- Make directive names case-insensitive semantically.
- Support line continuation and HTTPD quoting rules.
- Preserve comments and accurate source ranges.
- Recover from incomplete directives and sections during editing.
- Validate section pairing without losing the rest of the document.
- Add corpus tests for root configs, fragments, and `.htaccess` files.

Exit criteria:

- incomplete edits do not crash or erase the surrounding AST;
- source ranges identify the exact directive, argument, or section tag; and
- existing simple vertical-slice tests continue to pass.

## Milestone 2: catalog foundation

Goal: represent the official HTTPD 2.4 directive surface without enumerating it in the grammar.

- Define `ModuleSpec`, `DirectiveSpec`, context, version, and argument-shape types.
- Build a generator for official structured documentation.
- Add reviewed overrides for metadata that cannot be generated reliably.
- Include all official core and bundled module names and directives.
- Map Apache module identifiers, human module names, and common load filenames.
- Add catalog validation and snapshot tests.

Exit criteria:

- every generated directive resolves to a module and documentation source;
- duplicate and contradictory catalog entries fail the build; and
- catalog updates are reproducible.

## Milestone 3: editor intelligence

Goal: replace the current demonstration validators with catalog-backed language services.

- Context-aware directive completion.
- Documentation hover with module and version provenance.
- Unknown-directive diagnostics that do not stop analysis.
- Basic argument-count and argument-shape diagnostics.
- Section-context validation.
- Required-module inference.
- Compatible-version inference.

Exit criteria:

- opening a recognized HTTPD file produces useful completion with no setup;
- hover explains where a directive comes from and where it is valid; and
- diagnostics distinguish proven errors from unproven environment requirements.

## Milestone 4: workspace and include graph

Goal: analyze a logical configuration spanning multiple physical files.

- Discover roots from `httpd.conf`, `apache2.conf`, `.htaccess`, and explicit language selection.
- Parse `Include` and `IncludeOptional` targets.
- Resolve relative paths from configuration facts rather than the host OS layout.
- Expand globs within safely accessible workspace files.
- Detect cycles and missing required includes.
- Create occurrence-specific context and ordering.
- Add go-to-definition for include targets.
- Analyze included files regardless of filename extension.

Exit criteria:

- the same file can be included from multiple contexts without corrupting its physical AST;
- context diagnostics point to both the included statement and include site; and
- the extension does not claim unrelated `*.conf` files.

## Milestone 5: conditions and zero-config inference

Goal: build an environment requirement model entirely from configuration facts.

- Track `LoadModule`, `ServerRoot`, and `Define`.
- Model `IfModule`, `IfDefine`, and `IfVersion` as resolved or multi-branch conditions.
- Distinguish loaded, required, and unknown module states.
- Infer target-platform constraints without using the host OS as a default.
- Report `.htaccess` override requirements when parent context is unavailable.

Exit criteria:

- no project profile or setup wizard is required;
- unresolved conditions preserve both branches; and
- absence of `LoadModule` alone never produces a false missing-module error.

## Milestone 6: focused embedded languages

Goal: deepen analysis for high-value directives without destabilizing the outer grammar.

Suggested order:

1. `Require` and authorization forms;
2. proxy targets and named workers;
3. `LogFormat` and format nicknames;
4. `ap_expr` syntax; and
5. `RewriteCond` and `RewriteRule` syntax, references, and flags.

Behavior simulation is not part of this milestone. Each embedded parser first provides syntax, local references, completion, and diagnostics.

## V0.1 release gate

V0.1 requires Milestones 1 through 5 and the product behaviors listed in the product contract.

Before release:

- build and test from a clean checkout;
- package and install the VSIX in a clean VS Code test environment;
- exercise recognized roots and included fragments;
- verify that the extension works without HTTPD installed;
- verify Windows, macOS, and Linux host filesystem behavior;
- verify no mandatory settings, project manifest, or setup prompt exists; and
- document unsupported and partially supported semantic areas.

## Deferred roadmap

After V0.1 and only when the editor workflow is stable:

- broader embedded directive grammars;
- effective configuration computation;
- request and rewrite behavior analysis;
- formatting and semantic refactoring;
- Apache HTTP Server 2.2 compatibility catalogs;
- external third-party catalog distribution;
- CLI, CI, JSON, and SARIF surfaces.
