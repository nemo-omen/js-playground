// import crypto from 'crypto';
import { arrayToTree } from 'performant-array-to-tree';

const treeList = [
  {
    id: 1,
    body: 'abc',
    parentId: null
  },
  {
    id: 2,
    body: 'def',
    parentId: 1
  },
  {
    id: 3,
    body: 'ghi',
    parentId: 1
  },
  {
    id: 4,
    body: 'ABC',
    parentId:  2,
  },
  {
    id: 5,
    body: 'DEF',
    parentId: 3
  }
];

const myTree = arrayToTree((treeList));

// console.log(JSON.stringify(myTree, null, 2));

// console.log(myTree[0]);

function search(tree, target) {
  // console.log('tree: ', tree, ', target: ', target);
  if(tree.data.id === target) {
    return {...tree};
  }

  for(const child of tree.children) {
    const found = search(child, target);

    if(found) return found;
  }

}

console.log('found: ', search(myTree[0], 3));

console.log('entries: ', Object.entries(myTree[0]));
// class Tree {
//   id;
//   parent;

//   constructor({id = null, parent = null, children = []} = {}) {
//     this.id = id || this.genId();
//     this.parent = parent;
//     this.children = children;
//   }

//   genId() {
//     return crypto.randomBytes(16).toString('hex')
//   }

//   add(childNode) {
//     this.children.push(childNode);
//   }
// }

// const myTree = new Tree();
// console.log(myTree);