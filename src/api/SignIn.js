import axios from "axios";

// 手机号登录
export const signInNumber = (phone, verify, number) => {
  return axios({
    url: `http://127.0.0.1:3000http://127.0.0.1:3000/login/cellphone?phone=${phone}&${verify}=${number}`,
    method: "POST",
  });
};

// 获取验证码
export const getVerify = (Number) => {
  return axios.get(`http://127.0.0.1:3000/captcha/sent?phone=${Number}`);
};

// 调用二维码key生成接口
export const getQrcode = () => {
  return axios.get("http://127.0.0.1:3000/login/qr/key");
};

// 生成二维码
export const signInQrcode = (key) => {
  return axios.get(`http://127.0.0.1:3000/login/qr/create?key=${key}&qrimg=1`);
};

// 注册请求
export const checkRegister = (phone, password, captcha, nickname) => {
  return axios({
    url: `http://127.0.0.1:3000http://127.0.0.1:3000/register/cellphone?phone=${phone}&password=${password}&captcha=${captcha}&&nickname=${nickname}`,
    method: "post",
  });
};

// 获取用户信息
export const getUserInfo = () => {
  return axios.get("http://127.0.0.1:3000/user/account");
};

// 获取用户详情
export const getUserDetail = (uid) => {
  return axios.get(`http://127.0.0.1:3000/user/detail?uid=${uid}`);
};

//登录状态
export const reqLogState = () =>
  axios.get(`http://127.0.0.1:3000/login/status`);

// 退出登录
export const reqLogOut = () => axios.get(`http://127.0.0.1:3000/logout`);

// 手机号登录
export const reqPhoneLog = (phone, password) =>
  axios.get(
    `http://127.0.0.1:3000/login/cellphone?phone=${phone}&password=${password}`
  );

// 手机验证码登录
export const reqPhoneCodeLog = (phone, captcha) =>
  axios.get(
    `http://127.0.0.1:3000/login/cellphone?phone=${phone}&captcha=${captcha}`
  );

// 发送验证码
export const reqSendPhoneCodeLog = (phone) =>
  axios.get(`http://127.0.0.1:3000/captcha/sent?phone=${phone}`);

// 邮箱登录
export const reqEmailLog = (email, password) =>
  axios.get(`http://127.0.0.1:3000/login?email=${email}&password=${password}`);

// 游客登录
export const reqAnonimous = () =>
  axios.get(
    `http://127.0.0.1:3000/register/anonimous?timestamp=${+new Date()}&noCookie=true`
  );

// 登录状态
export const reqUserLogState = () =>
  axios.get(`http://127.0.0.1:3000/login/status`);

// 退出登录
export const reqUserLogOut = () => axios.get(`http://127.0.0.1:3000/logout`);

// 刷新登录状态
export const reqNewLogState = () =>
  axios.get(`http://127.0.0.1:3000/login/refresh`);

// 获取用户播放记录
export const reqUserPlayRecord = (uid, type = 1) =>
  axios.get(`http://127.0.0.1:3000/user/record?uid=${uid}&type=${type}`);

// 获取用户详情
export const reqUserDetails = (uid) =>
  axios.get(`http://127.0.0.1:3000/user/detail?uid=${uid}`);

// 1. 二维码 key 生成接口
export const reqQrKey = () =>
  axios.get(
    `http://127.0.0.1:3000/login/qr/key?timestamp=${+new Date()}&noCookie=true`
  );

// 2. 二维码生成接口
export const reqQrCreate = (key) =>
  axios.get(
    `http://127.0.0.1:3000/login/qr/create?key=${key}&qrimg=true&timestamp=${+new Date()}&noCookie=true`
  );

// 3. 二维码检测扫码状态接口
export const reqQrCheck = (key) =>
  axios.get(
    `http://127.0.0.1:3000/login/qr/check?key=${key}&timestamp=${+new Date()}&noCookie=true`
  );

// 获取账号信息
export const reqUserAccount = () =>
  axios.get(`http://127.0.0.1:3000/user/account`);

// 获取用户信息 , 歌单，收藏，mv, dj 数量
export const reqUserSubcount = () =>
  axios.get(`http://127.0.0.1:3000/user/subcount`);
// 获取用户等级信息
export const reqUserLevel = () => axios.get(`http://127.0.0.1:3000/user/level`);

// 获取用户关注列表
export const reqUserFollows = (uid, limit = 30, offset = 0) =>
  axios.get(
    `http://127.0.0.1:3000/user/follows?uid=${uid}&limit=${limit}&offset=${offset}`
  );

// 获取用户粉丝列表
export const reqUserFolloweds = (uid, limit = 30, offset = 0) =>
  axios.get(
    `http://127.0.0.1:3000/user/followeds?uid=${uid}&limit=${limit}&offset=${offset}`
  );

// 获取 VIP 信息
export const reqVipInfo = (uid) =>
  axios.get(`http://127.0.0.1:3000/vip/info?uid=${uid}`);

// 获取 VIP 信息(app端)
export const reqVipInfoV2 = (uid) =>
  axios.get(`http://127.0.0.1:3000/vip/info/v2?uid=${uid}`);

// 获取用户动态
export const reqUserEvent = (uid, limit = 30, lasttime = -1) =>
  axios.get(
    `http://127.0.0.1:3000/user/event?uid=${uid}&limit=${limit}&lasttime=${lasttime}`
  );

// 根据id获取用户歌单
export const reqUserPlaylist = (uid) =>
  axios.get(`http://127.0.0.1:3000/user/playlist?uid=${uid}`);

// 关注or取消关注 用户 t=1关注
export const reqFollow = (id, t) =>
  axios.get(`http://127.0.0.1:3000/follow?id=${id}&t=${t}`);

//签到  type: 签到类型 , 默认 0, 其中 0 为安卓端签到 ,1 为 web/PC 签到
export const reqDailySignin = (type = 0) =>
  axios.get(`http://127.0.0.1:3000/daily_signin?type=${type} `);

//乐签信息
export const reqHappyInfo = () =>
  axios.get(`http://127.0.0.1:3000/sign/happy/info`);

//云贝签到
export const reqYunbeiSignin = () =>
  axios.get(`http://127.0.0.1:3000/yunbei/sign`);

//云贝签到信息
export const reqYunbeiInfo = () =>
  axios.get(`http://127.0.0.1:3000/yunbei/info`);
