import 'uno.css';
import '@unocss/reset/tailwind.css';
import { inject } from '@vercel/analytics';
import { ViteSSG } from 'vite-ssg/single-page';

import './index.css';
import App from './app';

// Vercel Analytics
inject();

export const createApp = ViteSSG(App);
