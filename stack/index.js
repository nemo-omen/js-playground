import Stack from './stack.js';

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);


console.log(stack.top());

console.log(stack.data());