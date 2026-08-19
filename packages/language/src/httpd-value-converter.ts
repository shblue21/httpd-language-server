import {
    DefaultValueConverter,
    GrammarAST,
    type CstNode,
    type ValueType
} from 'langium';

export class HttpdValueConverter extends DefaultValueConverter {
    protected override runConverter(
        rule: GrammarAST.AbstractRule,
        input: string,
        cstNode: CstNode
    ): ValueType {
        switch (rule.name.toUpperCase()) {
            case 'STRING':
                return convertQuotedArgument(input);
            case 'SECTION_OPERATOR':
                return input.trim();
            case 'WORD':
                return removeLineContinuations(input);
            default:
                return super.runConverter(rule, input, cstNode);
        }
    }
}

function convertQuotedArgument(input: string): string {
    const quote = input[0];
    let result = '';

    for (let index = 1; index < input.length - 1; index++) {
        const character = input[index];
        if (character !== '\\') {
            result += character;
            continue;
        }

        const next = input[index + 1];
        if (next === '\n') {
            index++;
        } else if (next === '\r' && input[index + 2] === '\n') {
            index += 2;
        } else if (next === quote || next === '\\') {
            result += next;
            index++;
        } else {
            result += `\\${next}`;
            index++;
        }
    }

    return result;
}

function removeLineContinuations(input: string): string {
    return input.replace(/\\\r?\n/g, '').replace(/\\\\/g, '\\');
}
