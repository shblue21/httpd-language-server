import { execFileSync } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';
import sax from 'sax';

const APACHE_TAG = '2.4.68';
const APACHE_COMMIT = '736bb657405eb73fd68a64772c3a908807bdb887';
const BUILTIN_ENTITIES = new Set(['amp', 'apos', 'gt', 'lt', 'quot']);
const ENTITY_REPLACEMENTS = new Map([
    ['httpd.docs', 'https://httpd.apache.org/docs/2.4/'],
    ['mdash', '—'],
    ['nbsp', ' ']
]);
const CONTEXTS = new Map([
    ['server config', 'server'],
    ['virtual host', 'virtual-host'],
    ['directory', 'directory'],
    ['.htaccess', 'htaccess'],
    ['proxy section', 'proxy']
]);

const { source, output } = parseArguments(process.argv.slice(2));
verifySource(source);

const moduleDirectory = join(source, 'docs', 'manual', 'mod');
const manifest = parseXml(
    await readFile(join(moduleDirectory, 'allmodules.xml'), 'utf8'),
    'allmodules.xml'
);
const moduleFiles = children(manifest, 'modulefile').map(text);
const modules = [];
const directives = [];
const references = [];

for (const fileName of moduleFiles) {
    const root = parseXml(
        await readFile(join(moduleDirectory, fileName), 'utf8'),
        fileName
    );
    const owner = requiredText(root, 'name', fileName);
    const moduleStatus = requiredText(root, 'status', fileName);
    const identifier = optionalText(root, 'identifier');
    const stem = basename(fileName, '.xml');

    modules.push(compact({
        id: owner,
        identifiers: identifier ? [identifier] : [],
        fileNames: defaultLoadFileNames(owner, identifier),
        sourceFile: optionalText(root, 'sourcefile'),
        status: moduleStatus,
        bundled: true,
        dependencies: [],
        description: requiredText(root, 'description', fileName),
        compatibility: optionalText(root, 'compatibility'),
        since: inferSince(optionalText(root, 'compatibility')),
        documentation: `https://httpd.apache.org/docs/2.4/mod/${stem}.html`
    }));

    for (const synopsis of children(root, 'directivesynopsis')) {
        const name = requiredText(synopsis, 'name', fileName);
        if (synopsis.attributes.location) {
            references.push({
                owner,
                name,
                target: synopsis.attributes.location
            });
            continue;
        }

        const kind = synopsis.attributes.type === 'section' ? 'section' : 'directive';
        const moduleList = child(synopsis, 'modulelist');
        const providers = moduleList
            ? children(moduleList, 'module').map(text)
            : [owner];
        const idSuffix = synopsis.attributes.idtype ?? '';

        const compatibility = optionalText(synopsis, 'compatibility');
        directives.push(compact({
            id: `${owner}:${kind}:${name.toLowerCase()}`,
            owner,
            name,
            kind,
            modules: providers,
            contexts: children(requiredChild(synopsis, 'contextlist', fileName), 'context')
                .map(context => normalizeContext(text(context), fileName, name)),
            override: splitOverride(optionalText(synopsis, 'override')),
            status: optionalText(synopsis, 'status') ?? moduleStatus,
            description: requiredText(synopsis, 'description', fileName),
            syntax: requiredText(synopsis, 'syntax', fileName),
            default: optionalText(synopsis, 'default'),
            compatibility,
            since: inferSince(compatibility),
            documentation: `https://httpd.apache.org/docs/2.4/mod/${stem}.html#${name.toLowerCase()}${idSuffix}`
        }));
    }
}

modules.sort((left, right) => left.id.localeCompare(right.id));
directives.sort((left, right) =>
    left.name.toLowerCase().localeCompare(right.name.toLowerCase())
    || left.kind.localeCompare(right.kind)
    || left.owner.localeCompare(right.owner)
);
validateReferences(references, directives);

const generated = `/*
 * Generated from Apache HTTP Server ${APACHE_TAG} documentation.
 * Source commit: ${APACHE_COMMIT}
 * Source license: Apache-2.0
 * DO NOT EDIT. Run pnpm catalog:generate -- --source <httpd-checkout>.
 */
import type { DirectiveSpec, ModuleSpec } from './types.js';

export const APACHE_2_4_CATALOG_SOURCE = ${JSON.stringify({
    tag: APACHE_TAG,
    commit: APACHE_COMMIT,
    moduleCount: modules.length,
    directiveCount: directives.length,
    referenceCount: references.length
}, null, 4)} as const;

export const APACHE_2_4_MODULES: readonly ModuleSpec[] = ${JSON.stringify(modules, null, 4)};

export const APACHE_2_4_DIRECTIVES: readonly DirectiveSpec[] = ${JSON.stringify(directives, null, 4)};
`;

await writeFile(output, generated, 'utf8');
console.log(`Generated ${modules.length} modules and ${directives.length} directives at ${output}.`);

function parseArguments(args) {
    let source;
    let output = resolve('src/catalog/apache-2.4.generated.ts');

    for (let index = 0; index < args.length; index++) {
        if (args[index] === '--') {
            continue;
        } else if (args[index] === '--source') {
            source = resolve(args[++index] ?? '');
        } else if (args[index] === '--output') {
            output = resolve(args[++index] ?? '');
        } else {
            throw new Error(`Unknown argument: ${args[index]}`);
        }
    }

    if (!source) {
        throw new Error('Usage: pnpm catalog:generate -- --source <pinned-httpd-checkout>');
    }
    return { source, output };
}

function verifySource(sourceDirectory) {
    const commit = execFileSync('git', ['-C', sourceDirectory, 'rev-parse', 'HEAD'], {
        encoding: 'utf8'
    }).trim();
    if (commit !== APACHE_COMMIT) {
        throw new Error(`Expected Apache HTTP Server ${APACHE_TAG} at ${APACHE_COMMIT}, found ${commit}.`);
    }
}

function parseXml(input, fileName) {
    const roots = [];
    const stack = [];
    const parser = sax.parser(true, { trim: false, normalize: false });

    parser.onopentag = tag => {
        const node = {
            name: tag.name,
            attributes: Object.fromEntries(
                Object.entries(tag.attributes).map(([name, value]) => [name, String(value)])
            ),
            children: []
        };
        const parent = stack.at(-1);
        if (parent) {
            parent.children.push(node);
        } else {
            roots.push(node);
        }
        stack.push(node);
    };
    parser.ontext = value => stack.at(-1)?.children.push(value);
    parser.oncdata = value => stack.at(-1)?.children.push(value);
    parser.onclosetag = () => stack.pop();

    try {
        parser.write(replaceEntities(input, fileName)).close();
    } catch (error) {
        throw new Error(`Failed to parse ${fileName}: ${error.message}`, { cause: error });
    }

    const root = roots.find(node => node.name === 'modulesynopsis' || node.name === 'modulefilelist');
    if (!root) {
        throw new Error(`No supported document root in ${fileName}.`);
    }
    return root;
}

function replaceEntities(input, fileName) {
    return input.replace(/&([A-Za-z][A-Za-z0-9_.-]*);/g, (match, name) => {
        if (BUILTIN_ENTITIES.has(name)) {
            return match;
        }
        const replacement = ENTITY_REPLACEMENTS.get(name);
        if (replacement === undefined) {
            throw new Error(`Unsupported XML entity &${name}; in ${fileName}.`);
        }
        return replacement;
    });
}

function child(node, name) {
    return node.children.find(candidate => typeof candidate !== 'string' && candidate.name === name);
}

function children(node, name) {
    return node.children.filter(candidate => typeof candidate !== 'string' && candidate.name === name);
}

function requiredChild(node, name, fileName) {
    const value = child(node, name);
    if (!value) {
        throw new Error(`Missing <${name}> in ${fileName}.`);
    }
    return value;
}

function requiredText(node, name, fileName) {
    const value = optionalText(node, name);
    if (!value) {
        throw new Error(`Missing <${name}> text in ${fileName}.`);
    }
    return value;
}

function optionalText(node, name) {
    const value = child(node, name);
    return value ? text(value) : undefined;
}

function text(node) {
    return normalizeWhitespace(node.children.map(value =>
        typeof value === 'string' ? value : text(value)
    ).join(''));
}

function normalizeWhitespace(value) {
    return value.replace(/\s+/g, ' ').trim();
}

function normalizeContext(context, fileName, directive) {
    const normalized = CONTEXTS.get(context);
    if (!normalized) {
        throw new Error(`Unknown context "${context}" for ${directive} in ${fileName}.`);
    }
    return normalized;
}

function splitOverride(value) {
    return value ? value.split(/[\s,]+/).filter(Boolean) : [];
}

function inferSince(compatibility) {
    return compatibility?.match(
        /^Available in (?:(?:Apache HTTP Server|Apache) )?(?:version )?(\d+\.\d+(?:\.\d+)?) and later\b/i
    )?.[1];
}

function defaultLoadFileNames(id, identifier) {
    if (!identifier || !id.startsWith('mod_')) {
        return [];
    }
    return [`${id}.so`, `${id}.dll`];
}

function compact(value) {
    return Object.fromEntries(Object.entries(value).filter(([, entry]) => entry !== undefined));
}

function validateReferences(references, definitions) {
    const definitionKeys = new Set(definitions.map(definition =>
        `${definition.owner}:${definition.name.toLowerCase()}`
    ));
    for (const reference of references) {
        const key = `${reference.target}:${reference.name.toLowerCase()}`;
        if (!definitionKeys.has(key)) {
            throw new Error(
                `Unresolved directive reference ${reference.owner}:${reference.name} -> ${reference.target}.`
            );
        }
    }
}
