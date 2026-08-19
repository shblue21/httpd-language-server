import type { LangiumDocument } from 'langium';
import type { RenameProvider } from 'langium/lsp';
import type {
    Range,
    RenameParams,
    TextDocumentPositionParams,
    WorkspaceEdit
} from 'vscode-languageserver';

export class HttpdRenameProvider implements RenameProvider {
    rename(_document: LangiumDocument, _params: RenameParams): WorkspaceEdit | undefined {
        return undefined;
    }

    prepareRename(
        _document: LangiumDocument,
        _params: TextDocumentPositionParams
    ): Range | undefined {
        return undefined;
    }
}
