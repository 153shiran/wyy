<!-- eslint-disable vue/no-mutating-props -->
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  // 通过props进行传值，判断如果数据拿不到，就获取sessionStorage中的
  playlist: {},
});
// eslint-disable-next-line no-cond-assign
if ((props.playlist.creator = "")) {
  props.playlist.creator = JSON.parse(
    sessionStorage.getItem().playlist
  ).creator;
}
console.log(props);

// eslint-disable-next-line consistent-return
const changeCount = (num) => {
  if (num >= 100000000) {
    return `${(num / 100000000).toFixed(1)}亿`;
  }
  if (num >= 10000) {
    return `${(num / 10000).toFixed(1)}万`;
  }
};
</script>
<template>
  <div class="itemMusicTop">
    <img :src="playlist.coverImgUrl" alt="" class="bgimg" />
    <div class="itemLeft">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
    </div>
    <span class="gedan">歌单</span>
    <div class="itemRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
  </div>
  <div class="itemTopContent">
    <div class="contentLeft">
      <img :src="playlist.coverImgUrl" alt="" />
      <div class="palyCount">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gl-play-copy"></use>
        </svg>
        <span>{{ changeCount(playlist.playCount) }}</span>
      </div>
    </div>
    <div class="contentRight">
      <p class="rightP_one">{{ playlist.name }}</p>
      <div class="right_img">
        <img :src="playlist.creator.backgroundUrl" alt="" />
        <span>{{ playlist.creator.nickname }}</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou"></use>
        </svg>
      </div>
      <p class="rightP_two">
        <span>{{ playlist.description }}</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou"></use>
        </svg>
      </p>
    </div>
  </div>
  <div class="itemTopFooter">
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-iconfontzhizuobiaozhun023110"></use>
      </svg>
      <span>{{ playlist.commentCount }}</span>
    </div>
    <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
      <span>{{ playlist.shareCount }}</span>
    </div>
    <div class="footerItem bgcred">
      <svg
        t="1728648506754"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="11099"
      >
        <path
          d="M224.256 332.8h402.432v-15.701333a126.293333 126.293333 0 0 0-126.293333-126.293334H224.256a126.293333 126.293333 0 0 0-126.293333 126.293334v141.994666a126.293333 126.293333 0 0 1 126.293333-126.293333z"
          fill="#ffffff"
          p-id="11100"
        ></path>
        <path
          d="M793.941333 366.933333H234.496a136.533333 136.533333 0 0 0-136.533333 136.533334v299.690666a136.533333 136.533333 0 0 0 136.533333 136.533334h559.445333a136.533333 136.533333 0 0 0 136.533334-136.533334v-299.690666a136.533333 136.533333 0 0 0-136.533334-136.533334z m-154.965333 320.512h-90.794667v90.453334a34.133333 34.133333 0 1 1-68.266666 0v-90.453334h-90.453334a34.133333 34.133333 0 0 1 0-68.266666h90.453334v-90.453334a34.133333 34.133333 0 1 1 68.266666 0v90.453334h90.794667a34.133333 34.133333 0 0 1 0 68.266666z"
          fill="#ffffff"
          p-id="11101"
        ></path>
      </svg>
      <span>{{ changeCount(playlist.subscribedCount) }}</span>
    </div>
    <!-- <div class="footerItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-show_duoxuan"></use>
      </svg>
      <span>多选</span>
    </div> -->
  </div>
</template>
<style lang="less" scoped>
.gedan {
  font-size: 0.4rem;
  color: #fff;
}
.itemMusicTop {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: .2rem;
  position: relative;
  .itemLeft,
  .itemRight {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.2rem;

    .icon {
      width: 48px;
      height: 48px;
      fill: #fff; //填充颜色
    }
  }
  .bgimg {
    width: 100%;
    height: 11rem;
    position: absolute;
    z-index: -1;
    filter: blur(30px);
  }
}
.itemTopContent {
  width: 100%;
  height: 3rem;
  padding: 0.2rem;
  margin-top: 0.4rem;
  display: flex;
  justify-content: space-between;
  .contentLeft {
    width: 2.6rem;
    height: 2.6rem;
    position: relative;

    img {
      width: 2.6rem;
      height: 2.6rem;
      border-radius: 0.2rem;
      position: absolute;
      z-index: -1;
    }
    .palyCount {
      position: absolute;
      right: 0.1rem;
      margin-top: 0.1rem;
      display: flex;
      .icon {
        width: 0.26rem;
        height: 0.26rem;
        margin-top: 5px;
        vertical-align: middle;
      }
      span {
        font-size: 20px;
        color: #fff;
      }
    }
  }
  .contentRight {
    width: 60%;
    height: 2.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .rightP_one {
      font-size: 25px;
      font-weight: 900;
      color: #fff;
      font-family: "微软雅黑";
    }
    .right_img {
      width: 100%;
      height: 0.6rem;
      line-height: 0.6rem;
      color: #ccc;
      display: flex;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
      }
      span {
        font-size: 20px;
        margin-top: -8px;
        margin-left: 0.1rem;
      }
      .icon {
        width: 0.26rem;
        height: 0.26rem;
        margin-top: 8.5px;
        vertical-align: middle;
      }
    }
    .rightP_two {
      width: 100%;
      height: 10rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        display: inline-block;
        width: 95%;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 15.5px;
        color: #ccc;
      }
      .icon {
        width: 0.24rem;
        height: 0.24rem;
      }
    }
  }
}
.bgcred {
  background-color: red;
}
.itemTopFooter {
  width: 100%;
  height: 1.4rem;
  display: flex;
  justify-content: space-around;
  margin-top: 0.2rem;
  .footerItem {
    width: 180px;
    height: 90px;
    border: 1px solid transparent;
    border-radius: 50px;
    box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    .icon {
      width: 40px;
      height: 40px;
      fill: #fff;
    }
    span {
      margin-top: 4px;
      margin-left: 5px;
    }
  }
}
</style>
