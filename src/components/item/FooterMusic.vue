<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { usePlayListStore } from "../../store/index";
import MusicDetail from "./MusicDetail.vue";

const mainStore = usePlayListStore();
const route = useRoute();
// 创建一个响应式引用来存储 audio 元素
const audioRef = ref(null);

// 直接使用 store 中的状态作为计算属性
const playList = computed(() => mainStore.playList);
const playListIndex = computed(() => mainStore.playListIndex);
const isbtnShow = computed(() => mainStore.isbtnShow);
const detailShow = ref(false);

function toggleIsbtnShow() {
  mainStore.updateIsbtnShow(!mainStore.isbtnShow);
}

function updateDetailShowBtn() {
  mainStore.updataDetailShow();
  detailShow.value = !detailShow.value;
}

// 定义一个函数来播放音频
function play() {
  if (audioRef.value.paused) {
    audioRef.value.play();
    toggleIsbtnShow(false);
  } else {
    audioRef.value.pause();
    toggleIsbtnShow(true);
  }
}

// eslint-disable-next-line no-unused-vars
watch(playListIndex, (newValue, oldValue) => {
  if (audioRef.value) {
    audioRef.value.autoplay = true;
    if (audioRef.value.paused) {
      mainStore.updateIsbtnShow(false);
    }
  }
});

watch(playList, () => {
  if (isbtnShow.value) {
    audioRef.value.autoplay = true;
    mainStore.updateIsbtnShow(false);
  }
});

// 在组件挂载后，打印所有的 refs
onMounted(() => {
  console.log(audioRef.value);
});

// 创建计算属性
const playerClass = computed(() =>
  useRoute().path.includes("/itemMusic") ? "fixed-player" : "player-relative"
);
</script>
<template>
  <div
    class="FooterMusic fixed-player"
    v-if="!route.meta.hideFootMusic"
    :class="playerClass"
  >
    <div class="footerLeft" @click="updateDetailShowBtn">
      <img :src="playList[playListIndex].al.picUrl" alt="" />
      <div>
        <p>{{ playList[playListIndex].name }}</p>
        <span>横滑切换上下首</span>
      </div>
    </div>
    <div class="footerRight">
      <Icon
        icon="icon-park-solid:play"
        width="48"
        height="48"
        style="color: "
        class="icon"
        @click="play()"
        v-if="isbtnShow"
      />
      <Icon
        icon="gridicons:pause"
        width="48"
        height="48"
        style="color: black"
        class="icon"
        @click="play()"
        v-else
      />
      <Icon
        icon="ph:sort-ascending-light"
        width="48"
        height="48"
        style="color: black"
        class="icon"
      />
    </div>
    <audio
      ref="audioRef"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"
    ></audio>
    <van-popup
      v-model:show="detailShow"
      @close="detailShow = false"
      closeable
      close-icon-position="top-left"
      close-icon="arrow-down"
      position="bottom"
      :style="{ height: '100%', width: '100%' }"
    >
      <MusicDetail
        :musicList="playList[playListIndex]"
        :play="play"
        :isbtnShow="isbtnShow"
        :addDuration="addDuration"
    /></van-popup>
  </div>
</template>
<style lang="less" scoped>
.FooterMusic {
  width: 100%;
  height: 1.4rem;
  background-color: #fff;
  position: fixed;
  bottom: 100px;
  border-top: 1px solid #999;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  .footerLeft {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      font-size: 25px;
    }
    span {
      font-size: 20px;
    }
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
  }

  .footerRight {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      width: 80px;
      height: 80px;
      margin-right: 0.1rem;
    }
  }
}

.page-content {
  padding-bottom: 1.4rem;
}
.fixed-player {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.player-relative {
  bottom: 100px;
}
</style>
