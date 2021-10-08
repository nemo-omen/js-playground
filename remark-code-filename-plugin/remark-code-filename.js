import { visit } from 'unist-util-visit';

export default function remarkCodeFilename() {
  return (tree, file) => {
    visit(
      tree,
      'code',
      (codeNode) => {
        const fileName = codeNode.meta;

        if(!fileName) return;

        const code = {...codeNode};

        const captionElement = {
          type: 'element',
          data: {hName: 'figcaption'},
          children: [{type: 'text', value: fileName}]
        };

        const figureElement = {
          type: 'element',
          data: {hName: 'figure'},
          children: [captionElement, code]
        };

        replace(codeNode, figureElement);
      }
    )
  }
}

function replace(source, target) {
  for(const property in source) {
    delete source[property];
  }

  Object.assign(source, target);
}