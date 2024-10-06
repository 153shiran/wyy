import { defineStore } from "pinia";
import { ref } from "vue";

// 这里存的都是歌曲有关
export const useSongStore = defineStore("songStore", {
  state: () => ({
    // 选择登录状态并判断是否登录
    SignInType: ref(false),
    // 是否正在搜索
    isSearching: ref(0),
    // 存储所有排行榜
    allRankingList: JSON.parse(localStorage.getItem("allRankingList")) || [],
  }),
  actions: {
    // 把歌单id存储在本地
    allRankingListToLocal(item = []) {
      localStorage.setItem("allRankingList", JSON.stringify(item));
      this.allRankingList = item;
    },
  },
  getters: {
    // 排行榜前四名
    allRankingListFirstFour(state) {
      let arr = state.allRankingList.splice(0, 4);
      return arr;
    },
  },
});
