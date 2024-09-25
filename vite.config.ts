import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import unocss from 'unocss/vite';
import { defineConfig } from 'vite';
import og from 'vite-plugin-open-graph';
import devtools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    unocss(),
    devtools(),
    og({
      basic: {
        type: 'website',
        title: '_lmmmmmm',
        url: 'https://lmmmmmm.me',
        image: 'https://lmmmmmm.me/avatar.jpg',
        description: '_lmmmmmm, Front-end Developer.',
      },
      twitter: {
        title: '_lmmmmmm',
        card: 'summary',
        description: '_lmmmmmm, Front-end Developer.',
        creator: '@_lmmmmmm',
        image: 'https://lmmmmmm.me/avatar.jpg',
        imageAlt: 'lmmmmmm\'s avatar',
      },
    }),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
});
