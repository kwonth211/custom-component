import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig(() => {
  const config = {
    plugins: [react(), viteSingleFile()],
  } as UserConfig
  
  config.base = './'

  return config
})
