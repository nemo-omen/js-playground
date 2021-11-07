import { buildList, shuffle } from './listUtils.js';
import { shellSort } from './shellSort.js';
// const hundred = shuffle(buildList(100));
// const sixSixtySix = shuffle(buildList(666));

export function bucketSort(array) {
  let sorted = [];
  let buckets = [];
  let numBuckets = Math.ceil(Math.sqrt(array.length));
  for(let i = 0; i <= numBuckets; i++) {
    buckets.push([]);
  }

  for(let i = 0; i <array.length; i++) {
    buckets[Math.floor(array[i]/numBuckets)].push(array[i]);
  }

  for(let bucket of buckets) {
    bucket.sort((a,b) => a < b ? -1 : a > b ? 1 : 0);
  }
  return buckets.flat();
}

// console.log(bucketSort(hundred));

// console.log(bucketSort(sixSixtySix));
