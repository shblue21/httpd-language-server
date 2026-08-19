import { AstUtils, type ValidationAcceptor, type ValidationChecks } from 'langium';
import {
    type Directive,
    type HttpdAstType,
    type HttpdDocument,
    type Section,
    isSection
} from './generated/ast.js';
import type { HttpdServices } from './httpd-module.js';

export function registerValidationChecks(services: HttpdServices): void {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.HttpdValidator;
    const checks: ValidationChecks<HttpdAstType> = {
        HttpdDocument: validator.checkOrphanSectionClosings,
        Section: [validator.checkSectionPair, validator.checkSectionDelimiters],
        Directive: validator.checkDirectiveContext
    };
    registry.register(checks, validator);
}

export class HttpdValidator {
    checkOrphanSectionClosings(document: HttpdDocument, accept: ValidationAcceptor): void {
        document.orphanClosings.forEach((close, index) => {
            accept('error', `Closing section </${close.name}> has no matching opening section.`, {
                node: document,
                property: 'orphanClosings',
                index
            });
        });
    }

    checkSectionPair(section: Section, accept: ValidationAcceptor): void {
        if (!section.close) {
            return;
        }
        if (section.open.name.toLowerCase() !== section.close.name.toLowerCase()) {
            accept('error', `Closing section </${section.close.name}> does not match <${section.open.name}>.`, {
                node: section.close,
                property: 'name'
            });
        }
    }

    checkSectionDelimiters(section: Section, accept: ValidationAcceptor): void {
        if (!section.open.terminated) {
            accept('error', `Opening section <${section.open.name}> is missing ">".`, {
                node: section.open
            });
        }
        if (section.close && !section.close.terminated) {
            accept('error', `Closing section </${section.close.name}> is missing ">".`, {
                node: section.close
            });
        }
    }

    checkDirectiveContext(directive: Directive, accept: ValidationAcceptor): void {
        if (directive.name.toLowerCase() !== 'allowoverride') {
            return;
        }
        const section = AstUtils.getContainerOfType(directive, isSection);
        if (section && section.open.name.toLowerCase() !== 'directory') {
            accept('error', 'AllowOverride is only valid in a <Directory> section.', {
                node: directive,
                property: 'name'
            });
        }
    }
}
