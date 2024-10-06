import { ref } from "vue";
// 导入数据仓库
import { useCounterStore } from "@/Pinia/counter";

import emitter from "@/plugins/bus";

// 实例化数据仓库
const counterStore = useCounterStore();

// 单曲操作歌单
export const getSongList = (id) => {
  counterStore.PlayerSongIdToLocal(id);
  let arr = ref([]);
  // 最后一次播放id
  let lastId = counterStore.lastPlayerSongId;
  // 当前歌单数据
  arr = counterStore.playerSongList;
  if (arr.length == 0) {
    arr.push("歌曲");
  } else {
    if (arr.indexOf(lastId) != -1) {
      arr.splice(arr.indexOf(lastId) + 1, 0, id);
      counterStore.PlayerSongList(arr);
    } else {
      arr.push(id);
      counterStore.PlayerSongList(arr);
    }
  }
  emitter.emit("SongDetailsPlay");
};
