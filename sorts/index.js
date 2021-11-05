import * as fs from 'fs';
import { JSDOM } from 'jsdom';

import { bubbleSort } from './bubbleSort.js';
import { insertionSort } from './insertionSort.js';
import { medList, bigList, largeList, extraLargeList } from "./lists.js";

const { window } = new JSDOM();

console.log('START BUBBLE SORT');

let bubbleSortOut = `-------------------\n*** BUBBLE SORT ***\n-------------------`;

const bmlStart = window.performance.now();
bubbleSort(medList);
const bmlStop = window.performance.now();
bubbleSortOut += `\n\n1000 elements\n-------------------\n${calcTime(bmlStart, bmlStop)}`;

const bblStart = window.performance.now();
bubbleSort(bigList);
const bblStop = window.performance.now();
bubbleSortOut += `\n\n10000 elements\n-------------------\n${calcTime(bblStart, bblStop)}`;

const bllStart = window.performance.now();
bubbleSort(largeList);
const bllStop = window.performance.now();
bubbleSortOut += `\n\n100000 elements\n-------------------\n${calcTime(bllStart, bllStop)}`;

console.log('END BUBBLE SORT');

fs.writeFileSync('./reports/bubble_sort_report', bubbleSortOut);

console.log('START INSERTION SORT');
let insertionSortOut = `-------------------\n*** INSERTION SORT ***\n-------------------`;

const imlStart = window.performance.now();
insertionSort(medList);
const imlStop = window.performance.now();
insertionSortOut += `\n\n1000 elements\n-------------------\n${calcTime(imlStart, imlStop)}`;

const iblStart = window.performance.now();
insertionSort(bigList);
const iblStop = window.performance.now();
insertionSortOut += `\n\n10000 elements\n-------------------\n${calcTime(iblStart, iblStop)}`;

const illStart = window.performance.now();
insertionSort(largeList);
const illStop = window.performance.now();
insertionSortOut += `\n\n100000 elements\n-------------------\n${calcTime(illStart, illStop)}`;

console.log('END INSERTION SORT');
fs.writeFileSync('./reports/insertion_sort_report', insertionSortOut);

console.log('START SELECTION SORT');
let selectionSortOut = `-------------------\n*** INSERTION SORT ***\n-------------------`;

const slmlStart = window.performance.now();
selectionSort(medList);
const slmlStop = window.performance.now();
insertionSortOut += `\n\n1000 elements\n-------------------\n${calcTime(slmlStart, slmlStop)}`;

const slblStart = window.performance.now();
selectionSort(bigList);
const slblStop = window.performance.now();
insertionSortOut += `\n\n10000 elements\n-------------------\n${calcTime(slblStart, slblStop)}`;

const slllStart = window.performance.now();
selectionSort(largeList);
const slllStop = window.performance.now();
insertionSortOut += `\n\n100000 elements\n-------------------\n${calcTime(slllStart, slllStop)}`;

console.log('END SELECTION SORT');
fs.writeFileSync('./reports/selection_sort_report', selectionSortOut);

function calcTime(start, end) {
  return `Exec time: ${end - start} ms`;
}