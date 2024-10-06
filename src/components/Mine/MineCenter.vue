<template>
  <div class="flex items-center justify-center mt-20 flex-wrap" v-if="!isLogin">
    <div class="unLogin"></div>
    <a class="enter" @click="enter">please enter</a>
  </div>
  <div v-if="isLogin">
    个人中心
    {{ userInfo.userInfo }}
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// 导入状态管理仓库
import { useSongStore } from "@/Pinia/songStore";
// 导入用户信息库
import { useUserStore } from "@/Pinia/user";
// 导入获取用户信息接口
import { getUserInfo, getUserDetail } from "@/api/SignIn";
// 导入路由
import { useRouter } from "vue-router";

// 实例化路由
const router = useRouter();

// 储存用户信息
const userInfo = useUserStore();

// 定义状态
const songStore = useSongStore();

// 进入登陆页面
function enter() {
  router.push("/Login");
}

// 判断是否登录
const isLogin = ref(songStore.SignInType);

onMounted(() => {
  // 如果已经登录
  if (isLogin.value) {
    // 获取用户信息
    getUserInfo().then((res) => {
      console.log(res);
    });
  }
});
</script>

<style scoped>
.unLogin {
  width: 100vw;
  height: 80vw;
  background-image: url("@/assets/log.png");
  background-repeat: no-repeat;
  background-size: contain;
}
.enter {
  font-size: 10vw;
  font-family: "楷体";
  color: red;
}
</style>
