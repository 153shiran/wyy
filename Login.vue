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
      // 通常在这里，你会添加代码来记录用户的同意，并可能重定向他们
    },
    declineTerms() {
      // 用户不同意条款和政策
      // 通常在这里，你会添加代码来处理用户的拒绝，例如重定向到另一个页面或显示一个错误消息
    },
  },
  mounted() {
    // 你可以在这里添加代码来检查用户是否已经同意过条款，如果是，则不显示弹出窗口
  },
};
</script>

<template>
  <div class="login-background">
    <!-- 弹出窗口 -->
    <div class="popup" v-if="showPopup">
      <div class="popup-content">
        <h2>服务条款和隐私政策</h2>
        <p>请阅读我们的服务条款和隐私政策。</p>
        <button @click="acceptTerms">同意</button>
        <button @click="declineTerms">不同意</button>
      </div>
    </div>

    <div class="scrollable-content" v-if="!showPopup">
      <div class="logo">
        <img class="bckimg" src="../../components/picture/wyylogin.png" alt="Login Logo" />
      </div>
      <div class="login-buttons">
        <button class="PhoneLogin">手机号登录</button>
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

/* 按钮样式 */
button {
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}
</style>