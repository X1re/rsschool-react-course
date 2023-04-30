import { defineConfig } from 'cypress';
import coverage from '@cypress/code-coverage/task';

export default defineConfig({
  video: false,

  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      coverage(on, config);
      return config;
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
