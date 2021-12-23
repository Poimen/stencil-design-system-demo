import { withThemes } from 'storybook-addon-themes/react';
import { withScreenshot } from 'storycap';

export const decorators = [
  withThemes,
  withScreenshot
];

import '@demo/design-tokens/build/css/variables.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
};
