export interface MutableDefineFacts {
    defines: Map<string, string | true>;
    undefinedDefines: Set<string>;
}

type DefineFact =
    | { kind: 'defined'; value: string | true }
    | { kind: 'undefined' }
    | { kind: 'unknown' };

export function joinDefineFacts(
    facts: MutableDefineFacts,
    branch: MutableDefineFacts
): void {
    const names = new Set([
        ...facts.defines.keys(),
        ...facts.undefinedDefines,
        ...branch.defines.keys(),
        ...branch.undefinedDefines
    ]);
    for (const name of names) {
        writeDefineFact(facts, name, joinDefineFact(
            readDefineFact(facts, name),
            readDefineFact(branch, name)
        ));
    }
}

function readDefineFact(facts: MutableDefineFacts, name: string): DefineFact {
    if (facts.defines.has(name)) {
        return { kind: 'defined', value: facts.defines.get(name) ?? true };
    }
    if (facts.undefinedDefines.has(name)) {
        return { kind: 'undefined' };
    }
    return { kind: 'unknown' };
}

function joinDefineFact(left: DefineFact, right: DefineFact): DefineFact {
    if (left.kind === 'defined' && right.kind === 'defined') {
        return {
            kind: 'defined',
            value: left.value === right.value ? left.value : true
        };
    }
    if (left.kind === 'undefined' && right.kind === 'undefined') {
        return { kind: 'undefined' };
    }
    return { kind: 'unknown' };
}

function writeDefineFact(
    facts: MutableDefineFacts,
    name: string,
    fact: DefineFact
): void {
    facts.defines.delete(name);
    facts.undefinedDefines.delete(name);
    if (fact.kind === 'defined') {
        facts.defines.set(name, fact.value);
    } else if (fact.kind === 'undefined') {
        facts.undefinedDefines.add(name);
    }
}
