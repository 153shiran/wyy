<template>
  <div class="MediaPlayer">
    <div
      class="MediaPlayer-neirong"
      :style="`background-image: url(${MediaPlayer?.songData?.al?.picUrl});`"
    >
      <div class="neirong-data">
        <!--返回 -->
        <div class="title">
          <!-- 左边 -->
          <div>
            <div @click="ReturnPage">
              <Icon
                icon="fluent:arrow-enter-16-filled"
                width="50"
                height="50"
              />
            </div>
          </div>
          <!-- 中间 -->
          <div></div>
          <!-- 右边 -->
          <div></div>
        </div>
        <!-- 图片 歌词 -->
        <div class="neirong-data-shang">
          <!-- 图片 -->
          <div class="div-img div-img-yy">
            <img
              class="imga"
              :class="{ xuanzhuan: !counterStore.PdSong }"
              :src="MediaPlayer?.songData?.al?.picUrl"
            />
          </div>
          <!-- 歌词 -->
          <div class="div-text">
            <span
              class="div-text-geci"
              :class="{
                'lyric-activate':
                  MediaPlayer.SongNewTime >
                    MediaPlayer.lyricYouhua.firstArrayMiao[index] &&
                  MediaPlayer.SongNewTime <
                    MediaPlayer.lyricYouhua.firstArrayMiao[index + 1],
              }"
              v-for="(item, index) in MediaPlayer.lyricYouhua.secondArray"
              :key="index"
              >{{ item }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- 按钮 -->
    <div class="neirong-data-button">
      <!-- 左 -->
      <div class="btn-div-l"></div>
      <!-- 中 -->
      <div class="btn-div-c">
        <!-- 上一首 -->
        <div @click="emitter.emit('playerChangeSong', -1)">
          <Icon
            icon="majesticons:back-circle"
            width="60"
            height="60"
            style="color: black"
          />
        </div>
        <!-- 播放 -->
        <div
          @click="bofang()"
          style="cursor: pointer"
          v-if="!counterStore.PdSong"
        >
          <Icon
            icon="lsicon:play-filled"
            width="70"
            height="70"
            style="color: black"
          />
        </div>
        <div
          @click="bofang()"
          style="cursor: pointer"
          v-if="counterStore.PdSong"
        >
          <Icon
            icon="tabler:player-pause-filled"
            width="70"
            height="70"
            style="color: black"
          />
        </div>
        <!-- 下一首 -->
        <div @click="emitter.emit('playerChangeSong', 1)">
          <Icon
            icon="mdi:skip-next-circle"
            width="60"
            height="60"
            style="color: black"
          />
        </div>
      </div>
      <!-- 右 -->
      <div class="btn-div-r"></div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, watch, ref } from "vue";
import { useCounterStore } from "@/Pinia/counter";
import { useRouter } from "vue-router";
import { reqSongDetail, reqLyric } from "@/api/songListOrSong";
import emitter from "@/plugins/bus";
import ChangeSong from "@/utils/Lyric";
import { Icon } from "@iconify/vue";

// 路由
const router = useRouter();
// Pinia仓库
const counterStore = useCounterStore();

// 全部数据
const MediaPlayer = reactive({
  // 歌曲数据
  songData: {},
  // 歌词数据
  lyricData: {},
  // 歌词优化后数据
  lyricYouhua: {},
  // 当前播放时间
  SongNewTime: null,
});

//返回上一个页面
function ReturnPage() {
  router.back();
  emitter.emit("showShengjiang", true);
}

// 获取歌曲数据
async function getSongData() {
  const { data: a } = await reqSongDetail(counterStore?.lastPlayerSongId);
  MediaPlayer.songData = a.songs[0];
}
// 获取歌词
async function getLyric() {
  const { data: a } = await reqLyric(counterStore?.lastPlayerSongId);
  MediaPlayer.lyricData = a;
  MediaPlayer.lyricYouhua = ChangeSong(a?.lrc?.lyric);
}

// 播放或者暂停音乐
function bofang() {
  emitter.emit("BofangOrZantingSong");
}

// 第一次进入页面或者歌曲id更新
function upData() {
  // 获取歌曲数据
  getSongData();
  // 获取歌词
  getLyric();
  //   隐藏
  emitter.emit("showShengjiang", false);
  console.log(MediaPlayer);
}

emitter.on("SongNewTime", (e) => {
  MediaPlayer.SongNewTime = e;
  // 获取 container 和 child 的位置信息
  const Father = document.querySelector(".div-text");
  const Son = document.querySelector(".lyric-activate"); //这个是上一个歌词  目前激活的歌词是这个歌词的下个
  if (Father && Son) {
    Father.scrollTop = Son.offsetTop - Father.offsetTop - 30;
  }
});

watch(
  () => counterStore?.lastPlayerSongId,
  () => {
    upData();
  }
);

onMounted(() => {
  upData();
});
</script>

<style lang="less" scoped>
@keyframes xuanzhuan {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.xuanzhuan {
  animation: xuanzhuan 80s linear infinite;
}

.MediaPlayer {
  position: absolute;
  top: 0;
  z-index: 4;
  padding: 0 0;
  .MediaPlayer-neirong {
    position: relative;
    width: 100vw;
    background-size: 100%;
    margin-bottom: 120px;
    .neirong-data {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      backdrop-filter: blur(20px);
      background: transparent;
      .title {
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #867f7f;
        box-shadow: 0 0 15px rgb(90, 90, 90);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        div {
          svg {
            font-size: 30px;
            padding: 10px;
            border-radius: 15px;
            cursor: pointer;
            margin: 0 10px;
            background-color: #cacaca82;
            &:hover {
              background-color: #9d9d9d;
            }
          }
        }
      }
      .neirong-data-shang {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-around;
        margin-top: 30px;
        transition: width 0.3s ease, height 0.3s ease; /* 可选 */
        .div-img-yy {
          transition: width 0.3s ease, height 0.3s ease; /* 可选 */
          margin-bottom: 2vw;
          .imga {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            box-shadow: 0 0 16px black;
          }
        }
        .div-text {
          width: 50%;
          height: 600px;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: auto;
          // border: 1px solid black;
          border-radius: 10px;
          box-shadow: 0 0 16px black;
          background-color: #43434357;
          margin-bottom: 20px;

          span {
            width: 90%;
            font-size: 20px;
            font-weight: 600;
            color: #a6a6a6;
            margin: 5px 10px;
            text-align: center;
            word-wrap: break-word;
          }

          .lyric-activate {
            font-size: 28px;
            font-weight: 600;
            color: #ffffff;
          }
        }

        @media screen and (max-width: 620px) {
          .div-img {
            width: 300px;
            height: 300px;
          }
          .div-text {
            width: 90%;
            height: 500px;
            .div-text-geci {
              font-size: 20px;
              font-weight: 600;
            }
          }
        }
        @media screen and (min-width: 600px) and (max-width: 800px) {
          .div-img {
            width: 400px;
            height: 400px;
          }
          .div-text {
            width: 90%;
            height: 500px;
            .div-text-geci {
              font-size: 20px;
              font-weight: 600;
            }
          }
        }
        @media screen and (min-width: 800px) and (max-width: 1450px) {
          .div-img {
            width: 500px;
            height: 500px;
          }
          .div-text {
            width: 90%;
            height: 400px;
            .div-text-geci {
              font-size: 18px;
              font-weight: 600;
            }
          }
        }
        @media screen and (min-width: 1450px) {
          .div-img {
            width: 600px;
            height: 600px;
          }
        }
      }
    }
  }
  .neirong-data-button {
    width: 90vw;
    height: 30vw;
    background-color: rgba(214, 214, 214, 0.575);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 4vw;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    .btn-div-c {
      width: 45vw;
      height: 85%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .btn-div-r {
      width: calc(25% - 100px);
      height: 85%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
  }
}
</style>
