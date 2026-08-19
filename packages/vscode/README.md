# HTTPD Language Support

Runtime-free language support for Apache HTTP Server 2.4 configuration.

## Highlights

- context-aware directive and section completion;
- official HTTPD 2.4.68 documentation hover;
- module, version, platform, context, and focused argument diagnostics;
- section pairing and incomplete-edit recovery;
- Include/IncludeOptional glob, cycle, and missing-target analysis;
- go to included files, including arbitrary-extension fragments; and
- no HTTPD installation, project profile, or setup wizard.

The extension activates automatically for `httpd.conf`, `apache2.conf`, and `.htaccess`. Other files are analyzed only when explicitly assigned the HTTPD language or discovered through Include, so unrelated `.conf` files are not claimed.

See the repository's current limitations before treating static analysis as a replacement for target-host integration tests.
