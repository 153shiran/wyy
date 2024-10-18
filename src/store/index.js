import { createPinia, defineStore } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export const usePlayListStore = defineStore("playList", {
  state: () => ({
    playList: [
      {
        al: {
          id: 3315233,
          name: "「3D奇妙听觉」自然声与轻音乐的融合",
          pic: 18448705602489630,
          picUrl:
            "https://p1.music.126.net/YBikSLBNAWZ-z_UClWWPyQ==/18448705602489632.jpg",
          pic_str: "18448705602489632",
        },
        id: 35032655,
      },
    ],
    playListIndex: 0, // 默认下标为0
    isbtnShow: true, // 暂停按钮显示
  }),
  actions: {
    // 你可以在这里定义 actions 来执行异步操作或修改状态
    updateIsbtnShow(value) {
      this.isbtnShow = value;
    },
  },
});

export * from "./countStore";
// eslint-disable-next-line import/no-cycle
export * from "./userStore";
export default pinia;
