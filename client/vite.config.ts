import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Документация: https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Прокси: все запросы с фронта на /api/* уходят на json-server (порт 4000),
    // при этом префикс /api срезается. Так во фронте пишем fetch('/api/orders').
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
