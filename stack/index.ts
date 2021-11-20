import Stack from './Stack.ts';

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

// console.log(stack.data());


while(!stack.empty()) {
  console.log(stack.pop());
}