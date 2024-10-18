import http from "../request";

// eslint-disable-next-line import/prefer-default-export
// 手机号登录
export function getPhone(data, password) {
  return http({
    method: "GET",
    url: `/login/cellphone?phone=${data}&password=${password}`,
  });
}

// 发送验证码
export function getSendCaptcha(data) {
  return http({
    method: "GET",
    url: `/captcha/sent?phone=${data}`,
  });
}

// 验证验证码
export function getCaptcha(phone, verify) {
  return http({
    method: "GET",
    url: `/captcha/verify?phone=${phone}&captcha=${verify}`,
  });
}

// 游客登录
export function getCookie() {
  return http({
    method: "GET",
    url: "/register/anonimous",
  });
}

// 二维码key生成
export function createKey() {
  return http({
    method: "GET",
    url: "/login/qr/key",
  });
}

// 二维码生成
export function getKey(data) {
  return http({
    method: "GET",
    url: `/login/qr/create?key=${data}&qrimg=true`,
  });
}

// 二维码检测状态
export function getCheck(data) {
  return http({
    method: "GET",
    url: `/login/qr/check?key=${data}`,
  });
}

// 退出登录
export function getLogout() {
  return http({
    method: "GET",
    url: "/logout",
  });
}

// 登录状态
export function getStatus() {
  return http({
    method: "GET",
    url: "/login/status",
  });
}

// 获取用户详情
export function getUserDetail(data) {
  return http({
    method: "GET",
    url: `/user/detail?uid=${data}`,
  });
}

// 获取账号信息
export function getUserAccount() {
  return http({
    method: "GET",
    url: "/user/account",
  });
}
