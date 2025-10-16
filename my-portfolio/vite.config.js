import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import vitePluginSitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    vitePluginSitemap({
      hostname: 'https://yuurss.github.io/angelu-banogbanog-portfolio', // 👈 correct site URL
      outDir: 'dist',
      changefreq: 'daily',
      priority: 1.0,
      urls: [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/about', changefreq: 'weekly', priority: 0.8 },
        { url: '/projects', changefreq: 'weekly', priority: 0.8 },
        { url: '/contact', changefreq: 'monthly', priority: 0.7 },
      ],
    }),
  ],
  base: '/angelu-banogbanog-portfolio/',
})
