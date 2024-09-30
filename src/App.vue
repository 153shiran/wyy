<template>
  <router-view />
  <div>
    <Home />
  </div>
</template>
<script setup>
import Home from "./views/Home.vue";
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
