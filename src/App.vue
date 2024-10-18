<template>
  <router-view />
  <div>
    <footerMusic />
  </div>

  <div>
    <tabbar />
  </div>
</template>
<script setup>
import { Toast } from "vant";
import { onUnmounted } from "vue";
import tabbar from "./components/Tabbar/Tabbar.vue";
import footerMusic from "./components/item/FooterMusic.vue";

// onBeforeMount(() => {
//   const toast = Toast.loading({
//     duration: 0, // 持续展示 toast
//     forbidClick: true,
//     message: "加载中...",
//   });
// });

onUnmounted(() => {
  Toast.clear();
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  /* box-sizing: border-box; */
}
</style>
