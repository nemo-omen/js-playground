<<<<<<< HEAD
const fileNames = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];

fileNames.sort((a,b) => a < b ? -1 : 1);

console.log(fileNames);

for(let i = 0; i < 3; i++) {
  for(let j = 0; j < 4; j++) {
    const fnString = fileNames[j * i] + " ";
    console.log(fnString);
  }
}
=======
const vals = [];

let r = 3;
let c = 5;

for(let i = 0; i < c; i++) {
  vals.push([]);
}

for(let i = 0; i <r; i++) {
  let line = [];
  for (let j = i; j <= (r * c); j+=r) {
    // vals[i].push(j);
    line.push(j)
  }
  console.log(line);
}

console.log(vals);
>>>>>>> 7a6f4f24d5215a57302b1940f7257bf5ec5a092c
