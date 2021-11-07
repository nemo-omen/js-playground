// const medList = shuffle(buildList(1000));
// const bigList = shuffle(buildList(10000));
// const largeList = shuffle(buildList(100000));
// const extraLargeList = shuffle(buildList(1000000));

// const allLists = [
//   {name: 'med', data: medList}, 
//   {name: 'big', data: bigList}, 
//   {name: 'large', data: largeList}, 
//   {name: 'xl', data: extraLargeList}
// ];

// for(const list of allLists) {
//   writeListToTextFile(list.data, list.name);
// }

/**
 * Writes a list to a text file
 * @param {*} list 
 * @param {*} filename 
 */
function writeListToTextFile(list, filename) {
  fs.writeFileSync(filename, list.join(','));
}

/**
 * Creates an array of integers from 1 - specified size
 * @param {size} size 
 * @returns integer[]
 */
export function buildList(size) {
  let temp = [];
  for(let i = 1; i <= size; i++) {
    temp.push(i);
  }
  return temp;
}

/**
 * Shuffles a given array
 * @param {*} array array to be shuffled
 * @returns shuffled arrays
 */
export function shuffle(array) {
  let m = array.length, t, i;

  while(m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}