import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Relative asset paths, so the build still finds its files when it is
  // uploaded into the public_html/task9-3d/ subfolder on the Deakin server.
  base: './'
})
