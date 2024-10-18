import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import crypto from 'crypto'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    modules: {
      generateScopedName: (className, filePath) => {
        const fileName = path.basename(filePath, '.module.scss')
        const hash = crypto
          .createHash('sha256')
          .update(fileName.concat(className))
          .digest('hex')
          .substring(0, 5)
        return `${fileName}__${className}_${hash}`
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
