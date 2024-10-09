<template>
  <!-- 导航条 -->

  <div class="flex justify-between w-[100vw] navigate h-[6vw]">
    <!-- 图标 -->
    <div class="flex justify-around items-center" @click="toHome">
      <Icon
        icon="ri:netease-cloud-music-fill"
        width="5vw"
        height="5vw"
        style="color: #cc3333"
      />
      <div style="color: white">仿网易云音乐</div>
    </div>

    <!-- 搜索 -->
    <div class="searchIcon">
      <!-- 搜索图标 -->
      <Icon icon="ic:baseline-search" class="icon" @click="toSearch()" />
      <!-- 搜索框 -->
      <input
        type="text"
        v-model="searchValue"
        @keyup.enter="toSearch()"
        @focusin="gainFocus()"
        @blur="loseFocus()"
        @input="searchOnchange"
        placeholder="搜索： 歌曲 歌单 歌手 用户"
      />
    </div>

    <SearchPopup
      class="search-popup"
      v-show="isSearchFocus"
      :searchValue="searchValueTow"
    ></SearchPopup>

    <!-- 未登录 -->
    <div @click="userLog" v-if="!userStore.myCookie" class="mr-[10vw]">
      请登录
    </div>
    <!-- 我的 -->
    <div v-else style="cursor: pointer">
      <div @click="drawer = true">
        <img v-if="userStore.myProfile" :src="userStore.myProfile.avatarUrl" />
        <Icon icon="ph:user-fill" width="30" height="30" />
      </div>

      <el-drawer v-model="drawer" title="I am the title" :with-header="false">
        <UserManagement @closePage="drawerToFalse"></UserManagement>
      </el-drawer>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "@/Pinia/user";
import { useCounterStore } from "@/Pinia/counter";
import { ref, onMounted, reactive } from "vue";
import UserManagement from "./HomeComponents/UserManagement.vue";
import SearchPopup from "./Search/SearchPopup.vue";
import emitter from "@/plugins/bus";
import { Icon } from "@iconify/vue";

const router = useRouter();

// Pinia仓库
const userStore = useUserStore();
const counterStore = useCounterStore();

// 控制关闭el-drawer
let drawer = ref(false);
function drawerToFalse() {
  drawer.value = false;
}

// 防抖
let fangdou = reactive({
  time: null,
});

// 搜索内容
let searchValue = ref("");

// 搜索内容传给组件（不是搜索内容，搜索窗口展示）
let searchValueTow = ref("");

// 是否显示提示框
let isSearchFocus = ref(false);

// 获得焦点
function gainFocus() {
  isSearchFocus.value = true;
}

emitter.on("beFoSearch", (e) => {
  toSearch(e);
  isSearchFocus.value = false;
});
// 失去焦点
function loseFocus() {
  isSearchFocus.value = false;
}
// 内容发生改变.
function searchOnchange(e) {
  clearTimeout(fangdou.time);
  fangdou.time = setTimeout(() => {
    searchValueTow.value = e.srcElement.value;
  }, 700);
}
// 路由跳转
function toHome() {
  router.push({
    path: "/",
  });
}
function userLog() {
  router.push("/Login");
}

// 历史记录
let SearchHistory = reactive({
  data: ["z", "x"],
});
async function toSearch(item = searchValue.value) {
  if (item != "") {
    router.push({
      path: "/Search",
      query: {
        value: item,
      },
    });
    // 查找内容在数组中位置
    let a = SearchHistory.data.indexOf(item);
    //  把当前搜索的内容存在本地(单个)
    counterStore.SearchContent(item);
    // 先对比一下里面有没有相同的 有相同的先删除相同的 然后再添加当前这个
    //没有相同的
    if (a < 0) {
      // 添加当前搜索记录
      SearchHistory.data.push(item);
      // 如果数组大于10个 那么就删除第一个
      if (SearchHistory.data.length > 10) {
        SearchHistory.data.shift();
      }
      // 存储历史记录
      counterStore.StorageSearchHistory(SearchHistory.data);
    } else {
      SearchHistory.data.splice(a, 1); // 删除元素
      // 添加当前搜索记录
      SearchHistory.data.push(item);
      // 如果数组大于10个 那么就删除第一个
      if (SearchHistory.data.length > 10) {
        SearchHistory.data.shift();
      }
      // 存储历史记录
      counterStore.StorageSearchHistory(SearchHistory.data);
    }

    // 清除内容
    searchValue.value = "";
    searchValueTow.value = "";
  } else {
    alert("不能为空");
  }
}

onMounted(() => {
  SearchHistory.data = counterStore.SearchHistory;
});
</script>

<style lang="less" scoped>
.navigate {
  align-items: center;
  background-color: #333;
  font-size: 1vw;
  input {
    display: inline-block;
    width: 30vw;
    height: 3vw;
    border-radius: 5vw;
    padding-left: 3vw;
  }
  .searchIcon {
    position: relative;
    z-index: 2;
    .icon {
      width: 2vw;
      height: 2vw;
      position: absolute;
      top: 0.5vw;
      left: 1vw;
      cursor: pointer;
    }
  }
}
.search-popup {
  position: absolute;
  z-index: 1000;
  left: 35vw;
  top: 5vw;
}
</style>
