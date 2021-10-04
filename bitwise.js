let a = 5;
let b = 15;
let c = 25;
let d = 100;

console.log(toBin(a));

a <<= 2;

console.log(toBin(a));

// console.log(a.toString(2));

function toBin(num) {
  let binVal = num.toString(2);
  let bits = 0;
  const bitblock = 4;

  for(let i = 0; i < binVal.length; i = i + bitblock){
    bits += bitblock;
  }

  return binVal.padStart(bits, '0');
}