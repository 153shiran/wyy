// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/view/Login.vue';
import HelloWorld from '@/components/HelloWorld.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }
  // ...其他路由
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;