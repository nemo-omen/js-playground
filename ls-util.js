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