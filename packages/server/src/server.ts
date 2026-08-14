import { createHttpdServices } from '@httpd-language-server/language';
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
    startLanguageServer(shared);
}
