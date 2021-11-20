interface IStack<T> {
  pop(): T | undefined;
  push(item: T): void;
  top(): T | undefined;
  size(): number;
  empty(): boolean;
  clear(): void;
  peek(): T[];
}

declare global {
  interface Array<T> {
    peek(): T;
  }
}

class Stack<T> implements IStack<T> {
  private stack: T[] = [];

  pop(): T {
    const top: T = this.top();
    this.stack.pop();
    return top;
  }
  
  push(item: T): void {
    this.stack.push(item);
  }

  top(): T {
    return this.stack[this.stack.length - 1];
  }

  size(): number {
    return this.stack.length;
  }

  empty(): boolean {
    return this.size() === 0;
  }

  clear(): void {
    this.stack.length = 0;
  }

  peek(): T[] {
    return this.stack;
  }
}

export default Stack;