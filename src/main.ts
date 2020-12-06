import { createApp } from 'vue';
import { createElementComponents } from './plugins/element-plugin';
import App from './App.vue';
import 'element-plus/lib/theme-chalk/index.css';
import './index.less';

const app = createApp(App);

const elementComponents = createElementComponents({
  size: 'small'
});

app.use(elementComponents);
app.mount('#app');
