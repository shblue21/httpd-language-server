import * as esbuild from 'esbuild';
import { copyFile, mkdir } from 'node:fs/promises';

const watch = process.argv.includes('--watch');

await mkdir('syntaxes', { recursive: true });
await copyFile('resources/httpd.tmLanguage.json', 'syntaxes/httpd.tmLanguage.json');
await copyFile('../../LICENSE', 'LICENSE');

const context = await esbuild.context({
    entryPoints: ['src/client/main.ts', 'src/server/main.ts'],
    outbase: 'src',
    outdir: 'out',
    bundle: true,
    target: 'node20',
    format: 'cjs',
    outExtension: { '.js': '.cjs' },
    external: ['vscode'],
    platform: 'node',
    sourcemap: true
});

if (watch) {
    await context.watch();
} else {
    await context.rebuild();
    await context.dispose();
}
