# HTTPD Language Server

A standalone, runtime-free language server and semantic compiler for Apache HTTP Server configuration.

This repository is in its initial scaffolding stage. The first vertical slice parses HTTPD configuration, preserves source locations, validates section pairing, and exposes the same language services to an LSP server, CLI, and VS Code extension.

## Workspace

- `packages/language`: Langium grammar and HTTPD semantic core
- `packages/server`: editor-neutral Language Server Protocol entrypoint
- `packages/cli`: command-line diagnostics and future JSON/SARIF reporters
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

The distributed product will not bundle or execute an HTTPD binary. Runtime comparison may be used only by maintainer conformance tests developed in later milestones.

## License

Apache-2.0
