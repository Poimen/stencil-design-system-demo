const StyleDictionary = require('style-dictionary');
const { EOL } = require('os');
const { getTypographyMeta, populateCssRuleTemplate } = require('./typography-group-css');

function makeFontStyleLayer(props) {
  return [
    '@layer base {',
    Object.entries(props.typography.group)
      .map(([k, v]) => getTypographyMeta(k, v)
        .map(x => populateCssRuleTemplate(x.selector, x.css, 2))
        .join(`${EOL}`)
      )
      .join(`${EOL}`),
    '}'
  ].join(EOL);
}

function makeDefaultTailwindCss() {
  return [
    '@tailwind base;',
    '@tailwind components;',
    '@tailwind utilities;'
  ].join(EOL);
}

function formatter({ properties, file }) {
  const conf = [
    makeDefaultTailwindCss(),
    EOL,
    makeFontStyleLayer(properties)
  ].join('');
  return `${StyleDictionary.formatHelpers.fileHeader({ file })}${conf}${EOL}`;
}

module.exports = {
  name: 'tailwind/css',
  formatter
};
