import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 引入路由配置

const app = createApp(App);

// 使用路由
app.use(router);

// 如果有其他插件，也可以在这里使用
// app.use(SomePlugin);

app.mount('#app');