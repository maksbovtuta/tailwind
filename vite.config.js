import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/sportmonks-api': {
        target: 'https://api.football-data.org/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/sportmonks-api/, '')
      }
    }
  }
})
