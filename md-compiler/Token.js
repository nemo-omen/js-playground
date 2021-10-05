export class Token {
  type = undefined;
  lexeme = '';
  literal = {};
  line = 0;

  constructor(type, lexeme, literal, line) {
    this.type = type;
    this.lexeme = lexeme;
    this.literal = literal;
    this.line = line;
  }
}