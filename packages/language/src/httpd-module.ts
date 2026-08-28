import { type Module, inject } from 'langium';
import {
    createDefaultModule,
    createDefaultSharedModule,
    type DefaultSharedModuleContext,
    type LangiumServices,
    type LangiumSharedServices,
    type PartialLangiumSharedServices,
    type PartialLangiumServices
} from 'langium/lsp';
import { HttpdGeneratedModule, HttpdGeneratedSharedModule } from './generated/module.js';
import { HttpdCompletionProvider } from './httpd-completion-provider.js';
import { HttpdDefinitionProvider } from './httpd-definition-provider.js';
import { HttpdHoverProvider } from './httpd-hover-provider.js';
import { HttpdIncludeGraph } from './httpd-include-graph.js';
import { HttpdIncludeResolver } from './httpd-include-resolver.js';
import { HttpdRequirementAnalyzer } from './httpd-requirements.js';
import { HttpdRenameProvider } from './httpd-rename-provider.js';
import { HttpdServiceRegistry } from './httpd-service-registry.js';
import { HttpdValueConverter } from './httpd-value-converter.js';
import { HttpdValidator, registerValidationChecks } from './httpd-validator.js';

export type HttpdAddedServices = {
    validation: {
        HttpdValidator: HttpdValidator;
    };
    workspace: {
        IncludeGraph: HttpdIncludeGraph;
        IncludeResolver: HttpdIncludeResolver;
    };
    semantic: {
        Requirements: HttpdRequirementAnalyzer;
    };
};

export type HttpdSharedServices = LangiumSharedServices & {
    ServiceRegistry: HttpdServiceRegistry;
};

export type HttpdServices = LangiumServices & HttpdAddedServices & {
    shared: HttpdSharedServices;
};

export const HttpdSharedModule: Module<HttpdSharedServices, PartialLangiumSharedServices> = {
    ServiceRegistry: services => new HttpdServiceRegistry(services)
};

export const HttpdModule: Module<HttpdServices, PartialLangiumServices & HttpdAddedServices> = {
    lsp: {
        CompletionProvider: services => new HttpdCompletionProvider(
            services.shared.ServiceRegistry as HttpdServiceRegistry
        ),
        DefinitionProvider: services => new HttpdDefinitionProvider(services.workspace.IncludeGraph),
        HoverProvider: services => new HttpdHoverProvider(
            services.semantic.Requirements,
            services.workspace.IncludeGraph
        ),
        RenameProvider: () => new HttpdRenameProvider()
    },
    parser: {
        ValueConverter: () => new HttpdValueConverter()
    },
    validation: {
        HttpdValidator: services => new HttpdValidator(
            services.workspace.IncludeGraph,
            services.semantic.Requirements,
            services.shared.ServiceRegistry as HttpdServiceRegistry
        )
    },
    semantic: {
        Requirements: () => new HttpdRequirementAnalyzer()
    },
    workspace: {
        IncludeGraph: services => new HttpdIncludeGraph(
            services.workspace.IncludeResolver,
            services.shared.workspace.FileSystemProvider,
            services.parser.LangiumParser,
            services.shared.ServiceRegistry as HttpdServiceRegistry,
            services.shared.workspace.TextDocuments,
            services.shared.workspace.LangiumDocuments
        ),
        IncludeResolver: services => new HttpdIncludeResolver(
            services.shared.workspace.FileSystemProvider
        )
    }
};

export function createHttpdServices(context: DefaultSharedModuleContext): {
    shared: HttpdSharedServices;
    Httpd: HttpdServices;
} {
    const shared = inject(
        createDefaultSharedModule(context),
        HttpdGeneratedSharedModule,
        HttpdSharedModule
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
