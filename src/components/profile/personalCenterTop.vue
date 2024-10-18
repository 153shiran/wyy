<script setup>
import { Icon } from "@iconify/vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import { getUserDetail } from "../../api/apilist/login";

// const state = ref("");

// const uid = async () => {
//   const uidll = await getUserDetail();
//   console.log(uidll);
// };

// onMounted(() => {
//   axios.get(`https://wangyiyunapi-gules.vercel.app//user/detail?uid=${data}`);
// });
</script>
<template>
  <div class="profileBox">
    <div class="profileTop">
      <div class="topLeft">
        <div>+添加状态</div>
      </div>
      <div class="topRight">
        <Icon
          id="searchicon"
          icon="material-symbols-light:search"
          class="w-[10vw] h-[10vw]"
        />
        <Icon
          icon="system-uicons:menu-vertical"
          style="color: black"
          class="w-[10vw] h-[10vw]"
        />
        <Icon icon="material-symbols-light:menu" class="w-[10vw] h-[10vw]" />
      </div>
    </div>
    <div></div>
    <div></div>
  </div>
</template>
<style scoped>
.profileBox {
  width: 100%;
}
.profileTop {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.topLeft {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 0.2rem;
}
.topRight {
  display: flex;
}
</style>
