import { simpleHash } from './simple-hash.js';
import { randomString } from './randomString.js';

class Node {
  constructor(val) {
    this.id = 0;
    this.val = val;
    this.next = null;
  }

  toString() {
    return `{id: ${this.id}, val: ${this.val}, next: ${this.next.id}}`
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

  /**
   * Adds Node to front of list
   * @param {string} val 
   */
  unshift(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    this.head.id = this.length;
  }

  /**
   * Remove first Node in list
   */
  shift() {
    if(!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    temp = null;
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

  /**
   * Find a node by its val
   * @param {string} val 
   * @returns NODE | undefined
   */
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
  
  /**
   * Find a node by its id
   * @param {int} id 
   * @returns Node | undefined
   */
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

  /**
   * Get a Node by its index
   * @param {int} index 
   * @returns Node | undefined
   */
  get(index) {
    let current = this.head;
    for(let i = 0; i <= index; i++) {
      if(i === index) {
        return current;
      }
      current = current.next;
    }
  }

  insert(val, index) {
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let previous = this.get(index - 1);
    let temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    this.length++;
    newNode.id = this.length;
    return true;
  }

  /**
   * Update a Node's value
   * @param {string} newVal   value update node with
   * @param {object} options  parameter to find node by
   *                          {id: int, value: string, index: int}
   * @returns Object {old: {id, val}, new: Node} 
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

  /**
   * Get a formatted string representation of the linked list
   * ex: `[{id, val}->{id, val}->etc]
   * @returns string 
   */
  toString() {
    let str = '[';
    let current = this.head;
    for(let i = 0; i < this.length; i++) {
      str += '{id: ' + current?.id + ', val: ' + current?.val + '}';
      if(current?.next !== null) {
        str += '->';
      }

      current = current?.next;
    }
    str += ']';
    return  str;
  }
}



const list = new SinglyLinkedList();
list.push('ABC');
list.push('DEF');
list.push('GHI');
list.push('KLM');
list.push('NOP');
console.log(list.toString());

console.log('Found by id(3): ', list.findById(3).toString());

console.log('Found by val(GHI): ', list.findByVal('GHI').toString());

console.log('Retrieved by idx: ', list.get(3).toString());

console.log(list.update('QRS', {index: 4}));

list.insert('LPO', 1);

console.log(list.toString());

console.log(list.toString());

list.unshift('YUT');

console.log(list.toString());

list.shift();

console.log(list.toString());