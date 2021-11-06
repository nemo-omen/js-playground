import * as fs from 'fs';
import { JSDOM } from 'jsdom';

import { bubbleSort } from './bubbleSort.js';
import { insertionSort } from './insertionSort.js';
import { selectionSort } from './selectionSort.js';
import { exchangeSort } from './exchangeSort.js';
import { medList, bigList, largeList, extraLargeList } from "./lists.js";

const { window } = new JSDOM();

const allArrays = [medList, bigList, largeList];

const sorts = {
  bubble: (array) => bubbleSort(array),
  insertion: (array) => insertionSort(array),
  selection: (array) => selectionSort(array),
  exchange: (array) => exchangeSort(array),
};


sortReport(allArrays, 'bubble');
sortReport(allArrays, 'insertion');
sortReport(allArrays, 'selection');
sortReport(allArrays, 'exchange');


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