grammar Httpd

entry HttpdDocument:
    EOL* (statements+=Statement EOL+)* statements+=Statement?;

Statement:
    Section | Directive;

Section:
    open=SectionOpen EOL+
    (statements+=Statement EOL+)*
    close=SectionClose;

SectionOpen:
    '<' name=WORD arguments+=Argument* '>';

SectionClose:
    '</' name=WORD '>';

Directive:
    name=WORD arguments+=Argument*;

Argument returns string:
    STRING | WORD;

hidden terminal WS: /[ \t\f]+/;
hidden terminal LINE_CONTINUATION: /\\\r?\n/;
hidden terminal COMMENT: /#(?:\\\r?\n|[^\r\n])*/;
terminal EOL: /\r?\n/;
terminal STRING: /"(?:\\\r?\n|\\.|[^"\\\r\n])*"|'(?:\\\r?\n|\\.|[^'\\\r\n])*'/;
terminal WORD: /(?:\\\r?\n|[^\s<>'\"])+/;
