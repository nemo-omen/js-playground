import path from 'path';
import fs from 'fs';
import { readFileSync } from 'fs';
import { unified } from 'unified';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { reporter } from 'vfile-reporter';
import codeFilename from './remark-code-filename.js';

const __dirname = path.resolve();

const args = process.argv.slice(2);
const filePath = path.join(__dirname, args[0]);
const buffer = fs.readFileSync(filePath);

const contents = unified()
  .use(remarkParse)
  .use(remark2rehype)
  .use(codeFilename)
  .use(rehypeStringify)
  .process(buffer)
  .then((file) => {
    console.log(String(file));
    console.error(reporter(file));
  });