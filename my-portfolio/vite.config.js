import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import vitePluginSitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    vitePluginSitemap({
      hostname: 'https://yuurss.github.io/angelu-banogbanog-portfolio', // your live site
      outDir: 'dist',
    }),
  ],
  base: '/angelu-banogbanog-portfolio/',
})
