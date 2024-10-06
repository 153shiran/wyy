<template>
  <div class="rmgedanfeli">
    <div class="title">歌手列表</div>
    <div class="big">
      <div class="artists" v-if="searchData.SongData.artists">
        <div
          class="artist"
          v-for="artist in searchData.SongData.artists"
          :key="artist.id"
          @click="goArtist(artist.id)"
        >
          <img :src="artist.img1v1Url" alt />
          <a>{{ artist.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  searchData: Object,
});
function goArtist(singerId) {
  router.push({
    name: "Singer",
    params: { singerId },
  });
}
console.log(props.searchData);
</script>

<style lang="less" scoped>
.rmgedanfeli {
  width: 83.33vw;

  .title {
    margin: 0.69vw 3.47vw;
    font-size: 1.6vw;
    padding-bottom: 0.69vw;
    border-bottom: 0.21vw solid #d63434;
  }

  .big {
    display: flex;
    flex-direction: column;
    align-items: center;

    .artists {
      display: flex;
      flex-wrap: wrap;
      width: 82.64vw;
      margin-top: 1.74vw;
      margin-left: 1.74vw;
      margin-bottom: 1.39vw;

      .artist {
        position: relative;
        width: 11.46vw;
        height: 11.46vw;
        margin: 0 2.08vw 2.08vw 2.08vw;
        box-shadow: 0.14vw 0.14vw 0.56vw rgba(109, 109, 109, 0.795);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
      }

      a {
        // 自适应宽度
        width: fit-content;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
        margin-top: 0.14vw;

        &:hover {
          border-bottom: 1px solid black;
        }
      }

      img {
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
    }
  }
}
</style>
