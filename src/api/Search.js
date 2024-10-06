import axios from "axios";

// 搜索
// 必选参数: keywords: 关键词
// 可选参数: limit: 返回数量, 默认为 30 offset: 偏移数量，用于分页, 如 : 如: (页数 - 1) * 30, 其中 30 为 limit 的值, 默认为 0
// type: 搜索类型；默认为1， 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018: 综合, 2000: 声音(搜索声音返回字段格式会不一样)
export const reqSearch = (keywords, type = 1, limit = 30, offset = 0) =>
  axios.get(
    `/search?keywords=${keywords}&type=${type}&limit =${limit}&offset =${offset}`
  );

// 热搜列表(详细)
export const reqSearchHotDetail = () =>
  axios.get(`http://127.0.0.1:3000/search/hot/detail`);

// 搜索//keywords名称type类型，offset分页数
export const reqSearchlist = (keywords, type, limit, offset) =>
  axios.get(
    `http://127.0.0.1:3000/cloudsearch?keywords=${keywords}&type=${type}&limit =${limit}&offset=${offset}`
  );

// 搜索建议
export const Suggest = (params) => {
  return axios.get(`http://127.0.0.1:3000/search/suggest?keywords=${params}`);
};

// 获取单个歌曲的播放地址
export const GetSongUrl = (id) => {
  return axios.get(
    `http://127.0.0.1:3000/song/url/v1?realIP=116.25.146.17&id=${id}&level=standard`
  );
};

// 获取歌手单曲
export const GetSingerSong = (id) => {
  return axios.get(`/artists?id=${id}&realIP=116.25.146.17`);
};
