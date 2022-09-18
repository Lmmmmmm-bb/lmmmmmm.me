import 'uno.css';
import '@unocss/reset/eric-meyer.css';
import { ViteSSG } from 'vite-ssg/single-page';

import './index.css';
import App from './app';

export const createApp = ViteSSG(App);
