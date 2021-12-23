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
    ...common.extends,
    'plugin:@stencil/recommended'
  ],
  rules: {
    ...common.rules,
    '@typescript-eslint/explicit-module-boundary-types': ['error', {
      allowedNames: ['render']
    }],
    '@stencil/async-methods': 'off',
    'react/jsx-no-bind': 'off'
  }
};
