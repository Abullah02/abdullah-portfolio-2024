import App from './App.vue';
import 'jquery';
import { createApp } from 'vue';
import './css/style.css';
import router from './router'
import 'animate.css'

const app = createApp(App);
app.config.globalProperties.$jQuery = $;
app.use(router);
app.mount('#app');