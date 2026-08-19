import {
    APACHE_2_4_CATALOG_SOURCE,
    APACHE_2_4_DIRECTIVES,
    APACHE_2_4_MODULES
} from './apache-2.4.generated.js';
import {
    APACHE_2_4_DIRECTIVE_OVERRIDES,
    APACHE_2_4_MODULE_OVERRIDES
} from './apache-2.4-overrides.js';
import { HttpdCatalog } from './catalog.js';

export { APACHE_2_4_CATALOG_SOURCE };

export const apache24Catalog = new HttpdCatalog(
    APACHE_2_4_MODULES.map(module => ({
        ...module,
        ...APACHE_2_4_MODULE_OVERRIDES[module.id]
    })),
    APACHE_2_4_DIRECTIVES.map(directive => ({
        ...directive,
        ...APACHE_2_4_DIRECTIVE_OVERRIDES[directive.id]
    }))
);
