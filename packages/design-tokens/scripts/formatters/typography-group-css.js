const StyleDictionary = require('style-dictionary');
const { EOL } = require('os');

function populateCssRuleTemplate(variantName, cssArrayMap, initialIndentCount = 0) {
  const blockIndent = ' '.repeat(initialIndentCount);
  const innerIndent = ' '.repeat(initialIndentCount + 2)
  const mixin = [
    `${blockIndent}${variantName} {`,
    ...cssArrayMap.map(c => `${innerIndent}${c.css}: ${c.value};`),
    `${blockIndent}}`
  ];
  return mixin.join(EOL);
}

function extractPropertyValueMap(propObj) {
  if (!propObj) return [];

  return Object.entries(propObj).map(([k, v]) => {
    return {
      css: k,
      value: v.value
    };
  });
}

function makeCssSelector(name, variant) {
  const selector = [name, variant].filter(Boolean).join('-');
  return `.${selector}`;
}

function getTypographyMeta(name, group) {
  const baseValues = extractPropertyValueMap(group.base);
  let variants = group.variants;
  if (!variants) {
    // This is group without variant, use the base as the variant processing
    return [{
      selector: makeCssSelector(name),
      css: extractPropertyValueMap(group)
    }];
  }

  return Object.entries(variants).map(([k, v]) => {
    const variantValues = extractPropertyValueMap(v);
    return {
      selector: makeCssSelector(name, k),
      css: [...baseValues, ...variantValues]
    };
  }).flat();
}

function processTypographyGroup(name, group) {
  const meta = getTypographyMeta(name, group);
  return meta.map(font => populateCssRuleTemplate(font.selector, font.css));
}

function formatter({ properties, file }) {
  const cssRules = Object.entries(properties.typography.group).map(([k, v]) => processTypographyGroup(k, v)).flat().join(`${EOL}${EOL}`);
  return StyleDictionary.formatHelpers.fileHeader({ file }) + cssRules + EOL;
}

module.exports = {
  name: 'css/typography-group',
  formatter,
  processTypographyGroup,
  getTypographyMeta,
  populateCssRuleTemplate
};
