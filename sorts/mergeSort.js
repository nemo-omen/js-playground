const unsorted = [2,5,7,9,3,8,6,4,10,1];

export function mergeSort(array) {
  if(array.length < 2) return array;

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid, array.length);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

function merge(a,b) {
  const c = [];

  while(a.length && b.length) {
    c.push(a[0] < b[0] ? a.shift() : b.shift());
  }

  while(a.length) {
    c.push(a.shift());
  }

  while(b.length) {
    c.push(b.shift());
  }

  return c;
}

console.log('after: ', mergeSort(unsorted));
mergeSort(unsorted);