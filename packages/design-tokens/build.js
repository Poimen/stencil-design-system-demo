const StyleDictionary = require('style-dictionary');

const tokensBasePath = 'tokens';

StyleDictionary.registerTransform(require('./scripts/transformers/value-px-to-rem'));
StyleDictionary.registerFormat(require('./scripts/formatters/typography-group-css'));
StyleDictionary.registerFormat(require('./scripts/formatters/tailwind-config'));
StyleDictionary.registerFormat(require('./scripts/formatters/tailwind-css'));

StyleDictionary.extend({
  source: [
    `${tokensBasePath}/color/*.json`,
    `${tokensBasePath}/font/*.json`,
  ],
  platforms: {
    css: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'size/pxToRem'],
      buildPath: 'build/css/',
      files: [{
        destination: `variables.css`,
        format: 'css/variables',
        options: {
          outputReferences: false
        }
      }, {
        destination: 'typography.css',
        format: 'css/typography-group',
        filter: {
          attributes: {
            category: 'typography'
          }
        }
      }]
    },
    tailwind: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'size/pxToRem'],
      prefix: 'omds',
      buildPath: 'build/tailwind/',
      files: [{
        destination: 'tailwind.css',
        format: 'tailwind/css',
        options: {
          outputReferences: true
        }
      }, {
        destination: 'tailwind.config.js',
        format: 'tailwind/config',
        options: {
          outputReferences: true
        }
      }]
    },
  }
}).buildAllPlatforms();
