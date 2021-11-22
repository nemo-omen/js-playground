import * as Colors from 'https://deno.land/std@0.115.1/fmt/colors.ts';
import { sprintf } from 'https://deno.land/std@0.115.1/fmt/printf.ts';
export class ListNode<T> {
  data: T;
  next: ListNode<T> | undefined;
  id: number;

  constructor(data: T) {
    this.data = data;
    this.id = -1;
  }
}

class ListUnderflowError extends Error {
  constructor() {
    super('List is empty');
  }
}

export class SingleLinkedList<T> {
  head?: ListNode<T> | undefined;
  tail?: ListNode<T> | undefined;
  length: number;

  constructor() {
    this.length = 0;
  }

  push(val: T): void {
    
    let node = new ListNode(val);

    if(node !== null && node !== undefined) {
      if(this.head === null || this.head === undefined) {
        this.head = node;
        this.tail = this.head;
      } else {
        this.tail!.next = node;
        this.tail = node;
      }
    }

    this.length++;
    this.tail!.id = this.length;
  }

  unshift(val: T): void {
    const node = new ListNode(val);
    node.next = this.head;
    this.head = node;
    this.head.id = this.length;
  }

  shift(): ListNode<T> | undefined {
    if(this.head === undefined) throw new ListUnderflowError();

    let node = this.head!;
    this.head = this.head!.next;
    return node;
  }

  pop(): ListNode<T> {
    if(!this.head) throw new ListUnderflowError();

    let current = this.head!;
    let newTail = current;

    while(current.next) {
      newTail = current;
      current = current!.next;
    }

    this.tail! = newTail;
    this.tail!.next = undefined;
    this.length--;
    
    if(this.length == 0) {
      this.head = undefined;
      this.tail = undefined;
    }

    return current;
  }

  getHead(): ListNode<T> {
    if(!this.head) throw new ListUnderflowError();

    return this.head!;
  }

  getTail(): ListNode<T> {
    if(!this.tail) throw new ListUnderflowError();
    return this.tail!;
  }

  [Deno.customInspect]() {
    let output: string = '';

    if(this.head === undefined || this.head === null) {
      output += '[]';
    } else {
      let current = this.head;

      // output += sprintf(
      //   Colors.green('[ '), 
      //   Colors.blue('{ '), 
      //   Colors.yellow(' id: '), 
      //   Colors.white(`${current.id},`),
      //   Colors.yellow('data: '),
      //   Colors.white(`${current.data} `),
      //   Colors.blue('} '),
      //   Colors.green(']')
      //   );
      output += `[ { id: ${current.id}, data: ${current.data} }`;
      
      while(current.next) {
        current = current.next;
        output += `\n \t-> { id: ${current.id}, data: ${current.data} }`;
      }
      output += '\n]';
    }

    return output;
  }
}