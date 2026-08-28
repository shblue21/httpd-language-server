const assert = require('node:assert/strict');
const path = require('node:path');
const vscode = require('vscode');

exports.run = async function run() {
    const workspace = vscode.workspace.workspaceFolders?.[0];
    assert.ok(workspace, 'Smoke workspace is missing.');

    const extension = vscode.extensions.getExtension(
        'httpd-language-server.httpd-language-support'
    );
    assert.ok(extension, 'Installed HTTPD extension was not found.');
    await extension.activate();
    assert.equal(extension.isActive, true);
    assert.ok(
        extension.extensionPath.startsWith(process.env.HTTPD_SMOKE_EXTENSIONS_DIR),
        `Expected packaged extension, got ${extension.extensionPath}.`
    );

    const fragmentUri = vscode.Uri.joinPath(workspace.uri, 'conf', 'site.inc');
    await vscode.workspace.openTextDocument(fragmentUri);
    const rootUri = vscode.Uri.joinPath(workspace.uri, 'httpd.conf');
    const root = await vscode.workspace.openTextDocument(rootUri);
    await vscode.window.showTextDocument(root);
    assert.equal(root.languageId, 'httpd');

    const completion = await vscode.commands.executeCommand(
        'vscode.executeCompletionItemProvider',
        rootUri,
        new vscode.Position(6, 0)
    );
    assert.ok(completion.items.some(item => item.label === 'ServerName'));

    const hovers = await vscode.commands.executeCommand(
        'vscode.executeHoverProvider',
        rootUri,
        new vscode.Position(4, 3)
    );
    const hoverText = hovers.flatMap(hover => hover.contents)
        .map(content => content.value ?? String(content))
        .join('\n');
    assert.match(hoverText, /ServerName/);
    assert.match(hoverText, /Module/);
    assert.match(hoverText, /httpd\.apache\.org/);

    const diagnostics = await waitFor(() => {
        const current = vscode.languages.getDiagnostics(rootUri);
        return current.some(item => item.message === 'Unknown HTTPD directive "VendorDirective".')
            ? current
            : undefined;
    });
    assert.ok(diagnostics.length > 0);

    const definitions = await vscode.commands.executeCommand(
        'vscode.executeDefinitionProvider',
        rootUri,
        new vscode.Position(2, 16)
    );
    assert.ok(definitions?.length > 0);
    const target = 'targetUri' in definitions[0]
        ? definitions[0].targetUri
        : definitions[0].uri;
    assert.equal(path.basename(target.fsPath), 'site.inc');

    const includedDocument = await waitFor(() => vscode.workspace.textDocuments.find(document =>
        document.uri.toString() === target.toString() && document.languageId === 'httpd'
    ));
    const fragmentHovers = await vscode.commands.executeCommand(
        'vscode.executeHoverProvider',
        fragmentUri,
        new vscode.Position(0, 2)
    );
    const fragmentHoverText = fragmentHovers.flatMap(hover => hover.contents)
        .map(content => content.value ?? String(content))
        .join('\n');
    assert.match(fragmentHoverText, /\*\*Module state:\*\* loaded \(required\)/);
    assert.match(fragmentHoverText, /\*\*Included as:\*\* directory/);

    await replaceDocument(includedDocument, '</Directory>\n');
    await waitFor(() => vscode.languages.getDiagnostics(rootUri).some(diagnostic =>
        diagnostic.message === 'Included file "site.inc": Closing section </Directory> has no matching opening section.'
    ) ? true : undefined);

    await replaceDocument(includedDocument, 'Header set X-Smoke enabled\n');
    await waitFor(() => vscode.languages.getDiagnostics(rootUri).some(diagnostic =>
        diagnostic.message === 'Included file "site.inc": Closing section </Directory> has no matching opening section.'
    ) ? undefined : true);

    await replaceDocument(root, [
        'LoadModule headers_module modules/mod_headers.so',
        'ServerName example.test',
        'VendorDirective on',
        ''
    ].join('\n'));
    const restoredDocument = await waitFor(() => vscode.workspace.textDocuments.find(document =>
        document.uri.toString() === fragmentUri.toString() && document.languageId !== 'httpd'
    ));
    assert.equal(restoredDocument.languageId, 'plaintext');
};

async function replaceDocument(document, text) {
    const edit = new vscode.WorkspaceEdit();
    edit.replace(
        document.uri,
        new vscode.Range(new vscode.Position(0, 0), document.positionAt(document.getText().length)),
        text
    );
    assert.equal(await vscode.workspace.applyEdit(edit), true);
}

async function waitFor(probe, timeout = 15_000) {
    const deadline = Date.now() + timeout;
    while (Date.now() < deadline) {
        const value = probe();
        if (value !== undefined) {
            return value;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    throw new Error('Timed out waiting for VS Code language service result.');
}
