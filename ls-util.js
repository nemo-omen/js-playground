const fileNames = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];

fileNames.sort((a,b) => a < b ? -1 : 1);

console.log(fileNames);

for(let i = 0; i < 3; i++) {
  for(let j = 0; j < 4; j++) {
    const fnString = fileNames[j * i] + " ";
    console.log(fnString);
  }
}