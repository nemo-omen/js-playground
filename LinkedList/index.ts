import { SingleLinkedList, ListNode } from "./LinkedList.ts";

const list = new SingleLinkedList();

list.push('First');
list.push('Second');
list.push('Third');
list.push('Fourth');
list.push('Fifth');
list.push('Sixth');
list.push('Seventh');
list.push('Eighth');
list.push('Ninth');
list.push('Tenth');
console.log(list);
list.unshift('Eleventh');
list.pop();
console.log(list);
list.pop();
console.log(list);

// console.log(list.find('Fifth'));

console.log('find by id: ', list.find(8));