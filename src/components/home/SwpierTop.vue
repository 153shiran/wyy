<template>
  <div>
    <van-swipe :autoplay="3000" lazy-render class="w-[100%]">
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" class="w-[100%] h-[3rem]" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { getBanner } from "../../request/api/home";
import { reactive, onMounted } from "vue";
export default {
  setup() {
    const state = reactive({
      images: [
        "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
        "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
      ],
    });
    onMounted(async () => {
      // axios
      //   .get(" https://wangyiyunapi-gules.vercel.app/banner?type=2")
      //   .then((res) => {
      //     console.log(res);
      //     state.images = res.data.banners;
      //     console.log(state.images);
      //   });
      let res = await getBanner();
      state.images = res.data.banners;
      console.log(res);
    });
    return { state };
  },
};
</script>
