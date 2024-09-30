<script>
export default {
  data() {
    return {
      showPopup: true, // 控制弹出窗口的显示
    };
  },
  methods: {
    acceptTerms() {
      // 用户同意条款和政策
      this.showPopup = false;
      // 记录用户的同意
      // 可能需要添加代码来重定向用户或记录同意状态
    },
    declineTerms() {
      // 用户不同意条款和政策
      // 处理用户的拒绝，例如重定向到另一个页面或显示一个错误消息
      window.location.href = '../HelloWorld.vue';
    },
    goToPhoneLogin() {
      // 跳转到手机号登录页面
      this.$router.push({ name: 'PhoneLogin' });
    }
  },
  mounted() {
    // 检查用户是否已经同意过条款，如果是，则不显示弹出窗口
    // 可能需要添加代码来检查本地存储或会话存储中的状态
  },
};
</script>

<template>
  <div class="login-background">
    <!-- 弹出窗口 -->
    <div class="popup" v-if="showPopup">
      <div class="popup-content">
        <h2>服务条款和隐私政策提示</h2>
        <p>欢迎使用网易云音乐</p><br>
        <p>在您使用网易云前，请您认真阅读并了解《服务条款》和《隐私政策》。</p><br>
        <p>如您未满14周岁，您还需通知您的监护人共同阅读《儿童隐私政策》，点击“同意”即表示您和您的监护人已阅读并同意全部条款</p>
        <button @click="acceptTerms" class="act">同意</button>
        <div @click="declineTerms" class="dlt">不同意并退出App>></div>
      </div>
    </div>

    <div class="scrollable-content" v-if="!showPopup">
      <div class="logo">
        <img class="bckimg" src="../../components/picture/wyylogin.png" alt="Login Logo" />
      </div>
      <div class="login-buttons">
        <button @click="goToPhoneLogin" class="PhoneLogin">手机号登录</button>
        <button class="ExperienceNow">立即体验</button>
      </div>
    </div>
  </div>
</template>

<style>
html, body {
  overflow: hidden;
  margin: 0;
  height: 100%;
}

.login-background {
  background-color: rgb(216,60,52);
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scrollable-content {
  overflow-y: auto;
  height: 100vh;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Align content to the bottom */
  padding-bottom: 20vh; /* Add padding at the bottom to push buttons down */
}

.logo {
  width: 100%;
  text-align: center; /* Center the image horizontally */
  margin-bottom: 30vh; /* Add space between the image and buttons */
}

.logo img {
  width: 20vw;
  height: 10vh; /* Maintain aspect ratio */
  border-radius: 50%; /* Make the image circular */
  background-color: white; /* Set the background color of the image to white */
}

.login-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px; /* Add some space between buttons */
}

.PhoneLogin {
  width: 60vw;
  height: 5.5vh;
  border-radius: 50px;
  border: none;
  color: red;
  font-size: 19px;
  background-color: white;
  transition: background-color 0.3s ease;
}

.PhoneLogin:hover {
  background-color: #f0f0f0;
}

.ExperienceNow {
  width: 60vw;
  height: 5.5vh;
  margin-top: 10.5px;
  border-radius: 50px;
  border: 1px solid white;
  color: white;
  font-size: 19px;
  background-color: rgb(216,60,52);
  transition: background-color 0.3s ease;
}

.ExperienceNow:hover {
  background-color: #a34949;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明背景 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 400px; /* 弹出窗口的最大宽度 */
  text-align: center;
}

.popup-content p {
  margin-bottom: 0px; /* 减少<p>标签的外边距 */
}

.popup-content br {
  line-height: 0px; /* 调整<br>标签的行高 */
}

.popup-content p::after {
  content: '\A';
  white-space: pre;
}
/* 按钮样式 */


button:hover {
  opacity: 0.9;
}

.act {
  width: 70vw;
  height: 4.5vh;
  margin-top: 10px;
  background-color: rgb(216,60,52);
  border: none;
  border-radius: 20px;
  font-size: 17px;
  color: white;
}

.dlt {
  color: blue;
  margin-top: 10px;
  cursor: pointer;
}

.dlt:focus {
  outline: none;
}
</style>