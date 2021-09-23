const url = require('../url/user.js');
const request = require('../request.js');

/**
 * 获取openid
 * @param {*} code 编号 
 */
function getOpenId(params) {
  return request.http(url.getOpenid, params, "get").then(request.checkStatus)
}
// 获取手机号
function getPhone(params) {
  return request.http(url.getPhone, params, "get").then(request.checkStatus)
}
// 用户登录
function login(params) {
  return request.http(url.login, params, "post", "application/json;charset=UTF-8").then(request.checkStatus)
}

module.exports = {
  getOpenId,
  login,
  getPhone
};

/**
 * 使用方式：
	const { getOpenId } = require('../../services/api/user')
	getOpenId({code:0000000}).then(res=>{
		this.setData({
		  openId: res.openId
		})
	})
 */
