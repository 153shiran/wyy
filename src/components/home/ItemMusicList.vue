<!-- eslint-disable vue/valid-v-for -->
<template>
  <div class="itemMusicList">
    <div class="itemMusicElement">
      {{ state.itemMusicElement?.subTitle?.title }}
      <div>
        <Icon
          icon="system-uicons:menu-vertical"
          style="color: black"
          class="itemMoreIcon"
        />
      </div>
    </div>
    <van-swipe class="itemMusic" :loop="false" :width="525">
      <van-swipe-item class="musicBox" v-for="itemMusic in state.itemMusicList">
        <div
          :key="resourceId"
          v-for="item in itemMusic.resources"
          class="itemBox"
        >
          <img :src="item.resourceExtInfo.song.al.picUrl" alt="" id="imglist" />
          <div class="itemWord">{{ item.resourceExtInfo.song.al.name }}</div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script setup>
import axios from "axios";
import { reactive, onMounted } from "vue";

const state = reactive({
  itemMusicList: [],
  itemMusicElement: {},
});

onMounted(() => {
  axios
    .get("https://wangyiyunapi-gules.vercel.app/homepage/block/page")
    .then((res) => {
      console.log(res);
      state.itemMusicList = res.data.data.blocks[3].creatives;
      state.itemMusicElement = res.data.data.blocks[3].uiElement;
      console.log(state.itemMusicList);
      console.log(state.itemMusicElement);
    });
});
</script>
<style scoped>
#imglist {
  width: 150px;
  height: 150px;
  border-radius: 20px;
}
.itemBox {
  position: relative;
  margin: 10px 10px;
}
.itemWord {
  position: absolute;
  top: 0px;
  left: 165px;
}
.itemMusicElement {
  font-size: 0.4rem;
  font-weight: 900;
  width: 100%;
  height: 0.6rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
}
.itemMoreIcon {
  width: 5vw;
  height: 5vw;
}
</style>
