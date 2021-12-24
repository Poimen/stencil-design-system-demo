# stencil-design-system-demo

Demo of Design System using StencilJS Component library.

The intent of this repo is to demonstrate the integration of a number of technology blocks. These are:
 - [Style Dictionary](https://amzn.github.io/style-dictionary/#/)
 - [StencilJS](https://stenciljs.com/)
 - [Storybook](https://storybook.js.org/) with React wrappers

This repo is managed as a monorepo using [RushJS](https://rushjs.io/)

# Getting started

This guide assumes [RushJS](https://rushjs.io/) is installed globally. Please refer to the `rush` command line installation.

1. Clone the repo

2. Install all dependencies
Steps:
```bash
rush update
```

3. Build the packages:
```bash
rush build
```

This process will build all the necessary packages in order as well as the Storybook site.

## Playing with the component

There is a single button component developed as a demonstration with Style Dictionary creating Tailwind configuration. These styles could be generated from a Figma integration, etc. but for the sake of demonstration, the JSON files are preset.

In each of the package and site directories, there is a npm script:
```bash
npm run dev
```

that will start a development server.

The order of project dependency evaluation is:
```
packages/design-tokens --> packages/web-components --> packages/react-web-components --> sites/storybook
```

