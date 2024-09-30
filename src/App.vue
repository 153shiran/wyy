<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<!-- src/App.vue -->
<template>
  <div id="app">
    <!-- 使用计算属性来决定是否显示按钮 -->
    <button v-if="!isLoginPage" @click="goToLogin">Go to Login</button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    // 计算属性来判断当前是否是登录页面
    isLoginPage() {
      return this.$route.name === 'Login';
    }
  },
  methods: {
    goToLogin() {
      this.$router.push('/login');
    }
  }
}
</script>