import { resolve } from 'path';
import unocss from 'unocss/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), unocss()],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    }
  }
});
