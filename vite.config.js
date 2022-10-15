import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {checker} from 'vite-plugin-checker'
import {viteStaticCopy} from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [{
        src: 'src/vanilla_js/*',
        dest: 'vanilla_js',
      }],
      watch: {
        reloadPageOnChange: true,
      }
    }),
    checker({
      typescript: true,
      eslint: {
        lintCommand: "eslint  --config .eslintrc.cjs --max-warnings=0 \"src/react/**/*.{js,jsx,ts,tsx}\""
      }
    })
  ]
})
