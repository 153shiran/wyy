<!-- eslint-disable no-unused-vars -->
<!-- 推荐歌单 -->
<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">推荐歌单</div>
      <div>
        <Icon
          icon="system-uicons:menu-vertical"
          style="color: black"
          class="MoreIcon"
        />
      </div>
    </div>
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="250"
        class="my-swpie"
        :show-indicators="false"
      >
        <van-swipe-item v-for="item in state.musicList" :key="item">
          <router-link :to="{ path: '/itemMusic', query: { id: item.id } }">
            <img :src="item.picUrl" alt="" id="imglist" />
            <span class="playCount">
              <Icon
                icon="mingcute:music-3-line"
                style="color: white"
                id="icon"
              />
              {{ changeCount(item.playCount) }}
            </span>
            <span class="name">{{ item.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
// eslint-disable-next-line import/extensions
import { getMusicList } from "@/api/apilist/home.js";
import { reactive, onMounted } from "vue";

const state = reactive({
  musicList: [],
});
// eslint-disable-next-line consistent-return
function changeCount(num) {
  if (num >= 100000000) {
    return `${(num / 100000000).toFixed(1)}亿`;
  }
  if (num >= 10000) {
    return `${(num / 10000).toFixed(1)}万`;
  }
}
onMounted(async () => {
  const res = await getMusicList();
  console.log(res);
  state.musicList = res.data.result;
  changeCount();
});
</script>
<style scoped>
.MoreIcon {
  width: 5vw;
  height: 5vw;
}
.musicList {
  width: 100%;
  height: 6rem;
  padding: 0.2rem;
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
  .musicContent {
    width: 100%;
    height: 3.6rem;
    .my-swipe {
      height: 100%;
    }

    .van-swipe-item {
      margin-right: 0.14rem;
      padding-right: 0.2rem;
      position: relative;
      height: 4.8rem;
      #imglist {
        width: 100%;
        height: 2.8rem;
        border-radius: 30px;
        position: absolute;
      }
      .playCount {
        position: absolute;
        z-index: 100;
        right: 0.3rem;
        color: white;
        margin-top: 0.06rem;
        display: flex;
        #icon {
          margin-top: 5px;
          width: 0.3rem;
          height: 0.3rem;
        }
      }
      .name {
        position: absolute;
        bottom: 70px;
      }
    }
  }
}
</style>
