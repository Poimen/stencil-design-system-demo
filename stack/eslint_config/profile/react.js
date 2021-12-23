const common = require('./common');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: '17.0'
    }
  },
  extends: [
    ...common.extends
  ],
  rules: {
    ...common.rules,
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: false, // Disallow `const { props, state } = this`; true by default
        allowedNames: ['_self'] // Allow `const self = this`; `[]` by default
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
};
