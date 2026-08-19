import {
    DefaultServiceRegistry,
    URI,
    UriUtils,
    type LangiumCoreServices,
    type LangiumSharedCoreServices
} from 'langium';
import type { DirectiveContext } from './catalog/types.js';

export class HttpdServiceRegistry extends DefaultServiceRegistry {
    private readonly includesByRoot = new Map<string, Map<string, Set<DirectiveContext>>>();

    constructor(services: LangiumSharedCoreServices) {
        super(services);
    }

    replaceIncluded(
        root: URI,
        occurrences: readonly { context: DirectiveContext; targetUri: URI }[]
    ): void {
        const included = new Map<string, Set<DirectiveContext>>();
        for (const occurrence of occurrences) {
            const key = UriUtils.normalize(occurrence.targetUri);
            const contexts = included.get(key) ?? new Set();
            contexts.add(occurrence.context);
            included.set(key, contexts);
        }
        this.includesByRoot.set(UriUtils.normalize(root), included);
    }

    isIncluded(uri: URI): boolean {
        const key = UriUtils.normalize(uri);
        return [...this.includesByRoot.values()].some(included => included.has(key));
    }

    getIncludedContexts(uri: URI): readonly DirectiveContext[] {
        const key = UriUtils.normalize(uri);
        const contexts = new Set<DirectiveContext>();
        for (const included of this.includesByRoot.values()) {
            included.get(key)?.forEach(context => contexts.add(context));
        }
        return [...contexts];
    }

    getRootsForIncluded(uri: URI): readonly URI[] {
        const key = UriUtils.normalize(uri);
        return [...this.includesByRoot.entries()]
            .filter(([, included]) => included.has(key))
            .map(([root]) => URI.parse(root));
    }

    override getServices(uri: URI): LangiumCoreServices {
        try {
            return super.getServices(uri);
        } catch (error) {
            if (this.isIncluded(uri) && this.all.length === 1) {
                return this.all[0];
            }
            throw error;
        }
    }

    override hasServices(uri: URI): boolean {
        return this.isIncluded(uri) || super.hasServices(uri);
    }
}
