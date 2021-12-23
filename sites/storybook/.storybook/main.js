module.exports = {
  stories: [
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    'storybook-addon-themes',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        measure: false
      }
    }, {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ]
}
