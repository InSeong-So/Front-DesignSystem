import React from 'react';
import { ThemeProvider, convert, themes } from '@storybook/theming';
import GlobalStyle from '../src/components/Global'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['common'],
    },
  },
};

export const decorators = [
  (StoryFn) => (
    <ThemeProvider theme={convert(themes.light)}>
      <GlobalStyle/>
      <StoryFn />
    </ThemeProvider>
  ),
];