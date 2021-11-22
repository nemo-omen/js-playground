class UnderflowError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnderflowError';
  }
}

class Queue<T> {
  private queue: T[] = [];

  size(): number {
    return this.queue.length;
  };

  empty(): boolean {
    return this.size() === 0;
  }

  front(): T {
    return this.queue[0];
  }

  back(): T {
    return this.queue[this.queue.length - 1];
  }
  
  enqueue(value: T): void {
    this.queue.push(value);
  }

  dequeue(): T {
    if(this.empty()) {
      throw new UnderflowError('Queue underflow.');
    }

    const front = this.queue[0];

    for(let i = 0; i < this.queue.length; i++) {
      this.queue[i] = this.queue[i + 1];
    }
    this.queue.length--;
    return front;
  }

  data(): T[] {
    return this.queue;
  }

  [Deno.customInspect](): string {
    return 'queue: <' + this.queue + ']';
  }
}

export default Queue;