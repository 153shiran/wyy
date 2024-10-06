<template>
  <!-- BlockType 功能就是根据我传入的数据 对数据进行处理 并选择合适的组件渲染  -->
  <Navigate />
  <BlockType v-for="item in pageData" :data="item" :key="item.blockCode" />
  <MusicPlayer />
</template>
<script setup>
// 引入播放器组件
import MusicPlayer from "@/components/MusicPlayer.vue";
import { ref } from "vue";
import { getHomePageData } from "@/api/HomePage";
import BlockType from "@/views/Home/children/BlockType.vue";
import { Icon } from "@iconify/vue";
import Navigate from "@/components/Navigate.vue";

const pageData = ref([]);
getHomePageData().then((res) => {
  console.log(res);
  pageData.value = res.data.data.blocks;
  console.log(pageData.value);
});
</script>
<style scoped>
.tabbar {
  position: fixed;
  top: 163vw;
  width: 100%;
}
</style>
