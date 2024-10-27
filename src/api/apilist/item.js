/* eslint-disable no-template-curly-in-string */
import http from "../request";

// eslint-disable-next-line import/prefer-default-export
// 获取歌单详情
export function getMusicItemList(id) {
  return http({
    method: "GET",
    url: `/playlist/detail?id=${id}`,
  });
}

// 获取歌单所有歌曲
export function getItemList(id) {
  return http({
    method: "GET",
    url: `/playlist/track/all?id=${id}&limit=50&offset=1`,
  });
}

// 获取歌曲的歌词
export function getMusicLyric(id) {
  return http({
    method: "GET",
    url: `/lyric/new?id=${id}`,
  });
}
