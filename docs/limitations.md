# Current Limitations

These limits apply to the 0.1.0 release candidate.

- The catalog is pinned to official Apache HTTP Server 2.4.68 documentation. Apache 2.2 and third-party module catalogs are not bundled.
- Static analysis does not execute HTTPD and cannot prove runtime module availability, request behavior, security, backend reachability, or deployment safety.
- Directive-specific argument validation is intentionally focused. Most official directives receive name, module, context, version, syntax, and documentation support but retain opaque arguments.
- `mod_rewrite`, `ap_expr`, authorization expressions, and request routing are not simulated.
- Absolute target-server paths are not read from the editor host. Relative Include paths are resolved within the configuration's local analysis base; explicit target-to-workspace path mapping is not yet supported.
- Unresolved shell variables, statically compiled modules, `IfVersion`, and other unavailable environment facts remain unknown rather than producing a false success or failure.
- Included files are limited to 1,000 occurrences and directory traversal is limited to 32 levels. Reaching either limit produces an incomplete-analysis warning.
- Included fragment diagnostics are linked to the root Include site. Occurrence context is preserved, but every diagnostic does not yet carry an inline related-location marker for the physical fragment.
- Effective merged configuration, broad refactoring, formatting, CLI publication, CI reporters, and Marketplace publication are deferred.
