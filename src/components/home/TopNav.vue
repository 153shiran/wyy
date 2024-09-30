<template>
  <div class="topNav">
    <div class="topleft">
      <Icon icon="material-symbols-light:menu" class="w-[10vw] h-[10vw]" />
      <div class="searchTop">
        <Icon
          id="searchicon"
          icon="material-symbols-light:search"
          class="w-[10vw] h-[10vw]"
        />
        <input type="text" placeholder="Faded" />
      </div>
    </div>
    <div class="topRight"></div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
</script>
<style scoped>
#searchicon {
  margin-left: 15px;
}
.topNav {
  width: 100%;
  height: 1rem;
  padding: 0.2rem;
  display: flex;
  padding-bottom: 8px;
  /* justify-content: space-between;
  align-items: center; */
  .topleft {
    width: 100%;
    display: flex;
    .searchTop {
      width: 100%;
      align-items: center;
      display: flex;
      margin-left: 20px;
      border-radius: 40px;
      background-color: #eaedf2;
    }
  }
}
input {
  width: 50vw;
  height: 30px;
  background-color: #eaedf2;
}
</style>
