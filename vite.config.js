import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      // Автоматичне стиснення зображень при білді
      webp: {
        quality: 80,
      },
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
    }),
  ],
  base: '/',
  define: {
    'process.env': {},
  },
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 10000,
    minify: 'esbuild', 
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('scheduler')) {
              return 'vendor-react';
            }
            return 'vendor';
          }
        },
      },
    },
  },
});