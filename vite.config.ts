import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

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
  },
};

export default defineConfig({
  test: vitestConfig.test,
  plugins: [react()],
  // root: '../rsschool-react-course/',
  // build: {
  //   outDir: '../rsschool-react-course/dist/',
  //   emptyOutDir: true,
  // },
});
