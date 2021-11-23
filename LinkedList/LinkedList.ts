import * as Colors from 'https://deno.land/std@0.115.1/fmt/colors.ts';
import { sprintf } from 'https://deno.land/std@0.115.1/fmt/printf.ts';
import * as ink from 'https://deno.land/x/ink/mod.ts'
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
    this.length++;
    this.head.id = this.length;
  }

  shift(): ListNode<T> | undefined {
    if(this.head === undefined) throw new ListUnderflowError();

    let node = this.head!;
    this.head = this.head!.next;
    this.length--;
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

  size(): number {
    return this.length;
  }

  find(val: T | number): ListNode<T> | undefined {
    if(!this.head) throw new ListUnderflowError();

    let current = this.head!;
    for(let i: number = 0; i < this.length; i++) {
      if(typeof val === 'number') {
        if(current!.id === val) return current;
      } else {
        if(current!.data === val) return current;
      }
      if(current.next) {
        current = current!.next;
      }
    }
  }

  // remove(val: T | number): boolean {
  //   if(!this.head) throw new ListUnderflowError();

  //   let current: ListNode<T> = this.head!;
  //   let previous: ListNode<T> | undefined;
  //   let next: ListNode<T> | undefined;

  //   for(let i: number = 0; i < this.length; i++) {
  //     if(typeof val === 'number') {
  //       if(current!.id === val) ;
  //     } else {
  //       if(current!.data === val) return current;
  //     }
      
  //     if(current.next) {
  //       current = current!.next;
  //     }

  //   return false;
  // }


  [Symbol.for('Deno.customInspect')](): string {
    let output: string = '';

    if(this.head === undefined || this.head === null) {
      output += ink.colorize('<green>[]</green>');
    } else {
      let current = this.head;
      output += 
        ink.colorize('<green>[</green> ') + 
        ink.colorize('\n<blue>{</blue> ') + 
        ink.colorize('<yellow> id:</yellow> ') + 
        ink.colorize(`<white>${current.id}, </white>`) +
        ink.colorize('<yellow>data:</yellow> ') +
        ink.colorize(`<white>${current.data}</white> `) +
        ink.colorize('<blue>}</blue> ');
      
      while(current.next) {
        current = current.next;
        output += ink.colorize('<magenta> -> </magenta>') + 
          ink.colorize('<blue>{ </blue>') + 
          ink.colorize('<yellow>id:</yellow> ') + 
          ink.colorize(`<white>${current.id},</white> `) + 
          ink.colorize('<yellow>data:</yellow> ') + 
          ink.colorize(`<white>${current.data} </white>`) + 
          ink.colorize('<blue>}</blue>');
      }
      output += '\n]';
    }

    return output;
  }
}