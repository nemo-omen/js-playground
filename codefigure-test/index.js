import path from 'path';
import fs from 'fs';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeDocument from 'rehype-document';
import rehypeStringify from 'rehype-stringify';
import report from 'vfile-reporter';
import wrap from 'rehype-wrap-all';
import shiki from 'rehype-shiki';
import { insertFileName } from '../rehype-code-figure/index.js'
import { addStyle } from './rehype-add-style.js';

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
  .use(insertFileName)
  .use(shiki)
  .use(addStyle, 'style.css')
  .use(rehypeStringify)
  .process(buffer)
  .then((file) => {
    const htmlFile = path.join(__dirname, 'hello.html');
    const htmlContent = String(file);
    console.error(report(file));
    fs.writeFileSync(htmlFile, htmlContent);
  });
}


mdToHTML(buffer);
