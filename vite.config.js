import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  base: "/Vishesh_PortFolio/",
  server: {
    host: true,  // Allows access from external devices
    port: 5173,  // You can specify a port if you want
  },
})
