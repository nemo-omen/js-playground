
// just like the decimal numbering system, binary works in number columns that start
// with the lowest value on the rightmost side, but with binary each column is
// a power of 2 rather than a power of 10 so, let's first think about how each column works
// in decimal format, then we'll apply that to binary format

// Take the number 101
// first digit: 1, or 1 * 10^0 (1 * 1)
// second digit: 0, or 0 * 10^1 (0 * 10)
// third digit: 1, or 1 * 10^2 (1 * 100)

// For binary, we work in powers of 2, so each column
//  can only represent tw values rather than 10 values
// the rightmost column is either 0 or 1

// Take the number 5, to convert it to a binary representation
// we need to go one step at a time

// 5 = 1 + 4 (because we're working in two-value increments, we need to break down the odd number)
// First digit: 1, or 1 * 2^0 (1 * 1)
// Second digit: 0, or 0 * 2^1 (0 * 2)
// Third digit: 1, or 1 * 2^2 (1 * 4)
// Bin: 101

// So, think of each column in a binary number as being 2 raised to the power of that column's number
// EX:  101   -->   | 1 | 0 | 1 |
//                   2^2 2^1 2^0
//                    4 + 0 + 1 = 5

// Let's convert a smaller number, then a larger number, so we're totally explicit
// 3 = 1 + 2
// First digit: 1, or 1 * 2^0 (1 * 1)
// Second digit: 2, or 1 * 2^1 (1 * 2)
// Third digit: 0, or 0 * 2^2 (0 * 4)
// Bin: 011

// 10 = 8 + 2
// Digit 1: 0, or 0 * 2^0
// Digit 2: 1, or 1 * 2^1
// Digit 3: 0, or 0 * 2^2
// Digit 4: 1, or 1 * 2^3

// So, whatever decimal number we're given first needs to be broken down by
// taking out the largest number that is a power of two that can be taken out
// 1 = 2^0 =     1
// 2 = 2^1 =     10
// 4 = 2^2 =     100
// 8 = 2^3 =     1000
// 16 = 2^4 =    10000
// 32 = 2^5 =    100000
// 64 = 2^6 =    1000000
// 128 = 2^7 =   10000000
// 256 = 2^8 =   100000000
// 512 = 2^9 =   1000000000
// 1024 = 2^10 = 10000000000

function decToBin(x) {
  let bin = 0;
  let rem;
  let i = 1;
  while(x != 0) {
    rem = x % 2;
    x = parseInt(x / 2);
    bin = bin + rem * i;
    i = i * 10;
  }
  return bin;
}

function decToBase(x, base) {
  let baseNum = 0;
  let rem;
  let i = 1;
  while(x != 0) {
    rem = x % base;
    x = parseInt(x / base);
    baseNum = baseNum + rem * i;
    i = i * 10;
  }
  return baseNum;
}

function binToDec(num, pos = 0, current = 0) {
  const last = num % 10;
  const mult = last * Math.pow(2, pos);
  let allButLast = (num - (num % 10)) / 10;
  current = current + mult;
  if(allButLast == 0) {
    return current;
  } else {
    return binToDec((num - (num % 10)) / 10, pos + 1, current);
  }
}

function baseToDec(num, base, pos = 0, current = 0) {
  const last = num % 10;
  const mult = last * Math.pow(base, pos);
  let allButLast = (num - (num % 10) / 10);
  current = current + mult;
  if(allButLast == 0) {
    return current;
  } else {
    return baseToDec((num - (num % 10)) / 10, base, pos + 1, current)
  }
}

const decimalNumber = baseToDec(1000101011, 2);
const decimalFromBase8 = baseToDec(1053,8);

console.log(decimalNumber);
console.log(decimalFromBase8);

console.log(decToBin(decimalNumber));
console.log(decToBase(555, 8));