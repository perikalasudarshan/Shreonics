import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Base path:
  // - Use '/' for custom domains (served from the domain root).
  // - Use '/<repo>/' for default GitHub Pages URLs.
  // Controlled via VITE_BASE so we can build both targets easily.
  base: process.env.VITE_BASE ?? '/',

  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    outDir: 'dist',
    emptyOutDir: true,

    // Performance optimizations
    rollupOptions: {
      output: {
        // Code splitting for better caching
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor';
            }
            if (id.includes('@radix-ui') || id.includes('lucide-react')) {
              return 'ui';
            }
            return 'vendor';
          }
        },
      },
    },

    // Enable source maps for production debugging
    sourcemap: false,

    // Minify for better performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

    // Optimize chunk size
    chunkSizeWarningLimit: 600,
  },

  // Performance optimizations
  server: {
    // Enable gzip compression
    compress: true,
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router', 'lucide-react'],
  },
})
