/*
 * Generated from Apache HTTP Server 2.4.68 documentation.
 * Source commit: 736bb657405eb73fd68a64772c3a908807bdb887
 * Source license: Apache-2.0
 * DO NOT EDIT. Run pnpm catalog:generate -- --source <httpd-checkout>.
 */
import type { DirectiveSpec, ModuleSpec } from './types.js';

export const APACHE_2_4_CATALOG_SOURCE = {
    "tag": "2.4.68",
    "commit": "736bb657405eb73fd68a64772c3a908807bdb887",
    "moduleCount": 132,
    "directiveCount": 730,
    "referenceCount": 91
} as const;

export const APACHE_2_4_MODULES: readonly ModuleSpec[] = [
    {
        "id": "core",
        "identifiers": [],
        "fileNames": [],
        "status": "Core",
        "bundled": true,
        "dependencies": [],
        "description": "Core Apache HTTP Server features that are always available",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html"
    },
    {
        "id": "event",
        "identifiers": [
            "mpm_event_module"
        ],
        "fileNames": [],
        "sourceFile": "event.c",
        "status": "MPM",
        "bundled": true,
        "dependencies": [],
        "description": "A variant of the worker MPM with the goal of consuming threads only for connections with active processing",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/event.html"
    },
    {
        "id": "mod_access_compat",
        "identifiers": [
            "access_compat_module"
        ],
        "fileNames": [
            "mod_access_compat.so",
            "mod_access_compat.dll"
        ],
        "sourceFile": "mod_access_compat.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Group authorizations based on host (name or IP address)",
        "compatibility": "Available in Apache HTTP Server 2.3 as a compatibility module with previous versions of Apache httpd 2.x. The directives provided by this module have been deprecated by the new authz refactoring. Please see mod_authz_host",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_access_compat.html"
    },
    {
        "id": "mod_actions",
        "identifiers": [
            "actions_module"
        ],
        "fileNames": [
            "mod_actions.so",
            "mod_actions.dll"
        ],
        "sourceFile": "mod_actions.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Execute CGI scripts based on media type or request method.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_actions.html"
    },
    {
        "id": "mod_alias",
        "identifiers": [
            "alias_module"
        ],
        "fileNames": [
            "mod_alias.so",
            "mod_alias.dll"
        ],
        "sourceFile": "mod_alias.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Provides for mapping different parts of the host filesystem in the document tree and for URL redirection",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_alias.html"
    },
    {
        "id": "mod_allowmethods",
        "identifiers": [
            "allowmethods_module"
        ],
        "fileNames": [
            "mod_allowmethods.so",
            "mod_allowmethods.dll"
        ],
        "sourceFile": "mod_allowmethods.c",
        "status": "Experimental",
        "bundled": true,
        "dependencies": [],
        "description": "Easily restrict what HTTP methods can be used on the server",
        "compatibility": "Available in Apache 2.3 and later",
        "since": "2.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_allowmethods.html"
    },
    {
        "id": "mod_asis",
        "identifiers": [
            "asis_module"
        ],
        "fileNames": [
            "mod_asis.so",
            "mod_asis.dll"
        ],
        "sourceFile": "mod_asis.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Sends files that contain their own HTTP headers",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_asis.html"
    },
    {
        "id": "mod_auth_basic",
        "identifiers": [
            "auth_basic_module"
        ],
        "fileNames": [
            "mod_auth_basic.so",
            "mod_auth_basic.dll"
        ],
        "sourceFile": "mod_auth_basic.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Basic HTTP authentication",
        "compatibility": "Available in Apache 2.1 and later",
        "since": "2.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_basic.html"
    },
    {
        "id": "mod_auth_digest",
        "identifiers": [
            "auth_digest_module"
        ],
        "fileNames": [
            "mod_auth_digest.so",
            "mod_auth_digest.dll"
        ],
        "sourceFile": "mod_auth_digest.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "User authentication using MD5 Digest Authentication",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_digest.html"
    },
    {
        "id": "mod_auth_form",
        "identifiers": [
            "auth_form_module"
        ],
        "fileNames": [
            "mod_auth_form.so",
            "mod_auth_form.dll"
        ],
        "sourceFile": "mod_auth_form.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Form authentication",
        "compatibility": "Available in Apache 2.3 and later",
        "since": "2.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_form.html"
    },
    {
        "id": "mod_authn_anon",
        "identifiers": [
            "authn_anon_module"
        ],
        "fileNames": [
            "mod_authn_anon.so",
            "mod_authn_anon.dll"
        ],
        "sourceFile": "mod_authn_anon.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Allows \"anonymous\" user access to authenticated areas",
        "compatibility": "Available in Apache 2.1 and later",
        "since": "2.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_anon.html"
    },
    {
        "id": "mod_authn_core",
        "identifiers": [
            "authn_core_module"
        ],
        "fileNames": [
            "mod_authn_core.so",
            "mod_authn_core.dll"
        ],
        "sourceFile": "mod_authn_core.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Core Authentication",
        "compatibility": "Available in Apache 2.3 and later",
        "since": "2.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_core.html"
    },
    {
        "id": "mod_authn_dbd",
        "identifiers": [
            "authn_dbd_module"
        ],
        "fileNames": [
            "mod_authn_dbd.so",
            "mod_authn_dbd.dll"
        ],
        "sourceFile": "mod_authn_dbd.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "User authentication using an SQL database",
        "compatibility": "Available in Apache 2.1 and later",
        "since": "2.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_dbd.html"
    },
    {
        "id": "mod_authn_dbm",
        "identifiers": [
            "authn_dbm_module"
        ],
        "fileNames": [
            "mod_authn_dbm.so",
            "mod_authn_dbm.dll"
        ],
        "sourceFile": "mod_authn_dbm.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "User authentication using DBM files",
        "compatibility": "Available in Apache 2.1 and later",
        "since": "2.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_dbm.html"
    },
    {
        "id": "mod_authn_file",
        "identifiers": [
            "authn_file_module"
        ],
        "fileNames": [
            "mod_authn_file.so",
            "mod_authn_file.dll"
        ],
        "sourceFile": "mod_authn_file.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "User authentication using text files",
        "compatibility": "Available in Apache 2.1 and later",
        "since": "2.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_file.html"
    },
    {
        "id": "mod_authn_socache",
        "identifiers": [
            "authn_socache_module"
        ],
        "fileNames": [
            "mod_authn_socache.so",
            "mod_authn_socache.dll"
        ],
        "sourceFile": "mod_authn_socache.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Manages a cache of authentication credentials to relieve the load on backends",
        "compatibility": "Version 2.3 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_socache.html"
    },
    {
        "id": "mod_authnz_fcgi",
        "identifiers": [
            "authnz_fcgi_module"
        ],
        "fileNames": [
            "mod_authnz_fcgi.so",
            "mod_authnz_fcgi.dll"
        ],
        "sourceFile": "mod_authnz_fcgi.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Allows a FastCGI authorizer application to handle Apache httpd authentication and authorization",
        "compatibility": "Available in version 2.4.10 and later",
        "since": "2.4.10",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_fcgi.html"
    },
    {
        "id": "mod_authnz_ldap",
        "identifiers": [
            "authnz_ldap_module"
        ],
        "fileNames": [
            "mod_authnz_ldap.so",
            "mod_authnz_ldap.dll"
        ],
        "sourceFile": "mod_authnz_ldap.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Allows an LDAP directory to be used to store the database for HTTP Basic authentication.",
        "compatibility": "Available in version 2.1 and later",
        "since": "2.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_ldap.html"
    },
    {
        "id": "mod_authz_core",
        "identifiers": [
            "authz_core_module"
        ],
        "fileNames": [
            "mod_authz_core.so",
            "mod_authz_core.dll"
        ],
        "sourceFile": "mod_authz_core.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Core Authorization",
        "compatibility": "Available in Apache HTTPD 2.3 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html"
    },
    {
        "id": "mod_authz_dbd",
        "identifiers": [
            "authz_dbd_module"
        ],
        "fileNames": [
            "mod_authz_dbd.so",
            "mod_authz_dbd.dll"
        ],
        "sourceFile": "mod_authz_dbd.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Group Authorization and Login using SQL",
        "compatibility": "Available in Apache 2.4 and later",
        "since": "2.4",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authz_dbd.html"
    },
    {
        "id": "mod_authz_dbm",
        "identifiers": [
            "authz_dbm_module"
        ],
        "fileNames": [
            "mod_authz_dbm.so",
            "mod_authz_dbm.dll"
        ],
        "sourceFile": "mod_authz_dbm.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Group authorization using DBM files",
        "compatibility": "Available in Apache 2.1 and later",
        "since": "2.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authz_dbm.html"
    },
    {
        "id": "mod_authz_groupfile",
        "identifiers": [
            "authz_groupfile_module"
        ],
        "fileNames": [
            "mod_authz_groupfile.so",
            "mod_authz_groupfile.dll"
        ],
        "sourceFile": "mod_authz_groupfile.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Group authorization using plaintext files",
        "compatibility": "Available in Apache 2.1 and later",
        "since": "2.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authz_groupfile.html"
    },
    {
        "id": "mod_authz_host",
        "identifiers": [
            "authz_host_module"
        ],
        "fileNames": [
            "mod_authz_host.so",
            "mod_authz_host.dll"
        ],
        "sourceFile": "mod_authz_host.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Group authorizations based on host (name or IP address)",
        "compatibility": "The forward-dns provider was added in 2.4.19",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authz_host.html"
    },
    {
        "id": "mod_authz_owner",
        "identifiers": [
            "authz_owner_module"
        ],
        "fileNames": [
            "mod_authz_owner.so",
            "mod_authz_owner.dll"
        ],
        "sourceFile": "mod_authz_owner.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Authorization based on file ownership",
        "compatibility": "Available in Apache 2.1 and later",
        "since": "2.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authz_owner.html"
    },
    {
        "id": "mod_authz_user",
        "identifiers": [
            "authz_user_module"
        ],
        "fileNames": [
            "mod_authz_user.so",
            "mod_authz_user.dll"
        ],
        "sourceFile": "mod_authz_user.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "User Authorization",
        "compatibility": "Available in Apache 2.1 and later",
        "since": "2.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authz_user.html"
    },
    {
        "id": "mod_autoindex",
        "identifiers": [
            "autoindex_module"
        ],
        "fileNames": [
            "mod_autoindex.so",
            "mod_autoindex.dll"
        ],
        "sourceFile": "mod_autoindex.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Generates directory indexes, automatically, similar to the Unix ls command or the Win32 dir shell command",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_autoindex.html"
    },
    {
        "id": "mod_brotli",
        "identifiers": [
            "brotli_module"
        ],
        "fileNames": [
            "mod_brotli.so",
            "mod_brotli.dll"
        ],
        "sourceFile": "mod_brotli.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Compress content via Brotli before it is delivered to the client",
        "compatibility": "Available in version 2.4.26 and later.",
        "since": "2.4.26",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_brotli.html"
    },
    {
        "id": "mod_buffer",
        "identifiers": [
            "buffer_module"
        ],
        "fileNames": [
            "mod_buffer.so",
            "mod_buffer.dll"
        ],
        "sourceFile": "mod_buffer.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Support for request buffering",
        "compatibility": "Available in Apache 2.3 and later",
        "since": "2.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_buffer.html"
    },
    {
        "id": "mod_cache",
        "identifiers": [
            "cache_module"
        ],
        "fileNames": [
            "mod_cache.so",
            "mod_cache.dll"
        ],
        "sourceFile": "mod_cache.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "RFC 2616 compliant HTTP caching filter.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html"
    },
    {
        "id": "mod_cache_disk",
        "identifiers": [
            "cache_disk_module"
        ],
        "fileNames": [
            "mod_cache_disk.so",
            "mod_cache_disk.dll"
        ],
        "sourceFile": "mod_cache_disk.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Disk based storage module for the HTTP caching filter.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache_disk.html"
    },
    {
        "id": "mod_cache_socache",
        "identifiers": [
            "cache_socache_module"
        ],
        "fileNames": [
            "mod_cache_socache.so",
            "mod_cache_socache.dll"
        ],
        "sourceFile": "mod_cache_socache.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Shared object cache (socache) based storage module for the HTTP caching filter.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache_socache.html"
    },
    {
        "id": "mod_cern_meta",
        "identifiers": [
            "cern_meta_module"
        ],
        "fileNames": [
            "mod_cern_meta.so",
            "mod_cern_meta.dll"
        ],
        "sourceFile": "mod_cern_meta.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "CERN httpd metafile semantics",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cern_meta.html"
    },
    {
        "id": "mod_cgi",
        "identifiers": [
            "cgi_module"
        ],
        "fileNames": [
            "mod_cgi.so",
            "mod_cgi.dll"
        ],
        "sourceFile": "mod_cgi.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Execution of CGI scripts",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cgi.html"
    },
    {
        "id": "mod_cgid",
        "identifiers": [
            "cgid_module"
        ],
        "fileNames": [
            "mod_cgid.so",
            "mod_cgid.dll"
        ],
        "sourceFile": "mod_cgid.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Execution of CGI scripts using an external CGI daemon",
        "compatibility": "Unix threaded MPMs only",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cgid.html"
    },
    {
        "id": "mod_charset_lite",
        "identifiers": [
            "charset_lite_module"
        ],
        "fileNames": [
            "mod_charset_lite.so",
            "mod_charset_lite.dll"
        ],
        "sourceFile": "mod_charset_lite.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Specify character set translation or recoding",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_charset_lite.html"
    },
    {
        "id": "mod_data",
        "identifiers": [
            "data_module"
        ],
        "fileNames": [
            "mod_data.so",
            "mod_data.dll"
        ],
        "sourceFile": "mod_data.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Convert response body into an RFC2397 data URL",
        "compatibility": "Available in Apache 2.3 and later",
        "since": "2.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_data.html"
    },
    {
        "id": "mod_dav",
        "identifiers": [
            "dav_module"
        ],
        "fileNames": [
            "mod_dav.so",
            "mod_dav.dll"
        ],
        "sourceFile": "mod_dav.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Distributed Authoring and Versioning (WebDAV) functionality",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dav.html"
    },
    {
        "id": "mod_dav_fs",
        "identifiers": [
            "dav_fs_module"
        ],
        "fileNames": [
            "mod_dav_fs.so",
            "mod_dav_fs.dll"
        ],
        "sourceFile": "mod_dav_fs.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Filesystem provider for mod_dav",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dav_fs.html"
    },
    {
        "id": "mod_dav_lock",
        "identifiers": [
            "dav_lock_module"
        ],
        "fileNames": [
            "mod_dav_lock.so",
            "mod_dav_lock.dll"
        ],
        "sourceFile": "mod_dav_lock.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Generic locking module for mod_dav",
        "compatibility": "Available in version 2.1 and later",
        "since": "2.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dav_lock.html"
    },
    {
        "id": "mod_dbd",
        "identifiers": [
            "dbd_module"
        ],
        "fileNames": [
            "mod_dbd.so",
            "mod_dbd.dll"
        ],
        "sourceFile": "mod_dbd.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Manages SQL database connections",
        "compatibility": "Version 2.1 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dbd.html"
    },
    {
        "id": "mod_deflate",
        "identifiers": [
            "deflate_module"
        ],
        "fileNames": [
            "mod_deflate.so",
            "mod_deflate.dll"
        ],
        "sourceFile": "mod_deflate.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Compress content before it is delivered to the client",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_deflate.html"
    },
    {
        "id": "mod_dialup",
        "identifiers": [
            "dialup_module"
        ],
        "fileNames": [
            "mod_dialup.so",
            "mod_dialup.dll"
        ],
        "sourceFile": "mod_dialup.c",
        "status": "Experimental",
        "bundled": true,
        "dependencies": [],
        "description": "Send static content at a bandwidth rate limit, defined by the various old modem standards",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dialup.html"
    },
    {
        "id": "mod_dir",
        "identifiers": [
            "dir_module"
        ],
        "fileNames": [
            "mod_dir.so",
            "mod_dir.dll"
        ],
        "sourceFile": "mod_dir.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Provides for \"trailing slash\" redirects and serving directory index files",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dir.html"
    },
    {
        "id": "mod_dumpio",
        "identifiers": [
            "dumpio_module"
        ],
        "fileNames": [
            "mod_dumpio.so",
            "mod_dumpio.dll"
        ],
        "sourceFile": "mod_dumpio.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Dumps all I/O to error log as desired.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dumpio.html"
    },
    {
        "id": "mod_echo",
        "identifiers": [
            "echo_module"
        ],
        "fileNames": [
            "mod_echo.so",
            "mod_echo.dll"
        ],
        "sourceFile": "mod_echo.c",
        "status": "Experimental",
        "bundled": true,
        "dependencies": [],
        "description": "A simple echo server to illustrate protocol modules",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_echo.html"
    },
    {
        "id": "mod_env",
        "identifiers": [
            "env_module"
        ],
        "fileNames": [
            "mod_env.so",
            "mod_env.dll"
        ],
        "sourceFile": "mod_env.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Modifies the environment which is passed to CGI scripts and SSI pages",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_env.html"
    },
    {
        "id": "mod_example_hooks",
        "identifiers": [
            "example_hooks_module"
        ],
        "fileNames": [
            "mod_example_hooks.so",
            "mod_example_hooks.dll"
        ],
        "sourceFile": "mod_example_hooks.c",
        "status": "Experimental",
        "bundled": true,
        "dependencies": [],
        "description": "Illustrates the Apache module API",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_example_hooks.html"
    },
    {
        "id": "mod_expires",
        "identifiers": [
            "expires_module"
        ],
        "fileNames": [
            "mod_expires.so",
            "mod_expires.dll"
        ],
        "sourceFile": "mod_expires.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Generation of Expires and Cache-Control HTTP headers according to user-specified criteria",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_expires.html"
    },
    {
        "id": "mod_ext_filter",
        "identifiers": [
            "ext_filter_module"
        ],
        "fileNames": [
            "mod_ext_filter.so",
            "mod_ext_filter.dll"
        ],
        "sourceFile": "mod_ext_filter.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Pass the response body through an external program before delivery to the client",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ext_filter.html"
    },
    {
        "id": "mod_file_cache",
        "identifiers": [
            "file_cache_module"
        ],
        "fileNames": [
            "mod_file_cache.so",
            "mod_file_cache.dll"
        ],
        "sourceFile": "mod_file_cache.c",
        "status": "Experimental",
        "bundled": true,
        "dependencies": [],
        "description": "Caches a static list of files in memory",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_file_cache.html"
    },
    {
        "id": "mod_filter",
        "identifiers": [
            "filter_module"
        ],
        "fileNames": [
            "mod_filter.so",
            "mod_filter.dll"
        ],
        "sourceFile": "mod_filter.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Context-sensitive smart filter configuration module",
        "compatibility": "Version 2.1 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_filter.html"
    },
    {
        "id": "mod_headers",
        "identifiers": [
            "headers_module"
        ],
        "fileNames": [
            "mod_headers.so",
            "mod_headers.dll"
        ],
        "sourceFile": "mod_headers.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Customization of HTTP request and response headers",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_headers.html"
    },
    {
        "id": "mod_heartbeat",
        "identifiers": [
            "heartbeat_module"
        ],
        "fileNames": [
            "mod_heartbeat.so",
            "mod_heartbeat.dll"
        ],
        "sourceFile": "mod_heartbeat",
        "status": "Experimental",
        "bundled": true,
        "dependencies": [],
        "description": "Sends messages with server status to frontend proxy",
        "compatibility": "Available in Apache 2.3 and later",
        "since": "2.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_heartbeat.html"
    },
    {
        "id": "mod_heartmonitor",
        "identifiers": [
            "heartmonitor_module"
        ],
        "fileNames": [
            "mod_heartmonitor.so",
            "mod_heartmonitor.dll"
        ],
        "sourceFile": "mod_heartmonitor.c",
        "status": "Experimental",
        "bundled": true,
        "dependencies": [],
        "description": "Centralized monitor for mod_heartbeat origin servers",
        "compatibility": "Available in Apache 2.3 and later",
        "since": "2.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_heartmonitor.html"
    },
    {
        "id": "mod_http2",
        "identifiers": [
            "http2_module"
        ],
        "fileNames": [
            "mod_http2.so",
            "mod_http2.dll"
        ],
        "sourceFile": "mod_http2.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Support for the HTTP/2 transport layer",
        "compatibility": "Available in version 2.4.17 and later",
        "since": "2.4.17",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html"
    },
    {
        "id": "mod_ident",
        "identifiers": [
            "ident_module"
        ],
        "fileNames": [
            "mod_ident.so",
            "mod_ident.dll"
        ],
        "sourceFile": "mod_ident.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "RFC 1413 ident lookups",
        "compatibility": "Available in Apache 2.1 and later",
        "since": "2.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ident.html"
    },
    {
        "id": "mod_imagemap",
        "identifiers": [
            "imagemap_module"
        ],
        "fileNames": [
            "mod_imagemap.so",
            "mod_imagemap.dll"
        ],
        "sourceFile": "mod_imagemap.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Server-side imagemap processing",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_imagemap.html"
    },
    {
        "id": "mod_include",
        "identifiers": [
            "include_module"
        ],
        "fileNames": [
            "mod_include.so",
            "mod_include.dll"
        ],
        "sourceFile": "mod_include.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Server-parsed html documents (Server Side Includes)",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_include.html"
    },
    {
        "id": "mod_info",
        "identifiers": [
            "info_module"
        ],
        "fileNames": [
            "mod_info.so",
            "mod_info.dll"
        ],
        "sourceFile": "mod_info.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Provides a comprehensive overview of the server configuration",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_info.html"
    },
    {
        "id": "mod_isapi",
        "identifiers": [
            "isapi_module"
        ],
        "fileNames": [
            "mod_isapi.so",
            "mod_isapi.dll"
        ],
        "sourceFile": "mod_isapi.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "ISAPI Extensions within Apache for Windows",
        "compatibility": "Win32 only",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_isapi.html"
    },
    {
        "id": "mod_lbmethod_bybusyness",
        "identifiers": [
            "lbmethod_bybusyness_module"
        ],
        "fileNames": [
            "mod_lbmethod_bybusyness.so",
            "mod_lbmethod_bybusyness.dll"
        ],
        "sourceFile": "mod_lbmethod_bybusyness.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Pending Request Counting load balancer scheduler algorithm for mod_proxy_balancer",
        "compatibility": "Split off from mod_proxy_balancer in 2.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lbmethod_bybusyness.html"
    },
    {
        "id": "mod_lbmethod_byrequests",
        "identifiers": [
            "lbmethod_byrequests_module"
        ],
        "fileNames": [
            "mod_lbmethod_byrequests.so",
            "mod_lbmethod_byrequests.dll"
        ],
        "sourceFile": "mod_lbmethod_byrequests.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Request Counting load balancer scheduler algorithm for mod_proxy_balancer",
        "compatibility": "Split off from mod_proxy_balancer in 2.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lbmethod_byrequests.html"
    },
    {
        "id": "mod_lbmethod_bytraffic",
        "identifiers": [
            "lbmethod_bytraffic_module"
        ],
        "fileNames": [
            "mod_lbmethod_bytraffic.so",
            "mod_lbmethod_bytraffic.dll"
        ],
        "sourceFile": "mod_lbmethod_bytraffic.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Weighted Traffic Counting load balancer scheduler algorithm for mod_proxy_balancer",
        "compatibility": "Split off from mod_proxy_balancer in 2.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lbmethod_bytraffic.html"
    },
    {
        "id": "mod_lbmethod_heartbeat",
        "identifiers": [
            "lbmethod_heartbeat_module"
        ],
        "fileNames": [
            "mod_lbmethod_heartbeat.so",
            "mod_lbmethod_heartbeat.dll"
        ],
        "sourceFile": "mod_lbmethod_heartbeat.c",
        "status": "Experimental",
        "bundled": true,
        "dependencies": [],
        "description": "Heartbeat Traffic Counting load balancer scheduler algorithm for mod_proxy_balancer",
        "compatibility": "Available in version 2.3 and later",
        "since": "2.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lbmethod_heartbeat.html"
    },
    {
        "id": "mod_ldap",
        "identifiers": [
            "ldap_module"
        ],
        "fileNames": [
            "mod_ldap.so",
            "mod_ldap.dll"
        ],
        "sourceFile": "util_ldap.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "LDAP connection pooling and result caching services for use by other LDAP modules",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ldap.html"
    },
    {
        "id": "mod_log_config",
        "identifiers": [
            "log_config_module"
        ],
        "fileNames": [
            "mod_log_config.so",
            "mod_log_config.dll"
        ],
        "sourceFile": "mod_log_config.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Logging of the requests made to the server",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_log_config.html"
    },
    {
        "id": "mod_log_debug",
        "identifiers": [
            "log_debug_module"
        ],
        "fileNames": [
            "mod_log_debug.so",
            "mod_log_debug.dll"
        ],
        "sourceFile": "mod_log_debug.c",
        "status": "Experimental",
        "bundled": true,
        "dependencies": [],
        "description": "Additional configurable debug logging",
        "compatibility": "Available in Apache 2.3.14 and later",
        "since": "2.3.14",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_log_debug.html"
    },
    {
        "id": "mod_log_forensic",
        "identifiers": [
            "log_forensic_module"
        ],
        "fileNames": [
            "mod_log_forensic.so",
            "mod_log_forensic.dll"
        ],
        "sourceFile": "mod_log_forensic.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Forensic Logging of the requests made to the server",
        "compatibility": "mod_unique_id is no longer required since version 2.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_log_forensic.html"
    },
    {
        "id": "mod_logio",
        "identifiers": [
            "logio_module"
        ],
        "fileNames": [
            "mod_logio.so",
            "mod_logio.dll"
        ],
        "sourceFile": "mod_logio.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Logging of input and output bytes per request",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_logio.html"
    },
    {
        "id": "mod_lua",
        "identifiers": [
            "lua_module"
        ],
        "fileNames": [
            "mod_lua.so",
            "mod_lua.dll"
        ],
        "sourceFile": "mod_lua.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Provides Lua hooks into various portions of the httpd request processing",
        "compatibility": "2.3 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html"
    },
    {
        "id": "mod_macro",
        "identifiers": [
            "macro_module"
        ],
        "fileNames": [
            "mod_macro.so",
            "mod_macro.dll"
        ],
        "sourceFile": "mod_macro.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Provides macros within apache httpd runtime configuration files",
        "compatibility": "Available in httpd 2.4.5 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_macro.html"
    },
    {
        "id": "mod_md",
        "identifiers": [
            "md_module"
        ],
        "fileNames": [
            "mod_md.so",
            "mod_md.dll"
        ],
        "sourceFile": "mod_md.c",
        "status": "Experimental",
        "bundled": true,
        "dependencies": [],
        "description": "Managing domains across virtual hosts, certificate provisioning via the ACME protocol",
        "compatibility": "Available in version 2.4.30 and later",
        "since": "2.4.30",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html"
    },
    {
        "id": "mod_mime",
        "identifiers": [
            "mime_module"
        ],
        "fileNames": [
            "mod_mime.so",
            "mod_mime.dll"
        ],
        "sourceFile": "mod_mime.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Associates the requested filename's extensions with the file's behavior (handlers and filters) and content (mime-type, language, character set and encoding)",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime.html"
    },
    {
        "id": "mod_mime_magic",
        "identifiers": [
            "mime_magic_module"
        ],
        "fileNames": [
            "mod_mime_magic.so",
            "mod_mime_magic.dll"
        ],
        "sourceFile": "mod_mime_magic.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Determines the MIME type of a file by looking at a few bytes of its contents",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime_magic.html"
    },
    {
        "id": "mod_negotiation",
        "identifiers": [
            "negotiation_module"
        ],
        "fileNames": [
            "mod_negotiation.so",
            "mod_negotiation.dll"
        ],
        "sourceFile": "mod_negotiation.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Provides for content negotiation",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_negotiation.html"
    },
    {
        "id": "mod_nw_ssl",
        "identifiers": [
            "nwssl_module"
        ],
        "fileNames": [
            "mod_nw_ssl.so",
            "mod_nw_ssl.dll"
        ],
        "sourceFile": "mod_nw_ssl.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Enable SSL encryption for NetWare",
        "compatibility": "NetWare only",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_nw_ssl.html"
    },
    {
        "id": "mod_privileges",
        "identifiers": [
            "privileges_module"
        ],
        "fileNames": [
            "mod_privileges.so",
            "mod_privileges.dll"
        ],
        "sourceFile": "mod_privileges.c",
        "status": "Experimental",
        "bundled": true,
        "dependencies": [],
        "description": "Support for Solaris privileges and for running virtual hosts under different user IDs.",
        "compatibility": "Available in Apache 2.3 and up, on Solaris 10 and OpenSolaris platforms",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_privileges.html"
    },
    {
        "id": "mod_proxy",
        "identifiers": [
            "proxy_module"
        ],
        "fileNames": [
            "mod_proxy.so",
            "mod_proxy.dll"
        ],
        "sourceFile": "mod_proxy.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Multi-protocol proxy/gateway server",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html"
    },
    {
        "id": "mod_proxy_ajp",
        "identifiers": [
            "proxy_ajp_module"
        ],
        "fileNames": [
            "mod_proxy_ajp.so",
            "mod_proxy_ajp.dll"
        ],
        "sourceFile": "mod_proxy_ajp.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "AJP support module for mod_proxy",
        "compatibility": "Available in version 2.1 and later",
        "since": "2.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_ajp.html"
    },
    {
        "id": "mod_proxy_balancer",
        "identifiers": [
            "proxy_balancer_module"
        ],
        "fileNames": [
            "mod_proxy_balancer.so",
            "mod_proxy_balancer.dll"
        ],
        "sourceFile": "mod_proxy_balancer.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "mod_proxy extension for load balancing",
        "compatibility": "Available in version 2.1 and later",
        "since": "2.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_balancer.html"
    },
    {
        "id": "mod_proxy_connect",
        "identifiers": [
            "proxy_connect_module"
        ],
        "fileNames": [
            "mod_proxy_connect.so",
            "mod_proxy_connect.dll"
        ],
        "sourceFile": "mod_proxy_connect.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "mod_proxy extension for CONNECT request handling",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_connect.html"
    },
    {
        "id": "mod_proxy_express",
        "identifiers": [
            "proxy_express_module"
        ],
        "fileNames": [
            "mod_proxy_express.so",
            "mod_proxy_express.dll"
        ],
        "sourceFile": "mod_proxy_express.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Dynamic mass reverse proxy extension for mod_proxy",
        "compatibility": "Available in Apache 2.3.13 and later",
        "since": "2.3.13",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_express.html"
    },
    {
        "id": "mod_proxy_fcgi",
        "identifiers": [
            "proxy_fcgi_module"
        ],
        "fileNames": [
            "mod_proxy_fcgi.so",
            "mod_proxy_fcgi.dll"
        ],
        "sourceFile": "mod_proxy_fcgi.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "FastCGI support module for mod_proxy",
        "compatibility": "Available in version 2.3 and later",
        "since": "2.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_fcgi.html"
    },
    {
        "id": "mod_proxy_fdpass",
        "identifiers": [
            "proxy_fdpass_module"
        ],
        "fileNames": [
            "mod_proxy_fdpass.so",
            "mod_proxy_fdpass.dll"
        ],
        "sourceFile": "mod_proxy_fdpass.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "fdpass external process support module for mod_proxy",
        "compatibility": "Available for unix in version 2.3 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_fdpass.html"
    },
    {
        "id": "mod_proxy_ftp",
        "identifiers": [
            "proxy_ftp_module"
        ],
        "fileNames": [
            "mod_proxy_ftp.so",
            "mod_proxy_ftp.dll"
        ],
        "sourceFile": "mod_proxy_ftp.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "FTP support module for mod_proxy",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_ftp.html"
    },
    {
        "id": "mod_proxy_hcheck",
        "identifiers": [
            "proxy_hcheck_module"
        ],
        "fileNames": [
            "mod_proxy_hcheck.so",
            "mod_proxy_hcheck.dll"
        ],
        "sourceFile": "mod_proxy_hcheck.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Dynamic health check of Balancer members (workers) for mod_proxy",
        "compatibility": "Available in Apache 2.4.21 and later",
        "since": "2.4.21",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_hcheck.html"
    },
    {
        "id": "mod_proxy_html",
        "identifiers": [
            "proxy_html_module"
        ],
        "fileNames": [
            "mod_proxy_html.so",
            "mod_proxy_html.dll"
        ],
        "sourceFile": "mod_proxy_html.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Rewrite HTML links in to ensure they are addressable from Clients' networks in a proxy context.",
        "compatibility": "Version 2.4 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_html.html"
    },
    {
        "id": "mod_proxy_http",
        "identifiers": [
            "proxy_http_module"
        ],
        "fileNames": [
            "mod_proxy_http.so",
            "mod_proxy_http.dll"
        ],
        "sourceFile": "mod_proxy_http.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "HTTP support module for mod_proxy",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_http.html"
    },
    {
        "id": "mod_proxy_http2",
        "identifiers": [
            "proxy_http2_module"
        ],
        "fileNames": [
            "mod_proxy_http2.so",
            "mod_proxy_http2.dll"
        ],
        "sourceFile": "mod_proxy_http2.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "HTTP/2 support module for mod_proxy",
        "compatibility": "Available in httpd 2.4.19 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_http2.html"
    },
    {
        "id": "mod_proxy_scgi",
        "identifiers": [
            "proxy_scgi_module"
        ],
        "fileNames": [
            "mod_proxy_scgi.so",
            "mod_proxy_scgi.dll"
        ],
        "sourceFile": "mod_proxy_scgi.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "SCGI gateway module for mod_proxy",
        "compatibility": "Available in version 2.2.14 and later",
        "since": "2.2.14",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_scgi.html"
    },
    {
        "id": "mod_proxy_uwsgi",
        "identifiers": [
            "proxy_uwsgi_module"
        ],
        "fileNames": [
            "mod_proxy_uwsgi.so",
            "mod_proxy_uwsgi.dll"
        ],
        "sourceFile": "mod_proxy_uwsgi.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "UWSGI gateway module for mod_proxy",
        "compatibility": "Available in version 2.4.30 and later",
        "since": "2.4.30",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_uwsgi.html"
    },
    {
        "id": "mod_proxy_wstunnel",
        "identifiers": [
            "proxy_wstunnel_module"
        ],
        "fileNames": [
            "mod_proxy_wstunnel.so",
            "mod_proxy_wstunnel.dll"
        ],
        "sourceFile": "mod_proxy_wstunnel.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Websockets support module for mod_proxy",
        "compatibility": "Available in httpd 2.4.5 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html"
    },
    {
        "id": "mod_ratelimit",
        "identifiers": [
            "ratelimit_module"
        ],
        "fileNames": [
            "mod_ratelimit.so",
            "mod_ratelimit.dll"
        ],
        "sourceFile": "mod_ratelimit.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Bandwidth Rate Limiting for Clients",
        "compatibility": "rate-initial-burst available in httpd 2.4.24 and later. Rate limiting proxied content does not work correctly up to httpd 2.4.33.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ratelimit.html"
    },
    {
        "id": "mod_reflector",
        "identifiers": [
            "reflector_module"
        ],
        "fileNames": [
            "mod_reflector.so",
            "mod_reflector.dll"
        ],
        "sourceFile": "mod_reflector.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Reflect a request body as a response via the output filter stack.",
        "compatibility": "Version 2.3 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_reflector.html"
    },
    {
        "id": "mod_remoteip",
        "identifiers": [
            "remoteip_module"
        ],
        "fileNames": [
            "mod_remoteip.so",
            "mod_remoteip.dll"
        ],
        "sourceFile": "mod_remoteip.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Replaces the original client IP address for the connection with the useragent IP address list presented by a proxies or a load balancer via the request headers.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_remoteip.html"
    },
    {
        "id": "mod_reqtimeout",
        "identifiers": [
            "reqtimeout_module"
        ],
        "fileNames": [
            "mod_reqtimeout.so",
            "mod_reqtimeout.dll"
        ],
        "sourceFile": "mod_reqtimeout.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Set timeout and minimum data rate for receiving requests",
        "compatibility": "Available in Apache HTTPD 2.2.15 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_reqtimeout.html"
    },
    {
        "id": "mod_request",
        "identifiers": [
            "request_module"
        ],
        "fileNames": [
            "mod_request.so",
            "mod_request.dll"
        ],
        "sourceFile": "mod_request.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Filters to handle and make available HTTP request bodies",
        "compatibility": "Available in Apache 2.3 and later",
        "since": "2.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_request.html"
    },
    {
        "id": "mod_rewrite",
        "identifiers": [
            "rewrite_module"
        ],
        "fileNames": [
            "mod_rewrite.so",
            "mod_rewrite.dll"
        ],
        "sourceFile": "mod_rewrite.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Provides a rule-based rewriting engine to rewrite requested URLs on the fly",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html"
    },
    {
        "id": "mod_sed",
        "identifiers": [
            "sed_module"
        ],
        "fileNames": [
            "mod_sed.so",
            "mod_sed.dll"
        ],
        "sourceFile": "mod_sed.c sed0.c sed1.c regexp.c regexp.h sed.h",
        "status": "Experimental",
        "bundled": true,
        "dependencies": [],
        "description": "Filter Input (request) and Output (response) content using sed syntax",
        "compatibility": "Available in Apache 2.3 and later",
        "since": "2.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_sed.html"
    },
    {
        "id": "mod_session",
        "identifiers": [
            "session_module"
        ],
        "fileNames": [
            "mod_session.so",
            "mod_session.dll"
        ],
        "sourceFile": "mod_session.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Session support",
        "compatibility": "Available in Apache 2.3 and later",
        "since": "2.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session.html"
    },
    {
        "id": "mod_session_cookie",
        "identifiers": [
            "session_cookie_module"
        ],
        "fileNames": [
            "mod_session_cookie.so",
            "mod_session_cookie.dll"
        ],
        "sourceFile": "mod_session_cookie.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Cookie based session support",
        "compatibility": "Available in Apache 2.3 and later",
        "since": "2.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session_cookie.html"
    },
    {
        "id": "mod_session_crypto",
        "identifiers": [
            "session_crypto_module"
        ],
        "fileNames": [
            "mod_session_crypto.so",
            "mod_session_crypto.dll"
        ],
        "sourceFile": "mod_session_crypto.c",
        "status": "Experimental",
        "bundled": true,
        "dependencies": [],
        "description": "Session encryption support",
        "compatibility": "Available in Apache 2.3 and later",
        "since": "2.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session_crypto.html"
    },
    {
        "id": "mod_session_dbd",
        "identifiers": [
            "session_dbd_module"
        ],
        "fileNames": [
            "mod_session_dbd.so",
            "mod_session_dbd.dll"
        ],
        "sourceFile": "mod_session_dbd.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "DBD/SQL based session support",
        "compatibility": "Available in Apache 2.3 and later",
        "since": "2.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session_dbd.html"
    },
    {
        "id": "mod_setenvif",
        "identifiers": [
            "setenvif_module"
        ],
        "fileNames": [
            "mod_setenvif.so",
            "mod_setenvif.dll"
        ],
        "sourceFile": "mod_setenvif.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Allows the setting of environment variables based on characteristics of the request",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_setenvif.html"
    },
    {
        "id": "mod_slotmem_plain",
        "identifiers": [
            "slotmem_plain_module"
        ],
        "fileNames": [
            "mod_slotmem_plain.so",
            "mod_slotmem_plain.dll"
        ],
        "sourceFile": "mod_slotmem_plain.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Slot-based shared memory provider.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_slotmem_plain.html"
    },
    {
        "id": "mod_slotmem_shm",
        "identifiers": [
            "slotmem_shm_module"
        ],
        "fileNames": [
            "mod_slotmem_shm.so",
            "mod_slotmem_shm.dll"
        ],
        "sourceFile": "mod_slotmem_shm.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Slot-based shared memory provider.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_slotmem_shm.html"
    },
    {
        "id": "mod_so",
        "identifiers": [
            "so_module"
        ],
        "fileNames": [
            "mod_so.so",
            "mod_so.dll"
        ],
        "sourceFile": "mod_so.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Loading of executable code and modules into the server at start-up or restart time",
        "compatibility": "This is a Base module (always included) on Windows",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_so.html"
    },
    {
        "id": "mod_socache_dbm",
        "identifiers": [
            "socache_dbm_module"
        ],
        "fileNames": [
            "mod_socache_dbm.so",
            "mod_socache_dbm.dll"
        ],
        "sourceFile": "mod_socache_dbm.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "DBM based shared object cache provider.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_socache_dbm.html"
    },
    {
        "id": "mod_socache_dc",
        "identifiers": [
            "socache_dc_module"
        ],
        "fileNames": [
            "mod_socache_dc.so",
            "mod_socache_dc.dll"
        ],
        "sourceFile": "mod_socache_dc.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Distcache based shared object cache provider.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_socache_dc.html"
    },
    {
        "id": "mod_socache_memcache",
        "identifiers": [
            "socache_memcache_module"
        ],
        "fileNames": [
            "mod_socache_memcache.so",
            "mod_socache_memcache.dll"
        ],
        "sourceFile": "mod_socache_memcache.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Memcache based shared object cache provider.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_socache_memcache.html"
    },
    {
        "id": "mod_socache_redis",
        "identifiers": [
            "socache_redis_module"
        ],
        "fileNames": [
            "mod_socache_redis.so",
            "mod_socache_redis.dll"
        ],
        "sourceFile": "mod_socache_redis.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Redis based shared object cache provider.",
        "compatibility": "Available in Apache 2.4.39 and later",
        "since": "2.4.39",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_socache_redis.html"
    },
    {
        "id": "mod_socache_shmcb",
        "identifiers": [
            "socache_shmcb_module"
        ],
        "fileNames": [
            "mod_socache_shmcb.so",
            "mod_socache_shmcb.dll"
        ],
        "sourceFile": "mod_socache_shmcb.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "shmcb based shared object cache provider.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_socache_shmcb.html"
    },
    {
        "id": "mod_speling",
        "identifiers": [
            "speling_module"
        ],
        "fileNames": [
            "mod_speling.so",
            "mod_speling.dll"
        ],
        "sourceFile": "mod_speling.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Attempts to correct mistaken URLs by ignoring capitalization, or attempting to correct various minor misspellings.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_speling.html"
    },
    {
        "id": "mod_ssl",
        "identifiers": [
            "ssl_module"
        ],
        "fileNames": [
            "mod_ssl.so",
            "mod_ssl.dll"
        ],
        "sourceFile": "mod_ssl.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Strong cryptography using the Secure Sockets Layer (SSL) and Transport Layer Security (TLS) protocols",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html"
    },
    {
        "id": "mod_status",
        "identifiers": [
            "status_module"
        ],
        "fileNames": [
            "mod_status.so",
            "mod_status.dll"
        ],
        "sourceFile": "mod_status.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Provides information on server activity and performance",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_status.html"
    },
    {
        "id": "mod_substitute",
        "identifiers": [
            "substitute_module"
        ],
        "fileNames": [
            "mod_substitute.so",
            "mod_substitute.dll"
        ],
        "sourceFile": "mod_substitute.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Perform search and replace operations on response bodies",
        "compatibility": "Available in Apache HTTP Server 2.2.7 and later",
        "since": "2.2.7",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_substitute.html"
    },
    {
        "id": "mod_suexec",
        "identifiers": [
            "suexec_module"
        ],
        "fileNames": [
            "mod_suexec.so",
            "mod_suexec.dll"
        ],
        "sourceFile": "mod_suexec.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Allows CGI scripts to run as a specified user and Group",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_suexec.html"
    },
    {
        "id": "mod_systemd",
        "identifiers": [
            "systemd_module"
        ],
        "fileNames": [
            "mod_systemd.so",
            "mod_systemd.dll"
        ],
        "sourceFile": "mod_systemd.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Provides better support for systemd integration",
        "compatibility": "Available in Apache 2.4.42 and later",
        "since": "2.4.42",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_systemd.html"
    },
    {
        "id": "mod_unique_id",
        "identifiers": [
            "unique_id_module"
        ],
        "fileNames": [
            "mod_unique_id.so",
            "mod_unique_id.dll"
        ],
        "sourceFile": "mod_unique_id.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Provides an environment variable with a unique identifier for each request",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_unique_id.html"
    },
    {
        "id": "mod_unixd",
        "identifiers": [
            "unixd_module"
        ],
        "fileNames": [
            "mod_unixd.so",
            "mod_unixd.dll"
        ],
        "sourceFile": "mod_unixd.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Basic (required) security for Unix-family platforms.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_unixd.html"
    },
    {
        "id": "mod_userdir",
        "identifiers": [
            "userdir_module"
        ],
        "fileNames": [
            "mod_userdir.so",
            "mod_userdir.dll"
        ],
        "sourceFile": "mod_userdir.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "User-specific directories",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_userdir.html"
    },
    {
        "id": "mod_usertrack",
        "identifiers": [
            "usertrack_module"
        ],
        "fileNames": [
            "mod_usertrack.so",
            "mod_usertrack.dll"
        ],
        "sourceFile": "mod_usertrack.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Clickstream logging of user activity on a site",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_usertrack.html"
    },
    {
        "id": "mod_version",
        "identifiers": [
            "version_module"
        ],
        "fileNames": [
            "mod_version.so",
            "mod_version.dll"
        ],
        "sourceFile": "mod_version.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Version dependent configuration",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_version.html"
    },
    {
        "id": "mod_vhost_alias",
        "identifiers": [
            "vhost_alias_module"
        ],
        "fileNames": [
            "mod_vhost_alias.so",
            "mod_vhost_alias.dll"
        ],
        "sourceFile": "mod_vhost_alias.c",
        "status": "Extension",
        "bundled": true,
        "dependencies": [],
        "description": "Provides for dynamically configured mass virtual hosting",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_vhost_alias.html"
    },
    {
        "id": "mod_watchdog",
        "identifiers": [
            "watchdog_module"
        ],
        "fileNames": [
            "mod_watchdog.so",
            "mod_watchdog.dll"
        ],
        "sourceFile": "mod_watchdog.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "provides infrastructure for other modules to periodically run tasks",
        "compatibility": "Available in Apache 2.3 and later",
        "since": "2.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_watchdog.html"
    },
    {
        "id": "mod_xml2enc",
        "identifiers": [
            "xml2enc_module"
        ],
        "fileNames": [
            "mod_xml2enc.so",
            "mod_xml2enc.dll"
        ],
        "sourceFile": "mod_xml2enc.c",
        "status": "Base",
        "bundled": true,
        "dependencies": [],
        "description": "Enhanced charset/internationalisation support for libxml2-based filter modules",
        "compatibility": "Version 2.4 and later. Available as a third-party module for 2.2.x versions",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_xml2enc.html"
    },
    {
        "id": "mpm_common",
        "identifiers": [],
        "fileNames": [],
        "status": "MPM",
        "bundled": true,
        "dependencies": [],
        "description": "A collection of directives that are implemented by more than one multi-processing module (MPM)",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html"
    },
    {
        "id": "mpm_netware",
        "identifiers": [
            "mpm_netware_module"
        ],
        "fileNames": [],
        "sourceFile": "mpm_netware.c",
        "status": "MPM",
        "bundled": true,
        "dependencies": [],
        "description": "Multi-Processing Module implementing an exclusively threaded web server optimized for Novell NetWare",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_netware.html"
    },
    {
        "id": "mpm_winnt",
        "identifiers": [
            "mpm_winnt_module"
        ],
        "fileNames": [],
        "sourceFile": "mpm_winnt.c",
        "status": "MPM",
        "bundled": true,
        "dependencies": [],
        "description": "Multi-Processing Module optimized for Windows NT.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_winnt.html"
    },
    {
        "id": "mpmt_os2",
        "identifiers": [
            "mpm_mpmt_os2_module"
        ],
        "fileNames": [],
        "sourceFile": "mpmt_os2.c",
        "status": "MPM",
        "bundled": true,
        "dependencies": [],
        "description": "Hybrid multi-process, multi-threaded MPM for OS/2",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpmt_os2.html"
    },
    {
        "id": "prefork",
        "identifiers": [
            "mpm_prefork_module"
        ],
        "fileNames": [],
        "sourceFile": "prefork.c",
        "status": "MPM",
        "bundled": true,
        "dependencies": [],
        "description": "Implements a non-threaded, pre-forking web server",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/prefork.html"
    },
    {
        "id": "worker",
        "identifiers": [
            "mpm_worker_module"
        ],
        "fileNames": [],
        "sourceFile": "worker.c",
        "status": "MPM",
        "bundled": true,
        "dependencies": [],
        "description": "Multi-Processing Module implementing a hybrid multi-threaded multi-process web server",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/worker.html"
    }
];

export const APACHE_2_4_DIRECTIVES: readonly DirectiveSpec[] = [
    {
        "id": "core:directive:acceptfilter",
        "owner": "core",
        "name": "AcceptFilter",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Core",
        "description": "Configures optimizations for a Protocol's Listener Sockets",
        "syntax": "AcceptFilter protocol accept_filter",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#acceptfilter"
    },
    {
        "id": "core:directive:acceptpathinfo",
        "owner": "core",
        "name": "AcceptPathInfo",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Core",
        "description": "Resources accept trailing pathname information",
        "syntax": "AcceptPathInfo On|Off|Default",
        "default": "AcceptPathInfo Default",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#acceptpathinfo"
    },
    {
        "id": "core:directive:accessfilename",
        "owner": "core",
        "name": "AccessFileName",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Name of the distributed configuration file",
        "syntax": "AccessFileName filename [filename] ...",
        "default": "AccessFileName .htaccess",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#accessfilename"
    },
    {
        "id": "mod_actions:directive:action",
        "owner": "mod_actions",
        "name": "Action",
        "kind": "directive",
        "modules": [
            "mod_actions"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Activates a CGI script for a particular handler or content-type",
        "syntax": "Action action-type cgi-script [virtual]",
        "compatibility": "The virtual modifier and handler passing were introduced in Apache httpd 2.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_actions.html#action"
    },
    {
        "id": "mod_autoindex:directive:addalt",
        "owner": "mod_autoindex",
        "name": "AddAlt",
        "kind": "directive",
        "modules": [
            "mod_autoindex"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Alternate text to display for a file, instead of an icon selected by filename",
        "syntax": "AddAlt string file [file] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_autoindex.html#addalt"
    },
    {
        "id": "mod_autoindex:directive:addaltbyencoding",
        "owner": "mod_autoindex",
        "name": "AddAltByEncoding",
        "kind": "directive",
        "modules": [
            "mod_autoindex"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Alternate text to display for a file instead of an icon selected by MIME-encoding",
        "syntax": "AddAltByEncoding string MIME-encoding [MIME-encoding] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_autoindex.html#addaltbyencoding"
    },
    {
        "id": "mod_autoindex:directive:addaltbytype",
        "owner": "mod_autoindex",
        "name": "AddAltByType",
        "kind": "directive",
        "modules": [
            "mod_autoindex"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Alternate text to display for a file, instead of an icon selected by MIME content-type",
        "syntax": "AddAltByType string MIME-type [MIME-type] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_autoindex.html#addaltbytype"
    },
    {
        "id": "mod_mime:directive:addcharset",
        "owner": "mod_mime",
        "name": "AddCharset",
        "kind": "directive",
        "modules": [
            "mod_mime"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Maps the given filename extensions to the specified content charset",
        "syntax": "AddCharset charset extension [extension] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime.html#addcharset"
    },
    {
        "id": "core:directive:adddefaultcharset",
        "owner": "core",
        "name": "AddDefaultCharset",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Core",
        "description": "Default charset parameter to be added when a response content-type is text/plain or text/html",
        "syntax": "AddDefaultCharset On|Off|charset",
        "default": "AddDefaultCharset Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#adddefaultcharset"
    },
    {
        "id": "mod_autoindex:directive:adddescription",
        "owner": "mod_autoindex",
        "name": "AddDescription",
        "kind": "directive",
        "modules": [
            "mod_autoindex"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Description to display for a file",
        "syntax": "AddDescription string file [file] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_autoindex.html#adddescription"
    },
    {
        "id": "mod_mime:directive:addencoding",
        "owner": "mod_mime",
        "name": "AddEncoding",
        "kind": "directive",
        "modules": [
            "mod_mime"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Maps the given filename extensions to the specified encoding type",
        "syntax": "AddEncoding encoding extension [extension] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime.html#addencoding"
    },
    {
        "id": "mod_mime:directive:addhandler",
        "owner": "mod_mime",
        "name": "AddHandler",
        "kind": "directive",
        "modules": [
            "mod_mime"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Maps the filename extensions to the specified handler",
        "syntax": "AddHandler handler-name extension [extension] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime.html#addhandler"
    },
    {
        "id": "mod_autoindex:directive:addicon",
        "owner": "mod_autoindex",
        "name": "AddIcon",
        "kind": "directive",
        "modules": [
            "mod_autoindex"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Icon to display for a file selected by name",
        "syntax": "AddIcon icon name [name] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_autoindex.html#addicon"
    },
    {
        "id": "mod_autoindex:directive:addiconbyencoding",
        "owner": "mod_autoindex",
        "name": "AddIconByEncoding",
        "kind": "directive",
        "modules": [
            "mod_autoindex"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Icon to display next to files selected by MIME content-encoding",
        "syntax": "AddIconByEncoding icon MIME-encoding [MIME-encoding] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_autoindex.html#addiconbyencoding"
    },
    {
        "id": "mod_autoindex:directive:addiconbytype",
        "owner": "mod_autoindex",
        "name": "AddIconByType",
        "kind": "directive",
        "modules": [
            "mod_autoindex"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Icon to display next to files selected by MIME content-type",
        "syntax": "AddIconByType icon MIME-type [MIME-type] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_autoindex.html#addiconbytype"
    },
    {
        "id": "mod_mime:directive:addinputfilter",
        "owner": "mod_mime",
        "name": "AddInputFilter",
        "kind": "directive",
        "modules": [
            "mod_mime"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Maps filename extensions to the filters that will process client requests",
        "syntax": "AddInputFilter filter[;filter...] extension [extension] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime.html#addinputfilter"
    },
    {
        "id": "mod_mime:directive:addlanguage",
        "owner": "mod_mime",
        "name": "AddLanguage",
        "kind": "directive",
        "modules": [
            "mod_mime"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Maps the given filename extension to the specified content language",
        "syntax": "AddLanguage language-tag extension [extension] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime.html#addlanguage"
    },
    {
        "id": "mod_info:directive:addmoduleinfo",
        "owner": "mod_info",
        "name": "AddModuleInfo",
        "kind": "directive",
        "modules": [
            "mod_info"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Adds additional information to the module information displayed by the server-info handler",
        "syntax": "AddModuleInfo module-name string",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_info.html#addmoduleinfo"
    },
    {
        "id": "mod_mime:directive:addoutputfilter",
        "owner": "mod_mime",
        "name": "AddOutputFilter",
        "kind": "directive",
        "modules": [
            "mod_mime"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Maps filename extensions to the filters that will process responses from the server",
        "syntax": "AddOutputFilter filter[;filter...] extension [extension] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime.html#addoutputfilter"
    },
    {
        "id": "mod_filter:directive:addoutputfilterbytype",
        "owner": "mod_filter",
        "name": "AddOutputFilterByType",
        "kind": "directive",
        "modules": [
            "mod_filter"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "assigns an output filter to a particular media-type",
        "syntax": "AddOutputFilterByType filter[;filter...] media-type [media-type] ...",
        "compatibility": "Had severe limitations before being moved to mod_filter in version 2.3.7",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_filter.html#addoutputfilterbytype"
    },
    {
        "id": "mod_mime:directive:addtype",
        "owner": "mod_mime",
        "name": "AddType",
        "kind": "directive",
        "modules": [
            "mod_mime"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Maps the given filename extensions onto the specified content type",
        "syntax": "AddType media-type extension [extension] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime.html#addtype"
    },
    {
        "id": "mod_alias:directive:alias",
        "owner": "mod_alias",
        "name": "Alias",
        "kind": "directive",
        "modules": [
            "mod_alias"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "Maps URLs to filesystem locations",
        "syntax": "Alias [URL-path] file-path|directory-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_alias.html#alias"
    },
    {
        "id": "mod_alias:directive:aliasmatch",
        "owner": "mod_alias",
        "name": "AliasMatch",
        "kind": "directive",
        "modules": [
            "mod_alias"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "Maps URLs to filesystem locations using regular expressions",
        "syntax": "AliasMatch regex file-path|directory-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_alias.html#aliasmatch"
    },
    {
        "id": "mod_alias:directive:aliaspreservepath",
        "owner": "mod_alias",
        "name": "AliasPreservePath",
        "kind": "directive",
        "modules": [
            "mod_alias"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Map the full path after the alias in a location.",
        "syntax": "AliasPreservePath OFF|ON",
        "default": "AliasPreservePath OFF",
        "compatibility": "2.4.58 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_alias.html#aliaspreservepath"
    },
    {
        "id": "mod_access_compat:directive:allow",
        "owner": "mod_access_compat",
        "name": "Allow",
        "kind": "directive",
        "modules": [
            "mod_access_compat"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "Limit"
        ],
        "status": "Extension",
        "description": "Controls which hosts can access an area of the server",
        "syntax": "Allow from all|host|env=[!]env-variable [host|env=[!]env-variable] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_access_compat.html#allow"
    },
    {
        "id": "mod_proxy_connect:directive:allowconnect",
        "owner": "mod_proxy_connect",
        "name": "AllowCONNECT",
        "kind": "directive",
        "modules": [
            "mod_proxy_connect"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Ports that are allowed to CONNECT through the proxy",
        "syntax": "AllowCONNECT port[-port] [port[-port]] ...",
        "default": "AllowCONNECT 443 563",
        "compatibility": "Moved from mod_proxy in Apache 2.3.5. Port ranges available since Apache 2.3.7.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_connect.html#allowconnect"
    },
    {
        "id": "core:directive:allowencodedslashes",
        "owner": "core",
        "name": "AllowEncodedSlashes",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Determines whether encoded path separators in URLs are allowed to be passed through",
        "syntax": "AllowEncodedSlashes On|Off|NoDecode",
        "default": "AllowEncodedSlashes Off",
        "compatibility": "NoDecode option available in 2.3.12 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#allowencodedslashes"
    },
    {
        "id": "mod_allowmethods:directive:allowmethods",
        "owner": "mod_allowmethods",
        "name": "AllowMethods",
        "kind": "directive",
        "modules": [
            "mod_allowmethods"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Restrict access to the listed HTTP methods",
        "syntax": "AllowMethods reset|HTTP-method [HTTP-method]...",
        "default": "AllowMethods reset",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_allowmethods.html#allowmethods"
    },
    {
        "id": "core:directive:allowoverride",
        "owner": "core",
        "name": "AllowOverride",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Core",
        "description": "Types of directives that are allowed in .htaccess files",
        "syntax": "AllowOverride All|None|directive-type [directive-type] ...",
        "default": "AllowOverride None",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#allowoverride"
    },
    {
        "id": "core:directive:allowoverridelist",
        "owner": "core",
        "name": "AllowOverrideList",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Core",
        "description": "Individual directives that are allowed in .htaccess files",
        "syntax": "AllowOverrideList None|directive [directive] ...",
        "default": "AllowOverrideList None",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#allowoverridelist"
    },
    {
        "id": "mod_authn_anon:directive:anonymous",
        "owner": "mod_authn_anon",
        "name": "Anonymous",
        "kind": "directive",
        "modules": [
            "mod_authn_anon"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Specifies userIDs that are allowed access without password verification",
        "syntax": "Anonymous user [user] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_anon.html#anonymous"
    },
    {
        "id": "mod_authn_anon:directive:anonymous_logemail",
        "owner": "mod_authn_anon",
        "name": "Anonymous_LogEmail",
        "kind": "directive",
        "modules": [
            "mod_authn_anon"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Sets whether the password entered will be logged in the error log",
        "syntax": "Anonymous_LogEmail On|Off",
        "default": "Anonymous_LogEmail On",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_anon.html#anonymous_logemail"
    },
    {
        "id": "mod_authn_anon:directive:anonymous_mustgiveemail",
        "owner": "mod_authn_anon",
        "name": "Anonymous_MustGiveEmail",
        "kind": "directive",
        "modules": [
            "mod_authn_anon"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Specifies whether blank passwords are allowed",
        "syntax": "Anonymous_MustGiveEmail On|Off",
        "default": "Anonymous_MustGiveEmail On",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_anon.html#anonymous_mustgiveemail"
    },
    {
        "id": "mod_authn_anon:directive:anonymous_nouserid",
        "owner": "mod_authn_anon",
        "name": "Anonymous_NoUserID",
        "kind": "directive",
        "modules": [
            "mod_authn_anon"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Sets whether the userID field may be empty",
        "syntax": "Anonymous_NoUserID On|Off",
        "default": "Anonymous_NoUserID Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_anon.html#anonymous_nouserid"
    },
    {
        "id": "mod_authn_anon:directive:anonymous_verifyemail",
        "owner": "mod_authn_anon",
        "name": "Anonymous_VerifyEmail",
        "kind": "directive",
        "modules": [
            "mod_authn_anon"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Sets whether to check the password field for a correctly formatted email address",
        "syntax": "Anonymous_VerifyEmail On|Off",
        "default": "Anonymous_VerifyEmail Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_anon.html#anonymous_verifyemail"
    },
    {
        "id": "event:directive:asyncrequestworkerfactor",
        "owner": "event",
        "name": "AsyncRequestWorkerFactor",
        "kind": "directive",
        "modules": [
            "event"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Limit concurrent connections per process",
        "syntax": "AsyncRequestWorkerFactor factor",
        "default": "2",
        "compatibility": "Available in version 2.3.13 and later",
        "since": "2.3.13",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/event.html#asyncrequestworkerfactor"
    },
    {
        "id": "mod_auth_basic:directive:authbasicauthoritative",
        "owner": "mod_auth_basic",
        "name": "AuthBasicAuthoritative",
        "kind": "directive",
        "modules": [
            "mod_auth_basic"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Base",
        "description": "Sets whether authorization and authentication are passed to lower level modules",
        "syntax": "AuthBasicAuthoritative On|Off",
        "default": "AuthBasicAuthoritative On",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_basic.html#authbasicauthoritative"
    },
    {
        "id": "mod_auth_basic:directive:authbasicfake",
        "owner": "mod_auth_basic",
        "name": "AuthBasicFake",
        "kind": "directive",
        "modules": [
            "mod_auth_basic"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Base",
        "description": "Fake basic authentication using the given expressions for username and password",
        "syntax": "AuthBasicFake off|username [password]",
        "default": "none",
        "compatibility": "Apache HTTP Server 2.4.5 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_basic.html#authbasicfake"
    },
    {
        "id": "mod_auth_basic:directive:authbasicprovider",
        "owner": "mod_auth_basic",
        "name": "AuthBasicProvider",
        "kind": "directive",
        "modules": [
            "mod_auth_basic"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Base",
        "description": "Sets the authentication provider(s) for this location",
        "syntax": "AuthBasicProvider provider-name [provider-name] ...",
        "default": "AuthBasicProvider file",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_basic.html#authbasicprovider"
    },
    {
        "id": "mod_auth_basic:directive:authbasicusedigestalgorithm",
        "owner": "mod_auth_basic",
        "name": "AuthBasicUseDigestAlgorithm",
        "kind": "directive",
        "modules": [
            "mod_auth_basic"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Base",
        "description": "Check passwords against the authentication providers as if Digest Authentication was in force instead of Basic Authentication.",
        "syntax": "AuthBasicUseDigestAlgorithm MD5|Off",
        "default": "AuthBasicUseDigestAlgorithm Off",
        "compatibility": "Apache HTTP Server 2.4.7 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_basic.html#authbasicusedigestalgorithm"
    },
    {
        "id": "mod_authn_dbd:directive:authdbduserpwquery",
        "owner": "mod_authn_dbd",
        "name": "AuthDBDUserPWQuery",
        "kind": "directive",
        "modules": [
            "mod_authn_dbd"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "SQL query to look up a password for a user",
        "syntax": "AuthDBDUserPWQuery query",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_dbd.html#authdbduserpwquery"
    },
    {
        "id": "mod_authn_dbd:directive:authdbduserrealmquery",
        "owner": "mod_authn_dbd",
        "name": "AuthDBDUserRealmQuery",
        "kind": "directive",
        "modules": [
            "mod_authn_dbd"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "SQL query to look up a password hash for a user and realm.",
        "syntax": "AuthDBDUserRealmQuery query",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_dbd.html#authdbduserrealmquery"
    },
    {
        "id": "mod_authz_dbm:directive:authdbmgroupfile",
        "owner": "mod_authz_dbm",
        "name": "AuthDBMGroupFile",
        "kind": "directive",
        "modules": [
            "mod_authz_dbm"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Sets the name of the database file containing the list of user groups for authorization",
        "syntax": "AuthDBMGroupFile file-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authz_dbm.html#authdbmgroupfile"
    },
    {
        "id": "mod_authn_dbm:directive:authdbmtype",
        "owner": "mod_authn_dbm",
        "name": "AuthDBMType",
        "kind": "directive",
        "modules": [
            "mod_authn_dbm"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Sets the type of database file that is used to store passwords",
        "syntax": "AuthDBMType default|SDBM|GDBM|NDBM|DB",
        "default": "AuthDBMType default",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_dbm.html#authdbmtype"
    },
    {
        "id": "mod_authn_dbm:directive:authdbmuserfile",
        "owner": "mod_authn_dbm",
        "name": "AuthDBMUserFile",
        "kind": "directive",
        "modules": [
            "mod_authn_dbm"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Sets the name of a database file containing the list of users and passwords for authentication",
        "syntax": "AuthDBMUserFile file-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_dbm.html#authdbmuserfile"
    },
    {
        "id": "mod_auth_digest:directive:authdigestalgorithm",
        "owner": "mod_auth_digest",
        "name": "AuthDigestAlgorithm",
        "kind": "directive",
        "modules": [
            "mod_auth_digest"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Selects the algorithm used to calculate the challenge and response hashes in digest authentication",
        "syntax": "AuthDigestAlgorithm MD5|MD5-sess",
        "default": "AuthDigestAlgorithm MD5",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_digest.html#authdigestalgorithm"
    },
    {
        "id": "mod_auth_digest:directive:authdigestdomain",
        "owner": "mod_auth_digest",
        "name": "AuthDigestDomain",
        "kind": "directive",
        "modules": [
            "mod_auth_digest"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "URIs that are in the same protection space for digest authentication",
        "syntax": "AuthDigestDomain URI [URI] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_digest.html#authdigestdomain"
    },
    {
        "id": "mod_auth_digest:directive:authdigestnoncelifetime",
        "owner": "mod_auth_digest",
        "name": "AuthDigestNonceLifetime",
        "kind": "directive",
        "modules": [
            "mod_auth_digest"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "How long the server nonce is valid",
        "syntax": "AuthDigestNonceLifetime seconds",
        "default": "AuthDigestNonceLifetime 300",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_digest.html#authdigestnoncelifetime"
    },
    {
        "id": "mod_auth_digest:directive:authdigestprovider",
        "owner": "mod_auth_digest",
        "name": "AuthDigestProvider",
        "kind": "directive",
        "modules": [
            "mod_auth_digest"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Sets the authentication provider(s) for this location",
        "syntax": "AuthDigestProvider provider-name [provider-name] ...",
        "default": "AuthDigestProvider file",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_digest.html#authdigestprovider"
    },
    {
        "id": "mod_auth_digest:directive:authdigestqop",
        "owner": "mod_auth_digest",
        "name": "AuthDigestQop",
        "kind": "directive",
        "modules": [
            "mod_auth_digest"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Determines the quality-of-protection to use in digest authentication",
        "syntax": "AuthDigestQop none|auth|auth-int [auth|auth-int]",
        "default": "AuthDigestQop auth",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_digest.html#authdigestqop"
    },
    {
        "id": "mod_auth_digest:directive:authdigestshmemsize",
        "owner": "mod_auth_digest",
        "name": "AuthDigestShmemSize",
        "kind": "directive",
        "modules": [
            "mod_auth_digest"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "The amount of shared memory to allocate for keeping track of clients",
        "syntax": "AuthDigestShmemSize size",
        "default": "AuthDigestShmemSize 1000",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_digest.html#authdigestshmemsize"
    },
    {
        "id": "mod_auth_form:directive:authformauthoritative",
        "owner": "mod_auth_form",
        "name": "AuthFormAuthoritative",
        "kind": "directive",
        "modules": [
            "mod_auth_form"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Base",
        "description": "Sets whether authorization and authentication are passed to lower level modules",
        "syntax": "AuthFormAuthoritative On|Off",
        "default": "AuthFormAuthoritative On",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_form.html#authformauthoritative"
    },
    {
        "id": "mod_auth_form:directive:authformbody",
        "owner": "mod_auth_form",
        "name": "AuthFormBody",
        "kind": "directive",
        "modules": [
            "mod_auth_form"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "The name of a form field carrying the body of the request to attempt on successful login",
        "syntax": "AuthFormBody fieldname",
        "default": "AuthFormBody httpd_body",
        "compatibility": "Available in Apache HTTP Server 2.3.0 and later",
        "since": "2.3.0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_form.html#authformbody"
    },
    {
        "id": "mod_auth_form:directive:authformdisablenostore",
        "owner": "mod_auth_form",
        "name": "AuthFormDisableNoStore",
        "kind": "directive",
        "modules": [
            "mod_auth_form"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Disable the CacheControl no-store header on the login page",
        "syntax": "AuthFormDisableNoStore On|Off",
        "default": "AuthFormDisableNoStore Off",
        "compatibility": "Available in Apache HTTP Server 2.3.0 and later",
        "since": "2.3.0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_form.html#authformdisablenostore"
    },
    {
        "id": "mod_auth_form:directive:authformfakebasicauth",
        "owner": "mod_auth_form",
        "name": "AuthFormFakeBasicAuth",
        "kind": "directive",
        "modules": [
            "mod_auth_form"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Fake a Basic Authentication header",
        "syntax": "AuthFormFakeBasicAuth On|Off",
        "default": "AuthFormFakeBasicAuth Off",
        "compatibility": "Available in Apache HTTP Server 2.3.0 and later",
        "since": "2.3.0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_form.html#authformfakebasicauth"
    },
    {
        "id": "mod_auth_form:directive:authformlocation",
        "owner": "mod_auth_form",
        "name": "AuthFormLocation",
        "kind": "directive",
        "modules": [
            "mod_auth_form"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "The name of a form field carrying a URL to redirect to on successful login",
        "syntax": "AuthFormLocation fieldname",
        "default": "AuthFormLocation httpd_location",
        "compatibility": "Available in Apache HTTP Server 2.3.0 and later",
        "since": "2.3.0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_form.html#authformlocation"
    },
    {
        "id": "mod_auth_form:directive:authformloginrequiredlocation",
        "owner": "mod_auth_form",
        "name": "AuthFormLoginRequiredLocation",
        "kind": "directive",
        "modules": [
            "mod_auth_form"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "The URL of the page to be redirected to should login be required",
        "syntax": "AuthFormLoginRequiredLocation url",
        "default": "none",
        "compatibility": "Available in Apache HTTP Server 2.3.0 and later. The use of the expression parser has been added in 2.4.4.",
        "since": "2.3.0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_form.html#authformloginrequiredlocation"
    },
    {
        "id": "mod_auth_form:directive:authformloginsuccesslocation",
        "owner": "mod_auth_form",
        "name": "AuthFormLoginSuccessLocation",
        "kind": "directive",
        "modules": [
            "mod_auth_form"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "The URL of the page to be redirected to should login be successful",
        "syntax": "AuthFormLoginSuccessLocation url",
        "default": "none",
        "compatibility": "Available in Apache HTTP Server 2.3.0 and later. The use of the expression parser has been added in 2.4.4.",
        "since": "2.3.0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_form.html#authformloginsuccesslocation"
    },
    {
        "id": "mod_auth_form:directive:authformlogoutlocation",
        "owner": "mod_auth_form",
        "name": "AuthFormLogoutLocation",
        "kind": "directive",
        "modules": [
            "mod_auth_form"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "The URL to redirect to after a user has logged out",
        "syntax": "AuthFormLogoutLocation uri",
        "default": "none",
        "compatibility": "Available in Apache HTTP Server 2.3.0 and later. The use of the expression parser has been added in 2.4.4.",
        "since": "2.3.0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_form.html#authformlogoutlocation"
    },
    {
        "id": "mod_auth_form:directive:authformmethod",
        "owner": "mod_auth_form",
        "name": "AuthFormMethod",
        "kind": "directive",
        "modules": [
            "mod_auth_form"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "The name of a form field carrying the method of the request to attempt on successful login",
        "syntax": "AuthFormMethod fieldname",
        "default": "AuthFormMethod httpd_method",
        "compatibility": "Available in Apache HTTP Server 2.3.0 and later",
        "since": "2.3.0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_form.html#authformmethod"
    },
    {
        "id": "mod_auth_form:directive:authformmimetype",
        "owner": "mod_auth_form",
        "name": "AuthFormMimetype",
        "kind": "directive",
        "modules": [
            "mod_auth_form"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "The name of a form field carrying the mimetype of the body of the request to attempt on successful login",
        "syntax": "AuthFormMimetype fieldname",
        "default": "AuthFormMimetype httpd_mimetype",
        "compatibility": "Available in Apache HTTP Server 2.3.0 and later",
        "since": "2.3.0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_form.html#authformmimetype"
    },
    {
        "id": "mod_auth_form:directive:authformpassword",
        "owner": "mod_auth_form",
        "name": "AuthFormPassword",
        "kind": "directive",
        "modules": [
            "mod_auth_form"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "The name of a form field carrying the login password",
        "syntax": "AuthFormPassword fieldname",
        "default": "AuthFormPassword httpd_password",
        "compatibility": "Available in Apache HTTP Server 2.3.0 and later",
        "since": "2.3.0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_form.html#authformpassword"
    },
    {
        "id": "mod_auth_form:directive:authformprovider",
        "owner": "mod_auth_form",
        "name": "AuthFormProvider",
        "kind": "directive",
        "modules": [
            "mod_auth_form"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Base",
        "description": "Sets the authentication provider(s) for this location",
        "syntax": "AuthFormProvider provider-name [provider-name] ...",
        "default": "AuthFormProvider file",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_form.html#authformprovider"
    },
    {
        "id": "mod_auth_form:directive:authformsitepassphrase",
        "owner": "mod_auth_form",
        "name": "AuthFormSitePassphrase",
        "kind": "directive",
        "modules": [
            "mod_auth_form"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Bypass authentication checks for high traffic sites",
        "syntax": "AuthFormSitePassphrase secret",
        "default": "none",
        "compatibility": "Available in Apache HTTP Server 2.3.0 and later",
        "since": "2.3.0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_form.html#authformsitepassphrase"
    },
    {
        "id": "mod_auth_form:directive:authformsize",
        "owner": "mod_auth_form",
        "name": "AuthFormSize",
        "kind": "directive",
        "modules": [
            "mod_auth_form"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "The largest size of the form in bytes that will be parsed for the login details",
        "syntax": "AuthFormSize size",
        "default": "AuthFormSize 8192",
        "compatibility": "Available in Apache HTTP Server 2.3.0 and later",
        "since": "2.3.0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_form.html#authformsize"
    },
    {
        "id": "mod_auth_form:directive:authformusername",
        "owner": "mod_auth_form",
        "name": "AuthFormUsername",
        "kind": "directive",
        "modules": [
            "mod_auth_form"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "The name of a form field carrying the login username",
        "syntax": "AuthFormUsername fieldname",
        "default": "AuthFormUsername httpd_username",
        "compatibility": "Available in Apache HTTP Server 2.3.0 and later",
        "since": "2.3.0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_auth_form.html#authformusername"
    },
    {
        "id": "mod_authz_groupfile:directive:authgroupfile",
        "owner": "mod_authz_groupfile",
        "name": "AuthGroupFile",
        "kind": "directive",
        "modules": [
            "mod_authz_groupfile"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Base",
        "description": "Sets the name of a text file containing the list of user groups for authorization",
        "syntax": "AuthGroupFile file-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authz_groupfile.html#authgroupfile"
    },
    {
        "id": "mod_authnz_ldap:directive:authldapauthorizeprefix",
        "owner": "mod_authnz_ldap",
        "name": "AuthLDAPAuthorizePrefix",
        "kind": "directive",
        "modules": [
            "mod_authnz_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Specifies the prefix for environment variables set during authorization",
        "syntax": "AuthLDAPAuthorizePrefix prefix",
        "default": "AuthLDAPAuthorizePrefix AUTHORIZE_",
        "compatibility": "Available in version 2.3.6 and later",
        "since": "2.3.6",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_ldap.html#authldapauthorizeprefix"
    },
    {
        "id": "mod_authnz_ldap:directive:authldapbindauthoritative",
        "owner": "mod_authnz_ldap",
        "name": "AuthLDAPBindAuthoritative",
        "kind": "directive",
        "modules": [
            "mod_authnz_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Determines if other authentication providers are used when a user can be mapped to a DN but the server cannot successfully bind with the user's credentials.",
        "syntax": "AuthLDAPBindAuthoritative off|on",
        "default": "AuthLDAPBindAuthoritative on",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_ldap.html#authldapbindauthoritative"
    },
    {
        "id": "mod_authnz_ldap:directive:authldapbinddn",
        "owner": "mod_authnz_ldap",
        "name": "AuthLDAPBindDN",
        "kind": "directive",
        "modules": [
            "mod_authnz_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Optional DN to use in binding to the LDAP server",
        "syntax": "AuthLDAPBindDN distinguished-name",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_ldap.html#authldapbinddn"
    },
    {
        "id": "mod_authnz_ldap:directive:authldapbindpassword",
        "owner": "mod_authnz_ldap",
        "name": "AuthLDAPBindPassword",
        "kind": "directive",
        "modules": [
            "mod_authnz_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Password used in conjunction with the bind DN",
        "syntax": "AuthLDAPBindPassword password",
        "compatibility": "exec: was added in 2.4.5.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_ldap.html#authldapbindpassword"
    },
    {
        "id": "mod_authnz_ldap:directive:authldapcharsetconfig",
        "owner": "mod_authnz_ldap",
        "name": "AuthLDAPCharsetConfig",
        "kind": "directive",
        "modules": [
            "mod_authnz_ldap"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Language to charset conversion configuration file",
        "syntax": "AuthLDAPCharsetConfig file-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_ldap.html#authldapcharsetconfig"
    },
    {
        "id": "mod_authnz_ldap:directive:authldapcompareasuser",
        "owner": "mod_authnz_ldap",
        "name": "AuthLDAPCompareAsUser",
        "kind": "directive",
        "modules": [
            "mod_authnz_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Use the authenticated user's credentials to perform authorization comparisons",
        "syntax": "AuthLDAPCompareAsUser on|off",
        "default": "AuthLDAPCompareAsUser off",
        "compatibility": "Available in version 2.3.6 and later",
        "since": "2.3.6",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_ldap.html#authldapcompareasuser"
    },
    {
        "id": "mod_authnz_ldap:directive:authldapcomparednonserver",
        "owner": "mod_authnz_ldap",
        "name": "AuthLDAPCompareDNOnServer",
        "kind": "directive",
        "modules": [
            "mod_authnz_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Use the LDAP server to compare the DNs",
        "syntax": "AuthLDAPCompareDNOnServer on|off",
        "default": "AuthLDAPCompareDNOnServer on",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_ldap.html#authldapcomparednonserver"
    },
    {
        "id": "mod_authnz_ldap:directive:authldapdereferencealiases",
        "owner": "mod_authnz_ldap",
        "name": "AuthLDAPDereferenceAliases",
        "kind": "directive",
        "modules": [
            "mod_authnz_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "When will the module de-reference aliases",
        "syntax": "AuthLDAPDereferenceAliases never|searching|finding|always",
        "default": "AuthLDAPDereferenceAliases always",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_ldap.html#authldapdereferencealiases"
    },
    {
        "id": "mod_authnz_ldap:directive:authldapgroupattribute",
        "owner": "mod_authnz_ldap",
        "name": "AuthLDAPGroupAttribute",
        "kind": "directive",
        "modules": [
            "mod_authnz_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "LDAP attributes used to identify the user members of groups.",
        "syntax": "AuthLDAPGroupAttribute attribute",
        "default": "AuthLDAPGroupAttribute member uniqueMember",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_ldap.html#authldapgroupattribute"
    },
    {
        "id": "mod_authnz_ldap:directive:authldapgroupattributeisdn",
        "owner": "mod_authnz_ldap",
        "name": "AuthLDAPGroupAttributeIsDN",
        "kind": "directive",
        "modules": [
            "mod_authnz_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Use the DN of the client username when checking for group membership",
        "syntax": "AuthLDAPGroupAttributeIsDN on|off",
        "default": "AuthLDAPGroupAttributeIsDN on",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_ldap.html#authldapgroupattributeisdn"
    },
    {
        "id": "mod_authnz_ldap:directive:authldapinitialbindasuser",
        "owner": "mod_authnz_ldap",
        "name": "AuthLDAPInitialBindAsUser",
        "kind": "directive",
        "modules": [
            "mod_authnz_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Determines if the server does the initial DN lookup using the basic authentication users' own username, instead of anonymously or with hard-coded credentials for the server",
        "syntax": "AuthLDAPInitialBindAsUser off|on",
        "default": "AuthLDAPInitialBindAsUser off",
        "compatibility": "Available in version 2.3.6 and later",
        "since": "2.3.6",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_ldap.html#authldapinitialbindasuser"
    },
    {
        "id": "mod_authnz_ldap:directive:authldapinitialbindpattern",
        "owner": "mod_authnz_ldap",
        "name": "AuthLDAPInitialBindPattern",
        "kind": "directive",
        "modules": [
            "mod_authnz_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Specifies the transformation of the basic authentication username to be used when binding to the LDAP server to perform a DN lookup",
        "syntax": "AuthLDAPInitialBindPattern regex substitution",
        "default": "AuthLDAPInitialBindPattern (.*) $1 (remote username used verbatim)",
        "compatibility": "Available in version 2.3.6 and later",
        "since": "2.3.6",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_ldap.html#authldapinitialbindpattern"
    },
    {
        "id": "mod_authnz_ldap:directive:authldapmaxsubgroupdepth",
        "owner": "mod_authnz_ldap",
        "name": "AuthLDAPMaxSubGroupDepth",
        "kind": "directive",
        "modules": [
            "mod_authnz_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Specifies the maximum sub-group nesting depth that will be evaluated before the user search is discontinued.",
        "syntax": "AuthLDAPMaxSubGroupDepth Number",
        "default": "AuthLDAPMaxSubGroupDepth 10",
        "compatibility": "Available in version 2.3.0 and later",
        "since": "2.3.0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_ldap.html#authldapmaxsubgroupdepth"
    },
    {
        "id": "mod_authnz_ldap:directive:authldapremoteuserattribute",
        "owner": "mod_authnz_ldap",
        "name": "AuthLDAPRemoteUserAttribute",
        "kind": "directive",
        "modules": [
            "mod_authnz_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Use the value of the attribute returned during the user query to set the REMOTE_USER environment variable",
        "syntax": "AuthLDAPRemoteUserAttribute uid",
        "default": "none",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_ldap.html#authldapremoteuserattribute"
    },
    {
        "id": "mod_authnz_ldap:directive:authldapremoteuserisdn",
        "owner": "mod_authnz_ldap",
        "name": "AuthLDAPRemoteUserIsDN",
        "kind": "directive",
        "modules": [
            "mod_authnz_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Use the DN of the client username to set the REMOTE_USER environment variable",
        "syntax": "AuthLDAPRemoteUserIsDN on|off",
        "default": "AuthLDAPRemoteUserIsDN off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_ldap.html#authldapremoteuserisdn"
    },
    {
        "id": "mod_authnz_ldap:directive:authldapsearchasuser",
        "owner": "mod_authnz_ldap",
        "name": "AuthLDAPSearchAsUser",
        "kind": "directive",
        "modules": [
            "mod_authnz_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Use the authenticated user's credentials to perform authorization searches",
        "syntax": "AuthLDAPSearchAsUser on|off",
        "default": "AuthLDAPSearchAsUser off",
        "compatibility": "Available in version 2.3.6 and later",
        "since": "2.3.6",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_ldap.html#authldapsearchasuser"
    },
    {
        "id": "mod_authnz_ldap:directive:authldapsubgroupattribute",
        "owner": "mod_authnz_ldap",
        "name": "AuthLDAPSubGroupAttribute",
        "kind": "directive",
        "modules": [
            "mod_authnz_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Specifies the attribute labels, one value per directive line, used to distinguish the members of the current group that are groups.",
        "syntax": "AuthLDAPSubGroupAttribute attribute",
        "default": "AuthLDAPSubGroupAttribute member uniqueMember",
        "compatibility": "Available in version 2.3.0 and later",
        "since": "2.3.0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_ldap.html#authldapsubgroupattribute"
    },
    {
        "id": "mod_authnz_ldap:directive:authldapsubgroupclass",
        "owner": "mod_authnz_ldap",
        "name": "AuthLDAPSubGroupClass",
        "kind": "directive",
        "modules": [
            "mod_authnz_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Specifies which LDAP objectClass values identify directory objects that are groups during sub-group processing.",
        "syntax": "AuthLDAPSubGroupClass LdapObjectClass",
        "default": "AuthLDAPSubGroupClass groupOfNames groupOfUniqueNames",
        "compatibility": "Available in version 2.3.0 and later",
        "since": "2.3.0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_ldap.html#authldapsubgroupclass"
    },
    {
        "id": "mod_authnz_ldap:directive:authldapurl",
        "owner": "mod_authnz_ldap",
        "name": "AuthLDAPURL",
        "kind": "directive",
        "modules": [
            "mod_authnz_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "URL specifying the LDAP search parameters",
        "syntax": "AuthLDAPURL url [NONE|SSL|TLS|STARTTLS]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_ldap.html#authldapurl"
    },
    {
        "id": "mod_authz_core:directive:authmerging",
        "owner": "mod_authz_core",
        "name": "AuthMerging",
        "kind": "directive",
        "modules": [
            "mod_authz_core"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Base",
        "description": "Controls the manner in which each configuration section's authorization logic is combined with that of preceding configuration sections.",
        "syntax": "AuthMerging Off | And | Or",
        "default": "AuthMerging Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html#authmerging"
    },
    {
        "id": "mod_authn_core:directive:authname",
        "owner": "mod_authn_core",
        "name": "AuthName",
        "kind": "directive",
        "modules": [
            "mod_authn_core"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Base",
        "description": "Authorization realm for use in HTTP authentication",
        "syntax": "AuthName auth-domain",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_core.html#authname"
    },
    {
        "id": "mod_authn_socache:directive:authncachecontext",
        "owner": "mod_authn_socache",
        "name": "AuthnCacheContext",
        "kind": "directive",
        "modules": [
            "mod_authn_socache"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Specify a context string for use in the cache key",
        "syntax": "AuthnCacheContext directory|server|custom-string",
        "default": "AuthnCacheContext directory",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_socache.html#authncachecontext"
    },
    {
        "id": "mod_authn_socache:directive:authncacheenable",
        "owner": "mod_authn_socache",
        "name": "AuthnCacheEnable",
        "kind": "directive",
        "modules": [
            "mod_authn_socache"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Base",
        "description": "Enable Authn caching configured anywhere",
        "syntax": "AuthnCacheEnable",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_socache.html#authncacheenable"
    },
    {
        "id": "mod_authn_socache:directive:authncacheprovidefor",
        "owner": "mod_authn_socache",
        "name": "AuthnCacheProvideFor",
        "kind": "directive",
        "modules": [
            "mod_authn_socache"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Base",
        "description": "Specify which authn provider(s) to cache for",
        "syntax": "AuthnCacheProvideFor authn-provider [...]",
        "default": "None",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_socache.html#authncacheprovidefor"
    },
    {
        "id": "mod_authn_socache:directive:authncachesocache",
        "owner": "mod_authn_socache",
        "name": "AuthnCacheSOCache",
        "kind": "directive",
        "modules": [
            "mod_authn_socache"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Base",
        "description": "Select socache backend provider to use",
        "syntax": "AuthnCacheSOCache provider-name[:provider-args]",
        "compatibility": "Optional provider arguments are available in Apache HTTP Server 2.4.7 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_socache.html#authncachesocache"
    },
    {
        "id": "mod_authn_socache:directive:authncachetimeout",
        "owner": "mod_authn_socache",
        "name": "AuthnCacheTimeout",
        "kind": "directive",
        "modules": [
            "mod_authn_socache"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Base",
        "description": "Set a timeout for cache entries",
        "syntax": "AuthnCacheTimeout timeout (seconds)",
        "default": "AuthnCacheTimeout 300 (5 minutes)",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_socache.html#authncachetimeout"
    },
    {
        "id": "mod_authn_core:section:authnprovideralias",
        "owner": "mod_authn_core",
        "name": "AuthnProviderAlias",
        "kind": "section",
        "modules": [
            "mod_authn_core"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Base",
        "description": "Enclose a group of directives that represent an extension of a base authentication provider and referenced by the specified alias",
        "syntax": "<AuthnProviderAlias baseProvider Alias> ... </AuthnProviderAlias>",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_core.html#authnprovideralias"
    },
    {
        "id": "mod_authnz_fcgi:directive:authnzfcgicheckauthnprovider",
        "owner": "mod_authnz_fcgi",
        "name": "AuthnzFcgiCheckAuthnProvider",
        "kind": "directive",
        "modules": [
            "mod_authnz_fcgi"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enables a FastCGI application to handle the check_authn authentication hook.",
        "syntax": "AuthnzFcgiCheckAuthnProvider provider-name|None option ...",
        "default": "none",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_fcgi.html#authnzfcgicheckauthnprovider"
    },
    {
        "id": "mod_authnz_fcgi:directive:authnzfcgidefineprovider",
        "owner": "mod_authnz_fcgi",
        "name": "AuthnzFcgiDefineProvider",
        "kind": "directive",
        "modules": [
            "mod_authnz_fcgi"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Defines a FastCGI application as a provider for authentication and/or authorization",
        "syntax": "AuthnzFcgiDefineProvider type provider-name backend-address",
        "default": "none",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authnz_fcgi.html#authnzfcgidefineprovider"
    },
    {
        "id": "mod_authn_core:directive:authtype",
        "owner": "mod_authn_core",
        "name": "AuthType",
        "kind": "directive",
        "modules": [
            "mod_authn_core"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Base",
        "description": "Type of user authentication",
        "syntax": "AuthType None|Basic|Digest|Form",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_core.html#authtype"
    },
    {
        "id": "mod_authn_file:directive:authuserfile",
        "owner": "mod_authn_file",
        "name": "AuthUserFile",
        "kind": "directive",
        "modules": [
            "mod_authn_file"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Base",
        "description": "Sets the name of a text file containing the list of users and passwords for authentication",
        "syntax": "AuthUserFile file-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authn_file.html#authuserfile"
    },
    {
        "id": "mod_authz_dbd:directive:authzdbdlogintoreferer",
        "owner": "mod_authz_dbd",
        "name": "AuthzDBDLoginToReferer",
        "kind": "directive",
        "modules": [
            "mod_authz_dbd"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Determines whether to redirect the Client to the Referring page on successful login or logout if a Referer request header is present",
        "syntax": "AuthzDBDLoginToReferer On|Off",
        "default": "AuthzDBDLoginToReferer Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authz_dbd.html#authzdbdlogintoreferer"
    },
    {
        "id": "mod_authz_dbd:directive:authzdbdquery",
        "owner": "mod_authz_dbd",
        "name": "AuthzDBDQuery",
        "kind": "directive",
        "modules": [
            "mod_authz_dbd"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Specify the SQL Query for the required operation",
        "syntax": "AuthzDBDQuery query",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authz_dbd.html#authzdbdquery"
    },
    {
        "id": "mod_authz_dbd:directive:authzdbdredirectquery",
        "owner": "mod_authz_dbd",
        "name": "AuthzDBDRedirectQuery",
        "kind": "directive",
        "modules": [
            "mod_authz_dbd"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Specify a query to look up a login page for the user",
        "syntax": "AuthzDBDRedirectQuery query",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authz_dbd.html#authzdbdredirectquery"
    },
    {
        "id": "mod_authz_dbm:directive:authzdbmtype",
        "owner": "mod_authz_dbm",
        "name": "AuthzDBMType",
        "kind": "directive",
        "modules": [
            "mod_authz_dbm"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Sets the type of database file that is used to store list of user groups",
        "syntax": "AuthzDBMType default|SDBM|GDBM|NDBM|DB",
        "default": "AuthzDBMType default",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authz_dbm.html#authzdbmtype"
    },
    {
        "id": "mod_authz_core:section:authzprovideralias",
        "owner": "mod_authz_core",
        "name": "AuthzProviderAlias",
        "kind": "section",
        "modules": [
            "mod_authz_core"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Base",
        "description": "Enclose a group of directives that represent an extension of a base authorization provider and referenced by the specified alias",
        "syntax": "<AuthzProviderAlias baseProvider Alias Require-Parameters> ... </AuthzProviderAlias>",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html#authzprovideralias"
    },
    {
        "id": "mod_authz_core:directive:authzsendforbiddenonfailure",
        "owner": "mod_authz_core",
        "name": "AuthzSendForbiddenOnFailure",
        "kind": "directive",
        "modules": [
            "mod_authz_core"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Base",
        "description": "Send '403 FORBIDDEN' instead of '401 UNAUTHORIZED' if authentication succeeds but authorization fails",
        "syntax": "AuthzSendForbiddenOnFailure On|Off",
        "default": "AuthzSendForbiddenOnFailure Off",
        "compatibility": "Available in Apache HTTPD 2.3.11 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html#authzsendforbiddenonfailure"
    },
    {
        "id": "mod_proxy:directive:balancergrowth",
        "owner": "mod_proxy",
        "name": "BalancerGrowth",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Number of additional Balancers that can be added Post-configuration",
        "syntax": "BalancerGrowth #",
        "default": "BalancerGrowth 5",
        "compatibility": "BalancerGrowth is only available in Apache HTTP Server 2.3.13 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#balancergrowth"
    },
    {
        "id": "mod_proxy:directive:balancerinherit",
        "owner": "mod_proxy",
        "name": "BalancerInherit",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Inherit ProxyPassed Balancers/Workers from the main server",
        "syntax": "BalancerInherit On|Off",
        "default": "BalancerInherit On",
        "compatibility": "BalancerInherit is only available in Apache HTTP Server 2.4.5 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#balancerinherit"
    },
    {
        "id": "mod_proxy:directive:balancermember",
        "owner": "mod_proxy",
        "name": "BalancerMember",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Add a member to a load balancing group",
        "syntax": "BalancerMember [balancerurl] url [key=value [key=value ...]]",
        "compatibility": "BalancerMember is only available in Apache HTTP Server 2.2 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#balancermember"
    },
    {
        "id": "mod_proxy:directive:balancerpersist",
        "owner": "mod_proxy",
        "name": "BalancerPersist",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Attempt to persist changes made by the Balancer Manager across restarts.",
        "syntax": "BalancerPersist On|Off",
        "default": "BalancerPersist Off",
        "compatibility": "BalancerPersist is only available in Apache HTTP Server 2.4.4 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#balancerpersist"
    },
    {
        "id": "mod_brotli:directive:brotlialteretag",
        "owner": "mod_brotli",
        "name": "BrotliAlterETag",
        "kind": "directive",
        "modules": [
            "mod_brotli"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "How the outgoing ETag header should be modified during compression",
        "syntax": "BrotliAlterETag AddSuffix|NoChange|Remove",
        "default": "BrotliAlterETag AddSuffix",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_brotli.html#brotlialteretag"
    },
    {
        "id": "mod_brotli:directive:brotlicompressionmaxinputblock",
        "owner": "mod_brotli",
        "name": "BrotliCompressionMaxInputBlock",
        "kind": "directive",
        "modules": [
            "mod_brotli"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maximum input block size",
        "syntax": "BrotliCompressionMaxInputBlock value",
        "default": "(automatic)",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_brotli.html#brotlicompressionmaxinputblock"
    },
    {
        "id": "mod_brotli:directive:brotlicompressionquality",
        "owner": "mod_brotli",
        "name": "BrotliCompressionQuality",
        "kind": "directive",
        "modules": [
            "mod_brotli"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Compression quality",
        "syntax": "BrotliCompressionQuality value",
        "default": "BrotliCompressionQuality 5",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_brotli.html#brotlicompressionquality"
    },
    {
        "id": "mod_brotli:directive:brotlicompressionwindow",
        "owner": "mod_brotli",
        "name": "BrotliCompressionWindow",
        "kind": "directive",
        "modules": [
            "mod_brotli"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Brotli sliding compression window size",
        "syntax": "BrotliCompressionWindow value",
        "default": "BrotliCompressionWindow 18",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_brotli.html#brotlicompressionwindow"
    },
    {
        "id": "mod_brotli:directive:brotlifilternote",
        "owner": "mod_brotli",
        "name": "BrotliFilterNote",
        "kind": "directive",
        "modules": [
            "mod_brotli"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Places the compression ratio in a note for logging",
        "syntax": "BrotliFilterNote [type] notename",
        "default": "None",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_brotli.html#brotlifilternote"
    },
    {
        "id": "mod_setenvif:directive:browsermatch",
        "owner": "mod_setenvif",
        "name": "BrowserMatch",
        "kind": "directive",
        "modules": [
            "mod_setenvif"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Sets environment variables conditional on HTTP User-Agent",
        "syntax": "BrowserMatch regex [!]env-variable[=value] [[!]env-variable[=value]] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_setenvif.html#browsermatch"
    },
    {
        "id": "mod_setenvif:directive:browsermatchnocase",
        "owner": "mod_setenvif",
        "name": "BrowserMatchNoCase",
        "kind": "directive",
        "modules": [
            "mod_setenvif"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Sets environment variables conditional on User-Agent without respect to case",
        "syntax": "BrowserMatchNoCase regex [!]env-variable[=value] [[!]env-variable[=value]] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_setenvif.html#browsermatchnocase"
    },
    {
        "id": "mod_log_config:directive:bufferedlogs",
        "owner": "mod_log_config",
        "name": "BufferedLogs",
        "kind": "directive",
        "modules": [
            "mod_log_config"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Base",
        "description": "Buffer log entries in memory before writing to disk",
        "syntax": "BufferedLogs On|Off",
        "default": "BufferedLogs Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_log_config.html#bufferedlogs"
    },
    {
        "id": "mod_buffer:directive:buffersize",
        "owner": "mod_buffer",
        "name": "BufferSize",
        "kind": "directive",
        "modules": [
            "mod_buffer"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maximum size in bytes to buffer by the buffer filter",
        "syntax": "BufferSize integer",
        "default": "BufferSize 131072",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_buffer.html#buffersize"
    },
    {
        "id": "mod_cache:directive:cachedefaultexpire",
        "owner": "mod_cache",
        "name": "CacheDefaultExpire",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "The default duration to cache a document when no expiry date is specified.",
        "syntax": "CacheDefaultExpire seconds",
        "default": "CacheDefaultExpire 3600 (one hour)",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cachedefaultexpire"
    },
    {
        "id": "mod_cache:directive:cachedetailheader",
        "owner": "mod_cache",
        "name": "CacheDetailHeader",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Add an X-Cache-Detail header to the response.",
        "syntax": "CacheDetailHeader on|off",
        "default": "CacheDetailHeader off",
        "compatibility": "Available in Apache 2.3.9 and later",
        "since": "2.3.9",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cachedetailheader"
    },
    {
        "id": "mod_cache_disk:directive:cachedirlength",
        "owner": "mod_cache_disk",
        "name": "CacheDirLength",
        "kind": "directive",
        "modules": [
            "mod_cache_disk"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "The number of characters in subdirectory names",
        "syntax": "CacheDirLength length",
        "default": "CacheDirLength 2",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache_disk.html#cachedirlength"
    },
    {
        "id": "mod_cache_disk:directive:cachedirlevels",
        "owner": "mod_cache_disk",
        "name": "CacheDirLevels",
        "kind": "directive",
        "modules": [
            "mod_cache_disk"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "The number of levels of subdirectories in the cache.",
        "syntax": "CacheDirLevels levels",
        "default": "CacheDirLevels 2",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache_disk.html#cachedirlevels"
    },
    {
        "id": "mod_cache:directive:cachedisable",
        "owner": "mod_cache",
        "name": "CacheDisable",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Disable caching of specified URLs",
        "syntax": "CacheDisable url-string | on",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cachedisable"
    },
    {
        "id": "mod_cache:directive:cacheenable",
        "owner": "mod_cache",
        "name": "CacheEnable",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enable caching of specified URLs using a specified storage manager",
        "syntax": "CacheEnable cache_type [url-string]",
        "compatibility": "A url-string of '/' applied to forward proxy content in 2.2 and earlier.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cacheenable"
    },
    {
        "id": "mod_file_cache:directive:cachefile",
        "owner": "mod_file_cache",
        "name": "CacheFile",
        "kind": "directive",
        "modules": [
            "mod_file_cache"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Cache a list of file handles at startup time",
        "syntax": "CacheFile file-path [file-path] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_file_cache.html#cachefile"
    },
    {
        "id": "mod_cache:directive:cacheheader",
        "owner": "mod_cache",
        "name": "CacheHeader",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Add an X-Cache header to the response.",
        "syntax": "CacheHeader on|off",
        "default": "CacheHeader off",
        "compatibility": "Available in Apache 2.3.9 and later",
        "since": "2.3.9",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cacheheader"
    },
    {
        "id": "mod_cache:directive:cacheignorecachecontrol",
        "owner": "mod_cache",
        "name": "CacheIgnoreCacheControl",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Ignore request to not serve cached content to client",
        "syntax": "CacheIgnoreCacheControl On|Off",
        "default": "CacheIgnoreCacheControl Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cacheignorecachecontrol"
    },
    {
        "id": "mod_cache:directive:cacheignoreheaders",
        "owner": "mod_cache",
        "name": "CacheIgnoreHeaders",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Do not store the given HTTP header(s) in the cache.",
        "syntax": "CacheIgnoreHeaders header-string [header-string] ...",
        "default": "CacheIgnoreHeaders None",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cacheignoreheaders"
    },
    {
        "id": "mod_cache:directive:cacheignorenolastmod",
        "owner": "mod_cache",
        "name": "CacheIgnoreNoLastMod",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Ignore the fact that a response has no Last Modified header.",
        "syntax": "CacheIgnoreNoLastMod On|Off",
        "default": "CacheIgnoreNoLastMod Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cacheignorenolastmod"
    },
    {
        "id": "mod_cache:directive:cacheignorequerystring",
        "owner": "mod_cache",
        "name": "CacheIgnoreQueryString",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Ignore query string when caching",
        "syntax": "CacheIgnoreQueryString On|Off",
        "default": "CacheIgnoreQueryString Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cacheignorequerystring"
    },
    {
        "id": "mod_cache:directive:cacheignoreurlsessionidentifiers",
        "owner": "mod_cache",
        "name": "CacheIgnoreURLSessionIdentifiers",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Ignore defined session identifiers encoded in the URL when caching",
        "syntax": "CacheIgnoreURLSessionIdentifiers identifier [identifier] ...",
        "default": "CacheIgnoreURLSessionIdentifiers None",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cacheignoreurlsessionidentifiers"
    },
    {
        "id": "mod_cache:directive:cachekeybaseurl",
        "owner": "mod_cache",
        "name": "CacheKeyBaseURL",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Override the base URL of reverse proxied cache keys.",
        "syntax": "CacheKeyBaseURL URL",
        "compatibility": "Available in Apache 2.3.9 and later",
        "since": "2.3.9",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cachekeybaseurl"
    },
    {
        "id": "mod_cache:directive:cachelastmodifiedfactor",
        "owner": "mod_cache",
        "name": "CacheLastModifiedFactor",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "The factor used to compute an expiry date based on the LastModified date.",
        "syntax": "CacheLastModifiedFactor float",
        "default": "CacheLastModifiedFactor 0.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cachelastmodifiedfactor"
    },
    {
        "id": "mod_cache:directive:cachelock",
        "owner": "mod_cache",
        "name": "CacheLock",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enable the thundering herd lock.",
        "syntax": "CacheLock on|off",
        "default": "CacheLock off",
        "compatibility": "Available in Apache 2.2.15 and later",
        "since": "2.2.15",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cachelock"
    },
    {
        "id": "mod_cache:directive:cachelockmaxage",
        "owner": "mod_cache",
        "name": "CacheLockMaxAge",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Set the maximum possible age of a cache lock.",
        "syntax": "CacheLockMaxAge integer",
        "default": "CacheLockMaxAge 5",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cachelockmaxage"
    },
    {
        "id": "mod_cache:directive:cachelockpath",
        "owner": "mod_cache",
        "name": "CacheLockPath",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Set the lock path directory.",
        "syntax": "CacheLockPath directory",
        "default": "CacheLockPath /tmp/mod_cache-lock",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cachelockpath"
    },
    {
        "id": "mod_cache:directive:cachemaxexpire",
        "owner": "mod_cache",
        "name": "CacheMaxExpire",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "The maximum time in seconds to cache a document",
        "syntax": "CacheMaxExpire seconds",
        "default": "CacheMaxExpire 86400 (one day)",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cachemaxexpire"
    },
    {
        "id": "mod_cache_disk:directive:cachemaxfilesize",
        "owner": "mod_cache_disk",
        "name": "CacheMaxFileSize",
        "kind": "directive",
        "modules": [
            "mod_cache_disk"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "The maximum size (in bytes) of a document to be placed in the cache",
        "syntax": "CacheMaxFileSize bytes",
        "default": "CacheMaxFileSize 1000000",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache_disk.html#cachemaxfilesize"
    },
    {
        "id": "mod_cache:directive:cacheminexpire",
        "owner": "mod_cache",
        "name": "CacheMinExpire",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "The minimum time in seconds to cache a document",
        "syntax": "CacheMinExpire seconds",
        "default": "CacheMinExpire 0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cacheminexpire"
    },
    {
        "id": "mod_cache_disk:directive:cacheminfilesize",
        "owner": "mod_cache_disk",
        "name": "CacheMinFileSize",
        "kind": "directive",
        "modules": [
            "mod_cache_disk"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "The minimum size (in bytes) of a document to be placed in the cache",
        "syntax": "CacheMinFileSize bytes",
        "default": "CacheMinFileSize 1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache_disk.html#cacheminfilesize"
    },
    {
        "id": "mod_negotiation:directive:cachenegotiateddocs",
        "owner": "mod_negotiation",
        "name": "CacheNegotiatedDocs",
        "kind": "directive",
        "modules": [
            "mod_negotiation"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "Allows content-negotiated documents to be cached by proxy servers",
        "syntax": "CacheNegotiatedDocs On|Off",
        "default": "CacheNegotiatedDocs Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_negotiation.html#cachenegotiateddocs"
    },
    {
        "id": "mod_cache:directive:cachequickhandler",
        "owner": "mod_cache",
        "name": "CacheQuickHandler",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Run the cache from the quick handler.",
        "syntax": "CacheQuickHandler on|off",
        "default": "CacheQuickHandler on",
        "compatibility": "Apache HTTP Server 2.3.3 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cachequickhandler"
    },
    {
        "id": "mod_cache_disk:directive:cachereadsize",
        "owner": "mod_cache_disk",
        "name": "CacheReadSize",
        "kind": "directive",
        "modules": [
            "mod_cache_disk"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "The minimum size (in bytes) of the document to read and be cached before sending the data downstream",
        "syntax": "CacheReadSize bytes",
        "default": "CacheReadSize 0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache_disk.html#cachereadsize"
    },
    {
        "id": "mod_cache_disk:directive:cachereadtime",
        "owner": "mod_cache_disk",
        "name": "CacheReadTime",
        "kind": "directive",
        "modules": [
            "mod_cache_disk"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "The minimum time (in milliseconds) that should elapse while reading before data is sent downstream",
        "syntax": "CacheReadTime milliseconds",
        "default": "CacheReadTime 0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache_disk.html#cachereadtime"
    },
    {
        "id": "mod_cache_disk:directive:cacheroot",
        "owner": "mod_cache_disk",
        "name": "CacheRoot",
        "kind": "directive",
        "modules": [
            "mod_cache_disk"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "The directory root under which cache files are stored",
        "syntax": "CacheRoot directory",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache_disk.html#cacheroot"
    },
    {
        "id": "mod_cache_socache:directive:cachesocache",
        "owner": "mod_cache_socache",
        "name": "CacheSocache",
        "kind": "directive",
        "modules": [
            "mod_cache_socache"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "The shared object cache implementation to use",
        "syntax": "CacheSocache type[:args]",
        "compatibility": "Available in Apache 2.4.5 and later",
        "since": "2.4.5",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache_socache.html#cachesocache"
    },
    {
        "id": "mod_cache_socache:directive:cachesocachemaxsize",
        "owner": "mod_cache_socache",
        "name": "CacheSocacheMaxSize",
        "kind": "directive",
        "modules": [
            "mod_cache_socache"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "The maximum size (in bytes) of an entry to be placed in the cache",
        "syntax": "CacheSocacheMaxSize bytes",
        "default": "CacheSocacheMaxSize 102400",
        "compatibility": "Available in Apache 2.4.5 and later",
        "since": "2.4.5",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache_socache.html#cachesocachemaxsize"
    },
    {
        "id": "mod_cache_socache:directive:cachesocachemaxtime",
        "owner": "mod_cache_socache",
        "name": "CacheSocacheMaxTime",
        "kind": "directive",
        "modules": [
            "mod_cache_socache"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "The maximum time (in seconds) for a document to be placed in the cache",
        "syntax": "CacheSocacheMaxTime seconds",
        "default": "CacheSocacheMaxTime 86400",
        "compatibility": "Available in Apache 2.4.5 and later",
        "since": "2.4.5",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache_socache.html#cachesocachemaxtime"
    },
    {
        "id": "mod_cache_socache:directive:cachesocachemintime",
        "owner": "mod_cache_socache",
        "name": "CacheSocacheMinTime",
        "kind": "directive",
        "modules": [
            "mod_cache_socache"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "The minimum time (in seconds) for a document to be placed in the cache",
        "syntax": "CacheSocacheMinTime seconds",
        "default": "CacheSocacheMinTime 600",
        "compatibility": "Available in Apache 2.4.5 and later",
        "since": "2.4.5",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache_socache.html#cachesocachemintime"
    },
    {
        "id": "mod_cache_socache:directive:cachesocachereadsize",
        "owner": "mod_cache_socache",
        "name": "CacheSocacheReadSize",
        "kind": "directive",
        "modules": [
            "mod_cache_socache"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "The minimum size (in bytes) of the document to read and be cached before sending the data downstream",
        "syntax": "CacheSocacheReadSize bytes",
        "default": "CacheSocacheReadSize 0",
        "compatibility": "Available in Apache 2.4.5 and later",
        "since": "2.4.5",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache_socache.html#cachesocachereadsize"
    },
    {
        "id": "mod_cache_socache:directive:cachesocachereadtime",
        "owner": "mod_cache_socache",
        "name": "CacheSocacheReadTime",
        "kind": "directive",
        "modules": [
            "mod_cache_socache"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "The minimum time (in milliseconds) that should elapse while reading before data is sent downstream",
        "syntax": "CacheSocacheReadTime milliseconds",
        "default": "CacheSocacheReadTime 0",
        "compatibility": "Available in Apache 2.4.5 and later",
        "since": "2.4.5",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache_socache.html#cachesocachereadtime"
    },
    {
        "id": "mod_cache:directive:cachestaleonerror",
        "owner": "mod_cache",
        "name": "CacheStaleOnError",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Serve stale content in place of 5xx responses.",
        "syntax": "CacheStaleOnError on|off",
        "default": "CacheStaleOnError on",
        "compatibility": "Available in Apache 2.3.9 and later",
        "since": "2.3.9",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cachestaleonerror"
    },
    {
        "id": "mod_cache:directive:cachestoreexpired",
        "owner": "mod_cache",
        "name": "CacheStoreExpired",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Attempt to cache responses that the server reports as expired",
        "syntax": "CacheStoreExpired On|Off",
        "default": "CacheStoreExpired Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cachestoreexpired"
    },
    {
        "id": "mod_cache:directive:cachestorenostore",
        "owner": "mod_cache",
        "name": "CacheStoreNoStore",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Attempt to cache requests or responses that have been marked as no-store.",
        "syntax": "CacheStoreNoStore On|Off",
        "default": "CacheStoreNoStore Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cachestorenostore"
    },
    {
        "id": "mod_cache:directive:cachestoreprivate",
        "owner": "mod_cache",
        "name": "CacheStorePrivate",
        "kind": "directive",
        "modules": [
            "mod_cache"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Attempt to cache responses that the server has marked as private",
        "syntax": "CacheStorePrivate On|Off",
        "default": "CacheStorePrivate Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cache.html#cachestoreprivate"
    },
    {
        "id": "mod_cgid:directive:cgidscripttimeout",
        "owner": "mod_cgid",
        "name": "CGIDScriptTimeout",
        "kind": "directive",
        "modules": [
            "mod_cgid"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Base",
        "description": "The length of time to wait for more output from the CGI program",
        "syntax": "CGIDScriptTimeout time[s|ms]",
        "default": "value of Timeout directive when unset or set to 0",
        "compatibility": "Available in httpd 2.4.10 and later; in prior releases no timeout was applied",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cgid.html#cgidscripttimeout"
    },
    {
        "id": "core:directive:cgimapextension",
        "owner": "core",
        "name": "CGIMapExtension",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Core",
        "description": "Technique for locating the interpreter for CGI scripts",
        "syntax": "CGIMapExtension cgi-path .extension",
        "compatibility": "NetWare only",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#cgimapextension"
    },
    {
        "id": "core:directive:cgipassauth",
        "owner": "core",
        "name": "CGIPassAuth",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Core",
        "description": "Enables passing HTTP authorization headers to scripts as CGI variables",
        "syntax": "CGIPassAuth On|Off",
        "default": "CGIPassAuth Off",
        "compatibility": "Available in Apache HTTP Server 2.4.13 and later",
        "since": "2.4.13",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#cgipassauth"
    },
    {
        "id": "mod_cgi:directive:cgiscripttimeout",
        "owner": "mod_cgi",
        "name": "CGIScriptTimeout",
        "kind": "directive",
        "modules": [
            "mod_cgi"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Base",
        "description": "The length of time to wait for more output from the CGI program",
        "syntax": "CGIScriptTimeout time[s|ms]",
        "default": "value of Timeout directive when unset",
        "compatibility": "Available in version 2.4.59 and later.",
        "since": "2.4.59",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cgi.html#cgiscripttimeout"
    },
    {
        "id": "core:directive:cgivar",
        "owner": "core",
        "name": "CGIVar",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Core",
        "description": "Controls how some CGI variables are set",
        "syntax": "CGIVar variable rule",
        "compatibility": "Available in Apache HTTP Server 2.4.21 and later",
        "since": "2.4.21",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#cgivar"
    },
    {
        "id": "mod_charset_lite:directive:charsetdefault",
        "owner": "mod_charset_lite",
        "name": "CharsetDefault",
        "kind": "directive",
        "modules": [
            "mod_charset_lite"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "Charset to translate into",
        "syntax": "CharsetDefault charset",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_charset_lite.html#charsetdefault"
    },
    {
        "id": "mod_charset_lite:directive:charsetoptions",
        "owner": "mod_charset_lite",
        "name": "CharsetOptions",
        "kind": "directive",
        "modules": [
            "mod_charset_lite"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "Configures charset translation behavior",
        "syntax": "CharsetOptions option [option] ...",
        "default": "CharsetOptions ImplicitAdd",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_charset_lite.html#charsetoptions"
    },
    {
        "id": "mod_charset_lite:directive:charsetsourceenc",
        "owner": "mod_charset_lite",
        "name": "CharsetSourceEnc",
        "kind": "directive",
        "modules": [
            "mod_charset_lite"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "Source charset of files",
        "syntax": "CharsetSourceEnc charset",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_charset_lite.html#charsetsourceenc"
    },
    {
        "id": "mod_speling:directive:checkbasenamematch",
        "owner": "mod_speling",
        "name": "CheckBasenameMatch",
        "kind": "directive",
        "modules": [
            "mod_speling"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Options"
        ],
        "status": "Extension",
        "description": "Also match files with differing file name extensions.",
        "syntax": "CheckBasenameMatch on|off",
        "default": "CheckBasenameMatch On",
        "compatibility": "Available in httpd 2.4.50 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_speling.html#checkbasenamematch"
    },
    {
        "id": "mod_speling:directive:checkcaseonly",
        "owner": "mod_speling",
        "name": "CheckCaseOnly",
        "kind": "directive",
        "modules": [
            "mod_speling"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Options"
        ],
        "status": "Extension",
        "description": "Limits the action of the speling module to case corrections",
        "syntax": "CheckCaseOnly on|off",
        "default": "CheckCaseOnly Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_speling.html#checkcaseonly"
    },
    {
        "id": "mod_speling:directive:checkspelling",
        "owner": "mod_speling",
        "name": "CheckSpelling",
        "kind": "directive",
        "modules": [
            "mod_speling"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Options"
        ],
        "status": "Extension",
        "description": "Enables the spelling module",
        "syntax": "CheckSpelling on|off",
        "default": "CheckSpelling Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_speling.html#checkspelling"
    },
    {
        "id": "mod_unixd:directive:chrootdir",
        "owner": "mod_unixd",
        "name": "ChrootDir",
        "kind": "directive",
        "modules": [
            "mod_unixd"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Base",
        "description": "Directory for apache to run chroot(8) after startup.",
        "syntax": "ChrootDir /path/to/directory",
        "default": "none",
        "compatibility": "Available in Apache 2.2.10 and later",
        "since": "2.2.10",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_unixd.html#chrootdir"
    },
    {
        "id": "core:directive:contentdigest",
        "owner": "core",
        "name": "ContentDigest",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Options"
        ],
        "status": "Experimental",
        "description": "Enables the generation of Content-MD5 HTTP Response headers",
        "syntax": "ContentDigest On|Off",
        "default": "ContentDigest Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#contentdigest"
    },
    {
        "id": "mod_usertrack:directive:cookiedomain",
        "owner": "mod_usertrack",
        "name": "CookieDomain",
        "kind": "directive",
        "modules": [
            "mod_usertrack"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "The domain to which the tracking cookie applies",
        "syntax": "CookieDomain domain",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_usertrack.html#cookiedomain"
    },
    {
        "id": "mod_usertrack:directive:cookieexpires",
        "owner": "mod_usertrack",
        "name": "CookieExpires",
        "kind": "directive",
        "modules": [
            "mod_usertrack"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "Expiry time for the tracking cookie",
        "syntax": "CookieExpires expiry-period",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_usertrack.html#cookieexpires"
    },
    {
        "id": "mod_usertrack:directive:cookiehttponly",
        "owner": "mod_usertrack",
        "name": "CookieHTTPOnly",
        "kind": "directive",
        "modules": [
            "mod_usertrack"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "Adds the 'HTTPOnly' attribute to the cookie",
        "syntax": "CookieHTTPOnly on|off",
        "default": "CookieHTTPOnly off",
        "compatibility": "2.4.42 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_usertrack.html#cookiehttponly"
    },
    {
        "id": "mod_usertrack:directive:cookiename",
        "owner": "mod_usertrack",
        "name": "CookieName",
        "kind": "directive",
        "modules": [
            "mod_usertrack"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "Name of the tracking cookie",
        "syntax": "CookieName token",
        "default": "CookieName Apache",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_usertrack.html#cookiename"
    },
    {
        "id": "mod_usertrack:directive:cookiesamesite",
        "owner": "mod_usertrack",
        "name": "CookieSameSite",
        "kind": "directive",
        "modules": [
            "mod_usertrack"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "Adds the 'SameSite' attribute to the cookie",
        "syntax": "CookieSameSite None|Lax|Strict",
        "default": "unset",
        "compatibility": "2.4.42 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_usertrack.html#cookiesamesite"
    },
    {
        "id": "mod_usertrack:directive:cookiesecure",
        "owner": "mod_usertrack",
        "name": "CookieSecure",
        "kind": "directive",
        "modules": [
            "mod_usertrack"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "Adds the 'Secure' attribute to the cookie",
        "syntax": "CookieSecure on|off",
        "default": "CookieSecure off",
        "compatibility": "2.4.42 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_usertrack.html#cookiesecure"
    },
    {
        "id": "mod_usertrack:directive:cookiestyle",
        "owner": "mod_usertrack",
        "name": "CookieStyle",
        "kind": "directive",
        "modules": [
            "mod_usertrack"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "Format of the cookie header field",
        "syntax": "CookieStyle Netscape|Cookie|Cookie2|RFC2109|RFC2965",
        "default": "CookieStyle Netscape",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_usertrack.html#cookiestyle"
    },
    {
        "id": "mod_usertrack:directive:cookietracking",
        "owner": "mod_usertrack",
        "name": "CookieTracking",
        "kind": "directive",
        "modules": [
            "mod_usertrack"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "Enables tracking cookie",
        "syntax": "CookieTracking on|off",
        "default": "CookieTracking off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_usertrack.html#cookietracking"
    },
    {
        "id": "mpm_common:directive:coredumpdirectory",
        "owner": "mpm_common",
        "name": "CoreDumpDirectory",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "prefork"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Directory where Apache HTTP Server attempts to switch before dumping core",
        "syntax": "CoreDumpDirectory directory",
        "default": "See usage for the default setting",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#coredumpdirectory"
    },
    {
        "id": "mod_log_config:directive:customlog",
        "owner": "mod_log_config",
        "name": "CustomLog",
        "kind": "directive",
        "modules": [
            "mod_log_config"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "Sets filename and format of log file",
        "syntax": "CustomLog file|pipe format|nickname [env=[!]environment-variable| expr=expression]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_log_config.html#customlog"
    },
    {
        "id": "mod_dav:directive:dav",
        "owner": "mod_dav",
        "name": "Dav",
        "kind": "directive",
        "modules": [
            "mod_dav"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enable WebDAV HTTP methods",
        "syntax": "Dav On|Off|provider-name",
        "default": "Dav Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dav.html#dav"
    },
    {
        "id": "mod_dav:directive:davbasepath",
        "owner": "mod_dav",
        "name": "DavBasePath",
        "kind": "directive",
        "modules": [
            "mod_dav"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Configure repository root path",
        "syntax": "DavBasePath root-path",
        "default": "None",
        "compatibility": "Available in version 2.4.58 and later",
        "since": "2.4.58",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dav.html#davbasepath"
    },
    {
        "id": "mod_dav:directive:davdepthinfinity",
        "owner": "mod_dav",
        "name": "DavDepthInfinity",
        "kind": "directive",
        "modules": [
            "mod_dav"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Allow PROPFIND, Depth: Infinity requests",
        "syntax": "DavDepthInfinity on|off",
        "default": "DavDepthInfinity off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dav.html#davdepthinfinity"
    },
    {
        "id": "mod_dav_lock:directive:davgenericlockdb",
        "owner": "mod_dav_lock",
        "name": "DavGenericLockDB",
        "kind": "directive",
        "modules": [
            "mod_dav_lock"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Location of the DAV lock database",
        "syntax": "DavGenericLockDB file-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dav_lock.html#davgenericlockdb"
    },
    {
        "id": "mod_dav_fs:directive:davlockdb",
        "owner": "mod_dav_fs",
        "name": "DavLockDB",
        "kind": "directive",
        "modules": [
            "mod_dav_fs"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Location of the DAV lock database",
        "syntax": "DavLockDB file-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dav_fs.html#davlockdb"
    },
    {
        "id": "mod_dav_fs:directive:davlockdiscovery",
        "owner": "mod_dav_fs",
        "name": "DavLockDiscovery",
        "kind": "directive",
        "modules": [
            "mod_dav_fs"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enable lock discovery",
        "syntax": "DavLockDiscovery on|off",
        "default": "DavLockDiscovery on",
        "compatibility": "Available from Apache 2.4.55 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dav_fs.html#davlockdiscovery"
    },
    {
        "id": "mod_dav:directive:davmintimeout",
        "owner": "mod_dav",
        "name": "DavMinTimeout",
        "kind": "directive",
        "modules": [
            "mod_dav"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Minimum amount of time the server holds a lock on a DAV resource",
        "syntax": "DavMinTimeout seconds",
        "default": "DavMinTimeout 0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dav.html#davmintimeout"
    },
    {
        "id": "mod_dbd:directive:dbdexptime",
        "owner": "mod_dbd",
        "name": "DBDExptime",
        "kind": "directive",
        "modules": [
            "mod_dbd"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Keepalive time for idle connections",
        "syntax": "DBDExptime time-in-seconds",
        "default": "DBDExptime 300",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dbd.html#dbdexptime"
    },
    {
        "id": "mod_dbd:directive:dbdinitsql",
        "owner": "mod_dbd",
        "name": "DBDInitSQL",
        "kind": "directive",
        "modules": [
            "mod_dbd"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Execute an SQL statement after connecting to a database",
        "syntax": "DBDInitSQL \"SQL statement\"",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dbd.html#dbdinitsql"
    },
    {
        "id": "mod_dbd:directive:dbdkeep",
        "owner": "mod_dbd",
        "name": "DBDKeep",
        "kind": "directive",
        "modules": [
            "mod_dbd"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maximum sustained number of connections",
        "syntax": "DBDKeep number",
        "default": "DBDKeep 2",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dbd.html#dbdkeep"
    },
    {
        "id": "mod_dbd:directive:dbdmax",
        "owner": "mod_dbd",
        "name": "DBDMax",
        "kind": "directive",
        "modules": [
            "mod_dbd"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maximum number of connections",
        "syntax": "DBDMax number",
        "default": "DBDMax 10",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dbd.html#dbdmax"
    },
    {
        "id": "mod_dbd:directive:dbdmin",
        "owner": "mod_dbd",
        "name": "DBDMin",
        "kind": "directive",
        "modules": [
            "mod_dbd"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Minimum number of connections",
        "syntax": "DBDMin number",
        "default": "DBDMin 1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dbd.html#dbdmin"
    },
    {
        "id": "mod_dbd:directive:dbdparams",
        "owner": "mod_dbd",
        "name": "DBDParams",
        "kind": "directive",
        "modules": [
            "mod_dbd"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Parameters for database connection",
        "syntax": "DBDParams param1=value1[,param2=value2]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dbd.html#dbdparams"
    },
    {
        "id": "mod_dbd:directive:dbdpersist",
        "owner": "mod_dbd",
        "name": "DBDPersist",
        "kind": "directive",
        "modules": [
            "mod_dbd"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Whether to use persistent connections",
        "syntax": "DBDPersist On|Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dbd.html#dbdpersist"
    },
    {
        "id": "mod_dbd:directive:dbdpreparesql",
        "owner": "mod_dbd",
        "name": "DBDPrepareSQL",
        "kind": "directive",
        "modules": [
            "mod_dbd"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Define an SQL prepared statement",
        "syntax": "DBDPrepareSQL \"SQL statement\" label",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dbd.html#dbdpreparesql"
    },
    {
        "id": "mod_dbd:directive:dbdriver",
        "owner": "mod_dbd",
        "name": "DBDriver",
        "kind": "directive",
        "modules": [
            "mod_dbd"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Specify an SQL driver",
        "syntax": "DBDriver name",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dbd.html#dbdriver"
    },
    {
        "id": "mod_autoindex:directive:defaulticon",
        "owner": "mod_autoindex",
        "name": "DefaultIcon",
        "kind": "directive",
        "modules": [
            "mod_autoindex"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Icon to display for files when no specific icon is configured",
        "syntax": "DefaultIcon url-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_autoindex.html#defaulticon"
    },
    {
        "id": "mod_mime:directive:defaultlanguage",
        "owner": "mod_mime",
        "name": "DefaultLanguage",
        "kind": "directive",
        "modules": [
            "mod_mime"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Defines a default language-tag to be sent in the Content-Language header field for all resources in the current context that have not been assigned a language-tag by some other means.",
        "syntax": "DefaultLanguage language-tag",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime.html#defaultlanguage"
    },
    {
        "id": "core:directive:defaultruntimedir",
        "owner": "core",
        "name": "DefaultRuntimeDir",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Core",
        "description": "Base directory for the server run-time files",
        "syntax": "DefaultRuntimeDir directory-path",
        "default": "DefaultRuntimeDir DEFAULT_REL_RUNTIMEDIR (logs/)",
        "compatibility": "Available in Apache 2.4.2 and later",
        "since": "2.4.2",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#defaultruntimedir"
    },
    {
        "id": "core:directive:defaulttype",
        "owner": "core",
        "name": "DefaultType",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Core",
        "description": "This directive has no effect other than to emit warnings if the value is not none. In prior versions, DefaultType would specify a default media type to assign to response content for which no other media type configuration could be found.",
        "syntax": "DefaultType media-type|none",
        "default": "DefaultType none",
        "compatibility": "The argument none is available in Apache httpd 2.2.7 and later. All other choices are DISABLED for 2.3.x and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#defaulttype"
    },
    {
        "id": "core:directive:define",
        "owner": "core",
        "name": "Define",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Core",
        "description": "Define a variable",
        "syntax": "Define parameter-name [parameter-value]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#define"
    },
    {
        "id": "mod_deflate:directive:deflatealteretag",
        "owner": "mod_deflate",
        "name": "DeflateAlterETag",
        "kind": "directive",
        "modules": [
            "mod_deflate"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "How the outgoing ETag header should be modified during compression",
        "syntax": "DeflateAlterETag AddSuffix|NoChange|Remove",
        "default": "DeflateAlterETag AddSuffix",
        "compatibility": "Available in Apache 2.4.58 and later",
        "since": "2.4.58",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_deflate.html#deflatealteretag"
    },
    {
        "id": "mod_deflate:directive:deflatebuffersize",
        "owner": "mod_deflate",
        "name": "DeflateBufferSize",
        "kind": "directive",
        "modules": [
            "mod_deflate"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Fragment size to be compressed at one time by zlib",
        "syntax": "DeflateBufferSize value",
        "default": "DeflateBufferSize 8096",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_deflate.html#deflatebuffersize"
    },
    {
        "id": "mod_deflate:directive:deflatecompressionlevel",
        "owner": "mod_deflate",
        "name": "DeflateCompressionLevel",
        "kind": "directive",
        "modules": [
            "mod_deflate"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "How much compression do we apply to the output",
        "syntax": "DeflateCompressionLevel value",
        "default": "Zlib's default",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_deflate.html#deflatecompressionlevel"
    },
    {
        "id": "mod_deflate:directive:deflatefilternote",
        "owner": "mod_deflate",
        "name": "DeflateFilterNote",
        "kind": "directive",
        "modules": [
            "mod_deflate"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Places the compression ratio in a note for logging",
        "syntax": "DeflateFilterNote [type] notename",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_deflate.html#deflatefilternote"
    },
    {
        "id": "mod_deflate:directive:deflateinflatelimitrequestbody",
        "owner": "mod_deflate",
        "name": "DeflateInflateLimitRequestBody",
        "kind": "directive",
        "modules": [
            "mod_deflate"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Maximum size of inflated request bodies",
        "syntax": "DeflateInflateLimitRequestBody value",
        "default": "None, but LimitRequestBody applies after deflation",
        "compatibility": "2.4.10 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_deflate.html#deflateinflatelimitrequestbody"
    },
    {
        "id": "mod_deflate:directive:deflateinflateratioburst",
        "owner": "mod_deflate",
        "name": "DeflateInflateRatioBurst",
        "kind": "directive",
        "modules": [
            "mod_deflate"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Maximum number of times the inflation ratio for request bodies can be crossed",
        "syntax": "DeflateInflateRatioBurst value",
        "default": "DeflateInflateRatioBurst 3",
        "compatibility": "2.4.10 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_deflate.html#deflateinflateratioburst"
    },
    {
        "id": "mod_deflate:directive:deflateinflateratiolimit",
        "owner": "mod_deflate",
        "name": "DeflateInflateRatioLimit",
        "kind": "directive",
        "modules": [
            "mod_deflate"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Maximum inflation ratio for request bodies",
        "syntax": "DeflateInflateRatioLimit value",
        "default": "DeflateInflateRatioLimit 200",
        "compatibility": "2.4.10 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_deflate.html#deflateinflateratiolimit"
    },
    {
        "id": "mod_deflate:directive:deflatememlevel",
        "owner": "mod_deflate",
        "name": "DeflateMemLevel",
        "kind": "directive",
        "modules": [
            "mod_deflate"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "How much memory should be used by zlib for compression",
        "syntax": "DeflateMemLevel value",
        "default": "DeflateMemLevel 9",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_deflate.html#deflatememlevel"
    },
    {
        "id": "mod_deflate:directive:deflatewindowsize",
        "owner": "mod_deflate",
        "name": "DeflateWindowSize",
        "kind": "directive",
        "modules": [
            "mod_deflate"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Zlib compression window size",
        "syntax": "DeflateWindowSize value",
        "default": "DeflateWindowSize 15",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_deflate.html#deflatewindowsize"
    },
    {
        "id": "mod_access_compat:directive:deny",
        "owner": "mod_access_compat",
        "name": "Deny",
        "kind": "directive",
        "modules": [
            "mod_access_compat"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "Limit"
        ],
        "status": "Extension",
        "description": "Controls which hosts are denied access to the server",
        "syntax": "Deny from all|host|env=[!]env-variable [host|env=[!]env-variable] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_access_compat.html#deny"
    },
    {
        "id": "core:section:directory",
        "owner": "core",
        "name": "Directory",
        "kind": "section",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Enclose a group of directives that apply only to the named file-system directory, sub-directories, and their contents.",
        "syntax": "<Directory directory-path> ... </Directory>",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#directory"
    },
    {
        "id": "mod_dir:directive:directorycheckhandler",
        "owner": "mod_dir",
        "name": "DirectoryCheckHandler",
        "kind": "directive",
        "modules": [
            "mod_dir"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Toggle how this module responds when another handler is configured",
        "syntax": "DirectoryCheckHandler On|Off",
        "default": "DirectoryCheckHandler Off",
        "compatibility": "Available in 2.4.8 and later. Releases prior to 2.4 implicitly act as if \"DirectoryCheckHandler ON\" was specified.",
        "since": "2.4.8",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dir.html#directorycheckhandler"
    },
    {
        "id": "mod_dir:directive:directoryindex",
        "owner": "mod_dir",
        "name": "DirectoryIndex",
        "kind": "directive",
        "modules": [
            "mod_dir"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "List of resources to look for when the client requests a directory",
        "syntax": "DirectoryIndex disabled | local-url [local-url] ...",
        "default": "DirectoryIndex index.html",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dir.html#directoryindex"
    },
    {
        "id": "mod_dir:directive:directoryindexredirect",
        "owner": "mod_dir",
        "name": "DirectoryIndexRedirect",
        "kind": "directive",
        "modules": [
            "mod_dir"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Configures an external redirect for directory indexes.",
        "syntax": "DirectoryIndexRedirect on | off | permanent | temp | seeother | 3xx-code",
        "default": "DirectoryIndexRedirect off",
        "compatibility": "Available in version 2.3.14 and later",
        "since": "2.3.14",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dir.html#directoryindexredirect"
    },
    {
        "id": "core:section:directorymatch",
        "owner": "core",
        "name": "DirectoryMatch",
        "kind": "section",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Enclose directives that apply to the contents of file-system directories matching a regular expression.",
        "syntax": "<DirectoryMatch regex> ... </DirectoryMatch>",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#directorymatch"
    },
    {
        "id": "mod_dir:directive:directoryslash",
        "owner": "mod_dir",
        "name": "DirectorySlash",
        "kind": "directive",
        "modules": [
            "mod_dir"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Toggle trailing slash redirects on or off",
        "syntax": "DirectorySlash On|Off",
        "default": "DirectorySlash On",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dir.html#directoryslash"
    },
    {
        "id": "core:directive:documentroot",
        "owner": "core",
        "name": "DocumentRoot",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Directory that forms the main document tree visible from the web",
        "syntax": "DocumentRoot directory-path",
        "default": "DocumentRoot \"/usr/local/apache/htdocs\"",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#documentroot"
    },
    {
        "id": "mod_privileges:directive:dtraceprivileges",
        "owner": "mod_privileges",
        "name": "DTracePrivileges",
        "kind": "directive",
        "modules": [
            "mod_privileges"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Determines whether the privileges required by dtrace are enabled.",
        "syntax": "DTracePrivileges On|Off",
        "default": "DTracePrivileges Off",
        "compatibility": "Available on Solaris 10 and OpenSolaris with non-threaded MPMs (prefork or custom MPM).",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_privileges.html#dtraceprivileges"
    },
    {
        "id": "mod_dumpio:directive:dumpioinput",
        "owner": "mod_dumpio",
        "name": "DumpIOInput",
        "kind": "directive",
        "modules": [
            "mod_dumpio"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Dump all input data to the error log",
        "syntax": "DumpIOInput On|Off",
        "default": "DumpIOInput Off",
        "compatibility": "DumpIOInput is only available in Apache 2.1.3 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dumpio.html#dumpioinput"
    },
    {
        "id": "mod_dumpio:directive:dumpiooutput",
        "owner": "mod_dumpio",
        "name": "DumpIOOutput",
        "kind": "directive",
        "modules": [
            "mod_dumpio"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Dump all output data to the error log",
        "syntax": "DumpIOOutput On|Off",
        "default": "DumpIOOutput Off",
        "compatibility": "DumpIOOutput is only available in Apache 2.1.3 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dumpio.html#dumpiooutput"
    },
    {
        "id": "core:section:else",
        "owner": "core",
        "name": "Else",
        "kind": "section",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Core",
        "description": "Contains directives that apply only if the condition of a previous If or ElseIf section is not satisfied by a request at runtime",
        "syntax": "<Else> ... </Else>",
        "compatibility": "Nested conditions are evaluated in 2.4.26 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#else"
    },
    {
        "id": "core:section:elseif",
        "owner": "core",
        "name": "ElseIf",
        "kind": "section",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Core",
        "description": "Contains directives that apply only if a condition is satisfied by a request at runtime while the condition of a previous If or ElseIf section is not satisfied",
        "syntax": "<ElseIf expression> ... </ElseIf>",
        "compatibility": "Nested conditions are evaluated in 2.4.26 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#elseif"
    },
    {
        "id": "mpm_common:directive:enableexceptionhook",
        "owner": "mpm_common",
        "name": "EnableExceptionHook",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "prefork"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Enables a hook that runs exception handlers after a crash",
        "syntax": "EnableExceptionHook On|Off",
        "default": "EnableExceptionHook Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#enableexceptionhook"
    },
    {
        "id": "core:directive:enablemmap",
        "owner": "core",
        "name": "EnableMMAP",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Core",
        "description": "Use memory-mapping to read files during delivery",
        "syntax": "EnableMMAP On|Off",
        "default": "EnableMMAP On",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#enablemmap"
    },
    {
        "id": "core:directive:enablesendfile",
        "owner": "core",
        "name": "EnableSendfile",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Core",
        "description": "Use the kernel sendfile support to deliver files to the client",
        "syntax": "EnableSendfile On|Off",
        "default": "EnableSendfile Off",
        "compatibility": "Default changed to Off in version 2.3.9.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#enablesendfile"
    },
    {
        "id": "core:directive:error",
        "owner": "core",
        "name": "Error",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Core",
        "description": "Abort configuration parsing with a custom error message",
        "syntax": "Error message",
        "compatibility": "2.3.9 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#error"
    },
    {
        "id": "core:directive:errordocument",
        "owner": "core",
        "name": "ErrorDocument",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Core",
        "description": "What the server will return to the client in case of an error",
        "syntax": "ErrorDocument error-code document",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#errordocument"
    },
    {
        "id": "core:directive:errorlog",
        "owner": "core",
        "name": "ErrorLog",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Location where the server will log errors",
        "syntax": "ErrorLog file-path|syslog[:[facility][:tag]]",
        "default": "ErrorLog logs/error_log (Unix) ErrorLog logs/error.log (Windows and OS/2)",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#errorlog"
    },
    {
        "id": "core:directive:errorlogformat",
        "owner": "core",
        "name": "ErrorLogFormat",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Format specification for error log entries",
        "syntax": "ErrorLogFormat [connection|request] format",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#errorlogformat"
    },
    {
        "id": "mod_example_hooks:directive:example",
        "owner": "mod_example_hooks",
        "name": "Example",
        "kind": "directive",
        "modules": [
            "mod_example_hooks"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Demonstration directive to illustrate the Apache module API",
        "syntax": "Example",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_example_hooks.html#example"
    },
    {
        "id": "mod_expires:directive:expiresactive",
        "owner": "mod_expires",
        "name": "ExpiresActive",
        "kind": "directive",
        "modules": [
            "mod_expires"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Extension",
        "description": "Enables generation of Expires headers",
        "syntax": "ExpiresActive On|Off",
        "default": "ExpiresActive Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_expires.html#expiresactive"
    },
    {
        "id": "mod_expires:directive:expiresbytype",
        "owner": "mod_expires",
        "name": "ExpiresByType",
        "kind": "directive",
        "modules": [
            "mod_expires"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Extension",
        "description": "Value of the Expires header configured by MIME type",
        "syntax": "ExpiresByType MIME-type <code>seconds",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_expires.html#expiresbytype"
    },
    {
        "id": "mod_expires:directive:expiresdefault",
        "owner": "mod_expires",
        "name": "ExpiresDefault",
        "kind": "directive",
        "modules": [
            "mod_expires"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Extension",
        "description": "Default algorithm for calculating expiration time",
        "syntax": "ExpiresDefault <code>seconds",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_expires.html#expiresdefault"
    },
    {
        "id": "core:directive:extendedstatus",
        "owner": "core",
        "name": "ExtendedStatus",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Core",
        "description": "Keep track of extended status information for each request",
        "syntax": "ExtendedStatus On|Off",
        "default": "ExtendedStatus Off[*]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#extendedstatus"
    },
    {
        "id": "mod_ext_filter:directive:extfilterdefine",
        "owner": "mod_ext_filter",
        "name": "ExtFilterDefine",
        "kind": "directive",
        "modules": [
            "mod_ext_filter"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Define an external filter",
        "syntax": "ExtFilterDefine filtername parameters",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ext_filter.html#extfilterdefine"
    },
    {
        "id": "mod_ext_filter:directive:extfilteroptions",
        "owner": "mod_ext_filter",
        "name": "ExtFilterOptions",
        "kind": "directive",
        "modules": [
            "mod_ext_filter"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Configure mod_ext_filter options",
        "syntax": "ExtFilterOptions option [option] ...",
        "default": "ExtFilterOptions NoLogStderr",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ext_filter.html#extfilteroptions"
    },
    {
        "id": "mod_dir:directive:fallbackresource",
        "owner": "mod_dir",
        "name": "FallbackResource",
        "kind": "directive",
        "modules": [
            "mod_dir"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Define a default URL for requests that don't map to a file or handler",
        "syntax": "FallbackResource disabled | local-url",
        "default": "disabled - httpd will return 404 (Not Found)",
        "compatibility": "The disabled argument is available in version 2.4.4 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dir.html#fallbackresource"
    },
    {
        "id": "core:directive:fileetag",
        "owner": "core",
        "name": "FileETag",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Core",
        "description": "File attributes used to create the ETag HTTP response header for static files",
        "syntax": "FileETag component ...",
        "default": "FileETag MTime Size",
        "compatibility": "The default used to be \"INode MTime Size\" in 2.3.14 and earlier.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#fileetag"
    },
    {
        "id": "core:section:files",
        "owner": "core",
        "name": "Files",
        "kind": "section",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Core",
        "description": "Contains directives that apply to matched filenames",
        "syntax": "<Files filename> ... </Files>",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#files"
    },
    {
        "id": "core:section:filesmatch",
        "owner": "core",
        "name": "FilesMatch",
        "kind": "section",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Core",
        "description": "Contains directives that apply to regular-expression matched filenames",
        "syntax": "<FilesMatch regex> ... </FilesMatch>",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#filesmatch"
    },
    {
        "id": "mod_filter:directive:filterchain",
        "owner": "mod_filter",
        "name": "FilterChain",
        "kind": "directive",
        "modules": [
            "mod_filter"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Options"
        ],
        "status": "Base",
        "description": "Configure the filter chain",
        "syntax": "FilterChain [+=-@!]filter-name ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_filter.html#filterchain"
    },
    {
        "id": "mod_filter:directive:filterdeclare",
        "owner": "mod_filter",
        "name": "FilterDeclare",
        "kind": "directive",
        "modules": [
            "mod_filter"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Options"
        ],
        "status": "Base",
        "description": "Declare a smart filter",
        "syntax": "FilterDeclare filter-name [type]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_filter.html#filterdeclare"
    },
    {
        "id": "mod_filter:directive:filterprotocol",
        "owner": "mod_filter",
        "name": "FilterProtocol",
        "kind": "directive",
        "modules": [
            "mod_filter"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Options"
        ],
        "status": "Base",
        "description": "Deal with correct HTTP protocol handling",
        "syntax": "FilterProtocol filter-name [provider-name] proto-flags",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_filter.html#filterprotocol"
    },
    {
        "id": "mod_filter:directive:filterprovider",
        "owner": "mod_filter",
        "name": "FilterProvider",
        "kind": "directive",
        "modules": [
            "mod_filter"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Options"
        ],
        "status": "Base",
        "description": "Register a content filter",
        "syntax": "FilterProvider filter-name provider-name expression",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_filter.html#filterprovider"
    },
    {
        "id": "mod_filter:directive:filtertrace",
        "owner": "mod_filter",
        "name": "FilterTrace",
        "kind": "directive",
        "modules": [
            "mod_filter"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Get debug/diagnostic information from mod_filter",
        "syntax": "FilterTrace filter-name level",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_filter.html#filtertrace"
    },
    {
        "id": "core:directive:flushmaxpipelined",
        "owner": "core",
        "name": "FlushMaxPipelined",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Maximum number of pipelined responses above which they are flushed to the network",
        "syntax": "FlushMaxPipelined number",
        "default": "FlushMaxPipelined 5",
        "compatibility": "2.4.47 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#flushmaxpipelined"
    },
    {
        "id": "core:directive:flushmaxthreshold",
        "owner": "core",
        "name": "FlushMaxThreshold",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Threshold above which pending data are flushed to the network",
        "syntax": "FlushMaxThreshold number-of-bytes",
        "default": "FlushMaxThreshold 65535",
        "compatibility": "2.4.47 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#flushmaxthreshold"
    },
    {
        "id": "mod_negotiation:directive:forcelanguagepriority",
        "owner": "mod_negotiation",
        "name": "ForceLanguagePriority",
        "kind": "directive",
        "modules": [
            "mod_negotiation"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Action to take if a single acceptable document is not found",
        "syntax": "ForceLanguagePriority None|Prefer|Fallback [Prefer|Fallback]",
        "default": "ForceLanguagePriority Prefer",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_negotiation.html#forcelanguagepriority"
    },
    {
        "id": "core:directive:forcetype",
        "owner": "core",
        "name": "ForceType",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Core",
        "description": "Forces all matching files to be served with the specified media type in the HTTP Content-Type header field",
        "syntax": "ForceType media-type|None",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#forcetype"
    },
    {
        "id": "mod_log_forensic:directive:forensiclog",
        "owner": "mod_log_forensic",
        "name": "ForensicLog",
        "kind": "directive",
        "modules": [
            "mod_log_forensic"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Sets filename of the forensic log",
        "syntax": "ForensicLog filename|pipe",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_log_forensic.html#forensiclog"
    },
    {
        "id": "mod_log_config:directive:globallog",
        "owner": "mod_log_config",
        "name": "GlobalLog",
        "kind": "directive",
        "modules": [
            "mod_log_config"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Base",
        "description": "Sets filename and format of log file",
        "syntax": "GlobalLog file|pipe format|nickname [env=[!]environment-variable| expr=expression]",
        "compatibility": "Available in Apache HTTP Server 2.4.19 and later",
        "since": "2.4.19",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_log_config.html#globallog"
    },
    {
        "id": "core:directive:gprofdir",
        "owner": "core",
        "name": "GprofDir",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Directory to write gmon.out profiling data to.",
        "syntax": "GprofDir /tmp/gprof/|/tmp/gprof/%",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#gprofdir"
    },
    {
        "id": "mpm_common:directive:gracefulshutdowntimeout",
        "owner": "mpm_common",
        "name": "GracefulShutdownTimeout",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "prefork"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Specify a timeout after which a gracefully shutdown server will exit.",
        "syntax": "GracefulShutdownTimeout seconds",
        "default": "GracefulShutdownTimeout 0",
        "compatibility": "Available in version 2.2 and later",
        "since": "2.2",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#gracefulshutdowntimeout"
    },
    {
        "id": "mod_unixd:directive:group",
        "owner": "mod_unixd",
        "name": "Group",
        "kind": "directive",
        "modules": [
            "mod_unixd"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Base",
        "description": "Group under which the server will answer requests",
        "syntax": "Group unix-group",
        "default": "Group #-1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_unixd.html#group"
    },
    {
        "id": "mod_http2:directive:h2copyfiles",
        "owner": "mod_http2",
        "name": "H2CopyFiles",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Determine file handling in responses",
        "syntax": "H2CopyFiles on|off",
        "default": "H2CopyFiles off",
        "compatibility": "Available in version 2.4.24 and later.",
        "since": "2.4.24",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2copyfiles"
    },
    {
        "id": "mod_http2:directive:h2direct",
        "owner": "mod_http2",
        "name": "H2Direct",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "H2 Direct Protocol Switch",
        "syntax": "H2Direct on|off",
        "default": "H2Direct on for h2c, off for h2 protocol",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2direct"
    },
    {
        "id": "mod_http2:directive:h2earlyhint",
        "owner": "mod_http2",
        "name": "H2EarlyHint",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Add a response header to be picked up in 103 Early Hints",
        "syntax": "H2EarlyHint name value",
        "compatibility": "Available in version 2.4.58 and later.",
        "since": "2.4.58",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2earlyhint"
    },
    {
        "id": "mod_http2:directive:h2earlyhints",
        "owner": "mod_http2",
        "name": "H2EarlyHints",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Determine sending of 103 status codes",
        "syntax": "H2EarlyHints on|off",
        "default": "H2EarlyHints off",
        "compatibility": "Available in version 2.4.24 and later.",
        "since": "2.4.24",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2earlyhints"
    },
    {
        "id": "mod_http2:directive:h2maxdataframelen",
        "owner": "mod_http2",
        "name": "H2MaxDataFrameLen",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maximum bytes inside a single HTTP/2 DATA frame",
        "syntax": "H2MaxDataFrameLen n",
        "default": "H2MaxDataFrameLen 0",
        "compatibility": "Available in version 2.4.58 and later.",
        "since": "2.4.58",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2maxdataframelen"
    },
    {
        "id": "mod_http2:directive:h2maxheaderblocklen",
        "owner": "mod_http2",
        "name": "H2MaxHeaderBlockLen",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maximum size of response headers",
        "syntax": "H2MaxHeaderBlockLen n",
        "default": "H2MaxHeaderBlockLen 0",
        "compatibility": "Available in version 2.4.64 and later.",
        "since": "2.4.64",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2maxheaderblocklen"
    },
    {
        "id": "mod_http2:directive:h2maxsessionstreams",
        "owner": "mod_http2",
        "name": "H2MaxSessionStreams",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maximum number of active streams per HTTP/2 session.",
        "syntax": "H2MaxSessionStreams n",
        "default": "H2MaxSessionStreams 100",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2maxsessionstreams"
    },
    {
        "id": "mod_http2:directive:h2maxstreamerrors",
        "owner": "mod_http2",
        "name": "H2MaxStreamErrors",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maximum amount of client caused errors to tolerate",
        "syntax": "H2MaxStreamErrors n",
        "default": "H2MaxStreamErrors 8",
        "compatibility": "Available in version 2.5.1 and later.",
        "since": "2.5.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2maxstreamerrors"
    },
    {
        "id": "mod_http2:directive:h2maxworkeridleseconds",
        "owner": "mod_http2",
        "name": "H2MaxWorkerIdleSeconds",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maximum number of seconds h2 workers remain idle until shut down.",
        "syntax": "H2MaxWorkerIdleSeconds n",
        "default": "H2MaxWorkerIdleSeconds 600",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2maxworkeridleseconds"
    },
    {
        "id": "mod_http2:directive:h2maxworkers",
        "owner": "mod_http2",
        "name": "H2MaxWorkers",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maximum number of worker threads to use per child process.",
        "syntax": "H2MaxWorkers n",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2maxworkers"
    },
    {
        "id": "mod_http2:directive:h2minworkers",
        "owner": "mod_http2",
        "name": "H2MinWorkers",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Minimal number of worker threads to use per child process.",
        "syntax": "H2MinWorkers n",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2minworkers"
    },
    {
        "id": "mod_http2:directive:h2moderntlsonly",
        "owner": "mod_http2",
        "name": "H2ModernTLSOnly",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Require HTTP/2 connections to be \"modern TLS\" only",
        "syntax": "H2ModernTLSOnly on|off",
        "default": "H2ModernTLSOnly on",
        "compatibility": "Available in version 2.4.18 and later.",
        "since": "2.4.18",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2moderntlsonly"
    },
    {
        "id": "mod_http2:directive:h2outputbuffering",
        "owner": "mod_http2",
        "name": "H2OutputBuffering",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Determine buffering behavior of output",
        "syntax": "H2OutputBuffering on|off",
        "default": "H2OutputBuffering on",
        "compatibility": "Available in version 2.4.48 and later.",
        "since": "2.4.48",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2outputbuffering"
    },
    {
        "id": "mod_http2:directive:h2padding",
        "owner": "mod_http2",
        "name": "H2Padding",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Determine the range of padding bytes added to payload frames",
        "syntax": "H2Padding numbits",
        "default": "H2Padding 0",
        "compatibility": "Available in version 2.4.39 and later.",
        "since": "2.4.39",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2padding"
    },
    {
        "id": "mod_http2:directive:h2proxyrequests",
        "owner": "mod_http2",
        "name": "H2ProxyRequests",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "En-/Disable forward proxy requests via HTTP/2",
        "syntax": "H2ProxyRequests on|off",
        "default": "H2ProxyRequests off",
        "compatibility": "Available in version 2.4.58 and later.",
        "since": "2.4.58",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2proxyrequests"
    },
    {
        "id": "mod_http2:directive:h2push",
        "owner": "mod_http2",
        "name": "H2Push",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "H2 Server Push Switch",
        "syntax": "H2Push on|off",
        "default": "H2Push on",
        "compatibility": "Available in version 2.4.18 and later.",
        "since": "2.4.18",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2push"
    },
    {
        "id": "mod_http2:directive:h2pushdiarysize",
        "owner": "mod_http2",
        "name": "H2PushDiarySize",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "H2 Server Push Diary Size",
        "syntax": "H2PushDiarySize n",
        "default": "H2PushDiarySize 256",
        "compatibility": "Available in version 2.4.19 and later.",
        "since": "2.4.19",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2pushdiarysize"
    },
    {
        "id": "mod_http2:directive:h2pushpriority",
        "owner": "mod_http2",
        "name": "H2PushPriority",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "H2 Server Push Priority",
        "syntax": "H2PushPriority mime-type [after|before|interleaved] [weight]",
        "default": "H2PushPriority * After 16",
        "compatibility": "Available in version 2.4.18 and later. For having an effect, a nghttp2 library version 1.5.0 or newer is necessary.",
        "since": "2.4.18",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2pushpriority"
    },
    {
        "id": "mod_http2:directive:h2pushresource",
        "owner": "mod_http2",
        "name": "H2PushResource",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Declares resources for early pushing to the client",
        "syntax": "H2PushResource [add] path [critical]",
        "compatibility": "Available in version 2.4.24 and later.",
        "since": "2.4.24",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2pushresource"
    },
    {
        "id": "mod_http2:directive:h2serializeheaders",
        "owner": "mod_http2",
        "name": "H2SerializeHeaders",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Serialize Request/Response Processing Switch",
        "syntax": "H2SerializeHeaders on|off",
        "default": "H2SerializeHeaders off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2serializeheaders"
    },
    {
        "id": "mod_http2:directive:h2streammaxmemsize",
        "owner": "mod_http2",
        "name": "H2StreamMaxMemSize",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maximum amount of output data buffered per stream.",
        "syntax": "H2StreamMaxMemSize bytes",
        "default": "H2StreamMaxMemSize 65536",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2streammaxmemsize"
    },
    {
        "id": "mod_http2:directive:h2streamtimeout",
        "owner": "mod_http2",
        "name": "H2StreamTimeout",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maximum time waiting when sending/receiving data to stream processing",
        "syntax": "H2StreamTimeout time-interval[s]",
        "default": "Value of Timeout",
        "compatibility": "Available in version 2.4.55 and later.",
        "since": "2.4.55",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2streamtimeout"
    },
    {
        "id": "mod_http2:directive:h2tlscooldownsecs",
        "owner": "mod_http2",
        "name": "H2TLSCoolDownSecs",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Configure the number of seconds of idle time on TLS before shrinking writes",
        "syntax": "H2TLSCoolDownSecs seconds",
        "default": "H2TLSCoolDownSecs 1",
        "compatibility": "Available in version 2.4.18 and later.",
        "since": "2.4.18",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2tlscooldownsecs"
    },
    {
        "id": "mod_http2:directive:h2tlswarmupsize",
        "owner": "mod_http2",
        "name": "H2TLSWarmUpSize",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Configure the number of bytes on TLS connection before doing max writes",
        "syntax": "H2TLSWarmUpSize amount",
        "default": "H2TLSWarmUpSize 1048576",
        "compatibility": "Available in version 2.4.18 and later.",
        "since": "2.4.18",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2tlswarmupsize"
    },
    {
        "id": "mod_http2:directive:h2upgrade",
        "owner": "mod_http2",
        "name": "H2Upgrade",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "H2 Upgrade Protocol Switch",
        "syntax": "H2Upgrade on|off",
        "default": "H2Upgrade on for h2c, off for h2 protocol",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2upgrade"
    },
    {
        "id": "mod_http2:directive:h2websockets",
        "owner": "mod_http2",
        "name": "H2WebSockets",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "En-/Disable WebSockets via HTTP/2",
        "syntax": "H2WebSockets on|off",
        "default": "H2WebSockets off",
        "compatibility": "Available in version 2.4.58 and later.",
        "since": "2.4.58",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2websockets"
    },
    {
        "id": "mod_http2:directive:h2windowsize",
        "owner": "mod_http2",
        "name": "H2WindowSize",
        "kind": "directive",
        "modules": [
            "mod_http2"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Size of Stream Window for upstream data.",
        "syntax": "H2WindowSize bytes",
        "default": "H2WindowSize 65535",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_http2.html#h2windowsize"
    },
    {
        "id": "mod_headers:directive:header",
        "owner": "mod_headers",
        "name": "Header",
        "kind": "directive",
        "modules": [
            "mod_headers"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "Configure HTTP response headers",
        "syntax": "Header [condition] add|append|echo|edit|edit*|merge|set|setifempty|unset|note header [[expr=]value [replacement] [early|env=[!]varname|expr=expression]]",
        "compatibility": "SetIfEmpty available in 2.4.7 and later, expr=value available in 2.4.10 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_headers.html#header"
    },
    {
        "id": "mod_autoindex:directive:headername",
        "owner": "mod_autoindex",
        "name": "HeaderName",
        "kind": "directive",
        "modules": [
            "mod_autoindex"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Name of the file that will be inserted at the top of the index listing",
        "syntax": "HeaderName filename",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_autoindex.html#headername"
    },
    {
        "id": "mod_heartbeat:directive:heartbeataddress",
        "owner": "mod_heartbeat",
        "name": "HeartbeatAddress",
        "kind": "directive",
        "modules": [
            "mod_heartbeat"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Multicast address for heartbeat packets",
        "syntax": "HeartbeatAddress addr:port",
        "default": "disabled",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_heartbeat.html#heartbeataddress"
    },
    {
        "id": "mod_heartmonitor:directive:heartbeatlisten",
        "owner": "mod_heartmonitor",
        "name": "HeartbeatListen",
        "kind": "directive",
        "modules": [
            "mod_heartmonitor"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "multicast address to listen for incoming heartbeat requests",
        "syntax": "HeartbeatListen addr:port",
        "default": "disabled",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_heartmonitor.html#heartbeatlisten"
    },
    {
        "id": "mod_heartmonitor:directive:heartbeatmaxservers",
        "owner": "mod_heartmonitor",
        "name": "HeartbeatMaxServers",
        "kind": "directive",
        "modules": [
            "mod_heartmonitor"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Specifies the maximum number of servers that will be sending heartbeat requests to this server",
        "syntax": "HeartbeatMaxServers number-of-servers",
        "default": "HeartbeatMaxServers 10",
        "compatibility": "The value of 0 is accepted only in 2.4.55 and above",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_heartmonitor.html#heartbeatmaxservers"
    },
    {
        "id": "mod_heartmonitor:directive:heartbeatstorage",
        "owner": "mod_heartmonitor",
        "name": "HeartbeatStorage",
        "kind": "directive",
        "modules": [
            "mod_heartmonitor"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Path to store heartbeat data when using flat-file storage",
        "syntax": "HeartbeatStorage file-path",
        "default": "HeartbeatStorage logs/hb.dat",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_heartmonitor.html#heartbeatstorage"
    },
    {
        "id": "mod_lbmethod_heartbeat:directive:heartbeatstorage",
        "owner": "mod_lbmethod_heartbeat",
        "name": "HeartbeatStorage",
        "kind": "directive",
        "modules": [
            "mod_lbmethod_heartbeat"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Path to read heartbeat data",
        "syntax": "HeartbeatStorage file-path",
        "default": "HeartbeatStorage logs/hb.dat",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lbmethod_heartbeat.html#heartbeatstorage"
    },
    {
        "id": "core:directive:hostnamelookups",
        "owner": "core",
        "name": "HostnameLookups",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Core",
        "description": "Enables DNS lookups on client IP addresses",
        "syntax": "HostnameLookups On|Off|Double",
        "default": "HostnameLookups Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#hostnamelookups"
    },
    {
        "id": "core:directive:httpprotocoloptions",
        "owner": "core",
        "name": "HttpProtocolOptions",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Modify restrictions on HTTP Request Messages",
        "syntax": "HttpProtocolOptions [Strict|Unsafe] [RegisteredMethods|LenientMethods] [Allow0.9|Require1.0]",
        "default": "HttpProtocolOptions Strict LenientMethods Allow0.9",
        "compatibility": "2.2.32 or 2.4.24 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#httpprotocoloptions"
    },
    {
        "id": "mod_ident:directive:identitycheck",
        "owner": "mod_ident",
        "name": "IdentityCheck",
        "kind": "directive",
        "modules": [
            "mod_ident"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enables logging of the RFC 1413 identity of the remote user",
        "syntax": "IdentityCheck On|Off",
        "default": "IdentityCheck Off",
        "compatibility": "Moved out of core in Apache 2.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ident.html#identitycheck"
    },
    {
        "id": "mod_ident:directive:identitychecktimeout",
        "owner": "mod_ident",
        "name": "IdentityCheckTimeout",
        "kind": "directive",
        "modules": [
            "mod_ident"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Determines the timeout duration for ident requests",
        "syntax": "IdentityCheckTimeout seconds",
        "default": "IdentityCheckTimeout 30",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ident.html#identitychecktimeout"
    },
    {
        "id": "core:section:if",
        "owner": "core",
        "name": "If",
        "kind": "section",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Core",
        "description": "Contains directives that apply only if a condition is satisfied by a request at runtime",
        "syntax": "<If expression> ... </If>",
        "compatibility": "Nested conditions are evaluated in 2.4.26 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#if"
    },
    {
        "id": "core:section:ifdefine",
        "owner": "core",
        "name": "IfDefine",
        "kind": "section",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Core",
        "description": "Encloses directives that will be processed only if a test is true at startup",
        "syntax": "<IfDefine [!]parameter-name> ... </IfDefine>",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#ifdefine"
    },
    {
        "id": "core:section:ifdirective",
        "owner": "core",
        "name": "IfDirective",
        "kind": "section",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Core",
        "description": "Encloses directives that are processed conditional on the presence or absence of a specific directive",
        "syntax": "<IfDirective [!]directive-name> ... </IfDirective>",
        "compatibility": "Available in 2.4.34 and later.",
        "since": "2.4.34",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#ifdirective"
    },
    {
        "id": "core:section:iffile",
        "owner": "core",
        "name": "IfFile",
        "kind": "section",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Core",
        "description": "Encloses directives that will be processed only if file exists at startup",
        "syntax": "<IfFile [!]filename> ... </IfFile>",
        "compatibility": "Available in 2.4.34 and later.",
        "since": "2.4.34",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#iffile"
    },
    {
        "id": "core:section:ifmodule",
        "owner": "core",
        "name": "IfModule",
        "kind": "section",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Core",
        "description": "Encloses directives that are processed conditional on the presence or absence of a specific module",
        "syntax": "<IfModule [!]module-file|module-identifier> ... </IfModule>",
        "compatibility": "Module identifiers are available in version 2.1 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#ifmodule"
    },
    {
        "id": "core:section:ifsection",
        "owner": "core",
        "name": "IfSection",
        "kind": "section",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Core",
        "description": "Encloses directives that are processed conditional on the presence or absence of a specific section directive",
        "syntax": "<IfSection [!]section-name> ... </IfSection>",
        "compatibility": "Available in 2.4.34 and later.",
        "since": "2.4.34",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#ifsection"
    },
    {
        "id": "mod_version:section:ifversion",
        "owner": "mod_version",
        "name": "IfVersion",
        "kind": "section",
        "modules": [
            "mod_version"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "contains version dependent configuration",
        "syntax": "<IfVersion [[!]operator] version> ... </IfVersion>",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_version.html#ifversion"
    },
    {
        "id": "mod_imagemap:directive:imapbase",
        "owner": "mod_imagemap",
        "name": "ImapBase",
        "kind": "directive",
        "modules": [
            "mod_imagemap"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Default base for imagemap files",
        "syntax": "ImapBase map|referer|URL",
        "default": "ImapBase http://servername/",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_imagemap.html#imapbase"
    },
    {
        "id": "mod_imagemap:directive:imapdefault",
        "owner": "mod_imagemap",
        "name": "ImapDefault",
        "kind": "directive",
        "modules": [
            "mod_imagemap"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Default action when an imagemap is called with coordinates that are not explicitly mapped",
        "syntax": "ImapDefault error|nocontent|map|referer|URL",
        "default": "ImapDefault nocontent",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_imagemap.html#imapdefault"
    },
    {
        "id": "mod_imagemap:directive:imapmenu",
        "owner": "mod_imagemap",
        "name": "ImapMenu",
        "kind": "directive",
        "modules": [
            "mod_imagemap"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Action if no coordinates are given when calling an imagemap",
        "syntax": "ImapMenu none|formatted|semiformatted|unformatted",
        "default": "ImapMenu formatted",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_imagemap.html#imapmenu"
    },
    {
        "id": "core:directive:include",
        "owner": "core",
        "name": "Include",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Core",
        "description": "Includes other configuration files from within the server configuration files",
        "syntax": "Include file-path|directory-path|wildcard",
        "compatibility": "Directory wildcard matching available in 2.3.6 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#include"
    },
    {
        "id": "core:directive:includeoptional",
        "owner": "core",
        "name": "IncludeOptional",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Core",
        "description": "Includes other configuration files from within the server configuration files",
        "syntax": "IncludeOptional file-path|directory-path|wildcard",
        "compatibility": "Available in 2.3.6 and later. Not existent file paths without wildcards do not cause SyntaxError after 2.4.30",
        "since": "2.3.6",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#includeoptional"
    },
    {
        "id": "mod_autoindex:directive:indexheadinsert",
        "owner": "mod_autoindex",
        "name": "IndexHeadInsert",
        "kind": "directive",
        "modules": [
            "mod_autoindex"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Inserts text in the HEAD section of an index page.",
        "syntax": "IndexHeadInsert \"markup ...\"",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_autoindex.html#indexheadinsert"
    },
    {
        "id": "mod_autoindex:directive:indexignore",
        "owner": "mod_autoindex",
        "name": "IndexIgnore",
        "kind": "directive",
        "modules": [
            "mod_autoindex"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Adds to the list of files to hide when listing a directory",
        "syntax": "IndexIgnore file [file] ...",
        "default": "IndexIgnore \".\"",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_autoindex.html#indexignore"
    },
    {
        "id": "mod_autoindex:directive:indexignorereset",
        "owner": "mod_autoindex",
        "name": "IndexIgnoreReset",
        "kind": "directive",
        "modules": [
            "mod_autoindex"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Empties the list of files to hide when listing a directory",
        "syntax": "IndexIgnoreReset ON|OFF",
        "compatibility": "2.3.10 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_autoindex.html#indexignorereset"
    },
    {
        "id": "mod_autoindex:directive:indexoptions",
        "owner": "mod_autoindex",
        "name": "IndexOptions",
        "kind": "directive",
        "modules": [
            "mod_autoindex"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Various configuration settings for directory indexing",
        "syntax": "IndexOptions [+|-]option [[+|-]option] ...",
        "default": "By default, no options are enabled.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_autoindex.html#indexoptions"
    },
    {
        "id": "mod_autoindex:directive:indexorderdefault",
        "owner": "mod_autoindex",
        "name": "IndexOrderDefault",
        "kind": "directive",
        "modules": [
            "mod_autoindex"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Sets the default ordering of the directory index",
        "syntax": "IndexOrderDefault Ascending|Descending Name|Date|Size|Description",
        "default": "IndexOrderDefault Ascending Name",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_autoindex.html#indexorderdefault"
    },
    {
        "id": "mod_autoindex:directive:indexstylesheet",
        "owner": "mod_autoindex",
        "name": "IndexStyleSheet",
        "kind": "directive",
        "modules": [
            "mod_autoindex"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Adds a CSS stylesheet to the directory index",
        "syntax": "IndexStyleSheet url-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_autoindex.html#indexstylesheet"
    },
    {
        "id": "mod_sed:directive:inputsed",
        "owner": "mod_sed",
        "name": "InputSed",
        "kind": "directive",
        "modules": [
            "mod_sed"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Sed command to filter request data (typically POST data)",
        "syntax": "InputSed sed-command",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_sed.html#inputsed"
    },
    {
        "id": "mod_isapi:directive:isapiappendlogtoerrors",
        "owner": "mod_isapi",
        "name": "ISAPIAppendLogToErrors",
        "kind": "directive",
        "modules": [
            "mod_isapi"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Record HSE_APPEND_LOG_PARAMETER requests from ISAPI extensions to the error log",
        "syntax": "ISAPIAppendLogToErrors on|off",
        "default": "ISAPIAppendLogToErrors off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_isapi.html#isapiappendlogtoerrors"
    },
    {
        "id": "mod_isapi:directive:isapiappendlogtoquery",
        "owner": "mod_isapi",
        "name": "ISAPIAppendLogToQuery",
        "kind": "directive",
        "modules": [
            "mod_isapi"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Record HSE_APPEND_LOG_PARAMETER requests from ISAPI extensions to the query field",
        "syntax": "ISAPIAppendLogToQuery on|off",
        "default": "ISAPIAppendLogToQuery on",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_isapi.html#isapiappendlogtoquery"
    },
    {
        "id": "mod_isapi:directive:isapicachefile",
        "owner": "mod_isapi",
        "name": "ISAPICacheFile",
        "kind": "directive",
        "modules": [
            "mod_isapi"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "ISAPI .dll files to be loaded at startup",
        "syntax": "ISAPICacheFile file-path [file-path] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_isapi.html#isapicachefile"
    },
    {
        "id": "mod_isapi:directive:isapifakeasync",
        "owner": "mod_isapi",
        "name": "ISAPIFakeAsync",
        "kind": "directive",
        "modules": [
            "mod_isapi"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Fake asynchronous support for ISAPI callbacks",
        "syntax": "ISAPIFakeAsync on|off",
        "default": "ISAPIFakeAsync off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_isapi.html#isapifakeasync"
    },
    {
        "id": "mod_isapi:directive:isapilognotsupported",
        "owner": "mod_isapi",
        "name": "ISAPILogNotSupported",
        "kind": "directive",
        "modules": [
            "mod_isapi"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Log unsupported feature requests from ISAPI extensions",
        "syntax": "ISAPILogNotSupported on|off",
        "default": "ISAPILogNotSupported off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_isapi.html#isapilognotsupported"
    },
    {
        "id": "mod_isapi:directive:isapireadaheadbuffer",
        "owner": "mod_isapi",
        "name": "ISAPIReadAheadBuffer",
        "kind": "directive",
        "modules": [
            "mod_isapi"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Size of the Read Ahead Buffer sent to ISAPI extensions",
        "syntax": "ISAPIReadAheadBuffer size",
        "default": "ISAPIReadAheadBuffer 49152",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_isapi.html#isapireadaheadbuffer"
    },
    {
        "id": "core:directive:keepalive",
        "owner": "core",
        "name": "KeepAlive",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Enables HTTP persistent connections",
        "syntax": "KeepAlive On|Off",
        "default": "KeepAlive On",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#keepalive"
    },
    {
        "id": "core:directive:keepalivetimeout",
        "owner": "core",
        "name": "KeepAliveTimeout",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Amount of time the server will wait for subsequent requests on a persistent connection",
        "syntax": "KeepAliveTimeout num[ms]",
        "default": "KeepAliveTimeout 5",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#keepalivetimeout"
    },
    {
        "id": "mod_request:directive:keptbodysize",
        "owner": "mod_request",
        "name": "KeptBodySize",
        "kind": "directive",
        "modules": [
            "mod_request"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Keep the request body instead of discarding it up to the specified maximum size, for potential use by filters such as mod_include.",
        "syntax": "KeptBodySize maximum size in bytes",
        "default": "KeptBodySize 0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_request.html#keptbodysize"
    },
    {
        "id": "mod_negotiation:directive:languagepriority",
        "owner": "mod_negotiation",
        "name": "LanguagePriority",
        "kind": "directive",
        "modules": [
            "mod_negotiation"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "The precedence of language variants for cases where the client does not express a preference",
        "syntax": "LanguagePriority MIME-lang [MIME-lang] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_negotiation.html#languagepriority"
    },
    {
        "id": "mod_ldap:directive:ldapcacheentries",
        "owner": "mod_ldap",
        "name": "LDAPCacheEntries",
        "kind": "directive",
        "modules": [
            "mod_ldap"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maximum number of entries in the primary LDAP cache",
        "syntax": "LDAPCacheEntries number",
        "default": "LDAPCacheEntries 1024",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ldap.html#ldapcacheentries"
    },
    {
        "id": "mod_ldap:directive:ldapcachettl",
        "owner": "mod_ldap",
        "name": "LDAPCacheTTL",
        "kind": "directive",
        "modules": [
            "mod_ldap"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Time that cached items remain valid",
        "syntax": "LDAPCacheTTL seconds",
        "default": "LDAPCacheTTL 600",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ldap.html#ldapcachettl"
    },
    {
        "id": "mod_ldap:directive:ldapconnectionpoolttl",
        "owner": "mod_ldap",
        "name": "LDAPConnectionPoolTTL",
        "kind": "directive",
        "modules": [
            "mod_ldap"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Discard backend connections that have been sitting in the connection pool too long",
        "syntax": "LDAPConnectionPoolTTL n",
        "default": "LDAPConnectionPoolTTL -1",
        "compatibility": "Apache HTTP Server 2.3.12 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ldap.html#ldapconnectionpoolttl"
    },
    {
        "id": "mod_ldap:directive:ldapconnectiontimeout",
        "owner": "mod_ldap",
        "name": "LDAPConnectionTimeout",
        "kind": "directive",
        "modules": [
            "mod_ldap"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Specifies the socket connection timeout in seconds",
        "syntax": "LDAPConnectionTimeout seconds",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ldap.html#ldapconnectiontimeout"
    },
    {
        "id": "mod_ldap:directive:ldaplibrarydebug",
        "owner": "mod_ldap",
        "name": "LDAPLibraryDebug",
        "kind": "directive",
        "modules": [
            "mod_ldap"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enable debugging in the LDAP SDK",
        "syntax": "LDAPLibraryDebug 7",
        "default": "disabled",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ldap.html#ldaplibrarydebug"
    },
    {
        "id": "mod_ldap:directive:ldapopcacheentries",
        "owner": "mod_ldap",
        "name": "LDAPOpCacheEntries",
        "kind": "directive",
        "modules": [
            "mod_ldap"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Number of entries used to cache LDAP compare operations",
        "syntax": "LDAPOpCacheEntries number",
        "default": "LDAPOpCacheEntries 1024",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ldap.html#ldapopcacheentries"
    },
    {
        "id": "mod_ldap:directive:ldapopcachettl",
        "owner": "mod_ldap",
        "name": "LDAPOpCacheTTL",
        "kind": "directive",
        "modules": [
            "mod_ldap"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Time that entries in the operation cache remain valid",
        "syntax": "LDAPOpCacheTTL seconds",
        "default": "LDAPOpCacheTTL 600",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ldap.html#ldapopcachettl"
    },
    {
        "id": "mod_ldap:directive:ldapreferralhoplimit",
        "owner": "mod_ldap",
        "name": "LDAPReferralHopLimit",
        "kind": "directive",
        "modules": [
            "mod_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "The maximum number of referral hops to chase before terminating an LDAP query.",
        "syntax": "LDAPReferralHopLimit number",
        "default": "SDK dependent, typically between 5 and 10",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ldap.html#ldapreferralhoplimit"
    },
    {
        "id": "mod_ldap:directive:ldapreferrals",
        "owner": "mod_ldap",
        "name": "LDAPReferrals",
        "kind": "directive",
        "modules": [
            "mod_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Enable referral chasing during queries to the LDAP server.",
        "syntax": "LDAPReferrals On|Off|default",
        "default": "LDAPReferrals On",
        "compatibility": "The default parameter is available in Apache 2.4.7 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ldap.html#ldapreferrals"
    },
    {
        "id": "mod_ldap:directive:ldapretries",
        "owner": "mod_ldap",
        "name": "LDAPRetries",
        "kind": "directive",
        "modules": [
            "mod_ldap"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Configures the number of LDAP server retries.",
        "syntax": "LDAPRetries number-of-retries",
        "default": "LDAPRetries 3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ldap.html#ldapretries"
    },
    {
        "id": "mod_ldap:directive:ldapretrydelay",
        "owner": "mod_ldap",
        "name": "LDAPRetryDelay",
        "kind": "directive",
        "modules": [
            "mod_ldap"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Configures the delay between LDAP server retries.",
        "syntax": "LDAPRetryDelay seconds",
        "default": "LDAPRetryDelay 0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ldap.html#ldapretrydelay"
    },
    {
        "id": "mod_ldap:directive:ldapsharedcachefile",
        "owner": "mod_ldap",
        "name": "LDAPSharedCacheFile",
        "kind": "directive",
        "modules": [
            "mod_ldap"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Sets the shared memory cache file",
        "syntax": "LDAPSharedCacheFile directory-path/filename",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ldap.html#ldapsharedcachefile"
    },
    {
        "id": "mod_ldap:directive:ldapsharedcachesize",
        "owner": "mod_ldap",
        "name": "LDAPSharedCacheSize",
        "kind": "directive",
        "modules": [
            "mod_ldap"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Size in bytes of the shared-memory cache",
        "syntax": "LDAPSharedCacheSize bytes",
        "default": "LDAPSharedCacheSize 500000",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ldap.html#ldapsharedcachesize"
    },
    {
        "id": "mod_ldap:directive:ldaptimeout",
        "owner": "mod_ldap",
        "name": "LDAPTimeout",
        "kind": "directive",
        "modules": [
            "mod_ldap"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Specifies the timeout for LDAP search and bind operations, in seconds",
        "syntax": "LDAPTimeout seconds",
        "default": "LDAPTimeout 60",
        "compatibility": "Apache HTTP Server 2.3.5 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ldap.html#ldaptimeout"
    },
    {
        "id": "mod_ldap:directive:ldaptrustedclientcert",
        "owner": "mod_ldap",
        "name": "LDAPTrustedClientCert",
        "kind": "directive",
        "modules": [
            "mod_ldap"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Sets the file containing or nickname referring to a per connection client certificate. Not all LDAP toolkits support per connection client certificates.",
        "syntax": "LDAPTrustedClientCert type directory-path/filename/nickname [password]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ldap.html#ldaptrustedclientcert"
    },
    {
        "id": "mod_ldap:directive:ldaptrustedglobalcert",
        "owner": "mod_ldap",
        "name": "LDAPTrustedGlobalCert",
        "kind": "directive",
        "modules": [
            "mod_ldap"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Sets the file or database containing global trusted Certificate Authority or global client certificates",
        "syntax": "LDAPTrustedGlobalCert type directory-path/filename [password]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ldap.html#ldaptrustedglobalcert"
    },
    {
        "id": "mod_ldap:directive:ldaptrustedmode",
        "owner": "mod_ldap",
        "name": "LDAPTrustedMode",
        "kind": "directive",
        "modules": [
            "mod_ldap"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Specifies the SSL/TLS mode to be used when connecting to an LDAP server.",
        "syntax": "LDAPTrustedMode type",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ldap.html#ldaptrustedmode"
    },
    {
        "id": "mod_ldap:directive:ldapverifyservercert",
        "owner": "mod_ldap",
        "name": "LDAPVerifyServerCert",
        "kind": "directive",
        "modules": [
            "mod_ldap"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Force server certificate verification",
        "syntax": "LDAPVerifyServerCert On|Off",
        "default": "LDAPVerifyServerCert On",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ldap.html#ldapverifyservercert"
    },
    {
        "id": "core:section:limit",
        "owner": "core",
        "name": "Limit",
        "kind": "section",
        "modules": [
            "core"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig",
            "Limit"
        ],
        "status": "Core",
        "description": "Restrict enclosed access controls to only certain HTTP methods",
        "syntax": "<Limit method [method] ... > ... </Limit>",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#limit"
    },
    {
        "id": "core:section:limitexcept",
        "owner": "core",
        "name": "LimitExcept",
        "kind": "section",
        "modules": [
            "core"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig",
            "Limit"
        ],
        "status": "Core",
        "description": "Restrict access controls to all HTTP methods except the named ones",
        "syntax": "<LimitExcept method [method] ... > ... </LimitExcept>",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#limitexcept"
    },
    {
        "id": "core:directive:limitinternalrecursion",
        "owner": "core",
        "name": "LimitInternalRecursion",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Determine maximum number of internal redirects and nested subrequests",
        "syntax": "LimitInternalRecursion number [number]",
        "default": "LimitInternalRecursion 10",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#limitinternalrecursion"
    },
    {
        "id": "core:directive:limitrequestbody",
        "owner": "core",
        "name": "LimitRequestBody",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Core",
        "description": "Restricts the total size of the HTTP request body sent from the client",
        "syntax": "LimitRequestBody bytes",
        "default": "LimitRequestBody 1073741824",
        "compatibility": "In Apache HTTP Server 2.4.53 and earlier, the default value was 0 (unlimited)",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#limitrequestbody"
    },
    {
        "id": "core:directive:limitrequestfields",
        "owner": "core",
        "name": "LimitRequestFields",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Limits the number of HTTP request header fields that will be accepted from the client",
        "syntax": "LimitRequestFields number",
        "default": "LimitRequestFields 100",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#limitrequestfields"
    },
    {
        "id": "core:directive:limitrequestfieldsize",
        "owner": "core",
        "name": "LimitRequestFieldSize",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Limits the size of the HTTP request header allowed from the client",
        "syntax": "LimitRequestFieldSize bytes",
        "default": "LimitRequestFieldSize 8190",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#limitrequestfieldsize"
    },
    {
        "id": "core:directive:limitrequestline",
        "owner": "core",
        "name": "LimitRequestLine",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Limit the size of the HTTP request line that will be accepted from the client",
        "syntax": "LimitRequestLine bytes",
        "default": "LimitRequestLine 8190",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#limitrequestline"
    },
    {
        "id": "core:directive:limitxmlrequestbody",
        "owner": "core",
        "name": "LimitXMLRequestBody",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Core",
        "description": "Limits the size of an XML-based request body",
        "syntax": "LimitXMLRequestBody bytes",
        "default": "LimitXMLRequestBody 1000000",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#limitxmlrequestbody"
    },
    {
        "id": "mpm_common:directive:listen",
        "owner": "mpm_common",
        "name": "Listen",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "prefork",
            "mpm_winnt",
            "mpm_netware",
            "mpmt_os2"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "IP addresses and ports that the server listens to",
        "syntax": "Listen [IP-address:]portnumber [protocol]",
        "compatibility": "The protocol argument was added in 2.1.5",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#listen"
    },
    {
        "id": "mpm_common:directive:listenbacklog",
        "owner": "mpm_common",
        "name": "ListenBackLog",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "prefork",
            "mpm_winnt",
            "mpm_netware",
            "mpmt_os2"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Maximum length of the queue of pending connections",
        "syntax": "ListenBackLog backlog",
        "default": "ListenBackLog 511",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#listenbacklog"
    },
    {
        "id": "mpm_common:directive:listencoresbucketsratio",
        "owner": "mpm_common",
        "name": "ListenCoresBucketsRatio",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "prefork"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Ratio between the number of CPU cores (online) and the number of listeners' buckets",
        "syntax": "ListenCoresBucketsRatio ratio",
        "default": "ListenCoresBucketsRatio 0 (disabled)",
        "compatibility": "Available in Apache HTTP Server 2.4.17, with a kernel supporting the socket option SO_REUSEPORT and distributing new connections evenly across listening processes' (or threads') sockets using it (eg. Linux 3.9 and later, but not the current implementations of SO_REUSEPORT in *BSDs.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#listencoresbucketsratio"
    },
    {
        "id": "mpm_common:directive:listentcpdeferaccept",
        "owner": "mpm_common",
        "name": "ListenTCPDeferAccept",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "prefork"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Value set for the socket option TCP_DEFER_ACCEPT if it is set",
        "syntax": "ListenTCPDeferAccept integer",
        "default": "ListenTCPDeferAccept 30",
        "compatibility": "Available in Apache HTTP Server 2.5.1 and later",
        "since": "2.5.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#listentcpdeferaccept"
    },
    {
        "id": "mod_so:directive:loadfile",
        "owner": "mod_so",
        "name": "LoadFile",
        "kind": "directive",
        "modules": [
            "mod_so"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Link in the named object file or library",
        "syntax": "LoadFile filename [filename] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_so.html#loadfile"
    },
    {
        "id": "mod_so:directive:loadmodule",
        "owner": "mod_so",
        "name": "LoadModule",
        "kind": "directive",
        "modules": [
            "mod_so"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Links in the object file or library, and adds to the list of active modules",
        "syntax": "LoadModule module filename",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_so.html#loadmodule"
    },
    {
        "id": "core:section:location",
        "owner": "core",
        "name": "Location",
        "kind": "section",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Applies the enclosed directives only to matching URLs",
        "syntax": "<Location URL-path|URL> ... </Location>",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#location"
    },
    {
        "id": "core:section:locationmatch",
        "owner": "core",
        "name": "LocationMatch",
        "kind": "section",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Applies the enclosed directives only to regular-expression matching URLs",
        "syntax": "<LocationMatch regex> ... </LocationMatch>",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#locationmatch"
    },
    {
        "id": "mod_log_config:directive:logformat",
        "owner": "mod_log_config",
        "name": "LogFormat",
        "kind": "directive",
        "modules": [
            "mod_log_config"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "Describes a format for use in a log file",
        "syntax": "LogFormat format|nickname [nickname]",
        "default": "LogFormat \"%h %l %u %t \\\"%r\\\" %>s %b\"",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_log_config.html#logformat"
    },
    {
        "id": "mod_logio:directive:logiotrackttfb",
        "owner": "mod_logio",
        "name": "LogIOTrackTTFB",
        "kind": "directive",
        "modules": [
            "mod_logio"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Enable tracking of time to first byte (TTFB)",
        "syntax": "LogIOTrackTTFB ON|OFF",
        "default": "LogIOTrackTTFB OFF",
        "compatibility": "Apache HTTP Server 2.4.13 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_logio.html#logiotrackttfb"
    },
    {
        "id": "core:directive:loglevel",
        "owner": "core",
        "name": "LogLevel",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Core",
        "description": "Controls the verbosity of the ErrorLog",
        "syntax": "LogLevel [module:]level [module:level] ...",
        "default": "LogLevel warn",
        "compatibility": "Per-module and per-directory configuration is available in Apache HTTP Server 2.3.6 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#loglevel"
    },
    {
        "id": "mod_log_debug:directive:logmessage",
        "owner": "mod_log_debug",
        "name": "LogMessage",
        "kind": "directive",
        "modules": [
            "mod_log_debug"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Log user-defined message to error log",
        "syntax": "LogMessage message [hook=hook] [expr=expression]",
        "default": "Unset",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_log_debug.html#logmessage"
    },
    {
        "id": "mod_lua:directive:luaauthzprovider",
        "owner": "mod_lua",
        "name": "LuaAuthzProvider",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Plug an authorization provider function into mod_authz_core",
        "syntax": "LuaAuthzProvider provider_name /path/to/lua/script.lua function_name",
        "compatibility": "2.4.3 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luaauthzprovider"
    },
    {
        "id": "mod_lua:directive:luacodecache",
        "owner": "mod_lua",
        "name": "LuaCodeCache",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Configure the compiled code cache.",
        "syntax": "LuaCodeCache stat|forever|never",
        "default": "LuaCodeCache stat",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luacodecache"
    },
    {
        "id": "mod_lua:directive:luahookaccesschecker",
        "owner": "mod_lua",
        "name": "LuaHookAccessChecker",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Provide a hook for the access_checker phase of request processing",
        "syntax": "LuaHookAccessChecker /path/to/lua/script.lua hook_function_name [early|late]",
        "compatibility": "The optional third argument is supported in 2.3.15 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luahookaccesschecker"
    },
    {
        "id": "mod_lua:directive:luahookauthchecker",
        "owner": "mod_lua",
        "name": "LuaHookAuthChecker",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Provide a hook for the auth_checker phase of request processing",
        "syntax": "LuaHookAuthChecker /path/to/lua/script.lua hook_function_name [early|late]",
        "compatibility": "The optional third argument is supported in 2.3.15 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luahookauthchecker"
    },
    {
        "id": "mod_lua:directive:luahookcheckuserid",
        "owner": "mod_lua",
        "name": "LuaHookCheckUserID",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Provide a hook for the check_user_id phase of request processing",
        "syntax": "LuaHookCheckUserID /path/to/lua/script.lua hook_function_name [early|late]",
        "compatibility": "The optional third argument is supported in 2.3.15 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luahookcheckuserid"
    },
    {
        "id": "mod_lua:directive:luahookfixups",
        "owner": "mod_lua",
        "name": "LuaHookFixups",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Provide a hook for the fixups phase of a request processing",
        "syntax": "LuaHookFixups /path/to/lua/script.lua hook_function_name",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luahookfixups"
    },
    {
        "id": "mod_lua:directive:luahookinsertfilter",
        "owner": "mod_lua",
        "name": "LuaHookInsertFilter",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Provide a hook for the insert_filter phase of request processing",
        "syntax": "LuaHookInsertFilter /path/to/lua/script.lua hook_function_name",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luahookinsertfilter"
    },
    {
        "id": "mod_lua:directive:luahooklog",
        "owner": "mod_lua",
        "name": "LuaHookLog",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Provide a hook for the access log phase of a request processing",
        "syntax": "LuaHookLog /path/to/lua/script.lua log_function_name",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luahooklog"
    },
    {
        "id": "mod_lua:directive:luahookmaptostorage",
        "owner": "mod_lua",
        "name": "LuaHookMapToStorage",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Provide a hook for the map_to_storage phase of request processing",
        "syntax": "LuaHookMapToStorage /path/to/lua/script.lua hook_function_name",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luahookmaptostorage"
    },
    {
        "id": "mod_lua:directive:luahookpretranslate",
        "owner": "mod_lua",
        "name": "LuaHookPreTranslate",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Provide a hook for the pre_translate phase of a request processing",
        "syntax": "LuaHookPreTranslate /path/to/lua/script.lua hook_function_name",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luahookpretranslate"
    },
    {
        "id": "mod_lua:directive:luahooktranslatename",
        "owner": "mod_lua",
        "name": "LuaHookTranslateName",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Provide a hook for the translate name phase of request processing",
        "syntax": "LuaHookTranslateName /path/to/lua/script.lua hook_function_name [early|late]",
        "compatibility": "The optional third argument is supported in 2.3.15 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luahooktranslatename"
    },
    {
        "id": "mod_lua:directive:luahooktypechecker",
        "owner": "mod_lua",
        "name": "LuaHookTypeChecker",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Provide a hook for the type_checker phase of request processing",
        "syntax": "LuaHookTypeChecker /path/to/lua/script.lua hook_function_name",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luahooktypechecker"
    },
    {
        "id": "mod_lua:directive:luainherit",
        "owner": "mod_lua",
        "name": "LuaInherit",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Controls how parent configuration sections are merged into children",
        "syntax": "LuaInherit none|parent-first|parent-last",
        "default": "LuaInherit parent-first",
        "compatibility": "2.4.0 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luainherit"
    },
    {
        "id": "mod_lua:directive:luainputfilter",
        "owner": "mod_lua",
        "name": "LuaInputFilter",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Provide a Lua function for content input filtering",
        "syntax": "LuaInputFilter filter_name /path/to/lua/script.lua function_name",
        "compatibility": "2.4.5 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luainputfilter"
    },
    {
        "id": "mod_lua:directive:luamaphandler",
        "owner": "mod_lua",
        "name": "LuaMapHandler",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Map a path to a lua handler",
        "syntax": "LuaMapHandler uri-pattern /path/to/lua/script.lua [function-name]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luamaphandler"
    },
    {
        "id": "mod_lua:directive:luaoutputfilter",
        "owner": "mod_lua",
        "name": "LuaOutputFilter",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Provide a Lua function for content output filtering",
        "syntax": "LuaOutputFilter filter_name /path/to/lua/script.lua function_name",
        "compatibility": "2.4.5 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luaoutputfilter"
    },
    {
        "id": "mod_lua:directive:luapackagecpath",
        "owner": "mod_lua",
        "name": "LuaPackageCPath",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Add a directory to lua's package.cpath",
        "syntax": "LuaPackageCPath /path/to/include/?.soa",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luapackagecpath"
    },
    {
        "id": "mod_lua:directive:luapackagepath",
        "owner": "mod_lua",
        "name": "LuaPackagePath",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Add a directory to lua's package.path",
        "syntax": "LuaPackagePath /path/to/include/?.lua",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luapackagepath"
    },
    {
        "id": "mod_lua:directive:luaquickhandler",
        "owner": "mod_lua",
        "name": "LuaQuickHandler",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Provide a hook for the quick handler of request processing",
        "syntax": "LuaQuickHandler /path/to/script.lua hook_function_name",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luaquickhandler"
    },
    {
        "id": "mod_lua:directive:luaroot",
        "owner": "mod_lua",
        "name": "LuaRoot",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "Specify the base path for resolving relative paths for mod_lua directives",
        "syntax": "LuaRoot /path/to/a/directory",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luaroot"
    },
    {
        "id": "mod_lua:directive:luascope",
        "owner": "mod_lua",
        "name": "LuaScope",
        "kind": "directive",
        "modules": [
            "mod_lua"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Extension",
        "description": "One of once, request, conn, thread -- default is once",
        "syntax": "LuaScope once|request|conn|thread|server [min] [max]",
        "default": "LuaScope once",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_lua.html#luascope"
    },
    {
        "id": "mod_macro:section:macro",
        "owner": "mod_macro",
        "name": "Macro",
        "kind": "section",
        "modules": [
            "mod_macro"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Define a configuration file macro",
        "syntax": "<Macro name [par1 .. parN]> ... </Macro>",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_macro.html#macro"
    },
    {
        "id": "mpm_common:directive:maxconnectionsperchild",
        "owner": "mpm_common",
        "name": "MaxConnectionsPerChild",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "prefork",
            "mpm_winnt",
            "mpm_netware",
            "mpmt_os2"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Limit on the number of connections that an individual child server will handle during its life",
        "syntax": "MaxConnectionsPerChild number",
        "default": "MaxConnectionsPerChild 0",
        "compatibility": "Available Apache HTTP Server 2.3.9 and later. The old name MaxRequestsPerChild is still supported.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#maxconnectionsperchild"
    },
    {
        "id": "core:directive:maxkeepaliverequests",
        "owner": "core",
        "name": "MaxKeepAliveRequests",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Number of requests allowed on a persistent connection",
        "syntax": "MaxKeepAliveRequests number",
        "default": "MaxKeepAliveRequests 100",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#maxkeepaliverequests"
    },
    {
        "id": "mpm_common:directive:maxmemfree",
        "owner": "mpm_common",
        "name": "MaxMemFree",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "prefork",
            "mpm_winnt",
            "mpm_netware"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Maximum amount of memory that the main allocator is allowed to hold without calling free()",
        "syntax": "MaxMemFree KBytes",
        "default": "MaxMemFree 2048",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#maxmemfree"
    },
    {
        "id": "core:directive:maxrangeoverlaps",
        "owner": "core",
        "name": "MaxRangeOverlaps",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Core",
        "description": "Number of overlapping ranges (eg: 100-200,150-300) allowed before returning the complete resource",
        "syntax": "MaxRangeOverlaps default | unlimited | none | number-of-ranges",
        "default": "MaxRangeOverlaps 20",
        "compatibility": "Available in Apache HTTP Server 2.3.15 and later",
        "since": "2.3.15",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#maxrangeoverlaps"
    },
    {
        "id": "core:directive:maxrangereversals",
        "owner": "core",
        "name": "MaxRangeReversals",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Core",
        "description": "Number of range reversals (eg: 100-200,50-70) allowed before returning the complete resource",
        "syntax": "MaxRangeReversals default | unlimited | none | number-of-ranges",
        "default": "MaxRangeReversals 20",
        "compatibility": "Available in Apache HTTP Server 2.3.15 and later",
        "since": "2.3.15",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#maxrangereversals"
    },
    {
        "id": "core:directive:maxranges",
        "owner": "core",
        "name": "MaxRanges",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Core",
        "description": "Number of ranges allowed before returning the complete resource",
        "syntax": "MaxRanges default | unlimited | none | number-of-ranges",
        "default": "MaxRanges 200",
        "compatibility": "Available in Apache HTTP Server 2.3.15 and later",
        "since": "2.3.15",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#maxranges"
    },
    {
        "id": "mpm_common:directive:maxrequestworkers",
        "owner": "mpm_common",
        "name": "MaxRequestWorkers",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "prefork"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Maximum number of connections that will be processed simultaneously",
        "syntax": "MaxRequestWorkers number",
        "default": "See usage for details",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#maxrequestworkers"
    },
    {
        "id": "prefork:directive:maxspareservers",
        "owner": "prefork",
        "name": "MaxSpareServers",
        "kind": "directive",
        "modules": [
            "prefork"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Maximum number of idle child server processes",
        "syntax": "MaxSpareServers number",
        "default": "MaxSpareServers 10",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/prefork.html#maxspareservers"
    },
    {
        "id": "mpm_common:directive:maxsparethreads",
        "owner": "mpm_common",
        "name": "MaxSpareThreads",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "mpm_netware",
            "mpmt_os2"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Maximum number of idle threads",
        "syntax": "MaxSpareThreads number",
        "default": "See usage for details",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#maxsparethreads"
    },
    {
        "id": "mpm_netware:directive:maxthreads",
        "owner": "mpm_netware",
        "name": "MaxThreads",
        "kind": "directive",
        "modules": [
            "mpm_netware"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Set the maximum number of worker threads",
        "syntax": "MaxThreads number",
        "default": "MaxThreads 2048",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_netware.html#maxthreads"
    },
    {
        "id": "mod_md:directive:mdactivationdelay",
        "owner": "mod_md",
        "name": "MDActivationDelay",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "How long to delay activation of new certificates",
        "syntax": "MDActivationDelay duration",
        "compatibility": "Available in version 2.4.42 and later",
        "since": "2.4.42",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdactivationdelay"
    },
    {
        "id": "mod_md:directive:mdbaseserver",
        "owner": "mod_md",
        "name": "MDBaseServer",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Control if base server may be managed or only virtual hosts.",
        "syntax": "MDBaseServer on|off",
        "default": "MDBaseServer off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdbaseserver"
    },
    {
        "id": "mod_md:directive:mdcacertificatefile",
        "owner": "mod_md",
        "name": "MDCACertificateFile",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "File containing x509 trust anchors to verify ACME servers.",
        "syntax": "MDCACertificateFile file",
        "default": "MDCACertificateFile none",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdcacertificatefile"
    },
    {
        "id": "mod_md:directive:mdcachallenges",
        "owner": "mod_md",
        "name": "MDCAChallenges",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Type of ACME challenge used to prove domain ownership.",
        "syntax": "MDCAChallenges name [ name ... ]",
        "default": "MDCAChallenges tls-alpn-01 http-01 dns-01",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdcachallenges"
    },
    {
        "id": "mod_md:directive:mdcertificateagreement",
        "owner": "mod_md",
        "name": "MDCertificateAgreement",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "You confirm that you accepted the Terms of Service of the Certificate Authority.",
        "syntax": "MDCertificateAgreement accepted",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdcertificateagreement"
    },
    {
        "id": "mod_md:directive:mdcertificateauthority",
        "owner": "mod_md",
        "name": "MDCertificateAuthority",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "The URL(s) of the ACME Certificate Authority to use.",
        "syntax": "MDCertificateAuthority url",
        "default": "MDCertificateAuthority letsencrypt",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdcertificateauthority"
    },
    {
        "id": "mod_md:directive:mdcertificatecheck",
        "owner": "mod_md",
        "name": "MDCertificateCheck",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Set name and URL pattern for a certificate monitoring site.",
        "syntax": "MDCertificateCheck name url",
        "compatibility": "Available in version 2.4.42 and later",
        "since": "2.4.42",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdcertificatecheck"
    },
    {
        "id": "mod_md:directive:mdcertificatefile",
        "owner": "mod_md",
        "name": "MDCertificateFile",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Specify a static certificate file for the MD.",
        "syntax": "MDCertificateFile path-to-pem-file",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdcertificatefile"
    },
    {
        "id": "mod_md:directive:mdcertificatekeyfile",
        "owner": "mod_md",
        "name": "MDCertificateKeyFile",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Specify a static private key for for the static cerrtificate.",
        "syntax": "MDCertificateKeyFile path-to-file",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdcertificatekeyfile"
    },
    {
        "id": "mod_md:directive:mdcertificatemonitor",
        "owner": "mod_md",
        "name": "MDCertificateMonitor",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "The URL of a certificate log monitor.",
        "syntax": "MDCertificateMonitor name url",
        "default": "MDCertificateMonitor crt.sh https://crt.sh?q=",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdcertificatemonitor"
    },
    {
        "id": "mod_md:directive:mdcertificateprotocol",
        "owner": "mod_md",
        "name": "MDCertificateProtocol",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "The protocol to use with the Certificate Authority.",
        "syntax": "MDCertificateProtocol protocol",
        "default": "MDCertificateProtocol ACME",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdcertificateprotocol"
    },
    {
        "id": "mod_md:directive:mdcertificatestatus",
        "owner": "mod_md",
        "name": "MDCertificateStatus",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Exposes public certificate information in JSON.",
        "syntax": "MDCertificateStatus on|off",
        "default": "MDCertificateStatus on",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdcertificatestatus"
    },
    {
        "id": "mod_md:directive:mdchallengedns01",
        "owner": "mod_md",
        "name": "MDChallengeDns01",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Set the command for setup/teardown of dns-01 challenges",
        "syntax": "MDChallengeDns01 path-to-command",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdchallengedns01"
    },
    {
        "id": "mod_md:directive:mdchallengedns01version",
        "owner": "mod_md",
        "name": "MDChallengeDns01Version",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Set the type of arguments to call MDChallengeDns01 with",
        "syntax": "MDChallengeDns01Version 1|2",
        "default": "MDChallengeDns01Version 1",
        "compatibility": "Available in version 2.4.58 and later",
        "since": "2.4.58",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdchallengedns01version"
    },
    {
        "id": "mod_md:directive:mdcheckinterval",
        "owner": "mod_md",
        "name": "MDCheckInterval",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Determines how often certificates are checked",
        "syntax": "MDCheckInterval duration",
        "default": "MDCheckInterval 12h",
        "compatibility": "Available in version 2.4.60 and later",
        "since": "2.4.60",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdcheckinterval"
    },
    {
        "id": "mod_md:directive:mdcontactemail",
        "owner": "mod_md",
        "name": "MDContactEmail",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Email address used for account registration",
        "syntax": "MDContactEmail address",
        "compatibility": "Available in version 2.4.42 and later",
        "since": "2.4.42",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdcontactemail"
    },
    {
        "id": "mod_md:directive:mddrivemode",
        "owner": "mod_md",
        "name": "MDDriveMode",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "former name of MDRenewMode.",
        "syntax": "MDDriveMode always|auto|manual",
        "default": "MDDriveMode auto",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mddrivemode"
    },
    {
        "id": "mod_md:directive:mdexternalaccountbinding",
        "owner": "mod_md",
        "name": "MDExternalAccountBinding",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Set the external account binding keyid and hmac values to use at CA",
        "syntax": "MDExternalAccountBinding key-id hmac-64 | none | file",
        "default": "MDExternalAccountBinding none",
        "compatibility": "Available in version 2.4.52 and later",
        "since": "2.4.52",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdexternalaccountbinding"
    },
    {
        "id": "mod_md:directive:mdhttpproxy",
        "owner": "mod_md",
        "name": "MDHttpProxy",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Define a proxy for outgoing connections.",
        "syntax": "MDHttpProxy url",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdhttpproxy"
    },
    {
        "id": "mod_md:directive:mdinitialdelay",
        "owner": "mod_md",
        "name": "MDInitialDelay",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "How long to delay the first certificate check.",
        "syntax": "MDInitialDelay duration",
        "default": "MDInitialDelay 0s",
        "compatibility": "Available in version 2.4.66 and later",
        "since": "2.4.66",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdinitialdelay"
    },
    {
        "id": "mod_md:directive:mdmatchnames",
        "owner": "mod_md",
        "name": "MDMatchNames",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Determines how DNS names are matched to vhosts",
        "syntax": "MDMatchNames all|servernames",
        "default": "MDMatchNames all",
        "compatibility": "Available in version 2.4.58 and later",
        "since": "2.4.58",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdmatchnames"
    },
    {
        "id": "mod_md:directive:mdmember",
        "owner": "mod_md",
        "name": "MDMember",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Additional hostname for the managed domain.",
        "syntax": "MDMember hostname",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdmember"
    },
    {
        "id": "mod_md:directive:mdmembers",
        "owner": "mod_md",
        "name": "MDMembers",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Control if the alias domain names are automatically added.",
        "syntax": "MDMembers auto|manual",
        "default": "MDMembers auto",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdmembers"
    },
    {
        "id": "mod_md:directive:mdmessagecmd",
        "owner": "mod_md",
        "name": "MDMessageCmd",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Handle events for Manage Domains",
        "syntax": "MDMessageCmd path-to-cmd optional-args",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdmessagecmd"
    },
    {
        "id": "mod_md:directive:mdmuststaple",
        "owner": "mod_md",
        "name": "MDMustStaple",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Control if new certificates carry the OCSP Must Staple flag.",
        "syntax": "MDMustStaple on|off",
        "default": "MDMustStaple off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdmuststaple"
    },
    {
        "id": "mod_md:directive:mdnotifycmd",
        "owner": "mod_md",
        "name": "MDNotifyCmd",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Run a program when a Managed Domain is ready.",
        "syntax": "MDNotifyCmd path [ args ]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdnotifycmd"
    },
    {
        "id": "mod_md:directive:mdomain",
        "owner": "mod_md",
        "name": "MDomain",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Define list of domain names that belong to one group.",
        "syntax": "MDomain dns-name [ other-dns-name... ] [auto|manual]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdomain"
    },
    {
        "id": "mod_md:section:mdomainset",
        "owner": "mod_md",
        "name": "MDomainSet",
        "kind": "section",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Container for directives applied to the same managed domains.",
        "syntax": "<MDomainSet dns-name [ other-dns-name... ]>...</MDomainSet>",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdomainsetsection"
    },
    {
        "id": "mod_md:directive:mdportmap",
        "owner": "mod_md",
        "name": "MDPortMap",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Map external to internal ports for domain ownership verification.",
        "syntax": "MDPortMap map1 [ map2 ]",
        "default": "MDPortMap http:80 https:443",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdportmap"
    },
    {
        "id": "mod_md:directive:mdprivatekeys",
        "owner": "mod_md",
        "name": "MDPrivateKeys",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Set type and size of the private keys generated.",
        "syntax": "MDPrivateKeys type [ params... ]",
        "default": "MDPrivateKeys RSA 2048",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdprivatekeys"
    },
    {
        "id": "mod_md:directive:mdprofile",
        "owner": "mod_md",
        "name": "MDProfile",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Use a specific ACME profile from the CA",
        "syntax": "MDProfile name",
        "compatibility": "Available in version 2.4.64 and later",
        "since": "2.4.64",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdprofile"
    },
    {
        "id": "mod_md:directive:mdprofilemandatory",
        "owner": "mod_md",
        "name": "MDProfileMandatory",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Control if an MDProfile is mandatory.",
        "syntax": "MDProfileMandatory on|off",
        "default": "MDProfileMandatory off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdprofilemandatory"
    },
    {
        "id": "mod_md:directive:mdrenewmode",
        "owner": "mod_md",
        "name": "MDRenewMode",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Controls if certificates shall be renewed.",
        "syntax": "MDRenewMode always|auto|manual",
        "default": "MDRenewMode auto",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdrenewmode"
    },
    {
        "id": "mod_md:directive:mdrenewviaari",
        "owner": "mod_md",
        "name": "MDRenewViaARI",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "usage of the ACME ARI extension (rfc9773).",
        "syntax": "MDRenewViaARI on|off",
        "default": "MDRenewViaARI on",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdrenewviaari"
    },
    {
        "id": "mod_md:directive:mdrenewwindow",
        "owner": "mod_md",
        "name": "MDRenewWindow",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Control when a certificate will be renewed.",
        "syntax": "MDRenewWindow duration",
        "default": "MDRenewWindow 33%",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdrenewwindow"
    },
    {
        "id": "mod_md:directive:mdrequirehttps",
        "owner": "mod_md",
        "name": "MDRequireHttps",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Redirects http: traffic to https: for Managed Domains.",
        "syntax": "MDRequireHttps off|temporary|permanent",
        "default": "MDRequireHttps off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdrequirehttps"
    },
    {
        "id": "mod_md:directive:mdretrydelay",
        "owner": "mod_md",
        "name": "MDRetryDelay",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Time length for first retry, doubled on every consecutive error.",
        "syntax": "MDRetryDelay duration",
        "default": "MDRetryDelay 30s",
        "compatibility": "Available in version 2.4.54 and later",
        "since": "2.4.54",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdretrydelay"
    },
    {
        "id": "mod_md:directive:mdretryfailover",
        "owner": "mod_md",
        "name": "MDRetryFailover",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "The number of errors before a failover to another CA is triggered",
        "syntax": "MDRetryFailover number",
        "default": "MDRetryFailover 13",
        "compatibility": "Available in version 2.4.54 and later",
        "since": "2.4.54",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdretryfailover"
    },
    {
        "id": "mod_md:directive:mdserverstatus",
        "owner": "mod_md",
        "name": "MDServerStatus",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Control if Managed Domain information is added to server-status.",
        "syntax": "MDServerStatus on|off",
        "default": "MDServerStatus on",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdserverstatus"
    },
    {
        "id": "mod_md:directive:mdstapleothers",
        "owner": "mod_md",
        "name": "MDStapleOthers",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Enable stapling for certificates not managed by mod_md.",
        "syntax": "MDStapleOthers on|off",
        "default": "MDStapleOthers on",
        "compatibility": "Available in version 2.4.42 and later",
        "since": "2.4.42",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdstapleothers"
    },
    {
        "id": "mod_md:directive:mdstapling",
        "owner": "mod_md",
        "name": "MDStapling",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Enable stapling for all or a particular MDomain.",
        "syntax": "MDStapling on|off",
        "default": "MDStapling off",
        "compatibility": "Available in version 2.4.42 and later",
        "since": "2.4.42",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdstapling"
    },
    {
        "id": "mod_md:directive:mdstaplingkeepresponse",
        "owner": "mod_md",
        "name": "MDStaplingKeepResponse",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Controls when old responses should be removed.",
        "syntax": "MDStaplingKeepResponse duration",
        "default": "MDStaplingKeepResponse 7d",
        "compatibility": "Available in version 2.4.42 and later",
        "since": "2.4.42",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdstaplingkeepresponse"
    },
    {
        "id": "mod_md:directive:mdstaplingrenewwindow",
        "owner": "mod_md",
        "name": "MDStaplingRenewWindow",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Control when the stapling responses will be renewed.",
        "syntax": "MDStaplingRenewWindow duration",
        "default": "MDStaplingRenewWindow 33%",
        "compatibility": "Available in version 2.4.42 and later",
        "since": "2.4.42",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdstaplingrenewwindow"
    },
    {
        "id": "mod_md:directive:mdstoredir",
        "owner": "mod_md",
        "name": "MDStoreDir",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Path on the local file system to store the Managed Domains data.",
        "syntax": "MDStoreDir path",
        "default": "MDStoreDir md",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdstoredir"
    },
    {
        "id": "mod_md:directive:mdstorelocks",
        "owner": "mod_md",
        "name": "MDStoreLocks",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Configure locking of store for updates",
        "syntax": "MDStoreLocks on|off|duration",
        "default": "MDStoreLocks off",
        "compatibility": "Available in version 2.4.55 and later",
        "since": "2.4.55",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdstorelocks"
    },
    {
        "id": "mod_md:directive:mdwarnwindow",
        "owner": "mod_md",
        "name": "MDWarnWindow",
        "kind": "directive",
        "modules": [
            "mod_md"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Define the time window when you want to be warned about an expiring certificate.",
        "syntax": "MDWarnWindow duration",
        "default": "MDWarnWindow 10%",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_md.html#mdwarnwindow"
    },
    {
        "id": "mod_socache_memcache:directive:memcacheconnttl",
        "owner": "mod_socache_memcache",
        "name": "MemcacheConnTTL",
        "kind": "directive",
        "modules": [
            "mod_socache_memcache"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Keepalive time for idle connections",
        "syntax": "MemcacheConnTTL num[units]",
        "default": "MemcacheConnTTL 15s",
        "compatibility": "Available in Apache 2.4.17 and later",
        "since": "2.4.17",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_socache_memcache.html#memcacheconnttl"
    },
    {
        "id": "core:directive:mergeslashes",
        "owner": "core",
        "name": "MergeSlashes",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Controls whether the server merges consecutive slashes in URLs.",
        "syntax": "MergeSlashes ON|OFF",
        "default": "MergeSlashes ON",
        "compatibility": "Added in 2.4.39",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#mergeslashes"
    },
    {
        "id": "core:directive:mergetrailers",
        "owner": "core",
        "name": "MergeTrailers",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Determines whether trailers are merged into headers",
        "syntax": "MergeTrailers [on|off]",
        "default": "MergeTrailers off",
        "compatibility": "2.4.11 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#mergetrailers"
    },
    {
        "id": "mod_cern_meta:directive:metadir",
        "owner": "mod_cern_meta",
        "name": "MetaDir",
        "kind": "directive",
        "modules": [
            "mod_cern_meta"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Extension",
        "description": "Name of the directory to find CERN-style meta information files",
        "syntax": "MetaDir directory",
        "default": "MetaDir .web",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cern_meta.html#metadir"
    },
    {
        "id": "mod_cern_meta:directive:metafiles",
        "owner": "mod_cern_meta",
        "name": "MetaFiles",
        "kind": "directive",
        "modules": [
            "mod_cern_meta"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Extension",
        "description": "Activates CERN meta-file processing",
        "syntax": "MetaFiles on|off",
        "default": "MetaFiles off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cern_meta.html#metafiles"
    },
    {
        "id": "mod_cern_meta:directive:metasuffix",
        "owner": "mod_cern_meta",
        "name": "MetaSuffix",
        "kind": "directive",
        "modules": [
            "mod_cern_meta"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Extension",
        "description": "File name suffix for the file containing CERN-style meta information",
        "syntax": "MetaSuffix suffix",
        "default": "MetaSuffix .meta",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cern_meta.html#metasuffix"
    },
    {
        "id": "mod_mime_magic:directive:mimemagicfile",
        "owner": "mod_mime_magic",
        "name": "MimeMagicFile",
        "kind": "directive",
        "modules": [
            "mod_mime_magic"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enable MIME-type determination based on file contents using the specified magic file",
        "syntax": "MimeMagicFile file-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime_magic.html#mimemagicfile"
    },
    {
        "id": "prefork:directive:minspareservers",
        "owner": "prefork",
        "name": "MinSpareServers",
        "kind": "directive",
        "modules": [
            "prefork"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Minimum number of idle child server processes",
        "syntax": "MinSpareServers number",
        "default": "MinSpareServers 5",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/prefork.html#minspareservers"
    },
    {
        "id": "mpm_common:directive:minsparethreads",
        "owner": "mpm_common",
        "name": "MinSpareThreads",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "mpm_netware",
            "mpmt_os2"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Minimum number of idle threads available to handle request spikes",
        "syntax": "MinSpareThreads number",
        "default": "See usage for details",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#minsparethreads"
    },
    {
        "id": "mod_file_cache:directive:mmapfile",
        "owner": "mod_file_cache",
        "name": "MMapFile",
        "kind": "directive",
        "modules": [
            "mod_file_cache"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Map a list of files into memory at startup time",
        "syntax": "MMapFile file-path [file-path] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_file_cache.html#mmapfile"
    },
    {
        "id": "mod_dialup:directive:modemstandard",
        "owner": "mod_dialup",
        "name": "ModemStandard",
        "kind": "directive",
        "modules": [
            "mod_dialup"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Modem standard to simulate",
        "syntax": "ModemStandard V.21|V.26bis|V.32|V.34|V.92",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_dialup.html#modemstandard"
    },
    {
        "id": "mod_mime:directive:modmimeusepathinfo",
        "owner": "mod_mime",
        "name": "ModMimeUsePathInfo",
        "kind": "directive",
        "modules": [
            "mod_mime"
        ],
        "contexts": [
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Tells mod_mime to treat path_info components as part of the filename",
        "syntax": "ModMimeUsePathInfo On|Off",
        "default": "ModMimeUsePathInfo Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime.html#modmimeusepathinfo"
    },
    {
        "id": "mod_mime:directive:multiviewsmatch",
        "owner": "mod_mime",
        "name": "MultiviewsMatch",
        "kind": "directive",
        "modules": [
            "mod_mime"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "The types of files that will be included when searching for a matching file with MultiViews",
        "syntax": "MultiviewsMatch Any|NegotiatedOnly|Filters|Handlers [Handlers|Filters]",
        "default": "MultiviewsMatch NegotiatedOnly",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime.html#multiviewsmatch"
    },
    {
        "id": "core:directive:mutex",
        "owner": "core",
        "name": "Mutex",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Core",
        "description": "Configures mutex mechanism and lock file directory for all or specified mutexes",
        "syntax": "Mutex mechanism [default|mutex-name] ... [OmitPID]",
        "default": "Mutex default",
        "compatibility": "Available in Apache HTTP Server 2.3.4 and later",
        "since": "2.3.4",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#mutex"
    },
    {
        "id": "core:directive:namevirtualhost",
        "owner": "core",
        "name": "NameVirtualHost",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Core",
        "description": "DEPRECATED: Designates an IP address for name-virtual hosting",
        "syntax": "NameVirtualHost addr[:port]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#namevirtualhost"
    },
    {
        "id": "mod_proxy:directive:noproxy",
        "owner": "mod_proxy",
        "name": "NoProxy",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Hosts, domains, or networks that will be connected to directly",
        "syntax": "NoProxy host [host] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#noproxy"
    },
    {
        "id": "mod_nw_ssl:directive:nwssltrustedcerts",
        "owner": "mod_nw_ssl",
        "name": "NWSSLTrustedCerts",
        "kind": "directive",
        "modules": [
            "mod_nw_ssl"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Base",
        "description": "List of additional client certificates",
        "syntax": "NWSSLTrustedCerts filename [filename] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_nw_ssl.html#nwssltrustedcerts"
    },
    {
        "id": "mod_nw_ssl:directive:nwsslupgradeable",
        "owner": "mod_nw_ssl",
        "name": "NWSSLUpgradeable",
        "kind": "directive",
        "modules": [
            "mod_nw_ssl"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Base",
        "description": "Allows a connection to be upgraded to an SSL connection upon request",
        "syntax": "NWSSLUpgradeable [IP-address:]portnumber",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_nw_ssl.html#nwsslupgradeable"
    },
    {
        "id": "core:directive:options",
        "owner": "core",
        "name": "Options",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Options"
        ],
        "status": "Core",
        "description": "Configures what features are available in a particular directory",
        "syntax": "Options [+|-]option [[+|-]option] ...",
        "default": "Options FollowSymlinks",
        "compatibility": "The default was changed from All to FollowSymlinks in 2.3.11",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#options"
    },
    {
        "id": "mod_access_compat:directive:order",
        "owner": "mod_access_compat",
        "name": "Order",
        "kind": "directive",
        "modules": [
            "mod_access_compat"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "Limit"
        ],
        "status": "Extension",
        "description": "Controls the default access state and the order in which Allow and Deny are evaluated.",
        "syntax": "Order ordering",
        "default": "Order Deny,Allow",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_access_compat.html#order"
    },
    {
        "id": "mod_sed:directive:outputsed",
        "owner": "mod_sed",
        "name": "OutputSed",
        "kind": "directive",
        "modules": [
            "mod_sed"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Sed command for filtering response content",
        "syntax": "OutputSed sed-command",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_sed.html#outputsed"
    },
    {
        "id": "mod_env:directive:passenv",
        "owner": "mod_env",
        "name": "PassEnv",
        "kind": "directive",
        "modules": [
            "mod_env"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Passes environment variables from the shell",
        "syntax": "PassEnv env-variable [env-variable] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_env.html#passenv"
    },
    {
        "id": "mpm_common:directive:pidfile",
        "owner": "mpm_common",
        "name": "PidFile",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "prefork",
            "mpm_winnt",
            "mpmt_os2"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "File where the server records the process ID of the daemon",
        "syntax": "PidFile filename",
        "default": "PidFile logs/httpd.pid",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#pidfile"
    },
    {
        "id": "mod_privileges:directive:privilegesmode",
        "owner": "mod_privileges",
        "name": "PrivilegesMode",
        "kind": "directive",
        "modules": [
            "mod_privileges"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Trade off processing speed and efficiency vs security against malicious privileges-aware code.",
        "syntax": "PrivilegesMode FAST|SECURE|SELECTIVE",
        "default": "PrivilegesMode FAST",
        "compatibility": "Available on Solaris 10 and OpenSolaris with non-threaded MPMs (prefork or custom MPM).",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_privileges.html#privilegesmode"
    },
    {
        "id": "core:directive:protocol",
        "owner": "core",
        "name": "Protocol",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Protocol for a listening socket",
        "syntax": "Protocol protocol",
        "compatibility": "Available in Apache 2.1.5 and later. On Windows, from Apache 2.3.3 and later.",
        "since": "2.1.5",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#protocol"
    },
    {
        "id": "mod_echo:directive:protocolecho",
        "owner": "mod_echo",
        "name": "ProtocolEcho",
        "kind": "directive",
        "modules": [
            "mod_echo"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Turn the echo server on or off",
        "syntax": "ProtocolEcho On|Off",
        "default": "ProtocolEcho Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_echo.html#protocolecho"
    },
    {
        "id": "core:directive:protocols",
        "owner": "core",
        "name": "Protocols",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Protocols available for a server/virtual host",
        "syntax": "Protocols protocol ...",
        "default": "Protocols http/1.1",
        "compatibility": "Only available from Apache 2.4.17 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#protocols"
    },
    {
        "id": "core:directive:protocolshonororder",
        "owner": "core",
        "name": "ProtocolsHonorOrder",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Determines if order of Protocols determines precedence during negotiation",
        "syntax": "ProtocolsHonorOrder On|Off",
        "default": "ProtocolsHonorOrder On",
        "compatibility": "Only available from Apache 2.4.17 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#protocolshonororder"
    },
    {
        "id": "mod_proxy:section:proxy",
        "owner": "mod_proxy",
        "name": "Proxy",
        "kind": "section",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Container for directives applied to proxied resources",
        "syntax": "<Proxy wildcard-url> ...</Proxy>",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxy"
    },
    {
        "id": "mod_proxy:directive:proxy100continue",
        "owner": "mod_proxy",
        "name": "Proxy100Continue",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Forward 100-continue expectation to the origin server",
        "syntax": "Proxy100Continue Off|On",
        "default": "Proxy100Continue On",
        "compatibility": "Available in version 2.4.40 and later",
        "since": "2.4.40",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxy100continue"
    },
    {
        "id": "mod_proxy:directive:proxyaddheaders",
        "owner": "mod_proxy",
        "name": "ProxyAddHeaders",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Add proxy information in X-Forwarded-* headers",
        "syntax": "ProxyAddHeaders Off|On",
        "default": "ProxyAddHeaders On",
        "compatibility": "Available in version 2.3.10 and later",
        "since": "2.3.10",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxyaddheaders"
    },
    {
        "id": "mod_proxy:directive:proxybadheader",
        "owner": "mod_proxy",
        "name": "ProxyBadHeader",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Determines how to handle bad header lines in a response",
        "syntax": "ProxyBadHeader IsError|Ignore|StartBody",
        "default": "ProxyBadHeader IsError",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxybadheader"
    },
    {
        "id": "mod_proxy:directive:proxyblock",
        "owner": "mod_proxy",
        "name": "ProxyBlock",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Words, hosts, or domains that are banned from being proxied",
        "syntax": "ProxyBlock *|word|host|domain [word|host|domain] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxyblock"
    },
    {
        "id": "mod_proxy:directive:proxydomain",
        "owner": "mod_proxy",
        "name": "ProxyDomain",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Default domain name for proxied requests",
        "syntax": "ProxyDomain Domain",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxydomain"
    },
    {
        "id": "mod_proxy:directive:proxyerroroverride",
        "owner": "mod_proxy",
        "name": "ProxyErrorOverride",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Override error pages for proxied content",
        "syntax": "ProxyErrorOverride Off|On [code ...]",
        "default": "ProxyErrorOverride Off",
        "compatibility": "The list of status codes was added in 2.4.47",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxyerroroverride"
    },
    {
        "id": "mod_proxy_express:directive:proxyexpressdbmfile",
        "owner": "mod_proxy_express",
        "name": "ProxyExpressDBMFile",
        "kind": "directive",
        "modules": [
            "mod_proxy_express"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Pathname to DBM file.",
        "syntax": "ProxyExpressDBMFile pathname",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_express.html#proxyexpressdbmfile"
    },
    {
        "id": "mod_proxy_express:directive:proxyexpressdbmtype",
        "owner": "mod_proxy_express",
        "name": "ProxyExpressDBMType",
        "kind": "directive",
        "modules": [
            "mod_proxy_express"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "DBM type of file.",
        "syntax": "ProxyExpressDBMType type",
        "default": "ProxyExpressDBMType default",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_express.html#proxyexpressdbmtype"
    },
    {
        "id": "mod_proxy_express:directive:proxyexpressenable",
        "owner": "mod_proxy_express",
        "name": "ProxyExpressEnable",
        "kind": "directive",
        "modules": [
            "mod_proxy_express"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enable the module functionality.",
        "syntax": "ProxyExpressEnable on|off",
        "default": "ProxyExpressEnable off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_express.html#proxyexpressenable"
    },
    {
        "id": "mod_proxy_fcgi:directive:proxyfcgibackendtype",
        "owner": "mod_proxy_fcgi",
        "name": "ProxyFCGIBackendType",
        "kind": "directive",
        "modules": [
            "mod_proxy_fcgi"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Specify the type of backend FastCGI application",
        "syntax": "ProxyFCGIBackendType FPM|GENERIC",
        "default": "ProxyFCGIBackendType FPM",
        "compatibility": "Available in version 2.4.26 and later",
        "since": "2.4.26",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_fcgi.html#proxyfcgibackendtype"
    },
    {
        "id": "mod_proxy_fcgi:directive:proxyfcgisetenvif",
        "owner": "mod_proxy_fcgi",
        "name": "ProxyFCGISetEnvIf",
        "kind": "directive",
        "modules": [
            "mod_proxy_fcgi"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Allow variables sent to FastCGI servers to be fixed up",
        "syntax": "ProxyFCGISetEnvIf conditional-expression [!]environment-variable-name [value-expression]",
        "compatibility": "Available in version 2.4.26 and later",
        "since": "2.4.26",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_fcgi.html#proxyfcgisetenvif"
    },
    {
        "id": "mod_proxy_ftp:directive:proxyftpdircharset",
        "owner": "mod_proxy_ftp",
        "name": "ProxyFtpDirCharset",
        "kind": "directive",
        "modules": [
            "mod_proxy_ftp"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Define the character set for proxied FTP listings",
        "syntax": "ProxyFtpDirCharset character_set",
        "default": "ProxyFtpDirCharset ISO-8859-1",
        "compatibility": "Available in Apache 2.2.7 and later. Moved from mod_proxy in Apache 2.3.5.",
        "since": "2.2.7",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_ftp.html#proxyftpdircharset"
    },
    {
        "id": "mod_proxy_ftp:directive:proxyftpescapewildcards",
        "owner": "mod_proxy_ftp",
        "name": "ProxyFtpEscapeWildcards",
        "kind": "directive",
        "modules": [
            "mod_proxy_ftp"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Whether wildcards in requested filenames are escaped when sent to the FTP server",
        "syntax": "ProxyFtpEscapeWildcards on|off",
        "default": "ProxyFtpEscapeWildcards on",
        "compatibility": "Available in Apache 2.3.3 and later",
        "since": "2.3.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_ftp.html#proxyftpescapewildcards"
    },
    {
        "id": "mod_proxy_ftp:directive:proxyftplistonwildcard",
        "owner": "mod_proxy_ftp",
        "name": "ProxyFtpListOnWildcard",
        "kind": "directive",
        "modules": [
            "mod_proxy_ftp"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Whether wildcards in requested filenames trigger a file listing",
        "syntax": "ProxyFtpListOnWildcard on|off",
        "default": "ProxyFtpListOnWildcard on",
        "compatibility": "Available in Apache 2.3.3 and later",
        "since": "2.3.3",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_ftp.html#proxyftplistonwildcard"
    },
    {
        "id": "mod_proxy_hcheck:directive:proxyhcexpr",
        "owner": "mod_proxy_hcheck",
        "name": "ProxyHCExpr",
        "kind": "directive",
        "modules": [
            "mod_proxy_hcheck"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Creates a named condition expression to use to determine health of the backend based on its response",
        "syntax": "ProxyHCExpr name {ap_expr expression}",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_hcheck.html#proxyhcexpr"
    },
    {
        "id": "mod_proxy_hcheck:directive:proxyhctemplate",
        "owner": "mod_proxy_hcheck",
        "name": "ProxyHCTemplate",
        "kind": "directive",
        "modules": [
            "mod_proxy_hcheck"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Creates a named template for setting various health check parameters",
        "syntax": "ProxyHCTemplate name parameter=setting [...]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_hcheck.html#proxyhctemplate"
    },
    {
        "id": "mod_proxy_hcheck:directive:proxyhctpsize",
        "owner": "mod_proxy_hcheck",
        "name": "ProxyHCTPsize",
        "kind": "directive",
        "modules": [
            "mod_proxy_hcheck"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Sets the total server-wide size of the threadpool used for the health check workers",
        "syntax": "ProxyHCTPsize size",
        "default": "ProxyHCTPsize 16",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_hcheck.html#proxyhctpsize"
    },
    {
        "id": "mod_proxy_html:directive:proxyhtmlbufsize",
        "owner": "mod_proxy_html",
        "name": "ProxyHTMLBufSize",
        "kind": "directive",
        "modules": [
            "mod_proxy_html"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Sets the buffer size increment for buffering inline scripts and stylesheets.",
        "syntax": "ProxyHTMLBufSize bytes",
        "default": "ProxyHTMLBufSize 8192",
        "compatibility": "Version 2.4 and later; available as a third-party for earlier 2.x versions",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_html.html#proxyhtmlbufsize"
    },
    {
        "id": "mod_proxy_html:directive:proxyhtmlcharsetout",
        "owner": "mod_proxy_html",
        "name": "ProxyHTMLCharsetOut",
        "kind": "directive",
        "modules": [
            "mod_proxy_html"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Specify a charset for mod_proxy_html output.",
        "syntax": "ProxyHTMLCharsetOut Charset | *",
        "default": "ProxyHTMLCharsetOut UTF-8",
        "compatibility": "Version 2.4 and later; available as a third-party for earlier 2.x versions",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_html.html#proxyhtmlcharsetout"
    },
    {
        "id": "mod_proxy_html:directive:proxyhtmldoctype",
        "owner": "mod_proxy_html",
        "name": "ProxyHTMLDocType",
        "kind": "directive",
        "modules": [
            "mod_proxy_html"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Sets an HTML or XHTML document type declaration.",
        "syntax": "ProxyHTMLDocType HTML|XHTML [Legacy]OR ProxyHTMLDocType fpi [SGML|XML]",
        "compatibility": "Version 2.4 and later; available as a third-party for earlier 2.x versions",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_html.html#proxyhtmldoctype"
    },
    {
        "id": "mod_proxy_html:directive:proxyhtmlenable",
        "owner": "mod_proxy_html",
        "name": "ProxyHTMLEnable",
        "kind": "directive",
        "modules": [
            "mod_proxy_html"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Turns the proxy_html filter on or off.",
        "syntax": "ProxyHTMLEnable On|Off",
        "default": "ProxyHTMLEnable Off",
        "compatibility": "Version 2.4 and later; available as a third-party module for earlier 2.x versions.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_html.html#proxyhtmlenable"
    },
    {
        "id": "mod_proxy_html:directive:proxyhtmlevents",
        "owner": "mod_proxy_html",
        "name": "ProxyHTMLEvents",
        "kind": "directive",
        "modules": [
            "mod_proxy_html"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Specify attributes to treat as scripting events.",
        "syntax": "ProxyHTMLEvents attribute [attribute ...]",
        "compatibility": "Version 2.4 and later; available as a third-party for earlier 2.x versions",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_html.html#proxyhtmlevents"
    },
    {
        "id": "mod_proxy_html:directive:proxyhtmlextended",
        "owner": "mod_proxy_html",
        "name": "ProxyHTMLExtended",
        "kind": "directive",
        "modules": [
            "mod_proxy_html"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Determines whether to fix links in inline scripts, stylesheets, and scripting events.",
        "syntax": "ProxyHTMLExtended On|Off",
        "default": "ProxyHTMLExtended Off",
        "compatibility": "Version 2.4 and later; available as a third-party for earlier 2.x versions",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_html.html#proxyhtmlextended"
    },
    {
        "id": "mod_proxy_html:directive:proxyhtmlfixups",
        "owner": "mod_proxy_html",
        "name": "ProxyHTMLFixups",
        "kind": "directive",
        "modules": [
            "mod_proxy_html"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Fixes for simple HTML errors.",
        "syntax": "ProxyHTMLFixups [lowercase] [dospath] [reset]",
        "default": "ProxyHTMLFixups none",
        "compatibility": "Version 2.4 and later; available as a third-party for earlier 2.x versions",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_html.html#proxyhtmlfixups"
    },
    {
        "id": "mod_proxy_html:directive:proxyhtmlinterp",
        "owner": "mod_proxy_html",
        "name": "ProxyHTMLInterp",
        "kind": "directive",
        "modules": [
            "mod_proxy_html"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Enables per-request interpolation of ProxyHTMLURLMap rules.",
        "syntax": "ProxyHTMLInterp On|Off",
        "default": "ProxyHTMLInterp Off",
        "compatibility": "Version 2.4 and later; available as a third-party module for earlier 2.x versions",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_html.html#proxyhtmlinterp"
    },
    {
        "id": "mod_proxy_html:directive:proxyhtmllinks",
        "owner": "mod_proxy_html",
        "name": "ProxyHTMLLinks",
        "kind": "directive",
        "modules": [
            "mod_proxy_html"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Specify HTML elements that have URL attributes to be rewritten.",
        "syntax": "ProxyHTMLLinks element attribute [attribute2 ...]",
        "compatibility": "Version 2.4 and later; available as a third-party for earlier 2.x versions",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_html.html#proxyhtmllinks"
    },
    {
        "id": "mod_proxy_html:directive:proxyhtmlmeta",
        "owner": "mod_proxy_html",
        "name": "ProxyHTMLMeta",
        "kind": "directive",
        "modules": [
            "mod_proxy_html"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Turns on or off extra pre-parsing of metadata in HTML <head> sections.",
        "syntax": "ProxyHTMLMeta On|Off",
        "default": "ProxyHTMLMeta Off",
        "compatibility": "Version 2.4 and later; available as a third-party module for earlier 2.x versions.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_html.html#proxyhtmlmeta"
    },
    {
        "id": "mod_proxy_html:directive:proxyhtmlstripcomments",
        "owner": "mod_proxy_html",
        "name": "ProxyHTMLStripComments",
        "kind": "directive",
        "modules": [
            "mod_proxy_html"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Determines whether to strip HTML comments.",
        "syntax": "ProxyHTMLStripComments On|Off",
        "default": "ProxyHTMLStripComments Off",
        "compatibility": "Version 2.4 and later; available as a third-party for earlier 2.x versions",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_html.html#proxyhtmlstripcomments"
    },
    {
        "id": "mod_proxy_html:directive:proxyhtmlurlmap",
        "owner": "mod_proxy_html",
        "name": "ProxyHTMLURLMap",
        "kind": "directive",
        "modules": [
            "mod_proxy_html"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Defines a rule to rewrite HTML links",
        "syntax": "ProxyHTMLURLMap from-pattern to-pattern [flags] [cond]",
        "compatibility": "Version 2.4 and later; available as a third-party module for earlier 2.x versions.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_html.html#proxyhtmlurlmap"
    },
    {
        "id": "mod_proxy:directive:proxyiobuffersize",
        "owner": "mod_proxy",
        "name": "ProxyIOBufferSize",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Determine size of internal data throughput buffer",
        "syntax": "ProxyIOBufferSize bytes",
        "default": "ProxyIOBufferSize 8192",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxyiobuffersize"
    },
    {
        "id": "mod_proxy:section:proxymatch",
        "owner": "mod_proxy",
        "name": "ProxyMatch",
        "kind": "section",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Container for directives applied to regular-expression-matched proxied resources",
        "syntax": "<ProxyMatch regex> ...</ProxyMatch>",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxymatch"
    },
    {
        "id": "mod_proxy:directive:proxymaxforwards",
        "owner": "mod_proxy",
        "name": "ProxyMaxForwards",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maximum number of proxies that a request can be forwarded through",
        "syntax": "ProxyMaxForwards number",
        "default": "ProxyMaxForwards -1",
        "compatibility": "Default behavior changed in 2.2.7",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxymaxforwards"
    },
    {
        "id": "mod_proxy:directive:proxypass",
        "owner": "mod_proxy",
        "name": "ProxyPass",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maps remote servers into the local server URL-space",
        "syntax": "ProxyPass [path] !|url [key=value [key=value ...]] [nocanon] [interpolate] [noquery]",
        "compatibility": "Unix Domain Socket (UDS) support added in 2.4.7",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxypass"
    },
    {
        "id": "mod_proxy:directive:proxypassinherit",
        "owner": "mod_proxy",
        "name": "ProxyPassInherit",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Inherit ProxyPass directives defined from the main server",
        "syntax": "ProxyPassInherit On|Off",
        "default": "ProxyPassInherit On",
        "compatibility": "ProxyPassInherit is only available in Apache HTTP Server 2.4.5 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxypassinherit"
    },
    {
        "id": "mod_proxy:directive:proxypassinterpolateenv",
        "owner": "mod_proxy",
        "name": "ProxyPassInterpolateEnv",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enable Environment Variable interpolation in Reverse Proxy configurations",
        "syntax": "ProxyPassInterpolateEnv On|Off",
        "default": "ProxyPassInterpolateEnv Off",
        "compatibility": "Available in httpd 2.2.9 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxypassinterpolateenv"
    },
    {
        "id": "mod_proxy:directive:proxypassmatch",
        "owner": "mod_proxy",
        "name": "ProxyPassMatch",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maps remote servers into the local server URL-space using regular expressions",
        "syntax": "ProxyPassMatch [regex] !|url [key=value [key=value ...]]",
        "compatibility": "Since 2.4.47 the key=value Parameters are honored when the url parameter contains backreference(s) (see note below).",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxypassmatch"
    },
    {
        "id": "mod_proxy:directive:proxypassreverse",
        "owner": "mod_proxy",
        "name": "ProxyPassReverse",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Adjusts the URL in HTTP response headers sent from a reverse proxied server",
        "syntax": "ProxyPassReverse [path] url [interpolate]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxypassreverse"
    },
    {
        "id": "mod_proxy:directive:proxypassreversecookiedomain",
        "owner": "mod_proxy",
        "name": "ProxyPassReverseCookieDomain",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Adjusts the Domain string in Set-Cookie headers from a reverse- proxied server",
        "syntax": "ProxyPassReverseCookieDomain internal-domain public-domain [interpolate]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxypassreversecookiedomain"
    },
    {
        "id": "mod_proxy:directive:proxypassreversecookiepath",
        "owner": "mod_proxy",
        "name": "ProxyPassReverseCookiePath",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Adjusts the Path string in Set-Cookie headers from a reverse- proxied server",
        "syntax": "ProxyPassReverseCookiePath internal-path public-path [interpolate]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxypassreversecookiepath"
    },
    {
        "id": "mod_proxy:directive:proxypreservehost",
        "owner": "mod_proxy",
        "name": "ProxyPreserveHost",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Use incoming Host HTTP request header for proxy request",
        "syntax": "ProxyPreserveHost On|Off",
        "default": "ProxyPreserveHost Off",
        "compatibility": "Usable in directory context in 2.3.3 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxypreservehost"
    },
    {
        "id": "mod_proxy:directive:proxyreceivebuffersize",
        "owner": "mod_proxy",
        "name": "ProxyReceiveBufferSize",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Network buffer size for proxied HTTP and FTP connections",
        "syntax": "ProxyReceiveBufferSize bytes",
        "default": "ProxyReceiveBufferSize 0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxyreceivebuffersize"
    },
    {
        "id": "mod_proxy:directive:proxyremote",
        "owner": "mod_proxy",
        "name": "ProxyRemote",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Remote proxy used to handle certain requests",
        "syntax": "ProxyRemote match remote-server [username:password]",
        "compatibility": "The optional third argument is usable only in httpd 2.4.59 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxyremote"
    },
    {
        "id": "mod_proxy:directive:proxyremotematch",
        "owner": "mod_proxy",
        "name": "ProxyRemoteMatch",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Remote proxy used to handle requests matched by regular expressions",
        "syntax": "ProxyRemoteMatch regex remote-server [username:password]",
        "compatibility": "The optional third argument is usable only in httpd 2.4.59 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxyremotematch"
    },
    {
        "id": "mod_proxy:directive:proxyrequests",
        "owner": "mod_proxy",
        "name": "ProxyRequests",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enables forward (standard) proxy requests",
        "syntax": "ProxyRequests On|Off",
        "default": "ProxyRequests Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxyrequests"
    },
    {
        "id": "mod_proxy_scgi:directive:proxyscgiinternalredirect",
        "owner": "mod_proxy_scgi",
        "name": "ProxySCGIInternalRedirect",
        "kind": "directive",
        "modules": [
            "mod_proxy_scgi"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enable or disable internal redirect responses from the backend",
        "syntax": "ProxySCGIInternalRedirect On|Off|Headername",
        "default": "ProxySCGIInternalRedirect On",
        "compatibility": "The Headername feature is available in version 2.4.13 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_scgi.html#proxyscgiinternalredirect"
    },
    {
        "id": "mod_proxy_scgi:directive:proxyscgisendfile",
        "owner": "mod_proxy_scgi",
        "name": "ProxySCGISendfile",
        "kind": "directive",
        "modules": [
            "mod_proxy_scgi"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enable evaluation of X-Sendfile pseudo response header",
        "syntax": "ProxySCGISendfile On|Off|Headername",
        "default": "ProxySCGISendfile Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_scgi.html#proxyscgisendfile"
    },
    {
        "id": "mod_proxy:directive:proxyset",
        "owner": "mod_proxy",
        "name": "ProxySet",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Extension",
        "description": "Set various Proxy balancer or member parameters",
        "syntax": "ProxySet url key=value [key=value ...]",
        "compatibility": "ProxySet is only available in Apache HTTP Server 2.2 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxyset"
    },
    {
        "id": "mod_proxy:directive:proxysourceaddress",
        "owner": "mod_proxy",
        "name": "ProxySourceAddress",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Set local IP address for outgoing proxy connections",
        "syntax": "ProxySourceAddress address",
        "compatibility": "Available in version 2.3.9 and later",
        "since": "2.3.9",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxysourceaddress"
    },
    {
        "id": "mod_proxy:directive:proxystatus",
        "owner": "mod_proxy",
        "name": "ProxyStatus",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Show Proxy LoadBalancer status in mod_status",
        "syntax": "ProxyStatus Off|On|Full",
        "default": "ProxyStatus Off",
        "compatibility": "Available in version 2.2 and later",
        "since": "2.2",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxystatus"
    },
    {
        "id": "mod_proxy:directive:proxytimeout",
        "owner": "mod_proxy",
        "name": "ProxyTimeout",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Network timeout for proxied requests",
        "syntax": "ProxyTimeout seconds",
        "default": "Value of Timeout",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxytimeout"
    },
    {
        "id": "mod_proxy:directive:proxyvia",
        "owner": "mod_proxy",
        "name": "ProxyVia",
        "kind": "directive",
        "modules": [
            "mod_proxy"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Information provided in the Via HTTP response header for proxied requests",
        "syntax": "ProxyVia On|Off|Full|Block",
        "default": "ProxyVia Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy.html#proxyvia"
    },
    {
        "id": "mod_proxy_wstunnel:directive:proxywebsocketfallbacktoproxyhttp",
        "owner": "mod_proxy_wstunnel",
        "name": "ProxyWebsocketFallbackToProxyHttp",
        "kind": "directive",
        "modules": [
            "mod_proxy_wstunnel"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Instructs this module to let mod_proxy_http handle the request",
        "syntax": "ProxyWebsocketFallbackToProxyHttp On|Off",
        "default": "ProxyWebsocketFallbackToProxyHttp On",
        "compatibility": "Available in httpd 2.4.48 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html#proxywebsocketfallbacktoproxyhttp"
    },
    {
        "id": "core:directive:qualifyredirecturl",
        "owner": "core",
        "name": "QualifyRedirectURL",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Core",
        "description": "Controls whether the REDIRECT_URL environment variable is fully qualified",
        "syntax": "QualifyRedirectURL On|Off",
        "default": "QualifyRedirectURL Off",
        "compatibility": "Directive supported in 2.4.18 and later. 2.4.17 acted as if 'QualifyRedirectURL On' was configured.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#qualifyredirecturl"
    },
    {
        "id": "core:directive:readbuffersize",
        "owner": "core",
        "name": "ReadBufferSize",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Core",
        "description": "Size of the buffers used to read data",
        "syntax": "ReadBufferSize bytes",
        "default": "ReadBufferSize 8192",
        "compatibility": "2.4.27 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#readbuffersize"
    },
    {
        "id": "mod_autoindex:directive:readmename",
        "owner": "mod_autoindex",
        "name": "ReadmeName",
        "kind": "directive",
        "modules": [
            "mod_autoindex"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Indexes"
        ],
        "status": "Base",
        "description": "Name of the file that will be inserted at the end of the index listing",
        "syntax": "ReadmeName filename",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_autoindex.html#readmename"
    },
    {
        "id": "mpm_common:directive:receivebuffersize",
        "owner": "mpm_common",
        "name": "ReceiveBufferSize",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "prefork",
            "mpm_winnt",
            "mpm_netware",
            "mpmt_os2"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "TCP receive buffer size",
        "syntax": "ReceiveBufferSize bytes",
        "default": "ReceiveBufferSize 0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#receivebuffersize"
    },
    {
        "id": "mod_alias:directive:redirect",
        "owner": "mod_alias",
        "name": "Redirect",
        "kind": "directive",
        "modules": [
            "mod_alias"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Sends an external redirect asking the client to fetch a different URL",
        "syntax": "Redirect [status] [URL-path] URL",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_alias.html#redirect"
    },
    {
        "id": "mod_alias:directive:redirectmatch",
        "owner": "mod_alias",
        "name": "RedirectMatch",
        "kind": "directive",
        "modules": [
            "mod_alias"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Sends an external redirect based on a regular expression match of the current URL",
        "syntax": "RedirectMatch [status] regex URL",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_alias.html#redirectmatch"
    },
    {
        "id": "mod_alias:directive:redirectpermanent",
        "owner": "mod_alias",
        "name": "RedirectPermanent",
        "kind": "directive",
        "modules": [
            "mod_alias"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Sends an external permanent redirect asking the client to fetch a different URL",
        "syntax": "RedirectPermanent URL-path URL",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_alias.html#redirectpermanent"
    },
    {
        "id": "mod_alias:directive:redirectrelative",
        "owner": "mod_alias",
        "name": "RedirectRelative",
        "kind": "directive",
        "modules": [
            "mod_alias"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Allows relative redirect targets.",
        "syntax": "RedirectRelative On|Off",
        "default": "RedirectRelative Off",
        "compatibility": "2.4.58 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_alias.html#redirectrelative"
    },
    {
        "id": "mod_alias:directive:redirecttemp",
        "owner": "mod_alias",
        "name": "RedirectTemp",
        "kind": "directive",
        "modules": [
            "mod_alias"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Sends an external temporary redirect asking the client to fetch a different URL",
        "syntax": "RedirectTemp URL-path URL",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_alias.html#redirecttemp"
    },
    {
        "id": "mod_socache_redis:directive:redisconnpoolttl",
        "owner": "mod_socache_redis",
        "name": "RedisConnPoolTTL",
        "kind": "directive",
        "modules": [
            "mod_socache_redis"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "TTL used for the connection pool with the Redis server(s)",
        "syntax": "RedisConnPoolTTL num[units]",
        "default": "RedisConnPoolTTL 15s",
        "compatibility": "Available in Apache 2.4.39 and later",
        "since": "2.4.39",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_socache_redis.html#redisconnpoolttl"
    },
    {
        "id": "mod_socache_redis:directive:redistimeout",
        "owner": "mod_socache_redis",
        "name": "RedisTimeout",
        "kind": "directive",
        "modules": [
            "mod_socache_redis"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "R/W timeout used for the connection with the Redis server(s)",
        "syntax": "RedisTimeout num[units]",
        "default": "RedisTimeout 5s",
        "compatibility": "Available in Apache 2.4.39 and later",
        "since": "2.4.39",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_socache_redis.html#redistimeout"
    },
    {
        "id": "mod_reflector:directive:reflectorheader",
        "owner": "mod_reflector",
        "name": "ReflectorHeader",
        "kind": "directive",
        "modules": [
            "mod_reflector"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Options"
        ],
        "status": "Base",
        "description": "Reflect an input header to the output headers",
        "syntax": "ReflectorHeader inputheader [outputheader]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_reflector.html#reflectorheader"
    },
    {
        "id": "core:directive:regexdefaultoptions",
        "owner": "core",
        "name": "RegexDefaultOptions",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Core",
        "description": "Allow to configure global/default options for regexes",
        "syntax": "RegexDefaultOptions [none] [+|-]option [[+|-]option] ...",
        "default": "RegexDefaultOptions DOTALL DOLLAR_ENDONLY",
        "compatibility": "Only available from Apache 2.4.30 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#regexdefaultoptions"
    },
    {
        "id": "core:directive:registerhttpmethod",
        "owner": "core",
        "name": "RegisterHttpMethod",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Core",
        "description": "Register non-standard HTTP methods",
        "syntax": "RegisterHttpMethod method [method [...]]",
        "compatibility": "Available in Apache HTTP Server 2.4.24 and later",
        "since": "2.4.24",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#registerhttpmethod"
    },
    {
        "id": "mod_remoteip:directive:remoteipheader",
        "owner": "mod_remoteip",
        "name": "RemoteIPHeader",
        "kind": "directive",
        "modules": [
            "mod_remoteip"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "Declare the header field which should be parsed for useragent IP addresses",
        "syntax": "RemoteIPHeader header-field",
        "default": "none",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_remoteip.html#remoteipheader"
    },
    {
        "id": "mod_remoteip:directive:remoteipinternalproxy",
        "owner": "mod_remoteip",
        "name": "RemoteIPInternalProxy",
        "kind": "directive",
        "modules": [
            "mod_remoteip"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "Declare client intranet IP addresses trusted to present the RemoteIPHeader value",
        "syntax": "RemoteIPInternalProxy proxy-ip|proxy-ip/subnet|hostname ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_remoteip.html#remoteipinternalproxy"
    },
    {
        "id": "mod_remoteip:directive:remoteipinternalproxylist",
        "owner": "mod_remoteip",
        "name": "RemoteIPInternalProxyList",
        "kind": "directive",
        "modules": [
            "mod_remoteip"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "Declare client intranet IP addresses trusted to present the RemoteIPHeader value",
        "syntax": "RemoteIPInternalProxyList filename",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_remoteip.html#remoteipinternalproxylist"
    },
    {
        "id": "mod_remoteip:directive:remoteipproxiesheader",
        "owner": "mod_remoteip",
        "name": "RemoteIPProxiesHeader",
        "kind": "directive",
        "modules": [
            "mod_remoteip"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "Declare the header field which will record all intermediate IP addresses",
        "syntax": "RemoteIPProxiesHeader HeaderFieldName",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_remoteip.html#remoteipproxiesheader"
    },
    {
        "id": "mod_remoteip:directive:remoteipproxyprotocol",
        "owner": "mod_remoteip",
        "name": "RemoteIPProxyProtocol",
        "kind": "directive",
        "modules": [
            "mod_remoteip"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "Enable or disable PROXY protocol handling",
        "syntax": "RemoteIPProxyProtocol On|Off",
        "compatibility": "RemoteIPProxyProtocol is only available in httpd 2.4.31 and newer",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_remoteip.html#remoteipproxyprotocol"
    },
    {
        "id": "mod_remoteip:directive:remoteipproxyprotocolexceptions",
        "owner": "mod_remoteip",
        "name": "RemoteIPProxyProtocolExceptions",
        "kind": "directive",
        "modules": [
            "mod_remoteip"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "Disable processing of PROXY header for certain hosts or networks",
        "syntax": "RemoteIPProxyProtocolExceptions host|range [host|range] [host|range]",
        "compatibility": "RemoteIPProxyProtocolExceptions is only available in httpd 2.4.31 and newer",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_remoteip.html#remoteipproxyprotocolexceptions"
    },
    {
        "id": "mod_remoteip:directive:remoteiptrustedproxy",
        "owner": "mod_remoteip",
        "name": "RemoteIPTrustedProxy",
        "kind": "directive",
        "modules": [
            "mod_remoteip"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "Declare client intranet IP addresses trusted to present the RemoteIPHeader value",
        "syntax": "RemoteIPTrustedProxy proxy-ip|proxy-ip/subnet|hostname ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_remoteip.html#remoteiptrustedproxy"
    },
    {
        "id": "mod_remoteip:directive:remoteiptrustedproxylist",
        "owner": "mod_remoteip",
        "name": "RemoteIPTrustedProxyList",
        "kind": "directive",
        "modules": [
            "mod_remoteip"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "Declare client intranet IP addresses trusted to present the RemoteIPHeader value",
        "syntax": "RemoteIPTrustedProxyList filename",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_remoteip.html#remoteiptrustedproxylist"
    },
    {
        "id": "mod_mime:directive:removecharset",
        "owner": "mod_mime",
        "name": "RemoveCharset",
        "kind": "directive",
        "modules": [
            "mod_mime"
        ],
        "contexts": [
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Removes any character set associations for a set of file extensions",
        "syntax": "RemoveCharset extension [extension] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime.html#removecharset"
    },
    {
        "id": "mod_mime:directive:removeencoding",
        "owner": "mod_mime",
        "name": "RemoveEncoding",
        "kind": "directive",
        "modules": [
            "mod_mime"
        ],
        "contexts": [
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Removes any content encoding associations for a set of file extensions",
        "syntax": "RemoveEncoding extension [extension] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime.html#removeencoding"
    },
    {
        "id": "mod_mime:directive:removehandler",
        "owner": "mod_mime",
        "name": "RemoveHandler",
        "kind": "directive",
        "modules": [
            "mod_mime"
        ],
        "contexts": [
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Removes any handler associations for a set of file extensions",
        "syntax": "RemoveHandler extension [extension] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime.html#removehandler"
    },
    {
        "id": "mod_mime:directive:removeinputfilter",
        "owner": "mod_mime",
        "name": "RemoveInputFilter",
        "kind": "directive",
        "modules": [
            "mod_mime"
        ],
        "contexts": [
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Removes any input filter associations for a set of file extensions",
        "syntax": "RemoveInputFilter extension [extension] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime.html#removeinputfilter"
    },
    {
        "id": "mod_mime:directive:removelanguage",
        "owner": "mod_mime",
        "name": "RemoveLanguage",
        "kind": "directive",
        "modules": [
            "mod_mime"
        ],
        "contexts": [
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Removes any language associations for a set of file extensions",
        "syntax": "RemoveLanguage extension [extension] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime.html#removelanguage"
    },
    {
        "id": "mod_mime:directive:removeoutputfilter",
        "owner": "mod_mime",
        "name": "RemoveOutputFilter",
        "kind": "directive",
        "modules": [
            "mod_mime"
        ],
        "contexts": [
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Removes any output filter associations for a set of file extensions",
        "syntax": "RemoveOutputFilter extension [extension] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime.html#removeoutputfilter"
    },
    {
        "id": "mod_mime:directive:removetype",
        "owner": "mod_mime",
        "name": "RemoveType",
        "kind": "directive",
        "modules": [
            "mod_mime"
        ],
        "contexts": [
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Removes any content type associations for a set of file extensions",
        "syntax": "RemoveType extension [extension] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime.html#removetype"
    },
    {
        "id": "mod_headers:directive:requestheader",
        "owner": "mod_headers",
        "name": "RequestHeader",
        "kind": "directive",
        "modules": [
            "mod_headers"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "Configure HTTP request headers",
        "syntax": "RequestHeader add|append|edit|edit*|merge|set|setifempty|unset header [[expr=]value [replacement] [early|env=[!]varname|expr=expression]]",
        "compatibility": "SetIfEmpty available in 2.4.7 and later, expr=value available in 2.4.10 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_headers.html#requestheader"
    },
    {
        "id": "mod_reqtimeout:directive:requestreadtimeout",
        "owner": "mod_reqtimeout",
        "name": "RequestReadTimeout",
        "kind": "directive",
        "modules": [
            "mod_reqtimeout"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Set timeout values for completing the TLS handshake, receiving the request headers and/or body from client.",
        "syntax": "RequestReadTimeout [handshake=timeout[-maxtimeout][,MinRate=rate] [header=timeout[-maxtimeout][,MinRate=rate] [body=timeout[-maxtimeout][,MinRate=rate]",
        "default": "RequestReadTimeout handshake=0 header=20-40,MinRate=500 body=20,MinRate=500",
        "compatibility": "Available in version 2.2.15 and later; defaulted to disabled in version 2.3.14 and earlier. The handshake stage is available since version 2.4.39.",
        "since": "2.2.15",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_reqtimeout.html#requestreadtimeout"
    },
    {
        "id": "mod_authz_core:directive:require",
        "owner": "mod_authz_core",
        "name": "Require",
        "kind": "directive",
        "modules": [
            "mod_authz_core"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Base",
        "description": "Tests whether an authenticated user is authorized by an authorization provider.",
        "syntax": "Require [not] entity-name [entity-name] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html#require"
    },
    {
        "id": "mod_authz_core:section:requireall",
        "owner": "mod_authz_core",
        "name": "RequireAll",
        "kind": "section",
        "modules": [
            "mod_authz_core"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Base",
        "description": "Enclose a group of authorization directives of which none must fail and at least one must succeed for the enclosing directive to succeed.",
        "syntax": "<RequireAll> ... </RequireAll>",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html#requireall"
    },
    {
        "id": "mod_authz_core:section:requireany",
        "owner": "mod_authz_core",
        "name": "RequireAny",
        "kind": "section",
        "modules": [
            "mod_authz_core"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Base",
        "description": "Enclose a group of authorization directives of which one must succeed for the enclosing directive to succeed.",
        "syntax": "<RequireAny> ... </RequireAny>",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html#requireany"
    },
    {
        "id": "mod_authz_core:section:requirenone",
        "owner": "mod_authz_core",
        "name": "RequireNone",
        "kind": "section",
        "modules": [
            "mod_authz_core"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Base",
        "description": "Enclose a group of authorization directives of which none must succeed for the enclosing directive to not fail.",
        "syntax": "<RequireNone> ... </RequireNone>",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html#requirenone"
    },
    {
        "id": "mod_rewrite:directive:rewritebase",
        "owner": "mod_rewrite",
        "name": "RewriteBase",
        "kind": "directive",
        "modules": [
            "mod_rewrite"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "Sets the base URL for per-directory rewrites",
        "syntax": "RewriteBase URL-path",
        "default": "None",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html#rewritebase"
    },
    {
        "id": "mod_rewrite:directive:rewritecond",
        "owner": "mod_rewrite",
        "name": "RewriteCond",
        "kind": "directive",
        "modules": [
            "mod_rewrite"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "Defines a condition under which rewriting will take place",
        "syntax": "RewriteCond TestString [!]CondPattern [flags]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html#rewritecond"
    },
    {
        "id": "mod_rewrite:directive:rewriteengine",
        "owner": "mod_rewrite",
        "name": "RewriteEngine",
        "kind": "directive",
        "modules": [
            "mod_rewrite"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "Enables or disables runtime rewriting engine",
        "syntax": "RewriteEngine on|off",
        "default": "RewriteEngine off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html#rewriteengine"
    },
    {
        "id": "mod_rewrite:directive:rewritemap",
        "owner": "mod_rewrite",
        "name": "RewriteMap",
        "kind": "directive",
        "modules": [
            "mod_rewrite"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Defines a mapping function for key-lookup",
        "syntax": "RewriteMap MapName MapType:MapSource [MapTypeOptions]",
        "compatibility": "The 3rd parameter, MapTypeOptions, is only available in Apache httpd 2.4.29 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html#rewritemap"
    },
    {
        "id": "mod_rewrite:directive:rewriteoptions",
        "owner": "mod_rewrite",
        "name": "RewriteOptions",
        "kind": "directive",
        "modules": [
            "mod_rewrite"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "Sets some special options for the rewrite engine",
        "syntax": "RewriteOptions Options",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html#rewriteoptions"
    },
    {
        "id": "mod_rewrite:directive:rewriterule",
        "owner": "mod_rewrite",
        "name": "RewriteRule",
        "kind": "directive",
        "modules": [
            "mod_rewrite"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "Defines rules for the rewriting engine",
        "syntax": "RewriteRule [!]Pattern Substitution [flags]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_rewrite.html#rewriterule"
    },
    {
        "id": "core:directive:rlimitcpu",
        "owner": "core",
        "name": "RLimitCPU",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Core",
        "description": "Limits the CPU consumption of processes launched by Apache httpd children",
        "syntax": "RLimitCPU seconds|max [seconds|max]",
        "default": "Unset; uses operating system defaults",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#rlimitcpu"
    },
    {
        "id": "core:directive:rlimitmem",
        "owner": "core",
        "name": "RLimitMEM",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Core",
        "description": "Limits the memory consumption of processes launched by Apache httpd children",
        "syntax": "RLimitMEM bytes|max [bytes|max]",
        "default": "Unset; uses operating system defaults",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#rlimitmem"
    },
    {
        "id": "core:directive:rlimitnproc",
        "owner": "core",
        "name": "RLimitNPROC",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Core",
        "description": "Limits the number of processes that can be launched by processes launched by Apache httpd children",
        "syntax": "RLimitNPROC number|max [number|max]",
        "default": "Unset; uses operating system defaults",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#rlimitnproc"
    },
    {
        "id": "mod_access_compat:directive:satisfy",
        "owner": "mod_access_compat",
        "name": "Satisfy",
        "kind": "directive",
        "modules": [
            "mod_access_compat"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Interaction between host-level access control and user authentication",
        "syntax": "Satisfy Any|All",
        "default": "Satisfy All",
        "compatibility": "Influenced by Limit and LimitExcept in version 2.0.51 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_access_compat.html#satisfy"
    },
    {
        "id": "mpm_common:directive:scoreboardfile",
        "owner": "mpm_common",
        "name": "ScoreBoardFile",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "prefork",
            "mpm_winnt"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Location of the file used to store coordination data for the child processes",
        "syntax": "ScoreBoardFile file-path",
        "default": "ScoreBoardFile logs/apache_runtime_status",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#scoreboardfile"
    },
    {
        "id": "mod_actions:directive:script",
        "owner": "mod_actions",
        "name": "Script",
        "kind": "directive",
        "modules": [
            "mod_actions"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Activates a CGI script for a particular request method.",
        "syntax": "Script method cgi-script",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_actions.html#script"
    },
    {
        "id": "mod_alias:directive:scriptalias",
        "owner": "mod_alias",
        "name": "ScriptAlias",
        "kind": "directive",
        "modules": [
            "mod_alias"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Maps a URL to a filesystem location and designates the target as a CGI script",
        "syntax": "ScriptAlias [URL-path] file-path|directory-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_alias.html#scriptalias"
    },
    {
        "id": "mod_alias:directive:scriptaliasmatch",
        "owner": "mod_alias",
        "name": "ScriptAliasMatch",
        "kind": "directive",
        "modules": [
            "mod_alias"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "Maps a URL to a filesystem location using a regular expression and designates the target as a CGI script",
        "syntax": "ScriptAliasMatch regex file-path|directory-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_alias.html#scriptaliasmatch"
    },
    {
        "id": "core:directive:scriptinterpretersource",
        "owner": "core",
        "name": "ScriptInterpreterSource",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Core",
        "description": "Technique for locating the interpreter for CGI scripts",
        "syntax": "ScriptInterpreterSource Registry|Registry-Strict|Script",
        "default": "ScriptInterpreterSource Script",
        "compatibility": "Win32 only.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#scriptinterpretersource"
    },
    {
        "id": "mod_cgi:directive:scriptlog",
        "owner": "mod_cgi",
        "name": "ScriptLog",
        "kind": "directive",
        "modules": [
            "mod_cgi",
            "mod_cgid"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "Location of the CGI script error logfile",
        "syntax": "ScriptLog file-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cgi.html#scriptlog"
    },
    {
        "id": "mod_cgi:directive:scriptlogbuffer",
        "owner": "mod_cgi",
        "name": "ScriptLogBuffer",
        "kind": "directive",
        "modules": [
            "mod_cgi",
            "mod_cgid"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "Maximum amount of PUT or POST requests that will be recorded in the scriptlog",
        "syntax": "ScriptLogBuffer bytes",
        "default": "ScriptLogBuffer 1024",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cgi.html#scriptlogbuffer"
    },
    {
        "id": "mod_cgi:directive:scriptloglength",
        "owner": "mod_cgi",
        "name": "ScriptLogLength",
        "kind": "directive",
        "modules": [
            "mod_cgi",
            "mod_cgid"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "Size limit of the CGI script logfile",
        "syntax": "ScriptLogLength bytes",
        "default": "ScriptLogLength 10385760",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cgi.html#scriptloglength"
    },
    {
        "id": "mod_cgid:directive:scriptsock",
        "owner": "mod_cgid",
        "name": "ScriptSock",
        "kind": "directive",
        "modules": [
            "mod_cgid"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Base",
        "description": "The filename prefix of the socket to use for communication with the cgi daemon",
        "syntax": "ScriptSock file-path",
        "default": "ScriptSock cgisock",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_cgid.html#scriptsock"
    },
    {
        "id": "mod_nw_ssl:directive:securelisten",
        "owner": "mod_nw_ssl",
        "name": "SecureListen",
        "kind": "directive",
        "modules": [
            "mod_nw_ssl"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Base",
        "description": "Enables SSL encryption for the specified port",
        "syntax": "SecureListen [IP-address:]portnumber Certificate-Name [MUTUAL]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_nw_ssl.html#securelisten"
    },
    {
        "id": "core:directive:seerequesttail",
        "owner": "core",
        "name": "SeeRequestTail",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Core",
        "description": "Determine if mod_status displays the first 63 characters of a request or the last 63, assuming the request itself is greater than 63 chars.",
        "syntax": "SeeRequestTail On|Off",
        "default": "SeeRequestTail Off",
        "compatibility": "Available in Apache httpd 2.2.7 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#seerequesttail"
    },
    {
        "id": "mpm_common:directive:sendbuffersize",
        "owner": "mpm_common",
        "name": "SendBufferSize",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "prefork",
            "mpm_winnt",
            "mpm_netware",
            "mpmt_os2"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "TCP buffer size",
        "syntax": "SendBufferSize bytes",
        "default": "SendBufferSize 0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#sendbuffersize"
    },
    {
        "id": "core:directive:serveradmin",
        "owner": "core",
        "name": "ServerAdmin",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Email address that the server includes in error messages sent to the client",
        "syntax": "ServerAdmin email-address|URL",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#serveradmin"
    },
    {
        "id": "core:directive:serveralias",
        "owner": "core",
        "name": "ServerAlias",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Alternate names for a host used when matching requests to name-virtual hosts",
        "syntax": "ServerAlias hostname [hostname] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#serveralias"
    },
    {
        "id": "mpm_common:directive:serverlimit",
        "owner": "mpm_common",
        "name": "ServerLimit",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "prefork"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Upper limit on configurable number of processes",
        "syntax": "ServerLimit number",
        "default": "See usage for details",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#serverlimit"
    },
    {
        "id": "core:directive:servername",
        "owner": "core",
        "name": "ServerName",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Hostname and port that the server uses to identify itself",
        "syntax": "ServerName [scheme://]domain-name|ip-address[:port]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#servername"
    },
    {
        "id": "core:directive:serverpath",
        "owner": "core",
        "name": "ServerPath",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Legacy URL pathname for a name-based virtual host that is accessed by an incompatible browser",
        "syntax": "ServerPath URL-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#serverpath"
    },
    {
        "id": "core:directive:serverroot",
        "owner": "core",
        "name": "ServerRoot",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Core",
        "description": "Base directory for the server installation",
        "syntax": "ServerRoot directory-path",
        "default": "ServerRoot /usr/local/apache",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#serverroot"
    },
    {
        "id": "core:directive:serversignature",
        "owner": "core",
        "name": "ServerSignature",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Core",
        "description": "Configures the footer on server-generated documents",
        "syntax": "ServerSignature On|Off|EMail",
        "default": "ServerSignature Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#serversignature"
    },
    {
        "id": "core:directive:servertokens",
        "owner": "core",
        "name": "ServerTokens",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Core",
        "description": "Configures the Server HTTP response header",
        "syntax": "ServerTokens Major|Minor|Min[imal]|Prod[uctOnly]|OS|Full",
        "default": "ServerTokens Full",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#servertokens"
    },
    {
        "id": "mod_session:directive:session",
        "owner": "mod_session",
        "name": "Session",
        "kind": "directive",
        "modules": [
            "mod_session"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Enables a session for the current directory or location",
        "syntax": "Session On|Off",
        "default": "Session Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session.html#session"
    },
    {
        "id": "mod_session_cookie:directive:sessioncookiename",
        "owner": "mod_session_cookie",
        "name": "SessionCookieName",
        "kind": "directive",
        "modules": [
            "mod_session_cookie"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Name and attributes for the RFC2109 cookie storing the session",
        "syntax": "SessionCookieName name attributes",
        "default": "none",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session_cookie.html#sessioncookiename"
    },
    {
        "id": "mod_session_cookie:directive:sessioncookiename2",
        "owner": "mod_session_cookie",
        "name": "SessionCookieName2",
        "kind": "directive",
        "modules": [
            "mod_session_cookie"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Name and attributes for the RFC2965 cookie storing the session",
        "syntax": "SessionCookieName2 name attributes",
        "default": "none",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session_cookie.html#sessioncookiename2"
    },
    {
        "id": "mod_session_cookie:directive:sessioncookieremove",
        "owner": "mod_session_cookie",
        "name": "SessionCookieRemove",
        "kind": "directive",
        "modules": [
            "mod_session_cookie"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Control for whether session cookies should be removed from incoming HTTP headers",
        "syntax": "SessionCookieRemove On|Off",
        "default": "SessionCookieRemove Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session_cookie.html#sessioncookieremove"
    },
    {
        "id": "mod_session_crypto:directive:sessioncryptocipher",
        "owner": "mod_session_crypto",
        "name": "SessionCryptoCipher",
        "kind": "directive",
        "modules": [
            "mod_session_crypto"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Experimental",
        "description": "The crypto cipher to be used to encrypt the session",
        "syntax": "SessionCryptoCipher name",
        "default": "SessionCryptoCipher aes256",
        "compatibility": "Available in Apache 2.3.0 and later",
        "since": "2.3.0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session_crypto.html#sessioncryptocipher"
    },
    {
        "id": "mod_session_crypto:directive:sessioncryptodriver",
        "owner": "mod_session_crypto",
        "name": "SessionCryptoDriver",
        "kind": "directive",
        "modules": [
            "mod_session_crypto"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Experimental",
        "description": "The crypto driver to be used to encrypt the session",
        "syntax": "SessionCryptoDriver name [param[=value]]",
        "default": "none",
        "compatibility": "Available in Apache 2.3.0 and later",
        "since": "2.3.0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session_crypto.html#sessioncryptodriver"
    },
    {
        "id": "mod_session_crypto:directive:sessioncryptopassphrase",
        "owner": "mod_session_crypto",
        "name": "SessionCryptoPassphrase",
        "kind": "directive",
        "modules": [
            "mod_session_crypto"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Experimental",
        "description": "The key used to encrypt the session",
        "syntax": "SessionCryptoPassphrase secret [ secret ... ]",
        "default": "none",
        "compatibility": "Available in Apache 2.3.0 and later",
        "since": "2.3.0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session_crypto.html#sessioncryptopassphrase"
    },
    {
        "id": "mod_session_crypto:directive:sessioncryptopassphrasefile",
        "owner": "mod_session_crypto",
        "name": "SessionCryptoPassphraseFile",
        "kind": "directive",
        "modules": [
            "mod_session_crypto"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Experimental",
        "description": "File containing keys used to encrypt the session",
        "syntax": "SessionCryptoPassphraseFile filename",
        "default": "none",
        "compatibility": "Available in Apache 2.3.0 and later",
        "since": "2.3.0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session_crypto.html#sessioncryptopassphrasefile"
    },
    {
        "id": "mod_session_dbd:directive:sessiondbdcookiename",
        "owner": "mod_session_dbd",
        "name": "SessionDBDCookieName",
        "kind": "directive",
        "modules": [
            "mod_session_dbd"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Name and attributes for the RFC2109 cookie storing the session ID",
        "syntax": "SessionDBDCookieName name attributes",
        "default": "none",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session_dbd.html#sessiondbdcookiename"
    },
    {
        "id": "mod_session_dbd:directive:sessiondbdcookiename2",
        "owner": "mod_session_dbd",
        "name": "SessionDBDCookieName2",
        "kind": "directive",
        "modules": [
            "mod_session_dbd"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Name and attributes for the RFC2965 cookie storing the session ID",
        "syntax": "SessionDBDCookieName2 name attributes",
        "default": "none",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session_dbd.html#sessiondbdcookiename2"
    },
    {
        "id": "mod_session_dbd:directive:sessiondbdcookieremove",
        "owner": "mod_session_dbd",
        "name": "SessionDBDCookieRemove",
        "kind": "directive",
        "modules": [
            "mod_session_dbd"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Control for whether session ID cookies should be removed from incoming HTTP headers",
        "syntax": "SessionDBDCookieRemove On|Off",
        "default": "SessionDBDCookieRemove On",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session_dbd.html#sessiondbdcookieremove"
    },
    {
        "id": "mod_session_dbd:directive:sessiondbddeletelabel",
        "owner": "mod_session_dbd",
        "name": "SessionDBDDeleteLabel",
        "kind": "directive",
        "modules": [
            "mod_session_dbd"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "The SQL query to use to remove sessions from the database",
        "syntax": "SessionDBDDeleteLabel label",
        "default": "SessionDBDDeleteLabel deletesession",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session_dbd.html#sessiondbddeletelabel"
    },
    {
        "id": "mod_session_dbd:directive:sessiondbdinsertlabel",
        "owner": "mod_session_dbd",
        "name": "SessionDBDInsertLabel",
        "kind": "directive",
        "modules": [
            "mod_session_dbd"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "The SQL query to use to insert sessions into the database",
        "syntax": "SessionDBDInsertLabel label",
        "default": "SessionDBDInsertLabel insertsession",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session_dbd.html#sessiondbdinsertlabel"
    },
    {
        "id": "mod_session_dbd:directive:sessiondbdperuser",
        "owner": "mod_session_dbd",
        "name": "SessionDBDPerUser",
        "kind": "directive",
        "modules": [
            "mod_session_dbd"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enable a per user session",
        "syntax": "SessionDBDPerUser On|Off",
        "default": "SessionDBDPerUser Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session_dbd.html#sessiondbdperuser"
    },
    {
        "id": "mod_session_dbd:directive:sessiondbdselectlabel",
        "owner": "mod_session_dbd",
        "name": "SessionDBDSelectLabel",
        "kind": "directive",
        "modules": [
            "mod_session_dbd"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "The SQL query to use to select sessions from the database",
        "syntax": "SessionDBDSelectLabel label",
        "default": "SessionDBDSelectLabel selectsession",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session_dbd.html#sessiondbdselectlabel"
    },
    {
        "id": "mod_session_dbd:directive:sessiondbdupdatelabel",
        "owner": "mod_session_dbd",
        "name": "SessionDBDUpdateLabel",
        "kind": "directive",
        "modules": [
            "mod_session_dbd"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "The SQL query to use to update existing sessions in the database",
        "syntax": "SessionDBDUpdateLabel label",
        "default": "SessionDBDUpdateLabel updatesession",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session_dbd.html#sessiondbdupdatelabel"
    },
    {
        "id": "mod_session:directive:sessionenv",
        "owner": "mod_session",
        "name": "SessionEnv",
        "kind": "directive",
        "modules": [
            "mod_session"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Control whether the contents of the session are written to the HTTP_SESSION environment variable",
        "syntax": "SessionEnv On|Off",
        "default": "SessionEnv Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session.html#sessionenv"
    },
    {
        "id": "mod_session:directive:sessionexclude",
        "owner": "mod_session",
        "name": "SessionExclude",
        "kind": "directive",
        "modules": [
            "mod_session"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Define URL prefixes for which a session is ignored",
        "syntax": "SessionExclude path",
        "default": "none",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session.html#sessionexclude"
    },
    {
        "id": "mod_session:directive:sessionexpiryupdateinterval",
        "owner": "mod_session",
        "name": "SessionExpiryUpdateInterval",
        "kind": "directive",
        "modules": [
            "mod_session"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Extension",
        "description": "Define the number of seconds a session's expiry may change without the session being updated",
        "syntax": "SessionExpiryUpdateInterval interval",
        "default": "SessionExpiryUpdateInterval 0 (always update)",
        "compatibility": "Available in Apache 2.4.41 and later",
        "since": "2.4.41",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session.html#sessionexpiryupdateinterval"
    },
    {
        "id": "mod_session:directive:sessionheader",
        "owner": "mod_session",
        "name": "SessionHeader",
        "kind": "directive",
        "modules": [
            "mod_session"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Import session updates from a given HTTP response header",
        "syntax": "SessionHeader header",
        "default": "none",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session.html#sessionheader"
    },
    {
        "id": "mod_session:directive:sessioninclude",
        "owner": "mod_session",
        "name": "SessionInclude",
        "kind": "directive",
        "modules": [
            "mod_session"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Define URL prefixes for which a session is valid",
        "syntax": "SessionInclude path",
        "default": "all URLs",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session.html#sessioninclude"
    },
    {
        "id": "mod_session:directive:sessionmaxage",
        "owner": "mod_session",
        "name": "SessionMaxAge",
        "kind": "directive",
        "modules": [
            "mod_session"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Define a maximum age in seconds for a session",
        "syntax": "SessionMaxAge maxage",
        "default": "SessionMaxAge 0",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_session.html#sessionmaxage"
    },
    {
        "id": "mod_env:directive:setenv",
        "owner": "mod_env",
        "name": "SetEnv",
        "kind": "directive",
        "modules": [
            "mod_env"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Sets environment variables",
        "syntax": "SetEnv env-variable [value]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_env.html#setenv"
    },
    {
        "id": "mod_setenvif:directive:setenvif",
        "owner": "mod_setenvif",
        "name": "SetEnvIf",
        "kind": "directive",
        "modules": [
            "mod_setenvif"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Sets environment variables based on attributes of the request",
        "syntax": "SetEnvIf attribute regex [!]env-variable[=value] [[!]env-variable[=value]] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_setenvif.html#setenvif"
    },
    {
        "id": "mod_setenvif:directive:setenvifexpr",
        "owner": "mod_setenvif",
        "name": "SetEnvIfExpr",
        "kind": "directive",
        "modules": [
            "mod_setenvif"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Sets environment variables based on an ap_expr expression",
        "syntax": "SetEnvIfExpr expr [!]env-variable[=value] [[!]env-variable[=value]] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_setenvif.html#setenvifexpr"
    },
    {
        "id": "mod_setenvif:directive:setenvifnocase",
        "owner": "mod_setenvif",
        "name": "SetEnvIfNoCase",
        "kind": "directive",
        "modules": [
            "mod_setenvif"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Sets environment variables based on attributes of the request without respect to case",
        "syntax": "SetEnvIfNoCase attribute regex [!]env-variable[=value] [[!]env-variable[=value]] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_setenvif.html#setenvifnocase"
    },
    {
        "id": "core:directive:sethandler",
        "owner": "core",
        "name": "SetHandler",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Core",
        "description": "Forces all matching files to be processed by a handler",
        "syntax": "SetHandler handler-name|none|expression",
        "compatibility": "expression argument 2.4.19 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#sethandler"
    },
    {
        "id": "core:directive:setinputfilter",
        "owner": "core",
        "name": "SetInputFilter",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Core",
        "description": "Sets the filters that will process client requests and POST input",
        "syntax": "SetInputFilter filter[;filter...]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#setinputfilter"
    },
    {
        "id": "core:directive:setoutputfilter",
        "owner": "core",
        "name": "SetOutputFilter",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Core",
        "description": "Sets the filters that will process responses from the server",
        "syntax": "SetOutputFilter filter[;filter...]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#setoutputfilter"
    },
    {
        "id": "mod_include:directive:ssiendtag",
        "owner": "mod_include",
        "name": "SSIEndTag",
        "kind": "directive",
        "modules": [
            "mod_include"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "String that ends an include element",
        "syntax": "SSIEndTag tag",
        "default": "SSIEndTag \"-->\"",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_include.html#ssiendtag"
    },
    {
        "id": "mod_include:directive:ssierrormsg",
        "owner": "mod_include",
        "name": "SSIErrorMsg",
        "kind": "directive",
        "modules": [
            "mod_include"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Base",
        "description": "Error message displayed when there is an SSI error",
        "syntax": "SSIErrorMsg message",
        "default": "SSIErrorMsg \"[an error occurred while processing this directive]\"",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_include.html#ssierrormsg"
    },
    {
        "id": "mod_include:directive:ssietag",
        "owner": "mod_include",
        "name": "SSIETag",
        "kind": "directive",
        "modules": [
            "mod_include"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Base",
        "description": "Controls whether ETags are generated by the server.",
        "syntax": "SSIETag on|off",
        "default": "SSIETag off",
        "compatibility": "Available in version 2.2.15 and later.",
        "since": "2.2.15",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_include.html#ssietag"
    },
    {
        "id": "mod_include:directive:ssilastmodified",
        "owner": "mod_include",
        "name": "SSILastModified",
        "kind": "directive",
        "modules": [
            "mod_include"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Base",
        "description": "Controls whether Last-Modified headers are generated by the server.",
        "syntax": "SSILastModified on|off",
        "default": "SSILastModified off",
        "compatibility": "Available in version 2.2.15 and later.",
        "since": "2.2.15",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_include.html#ssilastmodified"
    },
    {
        "id": "mod_include:directive:ssilegacyexprparser",
        "owner": "mod_include",
        "name": "SSILegacyExprParser",
        "kind": "directive",
        "modules": [
            "mod_include"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Base",
        "description": "Enable compatibility mode for conditional expressions.",
        "syntax": "SSILegacyExprParser on|off",
        "default": "SSILegacyExprParser off",
        "compatibility": "Available in version 2.3.13 and later.",
        "since": "2.3.13",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_include.html#ssilegacyexprparser"
    },
    {
        "id": "mod_include:directive:ssistarttag",
        "owner": "mod_include",
        "name": "SSIStartTag",
        "kind": "directive",
        "modules": [
            "mod_include"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "String that starts an include element",
        "syntax": "SSIStartTag tag",
        "default": "SSIStartTag \"<!--#\"",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_include.html#ssistarttag"
    },
    {
        "id": "mod_include:directive:ssitimeformat",
        "owner": "mod_include",
        "name": "SSITimeFormat",
        "kind": "directive",
        "modules": [
            "mod_include"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Base",
        "description": "Configures the format in which date strings are displayed",
        "syntax": "SSITimeFormat formatstring",
        "default": "SSITimeFormat \"%A, %d-%b-%Y %H:%M:%S %Z\"",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_include.html#ssitimeformat"
    },
    {
        "id": "mod_include:directive:ssiundefinedecho",
        "owner": "mod_include",
        "name": "SSIUndefinedEcho",
        "kind": "directive",
        "modules": [
            "mod_include"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "All"
        ],
        "status": "Base",
        "description": "String displayed when an unset variable is echoed",
        "syntax": "SSIUndefinedEcho string",
        "default": "SSIUndefinedEcho \"(none)\"",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_include.html#ssiundefinedecho"
    },
    {
        "id": "mod_ssl:directive:sslcacertificatefile",
        "owner": "mod_ssl",
        "name": "SSLCACertificateFile",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "File of concatenated PEM-encoded CA Certificates for Client Auth",
        "syntax": "SSLCACertificateFile file-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslcacertificatefile"
    },
    {
        "id": "mod_ssl:directive:sslcacertificatepath",
        "owner": "mod_ssl",
        "name": "SSLCACertificatePath",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Directory of PEM-encoded CA Certificates for Client Auth",
        "syntax": "SSLCACertificatePath directory-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslcacertificatepath"
    },
    {
        "id": "mod_ssl:directive:sslcadnrequestfile",
        "owner": "mod_ssl",
        "name": "SSLCADNRequestFile",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "File of concatenated PEM-encoded CA Certificates for defining acceptable CA names",
        "syntax": "SSLCADNRequestFile file-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslcadnrequestfile"
    },
    {
        "id": "mod_ssl:directive:sslcadnrequestpath",
        "owner": "mod_ssl",
        "name": "SSLCADNRequestPath",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Directory of PEM-encoded CA Certificates for defining acceptable CA names",
        "syntax": "SSLCADNRequestPath directory-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslcadnrequestpath"
    },
    {
        "id": "mod_ssl:directive:sslcarevocationcheck",
        "owner": "mod_ssl",
        "name": "SSLCARevocationCheck",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enable CRL-based revocation checking",
        "syntax": "SSLCARevocationCheck chain|leaf|none [flags ...]",
        "default": "SSLCARevocationCheck none",
        "compatibility": "Optional flags available in httpd 2.4.21 or later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslcarevocationcheck"
    },
    {
        "id": "mod_ssl:directive:sslcarevocationfile",
        "owner": "mod_ssl",
        "name": "SSLCARevocationFile",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "File of concatenated PEM-encoded CA CRLs for Client Auth",
        "syntax": "SSLCARevocationFile file-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslcarevocationfile"
    },
    {
        "id": "mod_ssl:directive:sslcarevocationpath",
        "owner": "mod_ssl",
        "name": "SSLCARevocationPath",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Directory of PEM-encoded CA CRLs for Client Auth",
        "syntax": "SSLCARevocationPath directory-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslcarevocationpath"
    },
    {
        "id": "mod_ssl:directive:sslcertificatechainfile",
        "owner": "mod_ssl",
        "name": "SSLCertificateChainFile",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "File of PEM-encoded Server CA Certificates",
        "syntax": "SSLCertificateChainFile file-path",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslcertificatechainfile"
    },
    {
        "id": "mod_ssl:directive:sslcertificatefile",
        "owner": "mod_ssl",
        "name": "SSLCertificateFile",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Server PEM-encoded X.509 certificate data file or token identifier",
        "syntax": "SSLCertificateFile file-path|certid",
        "compatibility": "certid available in 2.4.42 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslcertificatefile"
    },
    {
        "id": "mod_ssl:directive:sslcertificatekeyfile",
        "owner": "mod_ssl",
        "name": "SSLCertificateKeyFile",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Server PEM-encoded private key file",
        "syntax": "SSLCertificateKeyFile file-path|keyid",
        "compatibility": "keyid available in 2.4.42 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslcertificatekeyfile"
    },
    {
        "id": "mod_ssl:directive:sslciphersuite",
        "owner": "mod_ssl",
        "name": "SSLCipherSuite",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Cipher Suite available for negotiation in SSL handshake",
        "syntax": "SSLCipherSuite [protocol] cipher-spec",
        "default": "SSLCipherSuite DEFAULT (depends on OpenSSL version)",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslciphersuite"
    },
    {
        "id": "mod_ssl:directive:sslcompression",
        "owner": "mod_ssl",
        "name": "SSLCompression",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enable compression on the SSL level",
        "syntax": "SSLCompression on|off",
        "default": "SSLCompression off",
        "compatibility": "Available in httpd 2.4.3 and later, if using OpenSSL 0.9.8 or later; virtual host scope available if using OpenSSL 1.0.0 or later. The default used to be on in version 2.4.3.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslcompression"
    },
    {
        "id": "mod_ssl:directive:sslcryptodevice",
        "owner": "mod_ssl",
        "name": "SSLCryptoDevice",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enable use of a cryptographic hardware accelerator",
        "syntax": "SSLCryptoDevice engine",
        "default": "SSLCryptoDevice builtin",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslcryptodevice"
    },
    {
        "id": "mod_ssl:directive:sslengine",
        "owner": "mod_ssl",
        "name": "SSLEngine",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "SSL Engine Operation Switch",
        "syntax": "SSLEngine on|off",
        "default": "SSLEngine off",
        "compatibility": "Support for the \"optional\" argument was removed in 2.4.64. It enabled RFC 2817 (TLS Upgrade) support.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslengine"
    },
    {
        "id": "mod_ssl:directive:sslfips",
        "owner": "mod_ssl",
        "name": "SSLFIPS",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "SSL FIPS mode Switch",
        "syntax": "SSLFIPS on|off",
        "default": "SSLFIPS off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslfips"
    },
    {
        "id": "mod_ssl:directive:sslhonorcipherorder",
        "owner": "mod_ssl",
        "name": "SSLHonorCipherOrder",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Option to prefer the server's cipher preference order",
        "syntax": "SSLHonorCipherOrder on|off",
        "default": "SSLHonorCipherOrder off",
        "compatibility": "Available in Apache 2.1 and later",
        "since": "2.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslhonorcipherorder"
    },
    {
        "id": "mod_ssl:directive:sslinsecurerenegotiation",
        "owner": "mod_ssl",
        "name": "SSLInsecureRenegotiation",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Option to enable support for insecure renegotiation",
        "syntax": "SSLInsecureRenegotiation on|off",
        "default": "SSLInsecureRenegotiation off",
        "compatibility": "Available in httpd 2.2.15 and later, if using OpenSSL 0.9.8m or later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslinsecurerenegotiation"
    },
    {
        "id": "mod_ssl:directive:sslocspdefaultresponder",
        "owner": "mod_ssl",
        "name": "SSLOCSPDefaultResponder",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Set the default responder URI for OCSP validation",
        "syntax": "SSLOCSPDefaultResponder uri",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslocspdefaultresponder"
    },
    {
        "id": "mod_ssl:directive:sslocspenable",
        "owner": "mod_ssl",
        "name": "SSLOCSPEnable",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enable OCSP validation of the client certificate chain",
        "syntax": "SSLOCSPEnable on|leaf|off [flags]",
        "default": "SSLOCSPEnable off",
        "compatibility": "Mode leaf available in httpd 2.4.34 and later. Flag no_ocsp_for_cert_ok available in 2.4.29 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslocspenable"
    },
    {
        "id": "mod_ssl:directive:sslocspnoverify",
        "owner": "mod_ssl",
        "name": "SSLOCSPNoverify",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "skip the OCSP responder certificates verification",
        "syntax": "SSLOCSPNoverify on|off",
        "default": "SSLOCSPNoverify off",
        "compatibility": "Available in httpd 2.4.26 and later, if using OpenSSL 0.9.7 or later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslocspnoverify"
    },
    {
        "id": "mod_ssl:directive:sslocspoverrideresponder",
        "owner": "mod_ssl",
        "name": "SSLOCSPOverrideResponder",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Force use of the default responder URI for OCSP validation",
        "syntax": "SSLOCSPOverrideResponder on|off",
        "default": "SSLOCSPOverrideResponder off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslocspoverrideresponder"
    },
    {
        "id": "mod_ssl:directive:sslocspproxyurl",
        "owner": "mod_ssl",
        "name": "SSLOCSPProxyURL",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Proxy URL to use for OCSP requests",
        "syntax": "SSLOCSPProxyURL url",
        "compatibility": "Available in httpd 2.4.19 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslocspproxyurl"
    },
    {
        "id": "mod_ssl:directive:sslocsprespondercertificatefile",
        "owner": "mod_ssl",
        "name": "SSLOCSPResponderCertificateFile",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Set of trusted PEM encoded OCSP responder certificates",
        "syntax": "SSLOCSPResponderCertificateFile file",
        "compatibility": "Available in httpd 2.4.26 and later, if using OpenSSL 0.9.7 or later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslocsprespondercertificatefile"
    },
    {
        "id": "mod_ssl:directive:sslocsprespondertimeout",
        "owner": "mod_ssl",
        "name": "SSLOCSPResponderTimeout",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Timeout for OCSP queries",
        "syntax": "SSLOCSPResponderTimeout seconds",
        "default": "SSLOCSPResponderTimeout 10",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslocsprespondertimeout"
    },
    {
        "id": "mod_ssl:directive:sslocspresponsemaxage",
        "owner": "mod_ssl",
        "name": "SSLOCSPResponseMaxAge",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maximum allowable age for OCSP responses",
        "syntax": "SSLOCSPResponseMaxAge seconds",
        "default": "SSLOCSPResponseMaxAge -1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslocspresponsemaxage"
    },
    {
        "id": "mod_ssl:directive:sslocspresponsetimeskew",
        "owner": "mod_ssl",
        "name": "SSLOCSPResponseTimeSkew",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maximum allowable time skew for OCSP response validation",
        "syntax": "SSLOCSPResponseTimeSkew seconds",
        "default": "SSLOCSPResponseTimeSkew 300",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslocspresponsetimeskew"
    },
    {
        "id": "mod_ssl:directive:sslocspuserequestnonce",
        "owner": "mod_ssl",
        "name": "SSLOCSPUseRequestNonce",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Use a nonce within OCSP queries",
        "syntax": "SSLOCSPUseRequestNonce on|off",
        "default": "SSLOCSPUseRequestNonce on",
        "compatibility": "Available in httpd 2.4.10 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslocspuserequestnonce"
    },
    {
        "id": "mod_ssl:directive:sslopensslconfcmd",
        "owner": "mod_ssl",
        "name": "SSLOpenSSLConfCmd",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Configure OpenSSL parameters through its SSL_CONF API",
        "syntax": "SSLOpenSSLConfCmd command-name command-value",
        "compatibility": "Available in httpd 2.4.8 and later, if using OpenSSL 1.0.2 or later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslopensslconfcmd"
    },
    {
        "id": "mod_ssl:directive:ssloptions",
        "owner": "mod_ssl",
        "name": "SSLOptions",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Options"
        ],
        "status": "Extension",
        "description": "Configure various SSL engine run-time options",
        "syntax": "SSLOptions [+|-]option ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#ssloptions"
    },
    {
        "id": "mod_ssl:directive:sslpassphrasedialog",
        "owner": "mod_ssl",
        "name": "SSLPassPhraseDialog",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Type of pass phrase dialog for encrypted private keys",
        "syntax": "SSLPassPhraseDialog type",
        "default": "SSLPassPhraseDialog builtin",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslpassphrasedialog"
    },
    {
        "id": "mod_ssl:directive:sslprotocol",
        "owner": "mod_ssl",
        "name": "SSLProtocol",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Configure usable SSL/TLS protocol versions",
        "syntax": "SSLProtocol [+|-]protocol ...",
        "default": "SSLProtocol all -SSLv3 (up to 2.4.16: all)",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslprotocol"
    },
    {
        "id": "mod_ssl:directive:sslproxycacertificatefile",
        "owner": "mod_ssl",
        "name": "SSLProxyCACertificateFile",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "proxy"
        ],
        "override": [],
        "status": "Extension",
        "description": "File of concatenated PEM-encoded CA Certificates for Remote Server Auth",
        "syntax": "SSLProxyCACertificateFile file-path",
        "compatibility": "The proxy section context is allowed in httpd 2.4.30 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslproxycacertificatefile"
    },
    {
        "id": "mod_ssl:directive:sslproxycacertificatepath",
        "owner": "mod_ssl",
        "name": "SSLProxyCACertificatePath",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "proxy"
        ],
        "override": [],
        "status": "Extension",
        "description": "Directory of PEM-encoded CA Certificates for Remote Server Auth",
        "syntax": "SSLProxyCACertificatePath directory-path",
        "compatibility": "The proxy section context is allowed in httpd 2.4.30 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslproxycacertificatepath"
    },
    {
        "id": "mod_ssl:directive:sslproxycarevocationcheck",
        "owner": "mod_ssl",
        "name": "SSLProxyCARevocationCheck",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "proxy"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enable CRL-based revocation checking for Remote Server Auth",
        "syntax": "SSLProxyCARevocationCheck chain|leaf|none",
        "default": "SSLProxyCARevocationCheck none",
        "compatibility": "The proxy section context is allowed in httpd 2.4.30 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslproxycarevocationcheck"
    },
    {
        "id": "mod_ssl:directive:sslproxycarevocationfile",
        "owner": "mod_ssl",
        "name": "SSLProxyCARevocationFile",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "proxy"
        ],
        "override": [],
        "status": "Extension",
        "description": "File of concatenated PEM-encoded CA CRLs for Remote Server Auth",
        "syntax": "SSLProxyCARevocationFile file-path",
        "compatibility": "The proxy section context is allowed in httpd 2.4.30 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslproxycarevocationfile"
    },
    {
        "id": "mod_ssl:directive:sslproxycarevocationpath",
        "owner": "mod_ssl",
        "name": "SSLProxyCARevocationPath",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "proxy"
        ],
        "override": [],
        "status": "Extension",
        "description": "Directory of PEM-encoded CA CRLs for Remote Server Auth",
        "syntax": "SSLProxyCARevocationPath directory-path",
        "compatibility": "The proxy section context is allowed in httpd 2.4.30 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslproxycarevocationpath"
    },
    {
        "id": "mod_ssl:directive:sslproxycheckpeercn",
        "owner": "mod_ssl",
        "name": "SSLProxyCheckPeerCN",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "proxy"
        ],
        "override": [],
        "status": "Extension",
        "description": "Whether to check the remote server certificate's CN field",
        "syntax": "SSLProxyCheckPeerCN on|off",
        "default": "SSLProxyCheckPeerCN on",
        "compatibility": "The proxy section context is allowed in httpd 2.4.30 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslproxycheckpeercn"
    },
    {
        "id": "mod_ssl:directive:sslproxycheckpeerexpire",
        "owner": "mod_ssl",
        "name": "SSLProxyCheckPeerExpire",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "proxy"
        ],
        "override": [],
        "status": "Extension",
        "description": "Whether to check if remote server certificate is expired",
        "syntax": "SSLProxyCheckPeerExpire on|off",
        "default": "SSLProxyCheckPeerExpire on",
        "compatibility": "The proxy section context is allowed in httpd 2.4.30 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslproxycheckpeerexpire"
    },
    {
        "id": "mod_ssl:directive:sslproxycheckpeername",
        "owner": "mod_ssl",
        "name": "SSLProxyCheckPeerName",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "proxy"
        ],
        "override": [],
        "status": "Extension",
        "description": "Configure host name checking for remote server certificates",
        "syntax": "SSLProxyCheckPeerName on|off",
        "default": "SSLProxyCheckPeerName on",
        "compatibility": "Apache HTTP Server 2.4.5 and later The proxy section context is allowed in httpd 2.4.30 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslproxycheckpeername"
    },
    {
        "id": "mod_ssl:directive:sslproxyciphersuite",
        "owner": "mod_ssl",
        "name": "SSLProxyCipherSuite",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "proxy"
        ],
        "override": [],
        "status": "Extension",
        "description": "Cipher Suite available for negotiation in SSL proxy handshake",
        "syntax": "SSLProxyCipherSuite [protocol] cipher-spec",
        "default": "SSLProxyCipherSuite ALL:!ADH:RC4+RSA:+HIGH:+MEDIUM:+LOW:+EXP",
        "compatibility": "The proxy section context is allowed in httpd 2.4.30 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslproxyciphersuite"
    },
    {
        "id": "mod_ssl:directive:sslproxyengine",
        "owner": "mod_ssl",
        "name": "SSLProxyEngine",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "proxy"
        ],
        "override": [],
        "status": "Extension",
        "description": "SSL Proxy Engine Operation Switch",
        "syntax": "SSLProxyEngine on|off",
        "default": "SSLProxyEngine off",
        "compatibility": "The proxy section context is allowed in httpd 2.4.30 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslproxyengine"
    },
    {
        "id": "mod_ssl:directive:sslproxymachinecertificatechainfile",
        "owner": "mod_ssl",
        "name": "SSLProxyMachineCertificateChainFile",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "proxy"
        ],
        "override": [],
        "status": "Extension",
        "description": "File of concatenated PEM-encoded CA certificates to be used by the proxy for choosing a certificate",
        "syntax": "SSLProxyMachineCertificateChainFile filename",
        "compatibility": "The proxy section context is allowed in httpd 2.4.30 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslproxymachinecertificatechainfile"
    },
    {
        "id": "mod_ssl:directive:sslproxymachinecertificatefile",
        "owner": "mod_ssl",
        "name": "SSLProxyMachineCertificateFile",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "proxy"
        ],
        "override": [],
        "status": "Extension",
        "description": "File of concatenated PEM-encoded client certificates and keys to be used by the proxy",
        "syntax": "SSLProxyMachineCertificateFile filename",
        "compatibility": "The proxy section context is allowed in httpd 2.4.30 and later Inclusion of non-leaf (CA) certificates is permitted only in httpd 2.4.59 and later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslproxymachinecertificatefile"
    },
    {
        "id": "mod_ssl:directive:sslproxymachinecertificatepath",
        "owner": "mod_ssl",
        "name": "SSLProxyMachineCertificatePath",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "proxy"
        ],
        "override": [],
        "status": "Extension",
        "description": "Directory of PEM-encoded client certificates and keys to be used by the proxy",
        "syntax": "SSLProxyMachineCertificatePath directory",
        "compatibility": "The proxy section context is allowed in httpd 2.4.30 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslproxymachinecertificatepath"
    },
    {
        "id": "mod_ssl:directive:sslproxyprotocol",
        "owner": "mod_ssl",
        "name": "SSLProxyProtocol",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "proxy"
        ],
        "override": [],
        "status": "Extension",
        "description": "Configure usable SSL protocol flavors for proxy usage",
        "syntax": "SSLProxyProtocol [+|-]protocol ...",
        "default": "SSLProxyProtocol all -SSLv3 (up to 2.4.16: all)",
        "compatibility": "The proxy section context is allowed in httpd 2.4.30 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslproxyprotocol"
    },
    {
        "id": "mod_ssl:directive:sslproxyverify",
        "owner": "mod_ssl",
        "name": "SSLProxyVerify",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "proxy"
        ],
        "override": [],
        "status": "Extension",
        "description": "Type of remote server Certificate verification",
        "syntax": "SSLProxyVerify level",
        "default": "SSLProxyVerify none",
        "compatibility": "The proxy section context is allowed in httpd 2.4.30 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslproxyverify"
    },
    {
        "id": "mod_ssl:directive:sslproxyverifydepth",
        "owner": "mod_ssl",
        "name": "SSLProxyVerifyDepth",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "proxy"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maximum depth of CA Certificates in Remote Server Certificate verification",
        "syntax": "SSLProxyVerifyDepth number",
        "default": "SSLProxyVerifyDepth 1",
        "compatibility": "The proxy section context is allowed in httpd 2.4.30 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslproxyverifydepth"
    },
    {
        "id": "mod_ssl:directive:sslrandomseed",
        "owner": "mod_ssl",
        "name": "SSLRandomSeed",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Pseudo Random Number Generator (PRNG) seeding source",
        "syntax": "SSLRandomSeed context source [bytes]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslrandomseed"
    },
    {
        "id": "mod_ssl:directive:sslrenegbuffersize",
        "owner": "mod_ssl",
        "name": "SSLRenegBufferSize",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Set the size for the SSL renegotiation buffer",
        "syntax": "SSLRenegBufferSize bytes",
        "default": "SSLRenegBufferSize 131072",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslrenegbuffersize"
    },
    {
        "id": "mod_ssl:directive:sslrequire",
        "owner": "mod_ssl",
        "name": "SSLRequire",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Allow access only when an arbitrarily complex boolean expression is true",
        "syntax": "SSLRequire expression",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslrequire"
    },
    {
        "id": "mod_ssl:directive:sslrequiressl",
        "owner": "mod_ssl",
        "name": "SSLRequireSSL",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Deny access when SSL is not used for the HTTP request",
        "syntax": "SSLRequireSSL",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslrequiressl"
    },
    {
        "id": "mod_ssl:directive:sslsessioncache",
        "owner": "mod_ssl",
        "name": "SSLSessionCache",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Type of the global/inter-process SSL Session Cache",
        "syntax": "SSLSessionCache type",
        "default": "SSLSessionCache none",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslsessioncache"
    },
    {
        "id": "mod_ssl:directive:sslsessioncachetimeout",
        "owner": "mod_ssl",
        "name": "SSLSessionCacheTimeout",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Number of seconds before an SSL session expires in the Session Cache",
        "syntax": "SSLSessionCacheTimeout seconds",
        "default": "SSLSessionCacheTimeout 300",
        "compatibility": "Applies also to RFC 5077 TLS session resumption in Apache 2.4.10 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslsessioncachetimeout"
    },
    {
        "id": "mod_ssl:directive:sslsessionticketkeyfile",
        "owner": "mod_ssl",
        "name": "SSLSessionTicketKeyFile",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Persistent encryption/decryption key for TLS session tickets",
        "syntax": "SSLSessionTicketKeyFile file-path",
        "compatibility": "Available in httpd 2.4.0 and later, if using OpenSSL 0.9.8h or later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslsessionticketkeyfile"
    },
    {
        "id": "mod_ssl:directive:sslsessiontickets",
        "owner": "mod_ssl",
        "name": "SSLSessionTickets",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enable or disable use of TLS session tickets",
        "syntax": "SSLSessionTickets on|off",
        "default": "SSLSessionTickets on",
        "compatibility": "Available in httpd 2.4.11 and later, if using OpenSSL 0.9.8f or later.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslsessiontickets"
    },
    {
        "id": "mod_ssl:directive:sslsrpunknownuserseed",
        "owner": "mod_ssl",
        "name": "SSLSRPUnknownUserSeed",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "SRP unknown user seed",
        "syntax": "SSLSRPUnknownUserSeed secret-string",
        "compatibility": "Available in httpd 2.4.4 and later, if using OpenSSL 1.0.1 or later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslsrpunknownuserseed"
    },
    {
        "id": "mod_ssl:directive:sslsrpverifierfile",
        "owner": "mod_ssl",
        "name": "SSLSRPVerifierFile",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Path to SRP verifier file",
        "syntax": "SSLSRPVerifierFile file-path",
        "compatibility": "Available in httpd 2.4.4 and later, if using OpenSSL 1.0.1 or later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslsrpverifierfile"
    },
    {
        "id": "mod_ssl:directive:sslstaplingcache",
        "owner": "mod_ssl",
        "name": "SSLStaplingCache",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Configures the OCSP stapling cache",
        "syntax": "SSLStaplingCache type",
        "compatibility": "Available if using OpenSSL 0.9.8h or later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslstaplingcache"
    },
    {
        "id": "mod_ssl:directive:sslstaplingerrorcachetimeout",
        "owner": "mod_ssl",
        "name": "SSLStaplingErrorCacheTimeout",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Number of seconds before expiring invalid responses in the OCSP stapling cache",
        "syntax": "SSLStaplingErrorCacheTimeout seconds",
        "default": "SSLStaplingErrorCacheTimeout 600",
        "compatibility": "Available if using OpenSSL 0.9.8h or later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslstaplingerrorcachetimeout"
    },
    {
        "id": "mod_ssl:directive:sslstaplingfaketrylater",
        "owner": "mod_ssl",
        "name": "SSLStaplingFakeTryLater",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Synthesize \"tryLater\" responses for failed OCSP stapling queries",
        "syntax": "SSLStaplingFakeTryLater on|off",
        "default": "SSLStaplingFakeTryLater on",
        "compatibility": "Available if using OpenSSL 0.9.8h or later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslstaplingfaketrylater"
    },
    {
        "id": "mod_ssl:directive:sslstaplingforceurl",
        "owner": "mod_ssl",
        "name": "SSLStaplingForceURL",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Override the OCSP responder URI specified in the certificate's AIA extension",
        "syntax": "SSLStaplingForceURL uri",
        "compatibility": "Available if using OpenSSL 0.9.8h or later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslstaplingforceurl"
    },
    {
        "id": "mod_ssl:directive:sslstaplingrespondertimeout",
        "owner": "mod_ssl",
        "name": "SSLStaplingResponderTimeout",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Timeout for OCSP stapling queries",
        "syntax": "SSLStaplingResponderTimeout seconds",
        "default": "SSLStaplingResponderTimeout 10",
        "compatibility": "Available if using OpenSSL 0.9.8h or later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslstaplingrespondertimeout"
    },
    {
        "id": "mod_ssl:directive:sslstaplingresponsemaxage",
        "owner": "mod_ssl",
        "name": "SSLStaplingResponseMaxAge",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maximum allowable age for OCSP stapling responses",
        "syntax": "SSLStaplingResponseMaxAge seconds",
        "default": "SSLStaplingResponseMaxAge -1",
        "compatibility": "Available if using OpenSSL 0.9.8h or later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslstaplingresponsemaxage"
    },
    {
        "id": "mod_ssl:directive:sslstaplingresponsetimeskew",
        "owner": "mod_ssl",
        "name": "SSLStaplingResponseTimeSkew",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Maximum allowable time skew for OCSP stapling response validation",
        "syntax": "SSLStaplingResponseTimeSkew seconds",
        "default": "SSLStaplingResponseTimeSkew 300",
        "compatibility": "Available if using OpenSSL 0.9.8h or later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslstaplingresponsetimeskew"
    },
    {
        "id": "mod_ssl:directive:sslstaplingreturnrespondererrors",
        "owner": "mod_ssl",
        "name": "SSLStaplingReturnResponderErrors",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Pass stapling related OCSP errors on to client",
        "syntax": "SSLStaplingReturnResponderErrors on|off",
        "default": "SSLStaplingReturnResponderErrors on",
        "compatibility": "Available if using OpenSSL 0.9.8h or later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslstaplingreturnrespondererrors"
    },
    {
        "id": "mod_ssl:directive:sslstaplingstandardcachetimeout",
        "owner": "mod_ssl",
        "name": "SSLStaplingStandardCacheTimeout",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Number of seconds before expiring responses in the OCSP stapling cache",
        "syntax": "SSLStaplingStandardCacheTimeout seconds",
        "default": "SSLStaplingStandardCacheTimeout 3600",
        "compatibility": "Available if using OpenSSL 0.9.8h or later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslstaplingstandardcachetimeout"
    },
    {
        "id": "mod_ssl:directive:sslstrictsnivhostcheck",
        "owner": "mod_ssl",
        "name": "SSLStrictSNIVHostCheck",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Whether to allow non-SNI clients to access a name-based virtual host.",
        "syntax": "SSLStrictSNIVHostCheck on|off",
        "default": "SSLStrictSNIVHostCheck off",
        "compatibility": "Available in Apache 2.2.12 and later",
        "since": "2.2.12",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslstrictsnivhostcheck"
    },
    {
        "id": "mod_ssl:directive:sslusername",
        "owner": "mod_ssl",
        "name": "SSLUserName",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Variable name to determine user name",
        "syntax": "SSLUserName varname",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslusername"
    },
    {
        "id": "mod_ssl:directive:sslusestapling",
        "owner": "mod_ssl",
        "name": "SSLUseStapling",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Enable stapling of OCSP responses in the TLS handshake",
        "syntax": "SSLUseStapling on|off",
        "default": "SSLUseStapling off",
        "compatibility": "Available if using OpenSSL 0.9.8h or later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslusestapling"
    },
    {
        "id": "mod_ssl:directive:sslverifyclient",
        "owner": "mod_ssl",
        "name": "SSLVerifyClient",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Type of Client Certificate verification",
        "syntax": "SSLVerifyClient level",
        "default": "SSLVerifyClient none",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslverifyclient"
    },
    {
        "id": "mod_ssl:directive:sslverifydepth",
        "owner": "mod_ssl",
        "name": "SSLVerifyDepth",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "AuthConfig"
        ],
        "status": "Extension",
        "description": "Maximum depth of CA Certificates in Client Certificate verification",
        "syntax": "SSLVerifyDepth number",
        "default": "SSLVerifyDepth 1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslverifydepth"
    },
    {
        "id": "mod_ssl:directive:sslvhostsnipolicy",
        "owner": "mod_ssl",
        "name": "SSLVHostSNIPolicy",
        "kind": "directive",
        "modules": [
            "mod_ssl"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Extension",
        "description": "Set compatibility policy for SNI client access to virtual hosts.",
        "syntax": "SSLVHostSNIPolicy strict|secure|authonly|insecure",
        "default": "SSLVHostSNIPolicy secure",
        "compatibility": "Available in httpd 2.4.66 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_ssl.html#sslvhostsnipolicy"
    },
    {
        "id": "mpm_common:directive:startservers",
        "owner": "mpm_common",
        "name": "StartServers",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "prefork",
            "mpmt_os2"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Number of child server processes created at startup",
        "syntax": "StartServers number",
        "default": "See usage for details",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#startservers"
    },
    {
        "id": "mpm_common:directive:startthreads",
        "owner": "mpm_common",
        "name": "StartThreads",
        "kind": "directive",
        "modules": [
            "mpm_netware"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Number of threads created on startup",
        "syntax": "StartThreads number",
        "default": "See usage for details",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#startthreads"
    },
    {
        "id": "core:directive:stricthostcheck",
        "owner": "core",
        "name": "StrictHostCheck",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Controls whether the server requires the requested hostname be listed enumerated in the virtual host handling the request",
        "syntax": "StrictHostCheck ON|OFF",
        "default": "StrictHostCheck OFF",
        "compatibility": "Added in 2.4.49",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#stricthostcheck"
    },
    {
        "id": "mod_substitute:directive:substitute",
        "owner": "mod_substitute",
        "name": "Substitute",
        "kind": "directive",
        "modules": [
            "mod_substitute"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "Pattern to filter the response content",
        "syntax": "Substitute s/pattern/substitution/[infq]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_substitute.html#substitute"
    },
    {
        "id": "mod_substitute:directive:substituteinheritbefore",
        "owner": "mod_substitute",
        "name": "SubstituteInheritBefore",
        "kind": "directive",
        "modules": [
            "mod_substitute"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "Change the merge order of inherited patterns",
        "syntax": "SubstituteInheritBefore on|off",
        "default": "SubstituteInheritBefore off",
        "compatibility": "Available in httpd 2.4.17 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_substitute.html#substituteinheritbefore"
    },
    {
        "id": "mod_substitute:directive:substitutemaxlinelength",
        "owner": "mod_substitute",
        "name": "SubstituteMaxLineLength",
        "kind": "directive",
        "modules": [
            "mod_substitute"
        ],
        "contexts": [
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Extension",
        "description": "Set the maximum line size",
        "syntax": "SubstituteMaxLineLength bytes(b|B|k|K|m|M|g|G)",
        "default": "SubstituteMaxLineLength 1m",
        "compatibility": "Available in httpd 2.4.11 and later",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_substitute.html#substitutemaxlinelength"
    },
    {
        "id": "mod_unixd:directive:suexec",
        "owner": "mod_unixd",
        "name": "Suexec",
        "kind": "directive",
        "modules": [
            "mod_unixd"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Base",
        "description": "Enable or disable the suEXEC feature",
        "syntax": "Suexec On|Off",
        "default": "On if suexec binary exists with proper owner and mode, Off otherwise",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_unixd.html#suexec"
    },
    {
        "id": "mod_suexec:directive:suexecusergroup",
        "owner": "mod_suexec",
        "name": "SuexecUserGroup",
        "kind": "directive",
        "modules": [
            "mod_suexec"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "User and group for CGI programs to run as",
        "syntax": "SuexecUserGroup User Group",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_suexec.html#suexecusergroup"
    },
    {
        "id": "mpm_common:directive:threadlimit",
        "owner": "mpm_common",
        "name": "ThreadLimit",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "mpm_winnt"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Sets the upper limit on the configurable number of threads per child process",
        "syntax": "ThreadLimit number",
        "default": "See usage for details",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#threadlimit"
    },
    {
        "id": "mpm_common:directive:threadsperchild",
        "owner": "mpm_common",
        "name": "ThreadsPerChild",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "mpm_winnt"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "Number of threads created by each child process",
        "syntax": "ThreadsPerChild number",
        "default": "See usage for details",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#threadsperchild"
    },
    {
        "id": "mpm_common:directive:threadstacksize",
        "owner": "mpm_common",
        "name": "ThreadStackSize",
        "kind": "directive",
        "modules": [
            "event",
            "worker",
            "mpm_winnt",
            "mpm_netware",
            "mpmt_os2"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "MPM",
        "description": "The size in bytes of the stack used by threads handling client connections",
        "syntax": "ThreadStackSize size",
        "default": "65536 on NetWare; varies on other operating systems",
        "compatibility": "Available in Apache HTTP Server 2.1 and later",
        "since": "2.1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mpm_common.html#threadstacksize"
    },
    {
        "id": "core:directive:timeout",
        "owner": "core",
        "name": "TimeOut",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Amount of time the server will wait for certain events before failing a request",
        "syntax": "TimeOut seconds",
        "default": "TimeOut 60",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#timeout"
    },
    {
        "id": "core:directive:traceenable",
        "owner": "core",
        "name": "TraceEnable",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Core",
        "description": "Determines the behavior on TRACE requests",
        "syntax": "TraceEnable [on|off|extended]",
        "default": "TraceEnable on",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#traceenable"
    },
    {
        "id": "mod_log_config:directive:transferlog",
        "owner": "mod_log_config",
        "name": "TransferLog",
        "kind": "directive",
        "modules": [
            "mod_log_config"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "Specify location of a log file",
        "syntax": "TransferLog file|pipe",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_log_config.html#transferlog"
    },
    {
        "id": "mod_mime:directive:typesconfig",
        "owner": "mod_mime",
        "name": "TypesConfig",
        "kind": "directive",
        "modules": [
            "mod_mime"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Base",
        "description": "The location of the mime.types file",
        "syntax": "TypesConfig file-path",
        "default": "TypesConfig conf/mime.types",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_mime.html#typesconfig"
    },
    {
        "id": "core:directive:unclist",
        "owner": "core",
        "name": "UNCList",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Core",
        "description": "Controls what UNC host names can be accessed by the server",
        "syntax": "UNCList hostname [hostname...]",
        "default": "unset",
        "compatibility": "Added in 2.4.60, Windows only.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#unclist"
    },
    {
        "id": "core:directive:undefine",
        "owner": "core",
        "name": "UnDefine",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Core",
        "description": "Undefine the existence of a variable",
        "syntax": "UnDefine parameter-name",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#undefine"
    },
    {
        "id": "mod_macro:directive:undefmacro",
        "owner": "mod_macro",
        "name": "UndefMacro",
        "kind": "directive",
        "modules": [
            "mod_macro"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Undefine a macro",
        "syntax": "UndefMacro name",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_macro.html#undefmacro"
    },
    {
        "id": "mod_env:directive:unsetenv",
        "owner": "mod_env",
        "name": "UnsetEnv",
        "kind": "directive",
        "modules": [
            "mod_env"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "FileInfo"
        ],
        "status": "Base",
        "description": "Removes variables from the environment",
        "syntax": "UnsetEnv env-variable [env-variable] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_env.html#unsetenv"
    },
    {
        "id": "mod_macro:directive:use",
        "owner": "mod_macro",
        "name": "Use",
        "kind": "directive",
        "modules": [
            "mod_macro"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Base",
        "description": "Use a macro",
        "syntax": "Use name [value1 ... valueN]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_macro.html#use"
    },
    {
        "id": "core:directive:usecanonicalname",
        "owner": "core",
        "name": "UseCanonicalName",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Core",
        "description": "Configures how the server determines its own name and port",
        "syntax": "UseCanonicalName On|Off|DNS",
        "default": "UseCanonicalName Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#usecanonicalname"
    },
    {
        "id": "core:directive:usecanonicalphysicalport",
        "owner": "core",
        "name": "UseCanonicalPhysicalPort",
        "kind": "directive",
        "modules": [
            "core"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory"
        ],
        "override": [],
        "status": "Core",
        "description": "Configures how the server determines its own port",
        "syntax": "UseCanonicalPhysicalPort On|Off",
        "default": "UseCanonicalPhysicalPort Off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#usecanonicalphysicalport"
    },
    {
        "id": "mod_unixd:directive:user",
        "owner": "mod_unixd",
        "name": "User",
        "kind": "directive",
        "modules": [
            "mod_unixd"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Base",
        "description": "The userid under which the server will answer requests",
        "syntax": "User unix-userid",
        "default": "User #-1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_unixd.html#user"
    },
    {
        "id": "mod_userdir:directive:userdir",
        "owner": "mod_userdir",
        "name": "UserDir",
        "kind": "directive",
        "modules": [
            "mod_userdir"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Base",
        "description": "Location of the user-specific directories",
        "syntax": "UserDir directory-filename [directory-filename] ...",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_userdir.html#userdir"
    },
    {
        "id": "mod_privileges:directive:vhostcgimode",
        "owner": "mod_privileges",
        "name": "VHostCGIMode",
        "kind": "directive",
        "modules": [
            "mod_privileges"
        ],
        "contexts": [
            "virtual-host"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Determines whether the virtualhost can run subprocesses, and the privileges available to subprocesses.",
        "syntax": "VHostCGIMode On|Off|Secure",
        "default": "VHostCGIMode On",
        "compatibility": "Available on Solaris 10 and OpenSolaris with non-threaded MPMs (prefork or custom MPM).",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_privileges.html#vhostcgimode"
    },
    {
        "id": "mod_privileges:directive:vhostcgiprivs",
        "owner": "mod_privileges",
        "name": "VHostCGIPrivs",
        "kind": "directive",
        "modules": [
            "mod_privileges"
        ],
        "contexts": [
            "virtual-host"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Assign arbitrary privileges to subprocesses created by a virtual host.",
        "syntax": "VHostCGIPrivs [+-]?privilege-name [[+-]?privilege-name] ...",
        "default": "None",
        "compatibility": "Available on Solaris 10 and OpenSolaris with non-threaded MPMs (prefork or custom MPM) and when mod_privileges is compiled with the BIG_SECURITY_HOLE compile-time option.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_privileges.html#vhostcgiprivs"
    },
    {
        "id": "mod_privileges:directive:vhostgroup",
        "owner": "mod_privileges",
        "name": "VHostGroup",
        "kind": "directive",
        "modules": [
            "mod_privileges"
        ],
        "contexts": [
            "virtual-host"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Sets the Group ID under which a virtual host runs.",
        "syntax": "VHostGroup unix-groupid",
        "default": "Inherits the group id specified in Group",
        "compatibility": "Available on Solaris 10 and OpenSolaris with non-threaded MPMs (prefork or custom MPM).",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_privileges.html#vhostgroup"
    },
    {
        "id": "mod_privileges:directive:vhostprivs",
        "owner": "mod_privileges",
        "name": "VHostPrivs",
        "kind": "directive",
        "modules": [
            "mod_privileges"
        ],
        "contexts": [
            "virtual-host"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Assign arbitrary privileges to a virtual host.",
        "syntax": "VHostPrivs [+-]?privilege-name [[+-]?privilege-name] ...",
        "default": "None",
        "compatibility": "Available on Solaris 10 and OpenSolaris with non-threaded MPMs (prefork or custom MPM) and when mod_privileges is compiled with the BIG_SECURITY_HOLE compile-time option.",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_privileges.html#vhostprivs"
    },
    {
        "id": "mod_privileges:directive:vhostsecure",
        "owner": "mod_privileges",
        "name": "VHostSecure",
        "kind": "directive",
        "modules": [
            "mod_privileges"
        ],
        "contexts": [
            "virtual-host"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Determines whether the server runs with enhanced security for the virtualhost.",
        "syntax": "VHostSecure On|Off",
        "default": "VHostSecure On",
        "compatibility": "Available on Solaris 10 and OpenSolaris with non-threaded MPMs (prefork or custom MPM).",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_privileges.html#vhostsecure"
    },
    {
        "id": "mod_privileges:directive:vhostuser",
        "owner": "mod_privileges",
        "name": "VHostUser",
        "kind": "directive",
        "modules": [
            "mod_privileges"
        ],
        "contexts": [
            "virtual-host"
        ],
        "override": [],
        "status": "Experimental",
        "description": "Sets the User ID under which a virtual host runs.",
        "syntax": "VHostUser unix-userid",
        "default": "Inherits the userid specified in User",
        "compatibility": "Available on Solaris 10 and OpenSolaris with non-threaded MPMs (prefork or custom MPM).",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_privileges.html#vhostuser"
    },
    {
        "id": "mod_vhost_alias:directive:virtualdocumentroot",
        "owner": "mod_vhost_alias",
        "name": "VirtualDocumentRoot",
        "kind": "directive",
        "modules": [
            "mod_vhost_alias"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Dynamically configure the location of the document root for a given virtual host",
        "syntax": "VirtualDocumentRoot interpolated-directory|none",
        "default": "VirtualDocumentRoot none",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_vhost_alias.html#virtualdocumentroot"
    },
    {
        "id": "mod_vhost_alias:directive:virtualdocumentrootip",
        "owner": "mod_vhost_alias",
        "name": "VirtualDocumentRootIP",
        "kind": "directive",
        "modules": [
            "mod_vhost_alias"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Dynamically configure the location of the document root for a given virtual host",
        "syntax": "VirtualDocumentRootIP interpolated-directory|none",
        "default": "VirtualDocumentRootIP none",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_vhost_alias.html#virtualdocumentrootip"
    },
    {
        "id": "core:section:virtualhost",
        "owner": "core",
        "name": "VirtualHost",
        "kind": "section",
        "modules": [
            "core"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Core",
        "description": "Contains directives that apply only to a specific hostname or IP address",
        "syntax": "<VirtualHost addr[:port] [addr[:port]] ...> ... </VirtualHost>",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/core.html#virtualhost"
    },
    {
        "id": "mod_vhost_alias:directive:virtualscriptalias",
        "owner": "mod_vhost_alias",
        "name": "VirtualScriptAlias",
        "kind": "directive",
        "modules": [
            "mod_vhost_alias"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Dynamically configure the location of the CGI directory for a given virtual host",
        "syntax": "VirtualScriptAlias interpolated-directory|none",
        "default": "VirtualScriptAlias none",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_vhost_alias.html#virtualscriptalias"
    },
    {
        "id": "mod_vhost_alias:directive:virtualscriptaliasip",
        "owner": "mod_vhost_alias",
        "name": "VirtualScriptAliasIP",
        "kind": "directive",
        "modules": [
            "mod_vhost_alias"
        ],
        "contexts": [
            "server",
            "virtual-host"
        ],
        "override": [],
        "status": "Extension",
        "description": "Dynamically configure the location of the CGI directory for a given virtual host",
        "syntax": "VirtualScriptAliasIP interpolated-directory|none",
        "default": "VirtualScriptAliasIP none",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_vhost_alias.html#virtualscriptaliasip"
    },
    {
        "id": "mod_watchdog:directive:watchdoginterval",
        "owner": "mod_watchdog",
        "name": "WatchdogInterval",
        "kind": "directive",
        "modules": [
            "mod_watchdog"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Base",
        "description": "Watchdog interval in seconds",
        "syntax": "WatchdogInterval time-interval[s]",
        "default": "WatchdogInterval 1",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_watchdog.html#watchdoginterval"
    },
    {
        "id": "mod_include:directive:xbithack",
        "owner": "mod_include",
        "name": "XBitHack",
        "kind": "directive",
        "modules": [
            "mod_include"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [
            "Options"
        ],
        "status": "Base",
        "description": "Parse SSI directives in files with the execute bit set",
        "syntax": "XBitHack on|off|full",
        "default": "XBitHack off",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_include.html#xbithack"
    },
    {
        "id": "mod_xml2enc:directive:xml2encalias",
        "owner": "mod_xml2enc",
        "name": "xml2EncAlias",
        "kind": "directive",
        "modules": [
            "mod_xml2enc"
        ],
        "contexts": [
            "server"
        ],
        "override": [],
        "status": "Base",
        "description": "Recognize Aliases for encoding values",
        "syntax": "xml2EncAlias charset alias [alias ...]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_xml2enc.html#xml2encalias"
    },
    {
        "id": "mod_xml2enc:directive:xml2encdefault",
        "owner": "mod_xml2enc",
        "name": "xml2EncDefault",
        "kind": "directive",
        "modules": [
            "mod_xml2enc"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Base",
        "description": "Sets a default encoding to assume when absolutely no information can be automatically detected",
        "syntax": "xml2EncDefault name",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_xml2enc.html#xml2encdefault"
    },
    {
        "id": "mod_xml2enc:directive:xml2startparse",
        "owner": "mod_xml2enc",
        "name": "xml2StartParse",
        "kind": "directive",
        "modules": [
            "mod_xml2enc"
        ],
        "contexts": [
            "server",
            "virtual-host",
            "directory",
            "htaccess"
        ],
        "override": [],
        "status": "Base",
        "description": "Advise the parser to skip leading junk.",
        "syntax": "xml2StartParse element [element ...]",
        "documentation": "https://httpd.apache.org/docs/2.4/mod/mod_xml2enc.html#xml2startparse"
    }
];
