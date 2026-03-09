import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Ferienwohnung Egmond aan Zee',
        short_name: 'Egmond',
        description: 'Ferienwohnung direkt am Meer — Verfügbarkeit prüfen & Anfrage stellen',
        theme_color: '#A70605',
        background_color: '#F2EDE4',
        display: 'standalone',
        scope: '/ferienwohnung/',
        start_url: '/ferienwohnung/',
        icons: [
          { src: '/ferienwohnung/images/Favicon.png', sizes: '192x192', type: 'image/png' },
          { src: '/ferienwohnung/images/Favicon.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
    }),
  ],
  base: '/ferienwohnung/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'firebase-vendor': ['firebase/app', 'firebase/firestore'],
          'date-fns-vendor': ['date-fns'],
        },
      },
    },
  },
});
