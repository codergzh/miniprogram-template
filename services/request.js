/**
 * 封装微信请求
 */
function http (url, data = {}, method = "POST", header = "application/x-www-form-urlencoded") {
    wx.showLoading({
        title: '加载中...',
    });
    return new Promise(function (resolve, reject) {
        wx.request({
            url: url,
            data: data,
            method: method,
            header: {
                'Content-Type': header,
                'Authorization': wx.getStorageSync('token')
            },
            success: function (res) {
                if (res.header.Authorization) {
                    wx.setStorageSync('token', res.header.Authorization);
                }
                wx.hideLoading();
                if (res.statusCode == 200) {
                    resolve(res.data);
                } else {
                    reject(res.errMsg);
                }
            },
            fail: function (err) {
                reject(err)
            }
        })
    });
}
/**
 * 公共校验请求状态
 * @param   { Object } res
 * @return  { Object }
 */
function checkStatus (res) {    
	if (res.code === 200) {
        return res.data
    } else {
        wx.showToast({
            title: res.msg,
            icon: 'none',
        })
    }
}

module.exports = {
    request,
	checkStatus
}