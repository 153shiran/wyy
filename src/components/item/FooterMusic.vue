<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { usePlayListStore } from "../../store/index";

const mainStore = usePlayListStore();

const route = useRoute();

// 直接使用 store 中的状态作为计算属性
const playList = computed(() => mainStore.playList);
const playListIndex = computed(() => mainStore.playListIndex);
const isbtnShow = computed(() => mainStore.isbtnShow);
const detailShow = computed(() => mainStore.detailShow);

// 创建一个响应式引用来存储 audio 元素
const audio = ref(null);

// 在组件挂载后，打印所有的 refs
onMounted(() => {
  console.log(audio.value);
});

function toggleIsbtnShow() {
  mainStore.updateIsbtnShow(!mainStore.isbtnShow);
}

// 定义一个函数来播放音频
function play() {
  if (audio.value.paused) {
    audio.value.play();
    toggleIsbtnShow(false);
  } else {
    audio.value.pause();
    toggleIsbtnShow(true);
  }
}
</script>
<template>
  <div class="FooterMusic" v-if="!route.meta.hideTabBar">
    <div class="footerLeft">
      <img :src="playList[playListIndex].al.picUrl" alt="" />
      <div>
        <p>{{ playList[playListIndex].al.name }}</p>
        <span>横滑切换上下首</span>
      </div>
    </div>
    <div class="footerRight">
      <Icon
        icon="gridicons:pause"
        width="48"
        height="48"
        style="color: black"
        class="icon"
        @click="play()"
        v-if="isbtnShow"
      />
      <Icon
        icon="icon-park-solid:play"
        width="48"
        height="48"
        style="color: "
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
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"
    ></audio>
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
</style>
