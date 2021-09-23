const goToPage = {
  /* 保留当前页面，跳转到指定url页面，但是不能跳到带tabbar的页面 */
  pageGo: function (url, cb) {
      if (url) {
        wx.navigateTo({
            url: url,
            success() {
                cb && cb();
            },
            fail(e) {
                console.log(e);
            }
        });
      }
  },

  /* 跳转tabbar的页面 */
  pageTab: function (url, cb) {
      if (url) {
          wx.switchTab({
              url: url,
              success() {
                  cb && cb();
              }
          });
      }
  },

  /*关闭当前页面，跳转到指定url页面，但不允许跳转到tabbar的页面。*/
  pageSelf: function (url, cb) {
      if (url) {
          wx.redirectTo({
              url: url,
              success() {
                  cb && cb();
              }
          });
      }
  },

  /* 关闭所有页面，跳转到指定url页面 */
  pageReLaunch: function (url, cb) {
      if (url) {
          wx.reLaunch({
              url: url,
              success() {
                  cb && cb();
              }
          })
      }
  },

  /* 关闭页面层数，默认num = 1 */
  pageBack: function (num) {
      wx.navigateBack({
          delta: num || 1
      });
  },

}
module.exports = {
  goToPage
}

// 调用方式 function为页面跳转的回调函数，如不使用可不用定义
// goToPage.pageGo('/pages/search/search',function () {
//     console.log('eeeee')
// })