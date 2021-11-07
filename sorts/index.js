import * as fs from 'fs';
import { JSDOM } from 'jsdom';

import { bubbleSort } from './bubbleSort.js';
import { insertionSort } from './insertionSort.js';
import { selectionSort } from './selectionSort.js';
import { exchangeSort } from './exchangeSort.js';
import { shellSort } from './shellSort.js';
import { bucketSort } from './bucketSort.js';
// import { mergeSort } from 'mergeSort.js';
import { medList, bigList, largeList, extraLargeList } from "./lists.js";

const { window } = new JSDOM();

const smallArrays = [medList, bigList, largeList];
const allArrays = [...smallArrays, extraLargeList];

const sorts = {
  bubble: (array) => bubbleSort(array),
  insertion: (array) => insertionSort(array),
  selection: (array) => selectionSort(array),
  exchange: (array) => exchangeSort(array),
  shell: (array) => shellSort(array),
  bucket: (array) => bucketSort(array),
};


sortReport(smallArrays, 'bubble');
sortReport(smallArrays, 'insertion');
sortReport(smallArrays, 'selection');
sortReport(smallArrays, 'exchange');
sortReport(allArrays, 'shell');
sortReport(allArrays, 'bucket');

writeSortedOutput(extraLargeList);

function writeSortedOutput(array) {
  const sorted = shellSort(array);
  fs.writeFileSync(`./reports/out/shell_${array.length}.out`, JSON.stringify(sorted));
}

function execSort(functionName, array) {
  sorts[functionName](array);
}

function sortReport(arrays, functionName) {
  console.log(`start ${functionName} sort`);
  let sortOutput = `--- ${functionName} sort ---`;

  for(let array of arrays) {
    const start = window.performance.now();
    execSort(functionName, array);
    const stop = window.performance.now();
    sortOutput += `\n\n${array.length} elements:\n${calcTime(start, stop)}`;
  }

  console.log(`end ${functionName} sort`);

  fs.writeFileSync(`./reports/${functionName}_sort_report`, sortOutput);
}

function calcTime(start, end) {
  return `Exec time: ${end - start} ms`;
}