const unsorted = [2,5,7,9,1,8,6,3,10,4];

export function selectionSort(array) {
  let minIndex;
  for(let i = 0; i < array.length - 1; i++) {
    // console.log(`selection sort step ${i}: `, array);
    minIndex = i;
    for(let j = i + 1; j < array.length; j++) {
      if(array[j] < array[minIndex]) {
        let temp = array[minIndex];
        array[minIndex] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

// console.log('sorted: ', selectionSort(unsorted));