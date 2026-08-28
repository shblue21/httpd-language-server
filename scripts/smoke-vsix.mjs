import { execFile, spawn } from 'node:child_process';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const repository = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const extensionPackage = JSON.parse(
    await readFile(join(repository, 'packages', 'vscode', 'package.json'), 'utf8')
);
const vsix = join(
    repository,
    'packages',
    'vscode',
    `${extensionPackage.name}-${extensionPackage.version}.vsix`
);
const cli = process.env.VSCODE_CLI_PATH
    ?? '/Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/bin/code';
const executable = process.env.VSCODE_EXECUTABLE_PATH
    ?? '/Applications/Visual Studio Code - Insiders.app/Contents/MacOS/Code - Insiders';
const temporary = await mkdtemp(join(tmpdir(), 'httpd-vsix-smoke-'));
const extensions = join(temporary, 'extensions');
const userData = join(temporary, 'user-data');
const workspace = join(temporary, 'workspace');

try {
    await mkdir(join(workspace, 'conf'), { recursive: true });
    await writeFile(join(workspace, 'httpd.conf'), [
        'LoadModule headers_module modules/mod_headers.so',
        '<Directory "/srv/www">',
        '    Include conf/site.inc',
        '</Directory>',
        'ServerName example.test',
        'VendorDirective on',
        ''
    ].join('\n'));
    await writeFile(
        join(workspace, 'conf', 'site.inc'),
        'Header set X-Smoke enabled\n'
    );
    await execFileAsync(cli, [
        '--user-data-dir', userData,
        '--extensions-dir', extensions,
        '--install-extension', vsix,
        '--force'
    ]);

    const exitCode = await run(executable, [
        workspace,
        '--new-window',
        '--user-data-dir', userData,
        '--extensions-dir', extensions,
        `--extensionDevelopmentPath=${join(repository, 'test', 'vscode-smoke')}`,
        `--extensionTestsPath=${join(repository, 'test', 'vscode-smoke', 'run.cjs')}`,
        '--disable-workspace-trust',
        '--disable-telemetry',
        '--disable-updates',
        '--skip-welcome',
        '--skip-release-notes'
    ], {
        ...process.env,
        HTTPD_SMOKE_EXTENSIONS_DIR: extensions
    });
    if (exitCode !== 0) {
        throw new Error(`VS Code smoke exited with code ${exitCode}.`);
    }
    await rm(temporary, { recursive: true, force: true });
    console.log('Packaged VSIX smoke passed.');
} catch (error) {
    console.error(`VSIX smoke artifacts were preserved at ${temporary}.`);
    throw error;
}

function run(command, args, env) {
    return new Promise((resolveExit, reject) => {
        const child = spawn(command, args, { env, stdio: 'inherit' });
        child.once('error', reject);
        child.once('exit', code => resolveExit(code ?? 1));
    });
}
