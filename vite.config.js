import { defineConfig } from 'vite';
import riot from 'rollup-plugin-riot';
import path from 'node:path';

export default defineConfig({
  root: process.cwd(),
  plugins: [riot()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@services': path.resolve(__dirname, './src/services'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
      exclude: ['dist/**', 'src/mocks/**', 'public/**', 'index.js'],
      reporter: ['text', 'html'],
    },
  },
  build: {
    outDir:
      'dist' /** https://vitejs.dev/config/build-options.html#build-outdir */,
    minify:
      'esbuild' /** https://vitejs.dev/config/build-options.html#build-minify */,
    target:
      'esnext' /** https://vitejs.dev/config/build-options.html#build-target */,
  },
});
