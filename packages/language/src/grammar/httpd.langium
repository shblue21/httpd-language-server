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
hidden terminal COMMENT: /#[^\r\n]*/;
terminal EOL: /\r?\n/;
terminal STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/;
terminal WORD: /[^\s<>#'\"]+/;
