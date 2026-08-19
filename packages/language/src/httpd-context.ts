import { AstUtils, type AstNode } from 'langium';
import type { DirectiveContext } from './catalog/types.js';
import { isSection, isSectionOpen, type Section } from './generated/ast.js';

export function getNodeContext(node: AstNode): DirectiveContext {
    let section: Section | undefined;
    if (isSectionOpen(node) && isSection(node.$container)) {
        section = isSection(node.$container.$container)
            ? node.$container.$container
            : undefined;
    } else {
        section = AstUtils.getContainerOfType(node, isSection);
    }

    return getSectionContext(section) ?? getRootContext(AstUtils.getDocument(node).uri.path);
}

export function getSectionContext(section: Section | undefined): DirectiveContext | undefined {
    while (section) {
        const context = sectionNameToContext(section.open.name);
        if (context) {
            return context;
        }
        section = isSection(section.$container) ? section.$container : undefined;
    }
    return undefined;
}

export function getRootContext(uriPath: string): DirectiveContext {
    return uriPath.endsWith('/.htaccess') ? 'htaccess' : 'server';
}

function sectionNameToContext(name: string): DirectiveContext | undefined {
    switch (name.toLowerCase()) {
        case 'virtualhost':
            return 'virtual-host';
        case 'directory':
        case 'directorymatch':
        case 'files':
        case 'filesmatch':
        case 'location':
        case 'locationmatch':
            return 'directory';
        case 'proxy':
        case 'proxymatch':
            return 'proxy';
        default:
            return undefined;
    }
}
