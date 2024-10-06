<template>
  <div
    class="playerSongList"
    @click="playSong(playerSongList.id)"
    style="cursor: pointer"
  >
    <div class="playerSongList-ranking">{{ ranking }}</div>
    <div class="playerSongList-a" :class="{ activate: activate }">
      <!-- 歌曲id -->
      <div class="playerSongList-a-id">{{ playerSongList.id }}</div>
      <!-- 歌曲名称 -->
      <div class="playerSongList-a-name">{{ playerSongList.name }}</div>
    </div>
    <div class="playerSongList-b">
      <!-- 是否vip  -->
      <div class="playerSongList-a-vip">{{ isVip(playerSongList.fee) }}</div>
      <!-- 是否原创    0: 未知  1: 原曲  2: 翻唱-->
      <div class="playerSongList-a-original">
        {{ isOriginal(playerSongList.originCoverType) }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { useCounterStore } from "@/Pinia/counter";
import emitter from "@/plugins/bus";

defineProps({
  playerSongList: {
    // type: Object,
    default: {},
  },
  ranking: {
    type: Number,
    default: 1,
  },
  activate: {
    type: Boolean,
    default: false,
  },
});

// Pinia仓库
const counterStore = useCounterStore();

// 播放音乐
function playSong(id) {
  counterStore.PlayerSongIdToLocal(id);
  emitter.emit("bofang", "我是播放器列表切歌"); //第二步
}

// 判断是否vip
function isVip(item) {
  let songTyoe = ref("");
  // 0: 免费或无版权     1: VIP 歌曲     4: 购买专辑     8: 非会员可免费播放低音质，会员可播放高音质及下载   fee 为 1 或 8 的歌曲均可单独购买 2 元单曲
  if (item == 0) {
    songTyoe.value = "免费或无版权";
  } else if (item == 1) {
    songTyoe.value = "VIP";
  } else if (item == 4) {
    songTyoe.value = "购买专辑";
  } else if (item == 8) {
    songTyoe.value = "免费低音质";
  }
  return songTyoe.value;
}
// 判断是否原创
function isOriginal(item) {
  let OriginalType = ref("");
  // 0: 未知  1: 原曲  2: 翻唱
  if (item == 0) {
    OriginalType.value = "未知";
  } else if (item == 1) {
    OriginalType.value = "原曲";
  } else if (item == 2) {
    OriginalType.value = "翻唱";
  }
  return OriginalType.value;
}
</script>

<style lang="less">
.playerSongList {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 3.47vw;
  border-bottom: 0.07vw solid #a3a3a3;
  border-radius: 0.56vw;
  margin: 0.69vw 0;
  padding: 0.35vw 0.35vw;
  box-shadow: 0.14vw 0.14vw 0.21vw black;
  .playerSongList-ranking {
    font-size: 0.69vw;
    height: 100%;
  }
  .playerSongList-a {
    border-left: #999 0.07vw solid;
    width: 60%;
    margin: 0 0.35vw;
    padding: 0 0 0 0.35vw;
    .playerSongList-a-id {
      font-size: 0.69vw;
      color: #999;
    }
    .playerSongList-a-name {
      font-size: 1.25vw;
      font-weight: 600;
    }
  }
  .activate {
    color: red;
  }
  .playerSongList-b {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    font-size: 1.04vw;
    margin: 0 0.35vw;
    .playerSongList-a-vip {
      padding: 0.07vw 0.21vw;
      margin: 0 0 0.35vw 0;
      font-size: 0.83vw;
      color: red;
      border: 0.07vw solid red;
      border-radius: 0.35vw;
      background-color: #ffffff;
    }
  }
}
</style>
