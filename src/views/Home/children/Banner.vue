<template>
  <Swiper loop autoplay pagination :modules="[Autoplay, Pagination]">
    <SwiperSlide v-for="item in props.data" :key="item">
      <img :src="item" alt="" />
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
import { defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>
