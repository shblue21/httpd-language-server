import { createHttpdServices } from '@httpd-language-server/language';
import { URI } from 'langium';
import { startLanguageServer } from 'langium/lsp';
import { NodeFileSystem } from 'langium/node';
import {
    createConnection,
    ProposedFeatures,
    type Connection
} from 'vscode-languageserver/node';

export function startHttpdLanguageServer(connection?: Connection): void {
    const activeConnection = connection ?? createConnection(ProposedFeatures.all);
    const { shared } = createHttpdServices({
        connection: activeConnection,
        ...NodeFileSystem
    });
    activeConnection.onRequest(
        'httpd/isIncludedDocument',
        ({ uri }: { uri: string }) => shared.ServiceRegistry.isIncluded(URI.parse(uri))
    );
    const pendingRootUpdates = new Map<string, NodeJS.Timeout>();
    activeConnection.onDidChangeTextDocument(({ textDocument }) => {
        const changed = URI.parse(textDocument.uri);
        for (const root of shared.ServiceRegistry.getRootsForIncluded(changed)) {
            const key = root.toString();
            clearTimeout(pendingRootUpdates.get(key));
            pendingRootUpdates.set(key, setTimeout(() => {
                pendingRootUpdates.delete(key);
                void shared.workspace.DocumentBuilder.update([root], []).catch(error => {
                    console.error(`Failed to revalidate HTTPD root ${key}.`, error);
                });
            }, 50));
        }
    });
    startLanguageServer(shared);
}
