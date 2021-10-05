import { Token } from './Token.js'; 

export class Scanner {
  #source = undefined;
  #tokens = [];
  #start = 0;
  #current = 0;
  #line = 1;

  constructor(source) {
    this.#source = source;
  }

  getSource() {
    return this.#source;
  }

  getTokens() {
    return this.#tokens;
  }

  scanTokens() {
    while(!this.#isAtEnd()) {
      this.#start = this.#current;
      this.#scanToken();
    }

    this.#tokens.push(new Token('EOF', '', null, this.#line));
    return this.getTokens();
  }

  #isAtEnd() {
    return this.#current >= this.#source.length;
  }

  #scanToken() {
    let c = this.#advance();
    switch(c) {
      case '(': this.#addToken('LEFT_PAREN'); break;
      case ')': this.#addToken('RIGHT_PAREN'); break;
      case '{': this.#addToken('LEFT_BRACE'); break;
      case '}': this.#addToken('RIGHT_BRACE'); break;
      case '[': this.#addToken('LEFT_BRACKET'); break;
      case ']': this.#addToken('RIGHT_BRACKET'); break;
      case ',': this.#addToken('COMMA'); break;
      case '.': this.#addToken('DOT'); break;
      case '-': this.#addToken('MINUS'); break;
      case '+': this.#addToken('PLUS'); break;
      case ';': this.#addToken('SEMICOLON'); break;
      case '*': this.#addToken('STAR'); break;
      case '#': this.#addToken('HASH'); break;
      case ' ': break;
      case '\r': break;
      case '\n': 
        // this.#addToken('EOL'); 
        this.#line++;
        break;
    }
  }

  #advance() {
    return this.#source[this.#current++];
  }

  #addToken(type, literal = null) {
    let text = this.#source.substring(this.#start, this.#current);
    this.#tokens.push(new Token(type, text, literal, this.#line));
  }

}