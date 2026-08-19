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
import { HttpdCompletionProvider } from './httpd-completion-provider.js';
import { HttpdDefinitionProvider } from './httpd-definition-provider.js';
import { HttpdHoverProvider } from './httpd-hover-provider.js';
import { HttpdIncludeResolver } from './httpd-include-resolver.js';
import { HttpdRequirementAnalyzer } from './httpd-requirements.js';
import { HttpdValueConverter } from './httpd-value-converter.js';
import { HttpdValidator, registerValidationChecks } from './httpd-validator.js';

export type HttpdAddedServices = {
    validation: {
        HttpdValidator: HttpdValidator;
    };
    workspace: {
        IncludeResolver: HttpdIncludeResolver;
    };
    semantic: {
        Requirements: HttpdRequirementAnalyzer;
    };
};

export type HttpdServices = LangiumServices & HttpdAddedServices;

export const HttpdModule: Module<HttpdServices, PartialLangiumServices & HttpdAddedServices> = {
    lsp: {
        CompletionProvider: () => new HttpdCompletionProvider(),
        DefinitionProvider: services => new HttpdDefinitionProvider(services.workspace.IncludeResolver),
        HoverProvider: services => new HttpdHoverProvider(services.semantic.Requirements)
    },
    parser: {
        ValueConverter: () => new HttpdValueConverter()
    },
    validation: {
        HttpdValidator: services => new HttpdValidator(services.workspace.IncludeResolver)
    },
    semantic: {
        Requirements: () => new HttpdRequirementAnalyzer()
    },
    workspace: {
        IncludeResolver: services => new HttpdIncludeResolver(services.shared.workspace.FileSystemProvider)
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
