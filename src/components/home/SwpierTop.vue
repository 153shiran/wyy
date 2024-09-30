<!-- 轮播图 -->
<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render class="w-[100%]">
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" class="w-[100%] h-[3rem]" />
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
      images: [
        "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
        "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
      ],
    });
    onMounted(() => {
      axios
        .get(" https://wangyiyunapi-gules.vercel.app/banner?type=2")
        .then((res) => {
          console.log(res);
          state.images = res.data.banners;
          console.log(state.images);
        });
    });
    return { state };
  },
};
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
  border-radius: 0.2rem;
}
.van-swipe-item {
  padding: 0 0.2rem;
}
.van-swipe__indicator--active {
  background-color: rgb(219, 130, 130);
}
.van-swipe {
  width: 100%;
  height: 3rem;
}
</style>
