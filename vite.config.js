import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // Production build is served from https://<user>.github.io/Scriptcore/ on
  // GitHub Pages; the dev server keeps serving from the root.
  base: command === 'build' ? '/Scriptcore/' : '/',
  plugins: [react()],
}))
