<template>
  <div class="flex flex-wrap justify-around">
    <a>关注</a><a>推荐</a><a>热门</a><a>最新</a>
    <a>我的</a>
  </div>
</template>

<script>
// 导入状态管理仓库
import { useSongStore } from "@/Pinia/songStore";

// 实例化状态管理仓库
const songStore = useSongStore();
console.log(songStore);
</script>

<style scoped>
a {
  width: 100%;
  margin: 1vw;
  font-size: 5vw;
}
a:hover {
  background-color: rgb(185, 174, 174);
  color: white;
}
</style>
