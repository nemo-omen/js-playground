import path from 'path';
import fs from 'fs';
import { readFileSync } from 'fs';
import { unified } from 'unified';
import { remark } from 'remark';
import codeExtra from 'remark-code-extra';
import html from 'remark-html';
import remarkRehype from 'remark-rehype';
import rehypeDocument from 'rehype-document';
import rehypeStringify from 'rehype-stringify';
import codeFilename from './remark-code-filename.js';
import report from 'vfile-reporter';
import wrap from 'rehype-wrap-all';
import remarkParse from 'remark-parse';

const __dirname = path.resolve();

const args = process.argv.slice(2);
const filePath = path.join(__dirname, args[0]);
const buffer = fs.readFileSync(filePath);


async function mdToHTML(buffer) {
  return await unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument)
  .use(wrap, {
    selector: 'pre',
    wrapper: 'figure.code-figure'
  })
  .use(rehypeStringify)
  .process(buffer)
  .then((file) => {
    console.error(report(file));
    console.log(String(file));
  });
}

mdToHTML(buffer);