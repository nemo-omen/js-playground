const unsorted = [2,5,7,9,1,8,6,3,10,4];

export function shellSort(array) {
  
  for(let gap = Math.floor(array.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for(let i = gap; i < array.length; i++) {
      let temp = array[i];
      let j;
      for(j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }
      array[j] = temp;
    }
  }
  return array;
}

console.log(shellSort(unsorted));