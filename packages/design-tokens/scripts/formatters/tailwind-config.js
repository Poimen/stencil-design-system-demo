const { objectToES6String, makeCssVariableFormatter } = require('../utils/utils');

function extractFontFamilies(props) {
  return Object.entries(props.font.family).reduce((a, [k, v]) => {
    a[k] = v.value.split(',').map(x => x.trim());
    return a;
  }, {});
}

function buildColorTokenFormatter(dictionary, options) {
  const formatter = makeCssVariableFormatter(dictionary, options);

  return function(prop) {
    return formatter(prop).variable;
  };
}

function buildColorPalette(props, dictionary, options) {
  const formatter = buildColorTokenFormatter(dictionary, options);

  function processColorGroup(group) {
    return Object.entries(group).reduce((a, [k, v]) => {
      if (v.value !== undefined) {
        a[k] = `var(${formatter(v)})`;
      } else {
        a = {
          ...a,
          [k]: { ...processColorGroup(v) },
        };
      }
      return a;
    }, {});
  }

  return {
    transparent: 'transparent',
    current: 'currentColor',
    ...processColorGroup(props.color)
  };
}

function makeDefaultTailwindConfig() {
  return {
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.tsx'
    ],
    theme: {
      extend: {
      }
    },
    variants: {
      extend: {}
    },
    plugins: []
  };
}

function formatter({ dictionary, properties, file, options = {} }) {
  const conf = makeDefaultTailwindConfig();
  conf.theme.extend.fontFamily = extractFontFamilies(properties);

  const colors = buildColorPalette(properties, dictionary, options);
  conf.theme.extend.colors = colors;
  return objectToES6String(file, conf);
}

module.exports = {
  name: 'tailwind/config',
  formatter
};
