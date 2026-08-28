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

    const promotedDocuments = new Map<string, string>();
    let includedUpdate = Promise.resolve();
    const updateIncludedDocument = async (
        document: vscode.TextDocument,
        included: boolean
    ): Promise<void> => {
        if (document.uri.scheme !== 'file') {
            return;
        }
        const key = document.uri.toString();
        if (included) {
            if (document.languageId !== 'httpd') {
                promotedDocuments.set(key, document.languageId);
                await vscode.languages.setTextDocumentLanguage(document, 'httpd');
            }
            return;
        }

        const previousLanguage = promotedDocuments.get(key);
        promotedDocuments.delete(key);
        if (previousLanguage && document.languageId === 'httpd') {
            await vscode.languages.setTextDocumentLanguage(document, previousLanguage);
        }
    };
    const enableIncludedDocument = async (document: vscode.TextDocument): Promise<void> => {
        if (document.languageId === 'httpd' || document.uri.scheme !== 'file') {
            return;
        }
        const included = await client?.sendRequest<boolean>('httpd/isIncludedDocument', {
            uri: document.uri.toString()
        });
        await updateIncludedDocument(document, included === true);
    };
    client.onNotification(
        'httpd/includedDocumentsChanged',
        ({ uris }: { uris: readonly string[] }) => {
            const included = new Set(uris);
            includedUpdate = includedUpdate
                .then(() => Promise.all(vscode.workspace.textDocuments.map(document =>
                    updateIncludedDocument(document, included.has(document.uri.toString()))
                )))
                .then(() => undefined)
                .catch(error => {
                    console.error('Failed to update included HTTPD document languages.', error);
                });
        }
    );
    await client.start();
    context.subscriptions.push(
        vscode.workspace.onDidOpenTextDocument(document => void enableIncludedDocument(document))
    );
    await Promise.all(vscode.workspace.textDocuments.map(enableIncludedDocument));
}

export function deactivate(): Thenable<void> | undefined {
    return client?.stop();
}
