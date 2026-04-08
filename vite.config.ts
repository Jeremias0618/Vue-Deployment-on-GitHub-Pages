import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// En producción, base coincide con GitHub Pages (repo de proyecto). En dev, raíz para comodidad.
export default defineConfig(({ command }) => ({
  base:
    command === 'serve' ? '/' : '/Vue-Deployment-on-GitHub-Pages/',
  plugins: [vue()],
}))
