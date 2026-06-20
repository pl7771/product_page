import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Windows: avoids EBUSY when JPG/files in public/ are locked by Explorer, OneDrive, etc.
      usePolling: true,
      interval: 1000,
    },
  },
})
