import { defineConfig, loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'

import react from '@vitejs/plugin-react'

import { envKeyMap } from './src/globals/config'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  console.log('Public environment variables')
  // 環境変数のバリデーション
  for (const key of Object.values(envKeyMap)) {
    console.log(`${key}: ${env[key]}`)
    if (env[key] === undefined) {
      throw Error(`Environment variables are insufficient. key: ${key}`)
    }
  }

  return {
    resolve: {
      alias: [{ find: '@', replacement: '/src' }],
    },
    plugins: [react(), svgr()],
    css: {
      modules: {
        generateScopedName: '[folder]__[local]__[hash:base64:5]',
      },
    },
  }
})
