<!-- eslint-disable vue/no-parsing-error -->

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

// eslint-disable-next-line import/no-cycle
import {
  getSendCaptcha,
  getCaptcha,
  getCookie,
  createKey,
  getKey,
  getCheck,
  getPhone,
} from "../api/apilist/login";

const checked = ref(["a"]);
const router = useRouter();

const phoneNumber = ref("");
const captcha = ref("");
const qrCodeUrl = ref("");
const phoneWord = ref("");

const inputActive = ref(false);
const checkActive = ref(false);
const showQRCode = ref(false);
const key = ref("");

function activateInput() {
  inputActive.value = true;
}
function checkKey() {
  checkActive.value = true;
}

// 扫码登录
const startLogin = async () => {
  try {
    // 生成二维码key
    const keyResponse = await createKey();
    // 储存key值
    key.value = keyResponse.data.data.unikey;
    console.log(key.value);

    // 生成二维码
    const qrCodeResponse = await getKey(key.value);
    console.log(qrCodeResponse, "base64");
    qrCodeUrl.value = qrCodeResponse.data.data.qrimg;
    showQRCode.value = true;

    // 查询扫码状态
    const checkLogin = async () => {
      const checkResponse = await getCheck(key.value);
      console.log(checkResponse.data);
      try {
        if (checkResponse.data.code === 803) {
          // 登录成功
          showQRCode.value = false;
          console.log("登录成功", checkResponse.data);
          router.push("/home");
        } else if (checkResponse.data.code === 800) {
          showQRCode.value = false;
          console.log("二维码过期");
        }
      } catch (error) {
        console.log("登录失败:", error);
      }
    };

    const intervalId = setInterval(checkLogin, 3000);

    // 停止查询;
    window.addEventListener("beforeunload", () => {
      clearInterval(intervalId);
    });
  } catch (error) {
    console.error("扫码登录失败:", error);
  }
};
// const state = ref("");
// onMounted(() => {
//   axios
//     .get(" https://wangyiyunapi-gules.vercel.app/user/account")
//     .then((res) => {
//       console.log(res);
//       state.value = res;
//       console.log(state.value);
//     });
// });

// 游客登录
const loginCookie = async () => {
  try {
    const resCookie = await getCookie();
    router.push("/home");
    console.log(resCookie);
  } catch (error) {
    console.error("游客登录失败:", error);
  }
};

// 手机发送验证码登录
const sendCaptcha = async () => {
  try {
    const response = await getSendCaptcha(phoneNumber.value);
    console.log(response);
  } catch (error) {
    console.error("发送验证码失败:", error);
  }
};

const login = async () => {
  try {
    const response = await getCaptcha(phoneNumber.value, captcha.value);
    console.log("登录成功:", response);
    router.push("/home");
  } catch (error) {
    console.error("登录失败:", error);
  }
};

// 手机密码登录
const phoneLogin = async () => {
  try {
    const response = await getPhone(phoneNumber.value, phoneWord.value);
    console.log("登录成功:", response);
    router.push("/home");
  } catch (error) {
    console.error("登录失败:", error);
  }
};

const checkLoginList = [startLogin, checkKey];
const phoneLoginList = [login, phoneLogin];
</script>
<template>
  <div class="loginBox">
    <div class="loginTop">
      <Icon
        icon="ri:netease-cloud-music-line"
        width="96"
        height="96"
        style="color: white"
        class="icon"
      />
    </div>
    <div class="loginCount">
      <div class="loginCountBtn">
        <button
          class="btnOne btn"
          v-show="!inputActive && !checkActive"
          @click="activateInput"
        >
          手机号登录</button
        ><br />
        <button
          class="btnOne btn"
          v-show="!inputActive && !checkActive"
          @click="checkLoginList"
        >
          扫码登录
        </button>
        <div v-show="!inputActive && checkActive && showQRCode">
          <div class="checkKey">
            <img :src="qrCodeUrl" alt="QR Code" />
          </div>
          <div>
            <p class="checkText">请使用网易云音乐手机客户端扫码登录</p>
          </div>
        </div>

        <input
          class="phoneInput"
          type="text"
          v-show="inputActive"
          v-model="phoneNumber"
          placeholder="+86|请输入手机号"
        /><br />
        <input
          type="password"
          class="phoneInput btn"
          v-show="inputActive"
          v-model="phoneWord"
          placeholder="请输入密码"
        /><br />
        <input
          class="phoneInput btn"
          v-show="inputActive"
          type="text"
          v-model="captcha"
          placeholder="请输入验证码"
        />

        <button
          class="btnTwo btn"
          v-show="!inputActive && !checkActive"
          @click="loginCookie"
        >
          立即体验</button
        ><br />
        <button class="btnTwo btn" v-show="inputActive" @click="sendCaptcha">
          获取验证码</button
        ><br />

        <button class="btnTwo btn" v-show="inputActive" @click="phoneLoginList">
          立即登录
        </button>
      </div>
    </div>
    <div class="loginFoot">
      <div class="footIcon">
        <Icon
          icon="ic:baseline-wechat"
          width="48"
          height="48"
          style="color: white"
          class="icon"
        />
        <Icon
          icon="mingcute:qq-fill"
          width="48"
          height="48"
          style="color: white"
          class="icon"
        />
        <Icon
          icon="ant-design:weibo-outlined"
          width="48"
          height="48"
          style="color: white"
          class="icon"
        />
        <Icon
          icon="material-symbols-light:mail"
          width="48"
          height="48"
          style="color: white"
          class="icon"
        />
      </div>
    </div>
    <div class="footText">
      <van-checkbox-group v-model="checked" shape="square">
        <van-checkbox name="a">同意</van-checkbox>
      </van-checkbox-group>

      <div>《用户协议》《隐私政策》《儿童隐私政策》</div>
    </div>
  </div>
</template>
<style scoped>
.loginBox {
  width: 100%;
  min-height: 100vh;
  background-color: rgb(248, 97, 97);
  /* flex: 1; */
}
.btnOne {
  width: 300px;
  height: 60px;
  background-color: #fff;
  color: rgb(248, 97, 97);
  line-height: 60px;
  text-align: center;
  border-radius: 30px;
}
.phoneInput {
  width: 300px;
  height: 60px;
  border: 1px solid #fff;
  border-radius: 30px;
}
.btnTwo {
  width: 300px;
  height: 60px;
  background-color: rgb(248, 97, 97);
  color: #fff;
  line-height: 60px;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 35px;
}

.loginTop {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.loginTop .icon {
  margin-top: 180px;
  margin-bottom: 200px;
}
.loginCount {
  width: 100%;
  display: flex;
  justify-content: center;
}
.checkKey {
  display: flex;
  justify-content: center;
}
.checkText {
  margin-top: 15px;
  font-size: 24px;
  color: #fff;
}
.checkKey img {
  width: 340px;
  height: 340px;
}
.btn {
  margin-top: 20px;
}
.loginFoot {
  width: 100%;
}
.footIcon {
  display: flex;
  margin: 60px 50px;
  justify-content: space-around;
}
.footIcon .icon {
  width: 48px;
  height: 48px;
  border: 1px solid #fff;
  border-radius: 50%;
}
.footText {
  font-size: 14px;
  display: flex;
  justify-content: center;
  color: #fff;
  padding-bottom: 30px;
}
</style>
