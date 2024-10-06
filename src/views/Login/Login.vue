<template>
  <div>
    <div class="tital" @click="goHome">Sign In</div>
    <div class="flex justify-center mt-5">
      <img src="@/assets/log.png" />
    </div>
    <!-- 手机验证码登录 -->
    <div class="mt-10 ml-5" v-if="signInType == 1">
      <div class="mb-2">
        手机号:<input type="text" v-model="getKeyCode.number" />
      </div>
      <div>
        验证码:<input type="text" v-model="getKeyCode.verify" />
        <span class="ml-2">
          <button @click="getVerifyCode">获取验证码</button>
        </span>
      </div>
    </div>
    <!-- 邮箱密码登录 -->
    <div class="mt-10 ml-10" v-if="signInType == 2">
      <div class="mb-2">
        邮箱:<input type="text" v-model="getKeyCode.number" />
      </div>
      <div class="mb-2">
        密码:<input type="password" v-model="getKeyCode.verify" />
      </div>
    </div>
    <!-- 二维码登录 -->
    <div class="flex justify-center mt-10 align-center" v-if="signInType == 3">
      <img :src="qrCodeImg" />
    </div>
    <!-- 注册逻辑 -->
    <div class="mt-10 ml-10 register" v-if="signInType == 5">
      <div class="mb-2">
        昵称:
        <div>
          <input type="text" v-model="getRegisterInfo.name" />
        </div>
      </div>
      <div class="mb-2">
        手机号码:
        <div>
          <input type="text" v-model="getRegisterInfo.number" />
        </div>
      </div>
      <div class="mb-2">
        密码:
        <div>
          <input type="password" v-model="getRegisterInfo.password" />
        </div>
      </div>
      <div class="mb-2">
        确认密码:
        <div>
          <input type="password" v-module="getRegisterInfo.confirmPassword" />
        </div>
      </div>
      <div>
        验证码:
        <div>
          <input type="text" v-model="getRegisterInfo.verify" />
          <button @click="getVerifyCode" class="ml-2">获取验证码</button>
        </div>
      </div>
    </div>
    <hr class="mt-8" />
    <!-- 进行选择 -->
    <div class="flex justify-around">
      <a v-if="signInType != 1"><u @click="changeSignInType(1)">手机登录</u></a>
      <a v-if="signInType != 2"><u @click="changeSignInType(2)">邮箱登录</u></a>
      <a v-if="signInType != 3"
        ><u @click="[changeSignInType(3), getQrCodeImg()]">扫码登录</u></a
      >
      <a v-if="signInType != 4"><u @click="changeSignInType(4)">游客登录</u></a>
      <a v-if="signInType != 5"><u @click="changeSignInType(5)">注册</u></a>
    </div>
    <div class="flex justify-center align-center mt-10" v-if="signInType != 3">
      <button
        class="SignIn"
        :disabled="!getKeyCode.number && !getKeyCode.verify"
        @click="login"
        v-if="signInType != 5"
      >
        Enter
      </button>
      <button
        class="SignIn"
        :disabled="
          !getRegisterInfo.name &&
          !getRegisterInfo.number &&
          !getRegisterInfo.password &&
          !getRegisterInfo.confirmPassword &&
          !getRegisterInfo.verify
        "
        @click="Register"
        v-if="signInType == 5"
      >
        Register
      </button>
    </div>
  </div>
</template>

<script setup>
// 引入路由
import { useRouter } from "vue-router";
// 引入后端请求
import {
  signInNumber,
  getVerify,
  getQrcode,
  signInQrcode,
  checkRegister,
} from "@/api/SignIn";
import { ref } from "vue";
// 导入状态管理仓库
import { useSongStore } from "@/Pinia/songStore";

// 实例化状态管理仓库
const songStore = useSongStore();
// 定义登录方式变量;
let signInType = ref(1);
// 定义二维码图片路径;
let qrCodeImg = ref("");
// 获取手机号验证码
let getKeyCode = ref({
  number: "",
  verify: "",
});
// 获取注册信息
let getRegisterInfo = ref({
  name: "",
  number: "",
  password: "",
  confirmPassword: "",
  verify: "",
});
// 定义路由
const router = useRouter();

// 回到首页
function goHome() {
  router.push("/");
}

// 定义获取验证码函数
function getVerifyCode() {
  getVerify(getKeyCode.value.number).then((res) => {
    console.log(res);
  });
}

// 定义获取二维码图片路径函数
function getQrCodeImg() {
  // 获取获取二维码的key值
  getQrcode().then((res) => {
    // 获取二维码路径
    signInQrcode(res.data.data.unikey).then((item) => {
      qrCodeImg.value = item.data.data.qrimg;
    });
  });
}

// 定义改变登录方式的函数
function changeSignInType(type) {
  signInType.value = type;
  if (type == 4) {
    // 游客登录
    songStore.SignInType = false;
    // 回到首页
    router.push("/");
  }
}

// 定义注册函数
function Register() {
  if (
    getRegisterInfo.value.password === getRegisterInfo.value.confirmPassword
  ) {
    alert("两次密码不一致");
  } else {
    // 调用注册接口
    checkRegister(
      getRegisterInfo.value.number,
      getRegisterInfo.value.password,
      getRegisterInfo.value.verify,
      getRegisterInfo.value.name
    ).then((res) => {
      console.log(res);
    });
  }
}

// 定义登录函数
function login() {
  if (signInType.value == 1) {
    //如果是手机验证码登陆
    signInNumber(getKeyCode.value.number, "captcha", getKeyCode.value.verify)
      .then((res) => {
        // 改变登录状态
        songStore.SignInType = true;
        //  保存cookie到sessionStorage
        sessionStorage.setItem("cookie", res.data.cookie);
        // 回到首页
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (signInType.value == 2) {
    //如果是邮箱密码登陆
    signInNumber(getKeyCode.value.number, "password", getKeyCode.value.verify)
      .then((res) => {
        // 改变登录状态
        songStore.SignInType = true;
        //  保存cookie到sessionStorage
        sessionStorage.setItem("cookie", res.data.cookie);
        // 回到首页
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
</script>

<style scoped>
.tital {
  font-size: 9vw;
  padding: 10vw 0 2vw 5vw;
  color: white;
  background-color: black;
}
button {
  border: 0.1vw solid gray;
  padding: 1.5vw;
}
.SignIn {
  background-color: #ea1818;
  color: white;
  width: 75vw;
  height: 10vw;
  border-radius: 5vw;
  cursor: pointer;
  font-size: 5vw;
}
.justify-around {
  width: 70vw;
  margin: auto;
  font-size: 4vw;
}
input {
  display: inline-block;
  border: 0.1vw solid black;
  border-radius: 9vw;
}
</style>
