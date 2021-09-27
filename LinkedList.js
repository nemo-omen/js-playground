import { simpleHash } from './simple-hash.js';
import { randomString } from './randomString.js';

class Node {
  constructor(val) {
    this.id = 0;
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    this.tail.id = this.length;
    return this;
  }

  pop() {
    if(!this.head) return undefined;
  
    let current = this.head;
    let newTail = current;
  
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  findByVal(val) {
    let idx = 0;
    let current = this.head;
    for(let i = 0; i < this.length; i++) {
      if(current.val === val) {
        return current;
      }
      current = current.next;
      idx++;
    }
  }
  
  findById(id) {
    let idx = 0;
    let current = this.head;
    for(let i = 0; i < this.length; i++) {
      if(current.id === id) {
        return current;
      }
      current = current.next;
      idx++;
    }
  }

  get(index) {
    let current = this.head;
    for(let i = 0; i <= index; i++) {
      if(i === index) {
        return current;
      }
      current = current.next;
    }
  }

  /**
   * 
   * @param {string} newVal   value update node with
   * @param {object} options  parameter to find node by
   *                          {id: int, value: string, index: int} 
   */
  update(newVal, options) {
    const { id, value, index } = options;
    let target = null;
    let old = null;

    if(id !== undefined) {
      target = this.findById(id);
    } else if(value !== undefined) {
      target = this.findByVal(value);
    } else if(index !== undefined) {
      target = this.get(index);
    } else {
      target = undefined;
    }

    if(target !== null && target !== undefined) {
      old = {id: target.id, val: target.val};
      target.val = newVal;
    }

    return {old, new: target};
  }
}



const list = new SinglyLinkedList();
list.push('ABC');
list.push('DEF');
list.push('GHI');
list.push('KLM');
list.push('NOP');
console.log(list);

console.log('Found by id(3): ', list.findById(3));

console.log('Found by val(GHI): ', list.findByVal('GHI'));

console.log('Retrieved by idx: ', list.get(3));

console.log(list.update('QRS', {index: 4}));