//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '美美&的的',
    userInfo: {}
  },
  //登录事件处理函数
  doLogin: function (e) {
    wx.reLaunch({
      url: '../mine/mine',
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
