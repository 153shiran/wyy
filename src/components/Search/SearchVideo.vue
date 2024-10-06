<template>
  <div class="rmgedanfeli">
    <div class="title">MV列表</div>
    <!-- MV -->
    <div class="big">
      <div class="allGedan">
        <div
          class="gedan"
          v-for="video in searchData.SongData.videos"
          :key="video.vid"
        >
          <img :src="video.coverUrl" />
          <span>{{ video.title }}</span>
          <span class="formattedTime">{{
            formattedTime(video.durationms)
          }}</span>
          <span class="playTime">
            <Icon icon="lets-icons:reduce-light" width="16" height="16" />{{
              getHeat(video.playTime)
            }}</span
          >
          <a class="play-button" @click="toVideoDetails(video.vid)">
            <Icon icon="formkit:playcircle" width="16" height="16" />
          </a>
        </div>
      </div>
      <div class="pagination">
        <el-pagination
          v-if="pagination.total > 30"
          background
          layout="prev, pager, next"
          :page-size="pagination.pageSize"
          :total="parseInt(pagination.total)"
          :current-page="currentPage"
          @current-change="paginationChange"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { formattedTime } from "@/utils/TimeDate";
import { useRouter } from "vue-router";
// 处理热度数据
import { getHeat } from "@/utils/TimeDate";
const router = useRouter();
const props = defineProps({
  searchData: Object,
  pagination: Object,
});
const emit = defineEmits(["paginationChange"]);
// 当前页
let currentPage = ref(1);
// 分页点击
function paginationChange(val) {
  currentPage.value = val;
  emit("paginationChange", val);
}
// 跳转详细页面
function toVideoDetails(id) {
  router.push({
    name: "VideoDetail",
    params: { Vid: id },
  });
}
</script>
<style lang="less" scoped>
.rmgedanfeli {
  width: 83.1vw;

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

    .pagination {
      margin-top: 0.69vw;
    }

    .allGedan {
      display: flex;
      flex-wrap: wrap;
      width: 82.64vw;
      margin-top: 1.74vw;
      margin-left: 1.74vw;
      margin-bottom: 1.39vw;

      .gedan {
        position: relative;
        width: 12.15vw;
        height: 6.94vw;
        margin: 0 2.08vw 3.125vw 2.08vw;
        box-shadow: 0.14vw 0.14vw 0.56vw rgba(109, 109, 109, 0.795);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;

        span {
          // 自适应宽度
          width: fit-content;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        img {
          width: 100%;
          height: 100%;
        }

        .play-button {
          display: none;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
        }

        .formattedTime {
          position: absolute;
          bottom: 0.14vw;
          left: 0.21vw;
          color: #ffffff;
          font-size: 0.97vw;
        }

        .playTime {
          position: absolute;
          top: 0;
          right: 0;
          color: #ffffff;
          font-size: 1vw;
          background: linear-gradient(to left, #000000, rgba(255, 255, 255, 0));
        }
      }

      .gedan:hover {
        .play-button {
          display: block;
        }
      }

      .zanwuneirong {
        width: 100%;
        height: 31.94vw;
        text-align: center;
        line-height: 31.94vw;
        font-size: 9.03vw;
        font-weight: 600;
        background-color: #ffffff;
        border-radius: 2.08vw;
      }
    }
  }
}
</style>
