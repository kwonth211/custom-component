import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
  } as UserConfig

  if (command === 'build') {
    config.base = '/ditto-custom/'
  }else {
    config.base = './'
  }

  return config
})
