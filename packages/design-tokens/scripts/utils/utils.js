const StyleDictionary = require('style-dictionary');
const { EOL } = require('os');

function objectToES6String(file, obj) {
  return `/* eslint-disable */${EOL}${StyleDictionary.formatHelpers.fileHeader({ file })}module.exports = Object.freeze(${JSON.stringify(obj, null, 2)});${EOL}`;
}

function makeCssVariableFormatter(dictionary, options = {}) {
  const { outputReferences } = options;

  const formatter = StyleDictionary.formatHelpers.createPropertyFormatter({
    outputReferences: outputReferences || false,
    dictionary,
    format: 'css',
    formatting: { commentStyle: 'none', suffix: '' }
  });

  return function (prop) {
    const map = formatter(prop).split(':');
    return {
      variable: map[0].trim(),
      value: map[1].trim()
    };
  };
}

module.exports = {
  objectToES6String,
  makeCssVariableFormatter
};
