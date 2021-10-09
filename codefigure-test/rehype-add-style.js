import { select } from 'hast-util-select';

export function addStyle(styleFile) {
  return (tree) => {
    const headElement = select('head', tree);
    console.log(headElement);
    const linkElement = {
      type: 'element',
      tagName: 'link',
      properties: {
        rel: 'stylesheet',
        href: styleFile
      }
    }

    headElement.children.push(linkElement);
  }
}