<template>
  <div class="rmgedanfeli">
    <div class="title">
      {{ searchData.SongData.albums ? "专辑" : "歌单" }}列表
    </div>
    <!-- 专辑 -->
    <div class="big">
      <div class="allGedan" v-if="searchData.SongData.albums">
        <div
          class="gedan"
          v-for="album in searchData.SongData.albums"
          :key="album.id"
          @click="goCollection(album.id)"
        >
          <img :src="album.picUrl" alt />
          <span>{{ album.name }}</span>
          <a class="play-button" @click.stop="Playalbum(album.id)">
            <Icon
              icon="formkit:playcircle"
              width="16"
              height="16"
              style="color: #cc3333"
            />
          </a>
        </div>
      </div>
      <!-- 歌单 -->
      <div class="allGedan" v-if="searchData.SongData.playlists">
        <div
          class="gedan"
          v-for="single in searchData.SongData.playlists"
          :key="single.id"
          @click="goSongSheet(single.id)"
        >
          <img :src="single.coverImgUrl" alt />
          <span>{{ single.name }}</span>
          <a class="play-button" @click.stop="PlaySongSheet(single.id)"> </a>
        </div>
      </div>
      <div class="pagination">
        <el-pagination
          v-if="pagination.total > 30"
          background
          layout="prev, pager, next"
          :page-size="pagination.pageSize"
          :total="parseInt(pagination.total)"
          :current-page="currentPage"
          @current-change="paginationChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
// 导入数据仓库
import { useCounterStore } from "@/Pinia/counter";
// 导入路由
import { useRouter } from "vue-router";
// 引入Pinia仓库
import { PlaySingles, PlayAlbums } from "@/utils/PlaySinglesAlbums";
import { Icon } from "@iconify/vue";
// 实例化数据仓库
const counterStore = useCounterStore();
const props = defineProps({
  searchData: Object,
  pagination: Object,
});

const emit = defineEmits(["paginationChange"]);

console.log(props.searchData);

// 实例化路由
const router = useRouter();

// 当前页
let currentPage = ref(1);

// 分页点击
function paginationChange(val) {
  currentPage.value = val;
  emit("paginationChange", val);
}

// 跳转专辑页面
function goCollection(id) {
  router.push({
    name: "Collection",
    params: { id: id },
  });
}

// 跳转歌单页面
function goSongSheet(id) {
  router.push({
    name: "SongListDetails",
    params: { songListId: id },
  });
}

// 点击播放
async function Playalbum(id) {
  PlayAlbums(id);
}

// 歌单点击播放
async function PlaySongSheet(id) {
  PlaySingles(id);
}
</script>

<style lang="less" scoped>
.rmgedanfeli {
  width: 84vw;

  .title {
    margin: 1vw 3vw;
    font-size: 2vw;
    padding-bottom: 1vw;
    border-bottom: 0.2vw solid #d63434;
  }

  .big {
    display: flex;
    flex-direction: column;
    align-items: center;

    .pagination {
      margin-top: 1vw;
    }

    .allGedan {
      display: flex;
      flex-wrap: wrap;
      width: 83vw;
      margin-top: 2vw;
      margin-left: 2vw;
      margin-bottom: 1vw;

      .gedan {
        position: relative;
        width: 11vw;
        height: 11vw;
        margin: 0 2vw 2vw 2vw;
        box-shadow: 0.1vw 0.1vw 0.6vw rgba(109, 109, 109, 0.795);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;

        span {
          // 自适应宽度
          width: fit-content;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        img {
          width: 100%;
          height: 100%;
        }

        .play-button {
          display: none;
          position: absolute;
          bottom: -0.3vw;
          right: -0.3vw;
        }
      }

      .gedan:hover {
        .play-button {
          display: block;
        }
      }

      .zanwuneirong {
        width: 100%;
        height: 32vw;
        text-align: center;
        line-height: 32vw;
        font-size: 9.03vw;
        font-weight: 600;
        background-color: #ffffff;
        border-radius: 2vw;
      }
    }
  }
}
</style>
