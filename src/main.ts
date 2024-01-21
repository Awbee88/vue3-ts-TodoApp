import './assets/styles/style.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { vfmPlugin } from 'vue-final-modal';

import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(vfmPlugin).use(pinia).mount('#app');
