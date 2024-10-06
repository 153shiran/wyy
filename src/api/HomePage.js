import axios from "axios";

// 按需导出
export const getHomePageData = () =>
  axios.get("http://127.0.0.1:3000/homepage/block/page").catch((err) => {
    console.log(err);
  });
export const getHomePageMenu = () =>
  axios.get("http://127.0.0.1:3000/homepage/dragon/ball").catch((err) => {
    console.log(err);
  });
