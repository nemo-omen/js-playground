const unsorted = [2,5,7,9,1,8,6,3,10,4];

export function insertionSort(array) {
  let n = array.length;
  for(let i = 1; i < n; i++) {
    // console.log(`insertion sort step ${i}: `, array);
    let current = array[i];
    let j = i - 1;
    while((j >= 0) && (current < array[j])) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

// console.log('insertion sorted: ', insertionSort(unsorted));