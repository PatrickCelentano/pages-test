import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/pages-test/", // GitHub pages
  server: { port: 3000 },
  plugins: [react()],
})
