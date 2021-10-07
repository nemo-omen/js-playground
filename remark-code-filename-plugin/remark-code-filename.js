import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';

export default function remarkCodeFilename() {
  return (tree, file) => {
    // console.log(tree);
    visit(
      tree,
      // (node) => node.tagName === 'code',
      (node) => node.tagName === 'pre' && node.children.some(n => n.tagName === 'code'),
      (node, meta) => {
        // if (!meta) return;

        // const fileName = meta.value.trim();
        // console.log((fileName));
        node.tagName = 'div';
      }
    );
  }
}