import fs from 'fs';
import path from 'path';
import { readFileSync } from 'fs';
import ReadLine from 'readline';


const __dirname = path.resolve();

const args = process.argv.slice(2);
const filePath = path.join(__dirname, args[0]);

const fileContents = readFileSync(filePath).toString();

const ri = ReadLine.createInterface({
  input: fs.createReadStream(filePath),
  output: process.stdout,
  console: false,
});

ri.on('line', function(line) {
  splitLines(line);
});

function splitLines(line) {
  const tokens = line.split('');
  const tokanVals = tokens.map((token) => {
    return {
      type: getTokenType(token),
      value: token,
      leftSib: tokens[tokens.indexOf(token) - 1],
      rightSib: tokens[tokens.indexOf(token) + 1],
    }
  });
  console.log(tokanVals);
}

function getTokenType(token) {
  let tokenType = undefined;
  if(/\w/.test(token)) {
    tokenType = 'letter';
  }
  return tokenType;
}