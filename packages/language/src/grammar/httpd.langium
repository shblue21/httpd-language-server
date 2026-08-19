grammar Httpd

entry HttpdDocument:
    EOL*
    ((statements+=Statement | orphanClosings+=SectionClose) EOL+)*
    (statements+=Statement | orphanClosings+=SectionClose)?;

Statement:
    Section | Directive | Comment;

Comment:
    text=COMMENT;

Section:
    open=SectionOpen EOL+
    (statements+=Statement EOL+)*
    close=SectionClose;

SectionOpen:
    '<' name=WORD arguments+=Argument* (terminated?='>')?;

SectionClose:
    '</' name=WORD (terminated?='>')?;

Directive:
    name=WORD arguments+=Argument* (inlineComment=COMMENT)?;

Argument returns string:
    STRING | SECTION_OPERATOR | WORD;

hidden terminal WS: /[ \t\f]+/;
hidden terminal LINE_CONTINUATION: /\\\r?\n/;
terminal EOL: /\r?\n/;
terminal STRING: /"(?:\\\r?\n|\\.|[^"\\\r\n])*"|'(?:\\\r?\n|\\.|[^'\\\r\n])*'/;
terminal SECTION_OPERATOR: /!?(?:[<>]=?|={1,2})[ \t]+(?=[^\s>])/;
terminal WORD: /(?:\\\r?\n|[^\s<>#'\"])(?:\\\r?\n|[^\s<>])*/;
terminal COMMENT: /#(?:\\\r?\n|[^\r\n])*/;
