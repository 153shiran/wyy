import { reactive, ref } from "vue";
// 导入数据仓库
import { useCounterStore } from "@/Pinia/counter";

import { reqAlbumList } from "@/api/songListOrSong";
import { reqSongListDetail } from "@/api/songListOrSong";
import emitter from "@/plugins/bus";

// 实例化数据仓库
const counterStore = useCounterStore();

let albumsList = reactive({
  // 专辑信息
  songs: {},
});

let songSheet = reactive({
  // 歌单信息
  songs: {},
});

// 定义播放歌单函数
export const PlaySingles = async (id) => {
  let { data } = await reqSongListDetail(id);
  songSheet.songs = data.privileges;
  let arr = ref([]);
  // 判断 歌单id 与 本地的第一项 是否相同
  if (counterStore.playerSongList[0] != id) {
    // 这是歌单id
    arr.value.push(id);
    // 获取列表
    if (!isEmpty(songSheet.songs)) {
      songSheet.songs.forEach((item) => {
        arr.value.push(item.id);
      });
    }
    // 上传到本地
    counterStore.PlayerSongList(arr.value);
    // 上传最后一次放的歌
    counterStore.PlayerSongIdToLocal(data.privileges[0].id);
    // 播放音乐
    emitter.emit("SongDetailsPlay");
  } else {
    console.log("是同一首歌单");
    emitter.emit("SongDetailsPlay");
  }
};

// 定义播放专辑函数
export const PlayAlbums = async (id) => {
  let { data } = await reqAlbumList(id);
  albumsList.songs = data.songs;
  let arr = ref([]);
  // 判断 歌单id 与 本地的第一项 是否相同
  if (counterStore.playerSongList[0] != id) {
    // 这是歌单id
    arr.value.push(id);
    // 获取列表
    if (!isEmpty(albumsList.songs)) {
      albumsList.songs.forEach((item) => {
        arr.value.push(item.id);
      });
    }
    // 上传到本地
    counterStore.PlayerSongList(arr.value);
    counterStore.PlayerSongIdToLocal(data.songs[0].id);
    emitter.emit("SongDetailsPlay");
  } else {
    console.log("是同一首专辑");
    emitter.emit("SongDetailsPlay");
  }
};

// 判空
function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
