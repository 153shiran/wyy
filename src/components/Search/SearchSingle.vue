<template>
  <div class="songListToSongData">
    <!-- 标题 -->
    <div class="title">歌曲列表</div>
    <!-- 我是一些歌曲 -->
    <div class="songListToSongDataSong">
      <div
        v-for="(item, index) in searchData.SongData.songs"
        :key="index"
        class="songListToSongDataSongItem"
        @click="toSongDetails(item)"
      >
        <div class="songListToSongDataSongItem-1">
          {{ index + 1 + 30 * (currentPage - 1) }}
        </div>
        <div class="songListToSongDataSongItem-2">
          <span
            @click="playSong(item.id)"
            style="cursor: pointer; color: black"
          >
            <Icon icon="formkit:playcircle" width="30" height="30" />
          </span>
        </div>
        <div class="fnagzhiyichu songListToSongDataSongItem-3">
          <span class="fnagzhiyichu-title"> 歌曲：</span>
          <span class="fnagzhiyichu-a">{{ item.name }}</span>
        </div>
        <div class="fnagzhiyichu songListToSongDataSongItem-4">
          <span class="fnagzhiyichu-title">作者：</span>
          <span class="fnagzhiyichu-a">{{ item.ar[0].name }}</span>
        </div>
        <div class="fnagzhiyichu songListToSongDataSongItem-5">
          <span class="fnagzhiyichu-title">专辑：</span>
          <span class="fnagzhiyichu-a">{{ item.al.name }}</span>
        </div>
      </div>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pagination.pageSize"
        :total="parseInt(pagination.total)"
        :current-page="currentPage"
        @current-change="paginationChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useCounterStore } from "@/Pinia/counter";
import { getSongList } from "@/utils/SingleClickPlaylist";
import { Icon } from "@iconify/vue";

// 实例化Pinia仓库
const counterStore = useCounterStore();

// 实例化路由
const router = useRouter();

const props = defineProps({
  searchData: Object,
  pagination: Object,
});

const emit = defineEmits(["paginationChange"]);

// 当前页
let currentPage = ref(1);

// 跳转详细页
function toSongDetails(item) {
  router.push({
    name: "SongDetails",
    params: {
      songId: item.id,
    },
  });
}

// 播放歌曲
function playSong(id) {
  getSongList(id);
}

// 分页点击
function paginationChange(val) {
  currentPage.value = val;
  emit("paginationChange", val);
}

// 监听props变化
watch(props.searchData, (newValue) => {});
</script>

<style lang="less" scoped>
.title {
  font-size: 3vw;
  font-weight: 800;
  text-align: center;
  margin-top: 1vw;
}
.songListToSongDataSong {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2vw;
  border-top: 0.5vw solid #ff0000;
}
.songListToSongDataSongItem {
  width: 100%;
  height: 5vw;
  margin-top: 3vw;
  display: flex;
  align-items: center;
  border: 0.5vw solid #e5e5e5;
  border-radius: 3vw;
  background-color: #f2f2f2;
  div {
    margin: 2vw;
    cursor: pointer;
  }
}
</style>
