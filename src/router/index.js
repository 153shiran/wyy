import { createRouter, createWebHashHistory } from "vue-router";

const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home/HomePage.vue"),
    },
    {
      path: "/Login",
      name: "Login",
      component: () => import("@/views/Login/Login.vue"),
    },
    {
      // 专辑页面
      path: "/Collection/:id",
      name: "Collection",
      component: () => import("@/views/Collection.vue"),
      props: true,
    },
    {
      // 歌曲详情+id
      path: "/songdetails/:songId",
      name: "SongDetailsId",
      component: () => import("@/views/Search/SongListDetails.vue"),
      props: true,
    },
    {
      // 歌单详情
      path: "/songlistdetails/:songListId",
      name: "SongListDetails",
      component: () => import("@/views/Search/SongListDetails.vue"),
      props: true,
    },
    {
      // 歌曲详情
      path: "/songdetails",
      name: "SongDetails",
      component: () => import("@/views/Search/SongDetails.vue"),
      props: true,
    },
    {
      // 搜索页面
      path: "/Search",
      name: "Search",
      component: () => import("@/views/Search/Search.vue"),
      props: true,
    },
    // 播放器页面
    {
      path: "/mediaplayer",
      name: "MediaPlayer",
      component: () => import("@/views/MediaPlayer.vue"),
      props: true,
    },
  ],
});

export default routes;
