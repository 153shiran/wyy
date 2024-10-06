<template>
  <Wrapper
    :title="props.data.name"
    @clickMore="moreHandler"
    @clickTitle="titleHandler"
  >
    <BetterScroll
      :config="{ scrollX: false, scrollY: true, click: true }"
      :dep="props.data"
    >
      <div
        @click="clickHandler(item)"
        v-for="item in props.data.children"
        :key="item.id"
        class="mx-[10px] flex"
      >
        <img class="w-[50px] m-[2px]" :src="item.imageUrl" alt="" />
        <div class="line-clamp-2">
          {{ item.title }}
        </div>
      </div>
    </BetterScroll>
  </Wrapper>
</template>
<script setup>
import { defineProps } from "vue";
import BetterScroll from "@/components/BetterScroll.vue";
import Wrapper from "@/components/Wrapper.vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  data: {},
});

const clickHandler = () => {
  console.log("雷达歌单被点击了");
};

const moreHandler = () => {
  console.log("雷达歌单的更多被点击了");
};

const titleHandler = () => {
  console.log("‘雷达歌单’被点击了");
};
</script>
