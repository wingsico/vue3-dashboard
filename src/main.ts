import { createApp } from 'vue';
import { setupElement } from './setup/element-plus/index';
import App from './App.vue';
import 'element-plus/lib/theme-chalk/index.css';
import './index.less';

const app = createApp(App);

setupElement(app, {});

app.mount('#app');
