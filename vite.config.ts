import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',
  build: {
     outDir: 'dist',
          },
  publicDir: 'public/assets',
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
});