const app = getApp();

const base_uri = app.globalData.serverUri;

module.exports = {
  getOpenid: base_uri + '/app/weixin', // 登录获取openid
  login: base_uri + '/app/login', // 登录获取openid
  getPhone: base_uri + '/app/decrypt', // 获取手机号
  getUserInfo: base_uri + '/user/details/', // 获取用户信息
};
