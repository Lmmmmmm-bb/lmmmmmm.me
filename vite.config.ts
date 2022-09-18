import { resolve } from 'path';
import unocss from 'unocss/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { presetAttributify, presetUno } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), unocss({ presets: [presetAttributify(), presetUno()] })],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    }
  }
});
