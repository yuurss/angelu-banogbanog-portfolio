import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ✅ Clean and working config (no sitemap plugin)
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  base: '/angelu-banogbanog-portfolio/', // ✅ required for GitHub Pages
})
