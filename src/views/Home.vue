<!-- eslint-disable import/no-unresolved -->
<template>
  <div class="page-content">
    <TopNav />
    <SwiperTop />
    <IconList />
    <MusicList />
    <Albums />
    <ItemMusicList />
    <Ranking />
  </div>
</template>
<script setup>
// eslint-disable-next-line import/no-unresolved
import TopNav from "@/components/home/TopNav.vue";
// eslint-disable-next-line import/no-unresolved
import SwiperTop from "@/components/home/SwpierTop.vue";
import IconList from "@/components/home/IconList.vue";
import MusicList from "@/components/home/MusicList.vue";
import ItemMusicList from "@/components/home/ItemMusicList.vue";
import Ranking from "@/components/home/Ranking.vue";
import Albums from "@/components/home/Albums.vue";
</script>
<style scoped>
.page-content {
  padding-bottom: 100px; /* 与 tabbar 的高度相同 */
}
</style>
