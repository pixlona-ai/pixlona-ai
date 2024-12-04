import { defineConfig } from 'vite'

export default defineConfig({
  base: '/pixlona-ai/', // Replace with your repository name
  server: {
    port: 5173,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})