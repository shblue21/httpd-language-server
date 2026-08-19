import {
    DefaultServiceRegistry,
    URI,
    UriUtils,
    type LangiumCoreServices,
    type LangiumSharedCoreServices
} from 'langium';
import type { DirectiveContext } from './catalog/types.js';

export class HttpdServiceRegistry extends DefaultServiceRegistry {
    private readonly includesByRoot = new Map<string, Map<string, IncludedContext>>();

    constructor(services: LangiumSharedCoreServices) {
        super(services);
    }

    replaceIncluded(
        root: URI,
        occurrences: readonly {
            context: DirectiveContext;
            sectionName?: string;
            targetUri: URI;
        }[]
    ): void {
        const included = new Map<string, IncludedContext>();
        for (const occurrence of occurrences) {
            const key = UriUtils.normalize(occurrence.targetUri);
            const entry = included.get(key) ?? { contexts: new Set(), sections: new Set() };
            entry.contexts.add(occurrence.context);
            if (occurrence.sectionName) {
                entry.sections.add(occurrence.sectionName);
            }
            included.set(key, entry);
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
            included.get(key)?.contexts.forEach(context => contexts.add(context));
        }
        return [...contexts];
    }

    getIncludedSectionNames(uri: URI): readonly string[] {
        const key = UriUtils.normalize(uri);
        const sections = new Set<string>();
        for (const included of this.includesByRoot.values()) {
            included.get(key)?.sections.forEach(section => sections.add(section));
        }
        return [...sections];
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

interface IncludedContext {
    contexts: Set<DirectiveContext>;
    sections: Set<string>;
}
