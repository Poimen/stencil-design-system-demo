const StyleDictionary = require('style-dictionary');

const tokensBasePath = 'tokens';

StyleDictionary.registerTransform(require('./scripts/transformers/value-px-to-rem'));

StyleDictionary.extend({
  source: [
    `${tokensBasePath}/color/*.json`,
    `${tokensBasePath}/font/*.json`,
  ],
  platforms: {
    css: {
      transforms: ['attribute/cti', 'size/pxToRem', 'asset/base64'],
      prefix: 'omds',
      buildPath: 'build/css/',
      files: [{
        destination: `variables.css`,
        format: 'css/variables',
        options: {
          outputReferences: false
        }
      }]
    }
  }
}).buildAllPlatforms();
