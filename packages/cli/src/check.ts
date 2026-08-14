import { createHttpdServices } from '@httpd-language-server/language';
import { URI, type LangiumDocument } from 'langium';
import { NodeFileSystem } from 'langium/node';
import * as path from 'node:path';

type Diagnostic = NonNullable<LangiumDocument['diagnostics']>[number];

export interface CheckResult {
    file: string;
    diagnostics: Diagnostic[];
}

export async function checkFile(fileName: string): Promise<CheckResult> {
    const absolutePath = path.resolve(fileName);
    const { shared } = createHttpdServices(NodeFileSystem);
    const document = await shared.workspace.LangiumDocuments.getOrCreateDocument(URI.file(absolutePath));
    await shared.workspace.DocumentBuilder.build([document], { validation: true });
    return {
        file: absolutePath,
        diagnostics: document.diagnostics ?? []
    };
}
