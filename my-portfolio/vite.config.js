import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import vitePluginSitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    vitePluginSitemap({
      hostname: 'https://yuurss.github.io/angelu-banogbanog-portfolio', // 👈 your real site
      outDir: 'dist',
      changefreq: 'daily',
      priority: 1.0,
      urls: [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        // Add more pages here if you have subpages/routes
        { url: '/about', changefreq: 'weekly', priority: 0.8 },
        { url: '/projects', changefreq: 'weekly', priority: 0.8 },
        { url: '/contact', changefreq: 'monthly', priority: 0.7 },
      ],
    }),
  ],
  base: '/angelu-banogbanog-portfolio/', // 👈 must match your repo name
})
