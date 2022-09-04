import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import updateSourceMapPlugin from './source.map.upload.plugin'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    new updateSourceMapPlugin({
      uploadUrl: 'http://localhost:7001/monitor/sourcemap',
      apiKey: 'kaikeba'
    })
  ]
})
