import 'uno.css';
import 'reset-css';
import { createApp } from 'vue';

import './index.css';
import App from './app';
import { router } from './router';

const app = createApp(App);

app.use(router);
app.mount('#app');
