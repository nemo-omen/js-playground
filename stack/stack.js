class Stack {
  #data = [];

  pop() {
    this.#data.pop();
  }
  
  push(item) {
    this.#data.push(item);
  }

  top() {
    return this.#data[this.#data.length - 1];
  }

  size() {
    return this.#data.length;
  }

  empty() {
    return this.size() === 0;
  }

  clear() {
    this.#data.length = 0;
  }

  data() {
    return this.#data;
  }
}

export default Stack;