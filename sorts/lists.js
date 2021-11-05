export const unorderedStrings = [
  "banana",
  "dinosaur",
  "piano",
  "leaf",
  "october",
  "whiskey",
  "apple",
  "keyboard",
  "ambulate",
  "shoe"
];

const tinyList = shuffle(buildList(10));
const medList = shuffle(buildList(1000));
const bigList = shuffle(buildList(10000));
const largeList = shuffle(buildList(100000));
const extraLargeList = shuffle(buildList(1000000));

function buildList(size) {
  let temp = [];
  for(let i = 0; i < size; i++) {
    temp.push(i);
  }
  return temp;
}

function shuffle(array) {
  let m = array.length, t, i;

  while(m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

export { tinyList, medList, bigList, largeList, extraLargeList};