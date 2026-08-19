import {
    DefaultServiceRegistry,
    UriUtils,
    type LangiumCoreServices,
    type LangiumSharedCoreServices,
    type URI
} from 'langium';

export class HttpdServiceRegistry extends DefaultServiceRegistry {
    private readonly includedUris = new Set<string>();

    constructor(services: LangiumSharedCoreServices) {
        super(services);
    }

    registerIncluded(uri: URI): void {
        this.includedUris.add(UriUtils.normalize(uri));
    }

    override getServices(uri: URI): LangiumCoreServices {
        try {
            return super.getServices(uri);
        } catch (error) {
            if (this.includedUris.has(UriUtils.normalize(uri)) && this.all.length === 1) {
                return this.all[0];
            }
            throw error;
        }
    }

    override hasServices(uri: URI): boolean {
        return this.includedUris.has(UriUtils.normalize(uri)) || super.hasServices(uri);
    }
}
