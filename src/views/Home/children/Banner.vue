<template>
  <el-carousel :interval="6000" type="card" height="20vw" class="banner">
    <el-carousel-item v-for="item in props.data" :key="item">
      <img :src="item" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.banner {
  margin-top: 3vw;
}
</style>
