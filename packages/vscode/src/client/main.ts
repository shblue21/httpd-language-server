import * as path from 'node:path';
import * as vscode from 'vscode';
import {
    LanguageClient,
    TransportKind,
    type LanguageClientOptions,
    type ServerOptions
} from 'vscode-languageclient/node';

let client: LanguageClient | undefined;

export async function activate(context: vscode.ExtensionContext): Promise<void> {
    const serverModule = context.asAbsolutePath(path.join('out', 'server', 'main.cjs'));
    const serverOptions: ServerOptions = {
        run: { module: serverModule, transport: TransportKind.ipc },
        debug: {
            module: serverModule,
            transport: TransportKind.ipc,
            options: {
                execArgv: ['--nolazy', `--inspect${process.env.DEBUG_BREAK ? '-brk' : ''}=${process.env.DEBUG_SOCKET ?? '6009'}`]
            }
        }
    };
    const clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: 'file', language: 'httpd' }]
    };
    client = new LanguageClient(
        'httpd-language-server',
        'HTTPD Language Server',
        serverOptions,
        clientOptions
    );
    await client.start();

    const enableIncludedDocument = async (document: vscode.TextDocument): Promise<void> => {
        if (document.languageId === 'httpd' || document.uri.scheme !== 'file') {
            return;
        }
        const included = await client?.sendRequest<boolean>('httpd/isIncludedDocument', {
            uri: document.uri.toString()
        });
        if (included) {
            await vscode.languages.setTextDocumentLanguage(document, 'httpd');
        }
    };
    context.subscriptions.push(
        vscode.workspace.onDidOpenTextDocument(document => void enableIncludedDocument(document))
    );
    await Promise.all(vscode.workspace.textDocuments.map(enableIncludedDocument));
}

export function deactivate(): Thenable<void> | undefined {
    return client?.stop();
}
