const unsorted = [2,5,7,9,3,8,6,4,10,1];

export function exchangeSort(array) {
  for(let i = 0; i < array.length - 1; i++) {
    // console.log(`exchange sort step ${i}: `, array);
    for(let j = i + 1; j < array.length; j++) {
      if(array[j] < array[i]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

console.log(exchangeSort(unsorted));