
const commonExtends = [
  'semistandard',
  'plugin:@typescript-eslint/recommended',
  'plugin:monorepo/recommended',
  'plugin:import/recommended',
  'plugin:import/typescript',
  'plugin:jest/recommended'
];

const commonRules = {
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': ['error'],
  '@typescript-eslint/no-unused-vars': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  'space-before-function-paren': ['error', {
    anonymous: 'never',
    named: 'never',
    asyncArrow: 'always'
  }],
  'monorepo/no-internal-import': 'off',
  'no-multi-spaces': ['error', { ignoreEOLComments: true }],
  'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
};

module.exports = {
  extends: commonExtends,
  rules: commonRules
};
