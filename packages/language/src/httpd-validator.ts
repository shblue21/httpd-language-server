import { AstUtils, type ValidationAcceptor, type ValidationChecks } from 'langium';
import {
    type Directive,
    type HttpdAstType,
    type Section,
    isSection
} from './generated/ast.js';
import type { HttpdServices } from './httpd-module.js';

export function registerValidationChecks(services: HttpdServices): void {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.HttpdValidator;
    const checks: ValidationChecks<HttpdAstType> = {
        Section: validator.checkSectionPair,
        Directive: validator.checkDirectiveContext
    };
    registry.register(checks, validator);
}

export class HttpdValidator {
    checkSectionPair(section: Section, accept: ValidationAcceptor): void {
        if (section.open.name.toLowerCase() !== section.close.name.toLowerCase()) {
            accept('error', `Closing section </${section.close.name}> does not match <${section.open.name}>.`, {
                node: section.close,
                property: 'name'
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
