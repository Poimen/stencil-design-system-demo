// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@demo/eslint-config/patch/modern-module-resolution');

module.exports = {
  extends: [
    '@demo/eslint-config/profile/stencil'
  ],
  parserOptions: {
    tsconfigRootDir: __dirname
  }
};
