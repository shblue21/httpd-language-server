import { type Module, inject } from 'langium';
import {
    createDefaultModule,
    createDefaultSharedModule,
    type DefaultSharedModuleContext,
    type LangiumServices,
    type LangiumSharedServices,
    type PartialLangiumServices
} from 'langium/lsp';
import { HttpdGeneratedModule, HttpdGeneratedSharedModule } from './generated/module.js';
import { HttpdValidator, registerValidationChecks } from './httpd-validator.js';

export type HttpdAddedServices = {
    validation: {
        HttpdValidator: HttpdValidator;
    };
};

export type HttpdServices = LangiumServices & HttpdAddedServices;

export const HttpdModule: Module<HttpdServices, PartialLangiumServices & HttpdAddedServices> = {
    validation: {
        HttpdValidator: () => new HttpdValidator()
    }
};

export function createHttpdServices(context: DefaultSharedModuleContext): {
    shared: LangiumSharedServices;
    Httpd: HttpdServices;
} {
    const shared = inject(
        createDefaultSharedModule(context),
        HttpdGeneratedSharedModule
    );
    const Httpd = inject(
        createDefaultModule({ shared }),
        HttpdGeneratedModule,
        HttpdModule
    );
    shared.ServiceRegistry.register(Httpd);
    registerValidationChecks(Httpd);
    if (!context.connection) {
        shared.workspace.ConfigurationProvider.initialized({});
    }
    return { shared, Httpd };
}
