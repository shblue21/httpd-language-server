import {
    createHttpdServices,
    type HttpdSharedServices
} from '@httpd-language-server/language';
import { URI } from 'langium';
import { startLanguageServer } from 'langium/lsp';
import { NodeFileSystem } from 'langium/node';
import {
    createConnection,
    ProposedFeatures,
    type Connection
} from 'vscode-languageserver/node';

const ROOT_UPDATE_DELAY = 50;

export function registerIncludedRootRevalidation(
    shared: HttpdSharedServices,
    delay = ROOT_UPDATE_DELAY
): () => void {
    const pendingRootUpdates = new Map<string, NodeJS.Timeout>();
    let disposed = false;
    const contentChange = shared.workspace.TextDocuments.onDidChangeContent(({ document }) => {
        if (disposed) {
            return;
        }
        const changed = URI.parse(document.uri);
        for (const root of shared.ServiceRegistry.getRootsForIncluded(changed)) {
            const key = root.toString();
            if (key === changed.toString()) {
                continue;
            }
            clearTimeout(pendingRootUpdates.get(key));
            pendingRootUpdates.set(key, setTimeout(() => {
                pendingRootUpdates.delete(key);
                if (disposed) {
                    return;
                }
                void shared.workspace.WorkspaceManager.ready
                    .then(() => disposed
                        ? undefined
                        : shared.workspace.WorkspaceLock.write(cancelToken =>
                            shared.workspace.DocumentBuilder.update([root], [], cancelToken)
                        ))
                    .catch(error => {
                        console.error(`Failed to revalidate HTTPD root ${key}.`, error);
                    });
            }, delay));
        }
    });

    return () => {
        disposed = true;
        contentChange.dispose();
        pendingRootUpdates.forEach(timeout => clearTimeout(timeout));
        pendingRootUpdates.clear();
    };
}

export function registerIncludedRootCleanup(shared: HttpdSharedServices): () => void {
    const updates = shared.workspace.DocumentBuilder.onUpdate((_changed, deleted) => {
        for (const root of deleted) {
            shared.ServiceRegistry.removeRoot(root);
        }
    });
    return () => updates.dispose();
}

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
    const disposeIncludedListener = shared.ServiceRegistry.onDidChangeIncluded(uris => {
        void activeConnection.sendNotification('httpd/includedDocumentsChanged', { uris });
    });
    const disposeRootRevalidation = registerIncludedRootRevalidation(shared);
    const disposeRootCleanup = registerIncludedRootCleanup(shared);
    activeConnection.onShutdown(() => {
        disposeRootCleanup();
        disposeRootRevalidation();
        disposeIncludedListener();
    });
    startLanguageServer(shared);
}
