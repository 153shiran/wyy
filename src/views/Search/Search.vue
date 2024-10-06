<template>
  <div class="bj">
    <div class="myBack">
      <!-- 搜索数据 -->
      <div class="Search-Introduction">
        搜索"{{ searchContent }}"共找到
        <span style="color: brown"> {{ pagination.total }} </span>条数据
      </div>
      <!-- 顶部 -->
      <ul class="tab-nav">
        <li
          :class="{ active: searchData.current == index }"
          v-for="(type, index) in searchData.types"
          :key="index"
          @click="data(index)"
        >
          <a data-id="0">{{ type }}</a>
        </li>
      </ul>
      <!-- 单曲样式 -->
      <SearchSingle
        :searchData="searchData"
        :pagination="pagination"
        v-if="searchData.current == 0"
        @paginationChange="paginationChange"
      />
      <!-- 专辑 歌单 样式 -->
      <SearchAlbum
        :searchData="searchData"
        :pagination="pagination"
        v-if="searchData.current == 1 || searchData.current == 3"
        @paginationChange="paginationChange"
      />
      <SearchSinger
        :searchData="searchData"
        :pagination="pagination"
        v-if="searchData.current == 2"
      />
      <!-- 用户样式 -->
      <SearchUsers
        :searchData="searchData"
        :pagination="pagination"
        v-if="searchData.current == 4"
        @paginationChange="paginationChange"
      />
      <!-- 视频样式 -->
      <SearchVideo
        :searchData="searchData"
        :pagination="pagination"
        v-if="searchData.current == 5"
        @paginationChange="paginationChange"
      />
    </div>
  </div>
  <MusicPlayer />
</template>

<script setup>
import SearchSingle from "@/components/Search/SearchSingle.vue";
import SearchAlbum from "@/components/Search/SearchAlbum.vue";
import SearchVideo from "@/components/Search/SearchVideo.vue";
import SearchSinger from "@/components/Search/SearchSinger.vue";
import SearchUsers from "@/components/Search/SearchUsers.vue";
import { ref, onMounted, watch, reactive } from "vue";
import { useCounterStore } from "@/Pinia/counter";
import { reqSearchlist } from "@/api/Search";
import { useRouter } from "vue-router";
// 引入播放器组件
import MusicPlayer from "@/components/MusicPlayer.vue";

// Pinia仓库x
const counterStore = useCounterStore();

// 路由
const router = useRouter();

// 分页数据
let pagination = reactive({
  currentPage: 1, //当前页
  total: 1, //总条数
  pageSize: 30, //当前页容量
});

let searchData = reactive({
  // 歌曲数据
  SongData: [],
  types: ["单曲", "专辑", "歌手", "歌单", "用户", "视频"],
  // 分类索引
  current: 0,
});

function paginationChange(val) {
  data(searchData.current, val - 1);
}

let searchContent = ref("");

// 监视和onMounted共同的方法
function watchAndOnMounted() {
  searchContent.value = counterStore.lastSearchContent;
  data();
}

async function data(current = 0, offset = 0, limit = 30) {
  // 分类索引
  let type;
  searchData.current = current;
  if (current == 0) {
    type = 1;
  } else if (current == 1) {
    type = 10;
  } else if (current == 2) {
    type = 100;
  } else if (current == 3) {
    type = 1000;
  } else if (current == 4) {
    type = 1002;
  } else if (current == 5) {
    type = 1014;
  }
  let result = await reqSearchlist(
    counterStore.lastSearchContent,
    type,
    limit,
    offset * 30
  );
  if ((result.data.code = 200)) {
    searchData.SongData = result.data.result;
    pagination.total =
      searchData.SongData.songCount ||
      searchData.SongData.albumCount ||
      searchData.SongData.playlistCount ||
      searchData.SongData.videoCount ||
      searchData.SongData.artistCount ||
      searchData.SongData.userprofileCount;
  }
}

watch(
  () => [counterStore.lastSearchContent],
  () => {
    watchAndOnMounted();
  }
);

onMounted(async () => {
  watchAndOnMounted();
});
</script>

<style lang="less" scoped>
.myBack {
  background-color: #dddada4d;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .Search-Introduction {
    margin: 2vw 1vw;
  }
  .tab-nav {
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .active {
      background: linear-gradient(to bottom, #d3d3d3, white);
      border-left: 0.1vw solid black;
      border-right: 0.1vw solid black;
      border-top: 0.2vw solid red;
      border-bottom: 0;
    }

    li {
      width: 20vw;
      text-align: center;
      border-top: 0.1vw solid black;
      border-bottom: 0.1vw solid black;
      cursor: pointer;
    }
  }
}
</style>
