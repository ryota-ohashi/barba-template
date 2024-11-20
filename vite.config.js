import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig(({ command }) => {
  const base = command === 'serve' ? './' : '/barba-template/'

  return {
    root: "./src",
    base: base,
    build: {
      outDir: '../docs',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/index.html'),
          about: resolve(__dirname, 'src/about/index.html'),
          news: resolve(__dirname, 'src/news/index.html')
        }
      }
    }
  }
})