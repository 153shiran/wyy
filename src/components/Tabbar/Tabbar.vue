<template>
  <FooterMusic :fixed="isItemMusicPage" />
  <van-tabbar
    v-if="showTabbar"
    v-model="active"
    active-color="#ee0a24"
    class="tab-bar"
  >
    <van-tabbar-item @click="goToPage('/home')">
      <span>发现</span>
      <template #icon>
        <Icon
          icon="simple-icons:neteasecloudmusic"
          width="48px"
          height="48px"
          style="color: red"
        />
        <!-- <img :src="props.active ? icon.active : icon.inactive" /> -->
      </template>
    </van-tabbar-item>
    <van-tabbar-item @click="goToPage('/boke')">
      <span>播客</span>
      <template #icon>
        <Icon
          icon="material-symbols:podcasts"
          width="48px"
          height="48px"
          style="color: red"
        />
        <!-- <img :src="slotProps.icon ? icon.icon : icon.activeIcon" /> -->
      </template>
    </van-tabbar-item>
    <van-tabbar-item @click="goToPage('/my')">
      <span>我的</span>
      <template #icon>
        <Icon
          icon="majesticons:music-line"
          width="48px"
          height="48px"
          style="color: red"
        />
        <!-- <img :src="props.active ? icon.active : icon.inactive" /> -->
      </template>
    </van-tabbar-item>
    <van-tabbar-item @click="goToPage('/guanzhu')">
      <span>关注</span>
      <template #icon>
        <Icon
          icon="ri:user-follow-line"
          width="48px"
          height="48px"
          style="color: red"
        />
        <!-- <img :src="props.active ? icon.active : icon.inactive" /> -->
      </template>
    </van-tabbar-item>
    <van-tabbar-item @click="goToPage('/origanze')">
      <span>社区</span>
      <template #icon>
        <Icon
          icon="iconoir:community"
          width="48px"
          height="48px"
          style="color: red"
          class="icon"
        />
        <!-- <img :src="props.active ? icon.active : icon.inactive" /> -->
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import FooterMusic from "../item/FooterMusic.vue";

const active = ref(0);
const router = useRouter();
const route = useRoute();
const showTabbar = ref(true);
const isItemMusicPage = ref(false);

watch(route, (to) => {
  if (to.path.includes("/itemMusic")) {
    showTabbar.value = false;
    isItemMusicPage.value = true;
  } else {
    showTabbar.value = true;
    isItemMusicPage.value = false;
  }
  if (to.path.includes("/login")) {
    showTabbar.value = false;
    isItemMusicPage.value = false;
  }
});

function goToPage(path) {
  router.push(path);
}
</script>
<style scoped>
.tab-bar {
  height: 100px;
}
span {
  font-size: 20px;
}
.page-content {
  padding-bottom: 100px; /* 与 tabbar 的高度相同 */
}
</style>
