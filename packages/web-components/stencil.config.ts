import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import autoprefixer from 'autoprefixer';
import atImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import tailwind from 'stencil-tailwind-plugin';
import tailwindConfig from './tailwind.config';

export const config: Config = {
  namespace: 'demo-components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: '@demo/design-system-components',
      proxiesFile: '../react-web-components/src/generated/components.ts',
      includeDefineCustomElements: false
    }),
  ],
  plugins: [
    tailwind({
      tailwindCssPath: './src/styles/tailwind.pcss',
      tailwindConf: tailwindConfig,
      postcss: {
        plugins: [
          atImport(),
          tailwindcss(),
          autoprefixer()
        ]
      }
    })
  ]
};
