
import { selectAll, select } from 'hast-util-select';

export function insertFileName(options) {
  const { figureClassName, captionLabel, captionPosition, captionClassName } = options;

  console.log(`{
    figureClassName: ${figureClassName},
    captionLabel: ${captionLabel},
    captionPosition: ${captionPosition},
    captionClassName: ${captionClassName}
  }`);
  
  return (tree) => {
    let fileName = null;
    const codeNodes = selectAll('.code-figure', tree);

    for(let figNode of figNodes) {
      fileName = extractFileName(select('code', figNode));
      
        const captionElement = {
          type: 'element',
          tagName: 'figcaption',
          properties: {
            className: 'code-caption'
          },
          children: [
            { type: 'text', value: fileName },
          ]
        };

        figNode.children.unshift(captionElement);
    }
  }
}

function extractFileName(codeNode) {
  return codeNode.data.meta ? codeNode.data.meta : null;
}