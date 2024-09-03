import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['@emotion/react', '@mui/styled-engine'],
  },
  plugins: [react()],
})