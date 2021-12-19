const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

/**
 * 函数节流
 * 
 * 使用场景: 
 * 1、滚动事件，每隔 n 秒计算一次位置信息
 * 2、用户无论 n 秒内点击多少次，只会请求一次
 * 3、input框实时搜索并发送请求展示列表，每隔 n 秒发送一次请求
 * 
 * 使用： 
   onhandle: tool.throttle(function(res){
      console.log(res[0].scrollTop)
      //结果： 减少函数的触发频率，每隔多少ms就执行一次函数
   }),
 */
function throttle(fn, interval) {
  var enterTime = 0; // 触发的时间
  var gapTime = interval || 300 ; // 间隔时间，如果interval不传，则默认300ms
  return function() {
    var context = this;
    var backTime = new Date();//第一次函数return即触发的时间
    if (backTime - enterTime > gapTime) {
      fn.call(context,...arguments);
      enterTime = backTime;//赋值给第一次触发的时间，这样就保存了第二次触发的时间
    }
  };
}

/**
 * 函数防抖 
 * 
 * 使用场景:
 * 1、避免用户点击过快，导致产生多次请求
 * 2、搜索时，用户无任何输入后等 n 秒再请求接口
 * 3、多次触发滚动到底部的监听，只会执行一次
 * 4、窗口大小resize，只需要调整完成后，计算窗口大小，防止重复渲染
 * 
 * 使用： 
 * onhandle: tool.debounce(function(res) {
      console.log(res[0].scrollTop)
      //结果： 延迟函数执行，不管触发多少次都只执行最后一次。
   }),
 */
function debounce(fn, interval) {
  var timer;
  var gapTime = interval || 200; // 间隔时间，如果interval不传，则默认1000ms
  return function() {
    clearTimeout(timer);
    var context = this;
    var args = arguments; // 保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
    timer = setTimeout(function() {
      fn.call(context,...args);
    }, gapTime);
  };
}

module.exports = {
  formatTime,
  throttle,
  debounce,
}
