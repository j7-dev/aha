import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import alias from '@rollup/plugin-alias';
import path from 'path';
import babel from 'vite-plugin-babel';

export default defineConfig({
  plugins: [
    alias(),
    react(),
    tsconfigPaths(),
    babel({
      babelConfig: {
        presets: ['airbnb'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
