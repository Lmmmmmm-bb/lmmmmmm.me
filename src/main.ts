import 'virtual:uno.css';
import '@unocss/reset/tailwind.css';
import { ViteSSG } from 'vite-ssg/single-page';

import './index.css';
import App from './app/index.vue';

export const createApp = ViteSSG(App);
