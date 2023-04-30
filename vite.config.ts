import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';
import istanbul from 'vite-plugin-istanbul';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
    coverage: {
      all: true,
    },
  },
  server: {
    cors: false,
    origin: 'http://localhost:3001/',
  },
};

export default defineConfig({
  test: vitestConfig.test,
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],

  // build: {
  //   rollupOptions: {
  //     output: {
  //       dir: './dist/',
  //     },
  //   },
  // },
});
