import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {checker} from 'vite-plugin-checker'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/react/index.html'),
        nested: [
          resolve(__dirname, 'src/vanilla_js/**/*.html'),
          resolve(__dirname, 'src/html_practice/**/*.html'),
        ]
      }
    }
  }, 
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: "eslint  --config .eslintrc.cjs --max-warnings=0 \"src/react/**/*.{js,jsx,ts,tsx}\""
      }
    })
  ]
})
