const testInts = [1, 2, 3, 4];
const testLetters = ['a', 'b', 'c', 'd', 'e'];

// console.log(swap(testInts, 2,3));
// console.log(reverse(testInts));
// console.log(reverse(testLetters));

const firstPerm = nextPermutation([...testInts]);
const secondPerm = nextPermutation([...firstPerm]);
const thirdPerm = nextPermutation([...secondPerm]);
console.log(firstPerm);
console.log(secondPerm);
console.log(thirdPerm);

function nextPermutation(array) {
  if(array.length <= 1) return [...array];

  let lhs;

  for(let i = array.length - 2; i >= 0; i--) {
    if(array[i] < array[i + 1]) {
      lhs = i;
      break;
    }
  }

  for(let j = array.length - 1; j > lhs; j--) {
    if(array[j] > array[lhs]) {
      [array[j], array[lhs]] = [array[lhs], array[j]];

      let chop = array.splice(lhs + 1);
      chop.sort((a,b) => a -b);
      array.push(...chop);
      return [...array];
    }
  }
  array.sort((a,b) => a - b);
  return [...array];
}

function swap(array, firstIndex, secondIndex) {
  const copy = [...array];
  const temp = copy[firstIndex];
  copy[firstIndex] = copy[secondIndex];
  copy[secondIndex] = temp;
  return copy;
}

function reverse(array) {
  const copy = [...array];
  const reversed = [];
  for(let i = array.length - 1; i >= 0; --i) {
    reversed[(copy.length - 1) - i] = copy[i];
  }
  return reversed;
}