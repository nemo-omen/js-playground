export class Node {
  
  children = [];

  constructor(type, data) {
    this.type = type;
    this.data = data;
  }

  addChild(node) {
    this.children.push(node);
  }
}

export class Root extends Node {
  constructor(data) {
    super('ROOT', data);
    this.parseContent();
  }

  parseContent() {
    let lines = this.data.split('\n');
    for(const line of lines) {
      const words = line.split(' ');
      const lineNode = new Node('LINE', line);
      for(let word of words) {
        const wordType = this.getWordType(word);
        const wordNode = new Node(wordType, word);
        lineNode.addChild(wordNode);
      }
      this.addChild(lineNode);
    }
  }

  getWordType(word) {
    if(/#{5}/g.test(word)) return 'H5';
    if(/#{4}/g.test(word)) return 'H4';
    if(/#{3}/g.test(word)) return 'H3';
    if(/#{2}/g.test(word)) return 'H2';
    if(/#{1}/g.test(word)) return 'H1';
    return 'WORD';
  }
}

export class Heading extends Node {
  constructor(data, depth) {
    super('HEADING', data);
    this.depth = depth;
  }

  addChild(node) {
    if(node.type !== 'TEXT') {
      return;
    } else {
      this.children.push(node);
    }
  }
}

export class Text extends Node {
  constructor(data) {
    super('TEXT', data);
  }
}