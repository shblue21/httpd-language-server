# HTTPD Language Server

A standalone, runtime-free language server and semantic compiler for Apache HTTP Server configuration.

This repository is in its initial scaffolding stage. The first vertical slice parses HTTPD configuration, preserves source locations, validates section pairing, and exposes the language services through an LSP server and VS Code extension.

The first product target is the VS Code extension. The CLI package is scaffolded but its product development and distribution are deferred.

## Design

- [Product contract](docs/product-contract.md)
- [Architecture](docs/architecture.md)
- [Implementation plan](docs/implementation-plan.md)

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
pnpm cli -- check examples/httpd.conf
```

Generated Langium sources and editor grammars are intentionally excluded from version control. Every clean build runs `pnpm generate` before TypeScript compilation.

## Scope

The distributed product will not bundle or execute an HTTPD binary. It will not require a project profile or environment manifest. It derives configuration requirements from the configuration itself. Runtime comparison may be used only by maintainer conformance tests developed in later milestones.

## License

Apache-2.0
