
export function bubbleSort(array) {
  const sortTarget = [...array];
  for(let i = 0; i < sortTarget.length; i++) {
    for(let j = 0; j < sortTarget.length - 1; j++) {
      let temp;
      if(sortTarget[j] > sortTarget[j + 1]) {
        temp = sortTarget[j];
        sortTarget[j] = sortTarget[j + 1];
        sortTarget[j + 1] = temp;
      }
    }
  }
  return [...sortTarget];
}
