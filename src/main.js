import { createApp } from "vue";
import "@/style.css";
import { Icon } from "@iconify/vue";
import App from "@/App.vue";
import router from "@/router";
// 引入Pinia--状态管理工具
import { createPinia } from "pinia";
// 开启数据持久化
import piniaPersist from "pinia-plugin-persist";
// 导入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 引入vant组件库
import Vant from "vant";
import "vant/lib/index.css";

const pinia = createPinia();
pinia.use(piniaPersist);

createApp(App)
  .use(Icon)
  .use(router)
  .use(Vant)
  .use(createPinia())
  .use(ElementPlus)
  .mount("#app");
