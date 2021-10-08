import path from 'path';
import fs from 'fs';
import { readFileSync } from 'fs';
import { unified } from 'unified';
import { remark } from 'remark';
import html from 'remark-html';
import codeFilename from './remark-code-filename.js';

const __dirname = path.resolve();

const args = process.argv.slice(2);
const filePath = path.join(__dirname, args[0]);
const buffer = fs.readFileSync(filePath);


function mdToHTML(buffer) {
  return remark()
  .use(codeFilename)
  .use(html)
  .processSync(buffer)
  .toString();
}

console.log(mdToHTML(buffer));