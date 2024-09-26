<template>
  <div class="flex w-100% p-[10px]">
    <Icon icon="material-symbols-light:menu" class="w-[10vw] h-[10vw]" />
    <span class="flex w-[80vw] h-[50px] bg-slate-200">
      <Icon
        id="icon-one"
        icon="material-symbols-light:search"
        class="w-[10vw] h-[10vw] px-[px]"
      />
      <input
        type="text"
        id="search-box"
        class="w-[55vw] bg-gray-200"
        placeholder="faded"
      />
    </span>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
</script>
<style>
#icon-one {
  align-items: center;
  margin-left: 15px;
}
span {
  border-radius: 50px;
  margin-left: 10px;
}
input {
  margin-left: 10px;
}
</style>
