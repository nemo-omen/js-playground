import fs from 'fs';
import path from 'path';
import { readFileSync } from 'fs';
import ReadLine from 'readline';
import { Scanner } from './Scanner.js';

const __dirname = path.resolve();

const args = process.argv.slice(2);
const filePath = path.join(__dirname, args[0]);

const fileContents = readFileSync(filePath).toString();

const scanner = new Scanner(fileContents);

scanner.scanTokens();

console.log(scanner.getTokens());