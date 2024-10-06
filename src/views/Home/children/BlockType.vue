<template>
  <div>
    <component
      :is="blockTypeComponentMap[props.data.blockCode]"
      :data="propsData"
    />
  </div>
</template>
<script setup>
import { defineProps, computed } from "vue";
import Menu from "@/views/Home/children/Menu.vue";
import Banner from "@/views/Home/children/Banner.vue";
import Playlist from "@/views/Home/children/Playlist.vue";
import NewSong from "./NewSong.vue";
import MgcList from "./MgcList.vue";

const blockTypeComponentMap = {
  HOMEPAGE_BLOCK_OLD_DRAGON_BALL: Menu,
  HOMEPAGE_BANNER: Banner,
  HOMEPAGE_BLOCK_PLAYLIST_RCMD: Playlist,
  // HOMEPAGE_BLOCK_HOT_TOPIC: "热门歌曲",
  HOMEPAGE_BLOCK_MGC_PLAYLIST: MgcList,
  HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG: NewSong,
  // HOMEPAGE_BLOCK_NEW_HOT_COMMENT: "热门评论",
  // HOMEPAGE_BLOCK_OFFICIAL_PLAYLIST: "官方歌单",

  // HOMEPAGE_BLOCK_STYLE_RCMD: "",
  // HOMEPAGE_BLOCK_VIDEO_PLAYLIST: "",
  // HOMEPAGE_BLOCK_YUNCUN_PRODUCED: "",
  // HOMEPAGE_MUSIC_CALENDAR: "",
  // HOMEPAGE_MUSIC_MLOG: "",
  // HOMEPAGE_PODCAST24: "",
  // HOMEPAGE_VOICEBOOK_RCMD: "",
  // HOMEPAGE_VOICELIST_RCMD: "",
};
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const propsData = computed(() => {
  switch (props.data.blockCode) {
    case "HOMEPAGE_BLOCK_OLD_DRAGON_BALL":
      return props.data.creatives[0].resources.map((item) => ({
        name: item.uiElement.mainTitle.title,
        iconUrl: item.uiElement.image.imageUrl,
      }));
    case "HOMEPAGE_BANNER":
      return props.data.extInfo.banners.map((item) => item.pic);
    case "HOMEPAGE_BLOCK_PLAYLIST_RCMD":
      return {
        name: props.data.uiElement.subTitle.title,
        children: props.data.creatives.map((item) => ({
          id: item.resources[0].resourceId,
          playCount: item.resources[0].resourceExtInfo.playCount,
          imageUrl: item.resources[0].uiElement.image.imageUrl,
          title: item.resources[0].uiElement.mainTitle.title,
        })),
      };
    case "HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG":
      return {
        name: props.data.uiElement.subTitle.title,
        children: props.data.creatives.map((item) => ({
          id: item.resources[1].resourceId,
          playCount: item.resources[1].resourceExtInfo.playCount,
          imageUrl: item.resources[1].uiElement.image.imageUrl,
          title: item.resources[1].uiElement.mainTitle.title,
        })),
      };
    case "HOMEPAGE_BLOCK_MGC_PLAYLIST":
      return {
        name: props.data.uiElement.subTitle.title,
        children: props.data.creatives.map((item) => ({
          id: item.resources[0].resourceId,
          playCount: item.resources[0].resourceExtInfo.playCount,
          imageUrl: item.resources[0].uiElement.image.imageUrl,
          title: item.resources[0].uiElement.mainTitle.title,
        })),
      };
    default:
      return null;
  }
});
</script>
