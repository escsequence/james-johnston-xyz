import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({ command }) => {
  const isDev = command === 'serve'

  return {
    plugins: [
      vue(),
      Components({
        dts: true,
        resolvers: [NaiveUiResolver()]
      })
    ],

    // Only enable HTTPS locally
    server: isDev
      ? {
          host: 'jamesjohnston.local',
          https: {
            key: fs.readFileSync(path.resolve(__dirname, 'certs/jamesjohnston.local-key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, 'certs/jamesjohnston.local.pem'))
          }
        }
      : undefined
  }
})
