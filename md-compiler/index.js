import fs from 'fs';
import path from 'path';
import { readFileSync } from 'fs';
import ReadLine from 'readline';
import { Scanner } from './Scanner.js';
import { Console } from 'console';
import { Tree, TreeNode } from './MDTree.js';

const __dirname = path.resolve();

const args = process.argv.slice(2);
const filePath = path.join(__dirname, args[0]);

const fileContents = readFileSync(filePath).toString();

const rl = ReadLine.createInterface({
  input: fs.createReadStream(filePath),
  // output: process.stdout,
});

const docTree = new Tree();

rl.on('line', (line) => {
  parseCharGroups(line);
});

function parseCharGroups(line) {
  const groupArray = line.split(' ');
  let lexedLine = [];
  for(let group of groupArray) {
    const lex = assignLexeme(group);
    lexedLine.push(lex);
  }
  console.log(lexedLine);
}

function assignLexeme(charGroup) {
  if(/#{5}/g.test(charGroup)) return {lex: 'H5', val: charGroup};
  if(/#{4}/g.test(charGroup)) return {lex: 'H4', val: charGroup};
  if(/#{3}/g.test(charGroup)) return {lex: 'H3', val: charGroup};
  if(/#{2}/g.test(charGroup)) return {lex: 'H2', val: charGroup};
  if(/#{1}/g.test(charGroup)) return {lex: 'H1', val: charGroup};
  if(charGroup === '') return {lex: 'E', val: charGroup};
  return {lex: 'WORD', val: charGroup};
}

// const scanner = new Scanner(fileContents);

// scanner.scanTokens();

// console.log(scanner.getTokens());