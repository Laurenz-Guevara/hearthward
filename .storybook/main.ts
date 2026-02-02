import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: ['@storybook/addon-themes'],
  "framework": "@storybook/nextjs-vite"
};
export default config;
