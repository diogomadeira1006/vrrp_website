import { defineConfig } from 'vite'
import { resolve } from "path";
import react from '@vitejs/plugin-react'

export const aliases = {
  '@': resolve(__dirname, './src'),
  '@mappers': resolve(__dirname, './src/mappers'),
  '@constants': resolve(__dirname, './src/constants'),
  '@components': resolve(__dirname, './src/components'),
  '@screens': resolve(__dirname, './src/screens'),
  '@services': resolve(__dirname, './src/services'),
  '@api': resolve(__dirname, './src/services/api'),
  '@theme': resolve(__dirname, './src/theme'),
  '@redux': resolve(__dirname, './src/redux'),
  '@utils': resolve(__dirname, './src/utils'),
  '@assets': resolve(__dirname, './assets'),
};

export default defineConfig({
  base: '',
  resolve: {
    alias: aliases
  },
  plugins: [react()]
})
