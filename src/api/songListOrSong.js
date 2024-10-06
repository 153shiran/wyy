import axios from "axios";

// 热门歌单分类
export const reqRemengGedan = () =>
  axios.get(`http://127.0.0.1:3000/playlist/hot`);

// 获取精品歌单
export const reqCompetitiveGedan = (sum, cat) =>
  axios.get(
    `http://127.0.0.1:3000/top/playlist/highquality?limit=${sum}&cat= ${cat}`
  );

// 获取歌单详情 能获取歌单里的歌
export const reqSongListDetail = (id) =>
  axios.get(
    `http://127.0.0.1:3000/playlist/detail?id=${id}&timestamp=${+new Date()}`
  );

// 获取歌曲详情
export const reqSongDetail = (id) =>
  axios.get(`http://127.0.0.1:3000/song/detail?ids=${id}`);

// 歌单评论  可选参数 : limit: 取出评论数量 , 默认为 20 ,offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
export const reqSongListComment = (id, limit = 20, offset = 1) =>
  axios.get(
    `http://127.0.0.1:3000/comment/playlist?id=${id}&limit=${limit}&offset=${offset}`
  );

// 歌曲评论  可选参数 : limit: 取出评论数量 , 默认为 20 ,offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
export const reqSongComment = (id, limit = 20, offset = 1) =>
  axios.get(
    `http://127.0.0.1:3000/comment/music?id=${id}&limit=${limit}&offset=${offset}`
  );

// 获取音乐 url
export const reqSongUrl = (id) =>
  axios.get(`http://127.0.0.1:3000/song/url/v1?id=${id}&level=standard`);

// 获取歌词
export const reqLyric = (id) =>
  axios.get(`http://127.0.0.1:3000/lyric?id=${id}`);

// 所有榜单
export const reqToplist = () => axios.get(`http://127.0.0.1:3000/toplist`);

// 最近播放歌曲
export const reqRecordRecent = (limit) =>
  axios.get(`http://127.0.0.1:3000/record/recent/song?limit=${limit}`);

// 我的喜欢
export const reqUserLike = (uid) =>
  axios.get(`http://127.0.0.1:3000/likelist?uid=${uid}`);

// 获取用户歌单
export const reqUserPlaylist = (uid, limit = 30, offset = 0) =>
  axios.get(
    `http://127.0.0.1:3000/user/playlist?uid=${uid}&limit=${limit}&offset=${offset}`
  );

// 云盘数据详情
export const reqUserCloud = (songid) =>
  axios.get(`http://127.0.0.1:3000/user/cloud/detail?id=${songid}`);

// 已购单曲
export const reqSongPurchased = (limit = 30, offset = 0) =>
  axios.get(
    `http://127.0.0.1:3000/song/purchased?limit=${limit}&offset=${offset}`
  );

// 获取每日推荐歌曲
export const reqRecommendSongs = () =>
  axios.get(`http://127.0.0.1:3000/recommend/songs`);

// 获取专辑内容
export const reqAlbumList = (id) =>
  axios.get(`http://127.0.0.1:3000/album?id=${id}`);
