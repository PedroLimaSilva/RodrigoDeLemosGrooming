import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  root: 'src', // Set the source folder as the root for development
  build: {
    outDir: '../dist', // Output files to the dist folder
    emptyOutDir: true, // Clean the dist folder before building
  },
  server: {
    port: 3000, // Local dev server port
  },
  plugins: [
    VitePWA({
      manifest: {
        theme_color: '#1a4a1e',
        background_color: '#ffffff',
        icons: [
          {
            purpose: 'maskable',
            sizes: '512x512',
            src: 'icon512_maskable.png',
            type: 'image/png',
          },
          {
            purpose: 'any',
            sizes: '512x512',
            src: 'icon512_rounded.png',
            type: 'image/png',
          },
        ],
        orientation: 'any',
        display: 'standalone',
        dir: 'auto',
        lang: 'en-US',
        start_url: '.',
        name: 'Rodrigo De Lemos',
        short_name: 'Rodrigo',
        description: 'Rodrigo de Lemos - Dog Grooming Service',
      },
    }),
  ],
});
