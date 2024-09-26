import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
// import router from "./router";
// import store from "./store";

//onresize事件处理器，用于处理窗口大小调整大小的情况
function remSize() {
  //获取设备的宽度
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
  if (deviceWidth >= 750) {
    deviceWidth = 750;
  }
  if (deviceWidth < 320) {
    deviceWidth = 320;
  }
  //750px --> 1rem = 100px  375px --> 1rem=50px
  document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
  //设置字体大小
  document.querySelector("body").style.fontSize = 0.3 + "rem";
}
remSize();

//窗口发生变化就调用
window.onresize = function () {
  remSize();
};

const app = createApp(App).use(Icon).mount("#app");
