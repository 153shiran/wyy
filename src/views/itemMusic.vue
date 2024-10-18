<script setup>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
// eslint-disable-next-line import/no-cycle
import { getMusicItemList, getItemList } from "../api/apilist/item";
import ItemMusicTop from "../components/item/itemMusicTop.vue";
import ItemMusicList from "../components/item/itemMusicList.vue";

const state = reactive({
  // 歌单的详情页数据
  playlist: {},
  // 获取歌单的歌曲
  itemList: [],
});

onMounted(async () => {
  const { id } = useRoute().query;
  console.log(id);
  // 获取歌单详情
  const res = await getMusicItemList(id);
  console.log(res);
  state.playlist = res.data.playlist;

  const result = await getItemList(id);
  console.log(result);
  state.itemList = result.data.songs;
  // 防止页面丢失
  sessionStorage.setItem("itemDetail", JSON.stringify(state));
});
</script>
<template>
  <ItemMusicTop :playlist="state.playlist" />
  <ItemMusicList :itemList="state.itemList" />
</template>
