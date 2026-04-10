import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// `base` must match the GitHub Pages project path (`/<repo>/`) and use a trailing slash
// so chunk and public URLs resolve reliably (see https://vite.dev/config/shared-options.html#base).
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/react-github-page/',
})
