<script setup>
import { Vue3Marquee } from "vue3-marquee";
import { defineProps } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  musicList: Array,
  isbtnShow: Array,
  play: Array,
});
console.log(props.musicList);
</script>
<template>
  <img :src="musicList.al.picUrl" alt="" class="bgimg" />
  <div class="detailTop">
    <div class="detailTopLeft">
      <div class="leftMarquee">
        <Vue3Marquee style="color: #fff">{{ musicList.al.name }}</Vue3Marquee>

        <svg class="icon liebiao" aria-hidden="true">
          <use xlink:href="#icon-youjiantou1"></use>
        </svg>
      </div>
    </div>
    <div class="detailTopRight">
      <svg class="icon liebiao" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
    </div>
  </div>
  <div class="detailContent">
    <img
      src="@/assets/cr.png"
      alt=""
      class="img_cr"
      :class="{ img_cr_active: !isbtnShow }"
    />
    <img src="@/assets/cd.png" alt="" class="img_cd" />
    <img
      :src="musicList.al.picUrl"
      alt=""
      class="img_ar"
      :class="{ img_ar_active: !isbtnShow, img_ar_pauesd: isbtnShow }"
    />
  </div>
  <div class="detailFooter">
    <div class="footerTop">
      <div>
        <p class="footerTopWordOne">{{ musicList.name }}</p>
        <div class="footerTopWordTwo">
          <p v-for="item in musicList.ar" :key="item">
            {{ item.name }}
          </p>
        </div>
      </div>
      <div class="footerTopIcon">
        <Icon
          icon="material-symbols:favorite-outline"
          width="48"
          height="48"
          style="color: black"
        />
        <Icon
          icon="iconamoon:comment-dots"
          width="48"
          height="48"
          style="color: black"
        />
      </div>
    </div>
    <div class="footerContent"></div>
    <div class="footer">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xunhuan"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
        <use xlink:href="#icon-shangyishoushangyige"></use>
      </svg>
      <svg
        class="icon bofang"
        aria-hidden="true"
        v-if="isbtnShow"
        @click="play"
      >
        <use xlink:href="#icon-bofang1"></use>
      </svg>
      <svg class="icon bofang" aria-hidden="true" v-else @click="play">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="goPlay(1)">
        <use xlink:href="#icon-xiayigexiayishou"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zu"></use>
      </svg>
    </div>
  </div>
</template>
<style scoped lang="less">
.bgimg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(70px);
}
.detailTop {
  width: 100%;
  height: 1rem;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  align-items: center;
  fill: #fff;
  .detailTopLeft {
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
    }
    .leftMarquee {
      width: 3rem;
      height: 100%;
      margin-left: 1.4rem;
      display: flex;

      .icon {
        width: 0.4rem;
        height: 0.4rem;
        fill: #999;
      }
    }
  }
  .detailTopRight {
    .icon {
      width: 0.7rem;
      height: 0.7rem;
    }
  }
}
.detailContent {
  width: 100%;
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .img_cr {
    width: 3rem;
    height: 3rem;
    position: absolute;
    left: 30%;
    transform-origin: 0 0;
    transform: rotate(-13deg);
    transition: all 2s;
  }
  .img_cr_active {
    width: 3rem;
    height: 3rem;
    position: absolute;
    left: 30%;
    transform-origin: 0 0;
    transform: rotate(0deg);
    transition: all 2s;
  }
  .img_cd {
    width: 5rem;
    height: 5rem;
    position: absolute;
    bottom: 2.3rem;
    z-index: -1;
  }
  .img_ar {
    width: 3.2rem;
    height: 3.2rem;
    position: absolute;
    border-radius: 50%;
    bottom: 3.2rem;
    animation: rotate_ar 10s linear infinite;
  }
  .img_ar_active {
    animation-play-state: running;
  }
  .img_ar_pauesd {
    animation-play-state: paused;
  }
  @keyframes rotate_ar {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
.footerTop {
  display: flex;
  justify-content: space-between;
  margin-top: -100px;
}
.footerTop .footerTopWordOne {
  width: 2.5rem;
  height: 50px;
  font-size: 18px;
  color: #fff;
}
.footerTopWordTwo {
  width: 100%;
  display: flex;
  font-size: 16px;
  color: #999;
}
.footerTopIcon {
  width: 1.5rem;
  display: flex;
  justify-content: space-between;
}
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 100px;
}
.footer .icon {
  width: 0.6rem;
  height: 0.6rem;
  fill: rgb(245, 234, 234);
}
.footer .bofang {
  width: 1rem;
  height: 1rem;
}
</style>
