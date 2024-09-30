import http from "../request";
// 获取首页轮播图数据
export function getBanner() {
  return http({
    method: "GET",
    url: "banner?type=2",
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
