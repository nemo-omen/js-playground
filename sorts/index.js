import { JSDOM } from 'jsdom';
import { unorderedStrings } from "./lists.js";
import { bubbleSort } from './bubbleSort.js';
import { tinyList, medList, bigList, largeList, extraLargeList } from "./lists.js";

const { window } = new JSDOM();

const mlStart = window.performance.now();
bubbleSort(medList);
const mlStop = window.performance.now();
console.log('1000 elements - ', calcTime(mlStart, mlStop));

const blStart = window.performance.now();
bubbleSort(bigList);
const blStop = window.performance.now();
console.log('10000 elements - ', calcTime(blStart, blStop));

const llStart = window.performance.now();
bubbleSort(largeList);
const llStop = window.performance.now();
console.log('100000 elements - ', calcTime(llStart, llStop));

const xlStart = window.performance.now();
bubbleSort(extraLargeList);
const xlStop = window.performance.now();
console.log('1000000 elements - ', calcTime(xlStart, xlStop));


function calcTime(start, end) {
  return `Exec time: ${end - start} ms`;
}