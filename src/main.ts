import { ViteSSG } from 'vite-ssg/single-page';
import App from './app/index.vue';
import 'virtual:uno.css';

import '@unocss/reset/tailwind.css';
import './index.css';

export const createApp = ViteSSG(App);
