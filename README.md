# HTTPD Language Server

A standalone, runtime-free language server and semantic compiler for Apache HTTP Server configuration.

The first release is a VS Code-first, zero-configuration authoring tool for Apache HTTP Server 2.4 configuration. It works without installing, bundling, or executing an HTTPD binary.

## Features

- tolerant HTTPD directives, sections, comments, quoting, and line continuation;
- completion filtered by server, virtual-host, directory, proxy, and `.htaccess` context;
- hover from the pinned official HTTPD 2.4.68 directive catalog;
- unknown directive, section, argument-count, focused argument-shape, and context diagnostics;
- automatic module, minimum-version, target-platform, `Define`, and `ServerRoot` facts;
- `Include` and `IncludeOptional` files, directories, and shell-style patterns;
- Include definition navigation, cycle detection, and occurrence-specific context;
- automatic language support for arbitrary-extension files discovered through Include; and
- conservative unknown results when runtime, target-host, or conditional facts cannot be proven.

## Design

- [Product contract](docs/product-contract.md)
- [Architecture](docs/architecture.md)
- [Implementation plan](docs/implementation-plan.md)
- [Current limitations](docs/limitations.md)

## Workspace

- `packages/language`: Langium grammar and HTTPD semantic core
- `packages/server`: editor-neutral Language Server Protocol entrypoint
- `packages/cli`: deferred command-line adapter scaffold
- `packages/vscode`: thin VS Code client and bundled server

Dependencies flow in one direction:

```text
server ──→ language
cli ─────→ language
vscode ──→ server
```

## Development

Requirements: Node.js 20.10 or newer and pnpm 10.

```bash
pnpm install
pnpm check
pnpm package:vscode
```

Generated Langium sources are intentionally excluded from version control. Every clean build runs `pnpm generate` before TypeScript compilation. The committed HTTPD catalog can be reproduced from a pinned Apache source checkout with:

```bash
pnpm catalog:generate -- --source /path/to/httpd-2.4.68
```

## Scope

The distributed product does not bundle or execute an HTTPD binary and does not require a project profile, environment manifest, or setup wizard. The CLI package remains a deferred scaffold and is not part of the first product release.

## License

Apache-2.0
