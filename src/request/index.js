import axios from "axios";
let service = axios.create({
  baseURL: "https://wangyiyunapi-gules.vercel.app/",
  timeout: 3000,
});
export default service;
