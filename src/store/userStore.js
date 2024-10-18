/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { defineStore } from "pinia";
import to from "await-to-js";
// eslint-disable-next-line import/no-cycle
import { loginByPhone } from "@/api";
import router from "@/router";

export const useUserStore = defineStore("user", {
  state() {
    return {
      userInfo: null,
    };
  },
  getters: {
    cookie(state) {
      return state.userInfo?.cookie;
    },
  },
  actions: {
    async userLogin(data) {
      const [err, res] = await to(loginByPhone(data));
      if (err) {
        console.error("登录错误:", err);
      } else if (res) {
        this.userInfo = res.data;
        router.replace("/my");
      }
    },
  },
  persist: true,
});
