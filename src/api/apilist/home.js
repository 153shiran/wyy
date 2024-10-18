import http from "../request";
// 获取首页轮播图数据
export function getBanner() {
  return http({
    method: "GET",
    url: "banner",
  });
}

// Icon图标数据
export function getIconList() {
  return http({
    method: "GET",
    url: "/homepage/block/page",
  });
}

// 推荐歌单
export function getMusicList() {
  return http({
    method: "GET",
    url: "/personalized?limit=10",
  });
}

// 排行榜
export function getRanking() {
  return http({
    method: "GET",
    url: "http://localhost:3000/toplist/detail",
  });
}

// 新歌新碟
export function getAlbums() {
  return http({
    method: "GET",
    url: "http://localhost:3000/homepage/block/page",
  });
}
