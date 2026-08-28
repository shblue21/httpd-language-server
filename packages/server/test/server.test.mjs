import assert from 'node:assert/strict';
import test from 'node:test';
import { URI } from 'langium';
import {
    registerIncludedRootCleanup,
    registerIncludedRootRevalidation
} from '../out/server.js';

const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

test('revalidates every including root through the workspace lock', async () => {
    const fragment = URI.parse('file:///workspace/conf/fragment.inc');
    const roots = [
        URI.parse('file:///workspace/httpd.conf'),
        URI.parse('file:///workspace/secondary.conf')
    ];
    const updates = [];
    let contentChange;
    let contentChangeDisposed = false;
    let lockWrites = 0;
    const shared = {
        ServiceRegistry: {
            getRootsForIncluded: uri => uri.toString() === fragment.toString() ? roots : []
        },
        workspace: {
            DocumentBuilder: {
                update: async changed => {
                    updates.push(changed.map(uri => uri.toString()));
                }
            },
            TextDocuments: {
                onDidChangeContent: listener => {
                    contentChange = listener;
                    return {
                        dispose: () => {
                            contentChangeDisposed = true;
                        }
                    };
                }
            },
            WorkspaceLock: {
                write: async action => {
                    lockWrites++;
                    await action({});
                }
            },
            WorkspaceManager: {
                ready: Promise.resolve()
            }
        }
    };

    const dispose = registerIncludedRootRevalidation(shared, 5);
    contentChange({ document: { uri: fragment.toString() } });
    contentChange({ document: { uri: fragment.toString() } });
    await wait(30);

    assert.equal(lockWrites, 2);
    assert.deepEqual(updates.flat(), roots.map(root => root.toString()));

    dispose();
    assert.equal(contentChangeDisposed, true);
    contentChange({ document: { uri: fragment.toString() } });
    await wait(30);
    assert.equal(lockWrites, 2);
});

test('does not rebuild after disposal while workspace readiness is pending', async () => {
    const fragment = URI.parse('file:///workspace/conf/fragment.inc');
    const root = URI.parse('file:///workspace/httpd.conf');
    let contentChange;
    let resolveReady;
    let updates = 0;
    const ready = new Promise(resolve => {
        resolveReady = resolve;
    });
    const shared = {
        ServiceRegistry: {
            getRootsForIncluded: () => [root]
        },
        workspace: {
            DocumentBuilder: {
                update: async () => {
                    updates++;
                }
            },
            TextDocuments: {
                onDidChangeContent: listener => {
                    contentChange = listener;
                    return { dispose: () => undefined };
                }
            },
            WorkspaceLock: {
                write: async action => action({})
            },
            WorkspaceManager: { ready }
        }
    };

    const dispose = registerIncludedRootRevalidation(shared, 5);
    contentChange({ document: { uri: fragment.toString() } });
    await wait(15);
    dispose();
    resolveReady();
    await wait(15);

    assert.equal(updates, 0);
});


test('removes deleted roots from the include registry', () => {
    const deleted = [
        URI.parse('file:///workspace/httpd.conf'),
        URI.parse('file:///workspace/secondary.conf')
    ];
    const removed = [];
    let update;
    let disposed = false;
    const shared = {
        ServiceRegistry: {
            removeRoot: uri => removed.push(uri.toString())
        },
        workspace: {
            DocumentBuilder: {
                onUpdate: listener => {
                    update = listener;
                    return { dispose: () => { disposed = true; } };
                }
            }
        }
    };

    const dispose = registerIncludedRootCleanup(shared);
    update([], deleted);
    assert.deepEqual(removed, deleted.map(uri => uri.toString()));

    dispose();
    assert.equal(disposed, true);
});