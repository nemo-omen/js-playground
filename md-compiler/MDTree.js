export class Tree {
  constructor() {  
    this.root = null;
    this.size = 0;
  }
}

export class TreeNode {
  
  children = [];

  constructor(type, value) {
    this.type = type;
    this.value = value;
  }

  addChild(node) {
    this.children.push(node);
  }
}