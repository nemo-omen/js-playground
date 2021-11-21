import Queue from './Queue.ts';

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log('queue: ', queue.data());

console.log('front: ', queue.front());

console.log('back: ', queue.back());

console.log('dequeued: ', queue.dequeue());

console.log('queue: ', queue.data());