<!-- eslint-disable vue/no-mutating-props -->
<script setup>
import { defineProps } from "vue";

// 定义响应式状态

// const store = useStore();

const props = defineProps({
  // 通过props进行传值，判断如果数据拿不到，就获取sessionStorage中的
  itemList: [],
});
console.log(props);

// eslint-disable-next-line no-cond-assign
if ((props.itemList.creator = "")) {
  props.itemList.creator = JSON.parse(
    sessionStorage.getItem().itemList
  ).creator;
}

const playMusic = function (i) {
  this.updatePlayList(this.itemList);
  this.updatePlayListIndex(i);
};

// const updatePlayList = (playlist) => {
//   store.commit("updatePlayList", playlist);
// };

// const updatePlayListIndex = (index) => {
//   store.commit("updatePlayListIndex", index);
// };
// ...mapMutations(['updatePlayList','updatePlayListIndex'])
</script>
<template>
  <div class="itemMusicList">
    <div class="itemListTop">
      <div class="listLeft">
        <Icon
          icon="icon-park-solid:play"
          width="48"
          height="48"
          style="color: red"
          class="icon"
        />
        <span
          >播放全部<span>(共{{ itemList.length }}首)</span></span
        >
      </div>
      <div class="listRight">
        <svg
          t="1728701123727"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="19834"
        >
          <path
            d="M544 574.745l108-108L697.255 512 512 697.255 326.745 512 372 466.745l108 108V96h64v478.745zM224 238v64h-56c-17.673 0-32 14.327-32 32v498c0 17.673 14.327 32 32 32h688c17.673 0 32-14.327 32-32V334c0-17.673-14.327-32-32-32h-56v-64h56c53.02 0 96 42.98 96 96v498c0 53.02-42.98 96-96 96H168c-53.02 0-96-42.98-96-96V334c0-53.02 42.98-96 96-96h56z"
            fill="#2c2c2c"
            p-id="19835"
          ></path>
        </svg>
        <Icon
          icon="ph:sort-ascending-light"
          width="48"
          height="48"
          style="color: black"
          class="icon"
        />
      </div>
    </div>
    <div class="itemList">
      <div class="item" v-for="(item, i) in itemList" :key="i">
        <div class="itemLeft" @click="playMusic(i)">
          <span class="leftSpan">{{ i + 1 }}</span>
          <div>
            <p>{{ item.name }}</p>
            <span v-for="(item1, index) in item.ar" :key="index">{{
              item1.name
            }}</span>
          </div>
        </div>
        <div class="itemRight">
          <svg class="icon bofang" aria-hidden="true" v-if="item.mv != 0">
            <use xlink:href="#icon-shipin"></use>
          </svg>
          <svg class="icon liebiao" aria-hidden="true">
            <use xlink:href="#icon-31liebiao"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.itemMusicList {
  width: 100%;
  height: 10rem;
  background-color: #fff;
  padding: 0 0.2rem;
  margin-top: 0.2rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  .itemListTop {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .listLeft {
      width: 3rem;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon {
        width: 48px;
        height: 48px;
      }
      span {
        font-weight: 700;
        span {
          font-weight: 400;
          font-size: 0.24rem;
          color: #999;
        }
      }
    }
    .listRight {
      display: flex;
      align-items: center;
      padding: 0.2rem;
      border-radius: 0.4rem;
      .icon {
        width: 36px;
        height: 36px;
        margin-right: 0.1rem;
      }
    }
  }
  .itemList {
    width: 100%;
    .item {
      width: 100%;
      height: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .itemLeft {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        .leftSpan {
          display: inline-block;
          width: 0.2rem;
          text-align: center;
        }
        div {
          p {
            width: 4.54rem;
            height: 0.4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
          }
          span {
            font-weight: 400;
            font-size: 0.24rem;
            color: #999;
          }
          margin-left: 0.3rem;
        }
      }
      .itemRight {
        width: 20%;
        height: 100%;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        position: relative;
        .icon {
          fill: #999;
          width: 48px;
          height: 48px;
        }
        .bofang {
          position: absolute;
          left: 0;
        }
        .liebiao {
          position: absolute;
          right: 0;
        }
      }
    }
  }
}
</style>
