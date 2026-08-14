import chalk from 'chalk';
import { Command } from 'commander';
import { checkFile } from './check.js';

function formatSeverity(severity: number | undefined): string {
    switch (severity) {
        case 1:
            return chalk.red('error');
        case 2:
            return chalk.yellow('warning');
        case 3:
            return chalk.blue('info');
        default:
            return 'diagnostic';
    }
}

export default async function main(argv = process.argv): Promise<void> {
    const program = new Command();
    program
        .name('httpd-ls')
        .description('Static language tooling for HTTPD configuration.')
        .version('0.0.0');

    program
        .command('check')
        .description('Parse and validate an HTTPD configuration file.')
        .argument('<file>', 'HTTPD configuration file')
        .action(async (file: string) => {
            const result = await checkFile(file);
            for (const diagnostic of result.diagnostics) {
                const line = diagnostic.range.start.line + 1;
                const column = diagnostic.range.start.character + 1;
                console.log(`${result.file}:${line}:${column} ${formatSeverity(diagnostic.severity)} ${diagnostic.message}`);
            }
            const errors = result.diagnostics.filter(diagnostic => diagnostic.severity === 1);
            if (errors.length > 0) {
                process.exitCode = 1;
            } else {
                console.log(chalk.green(`${result.file}: no errors`));
            }
        });

    await program.parseAsync(argv);
}
