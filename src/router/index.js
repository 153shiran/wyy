import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Boke from "../views/TabbarList/boke.vue";
import My from "../views/TabbarList/My.vue";
import Guanzhu from "../views/TabbarList/Guanzhu.vue";
import Origanze from "../views/TabbarList/origanze.vue";
import ItemMusic from "../views/itemMusic.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    component: Login,
    meta: { hideTabBar: true, hideFootMusic: true },
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/boke",
    component: Boke,
  },
  {
    path: "/my",
    component: My,
    meta: { requiresAuth: true },
  },
  {
    path: "/guanzhu",
    component: Guanzhu,
  },
  {
    path: "/origanze",
    component: Origanze,
  },
  {
    path: "/itemMusic",
    component: ItemMusic,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

// 全局前置守卫
// router.beforeEach((to, from, next) => {
//   next();
// });

export default router;
