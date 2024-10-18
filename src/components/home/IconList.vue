<!-- eslint-disable vue/valid-v-for -->
<!-- 图标列表 -->
<template>
  <div class="iconListBox">
    <van-swipe
      :loop="false"
      class="iconList"
      :width="160"
      :show-indicators="false"
    >
      <div class="iconDate">{{ new Date().getDate() }}</div>
      <van-swipe-item
        v-for="iconlist in state.iconlists"
        :key="imageUrl"
        class="iconUrl"
      >
        <img :src="iconlist.uiElement?.image.imageUrl2" id="imglist" />
        <div class="iconword">{{ iconlist.uiElement?.mainTitle.title }}</div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import axios from "axios";
import { reactive, onMounted } from "vue";

export default {
  setup() {
    const state = reactive({
      iconlists: [
        "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
        "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
      ],
    });
    onMounted(() => {
      axios
        .get(" https://wangyiyunapi-gules.vercel.app/homepage/block/page")
        .then((res) => {
          console.log(res);
          state.iconlists = res.data.data.blocks[1].creatives[0].resources;
          console.log(state.iconlists);
        });
    });
    return { state };
  },
};
</script>
<style scoped lang="less">
.van-swipe-item {
  #imglist {
    height: 100px;
    width: 100px;
  }
}
.iconUrl {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.iconDate {
  position: absolute;
  color: white;
  font-weight: 700;
  top: 38px;
  left: 65px;
  z-index: 100;
}
</style>
