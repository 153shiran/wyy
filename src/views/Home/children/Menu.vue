<!-- eslint-disable max-len -->
<template>
  <BetterScroll :config="{ scrollX: true, scrollY: false }" :dep="props.data">
    <div
      @click="emit('click', item, index)"
      v-for="(item, index) in props.data"
      :key="item.name"
      class="flex flex-col items-center w-[20vw]"
    >
      <div class="relative">
        <img :src="item.iconUrl" class="w-[9vw] filter" alt="" />

        <span
          class="text-[2.564vw] text-white absolute top-[54%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          v-if="index === 0"
          >{{ new Date().getDate() }}</span
        >
      </div>
      <span class="text-[2.99vw] text-[#676c6c]">{{ item.name }}</span>
    </div>
  </BetterScroll>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
import BetterScroll from "@/components/BetterScroll.vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(["click"]);
</script>
<style scoped>
.filter {
  filter: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27><filter id=%27colorize%27><feColorMatrix type=%27matrix%27 values=%271 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0%27/></filter></svg>#colorize");
}
</style>
