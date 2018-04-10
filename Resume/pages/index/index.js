//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    myphoto:null,
    userInfo: {},
    office:'PHP开发工程师',
    info:'images/index1.png',
    address:'images/address.png',
    phone:'images/phone.png',
    email:'images/email.png',
    url:'images/url.png',
    infoone:'  女 22岁 2年工作经验',
    infophone:'  158 2793 5172',
    addressinfo:'  广东东莞市寮步镇',
    emailinfo:'  zzhengjiayu@gmail.com',
    urlinfo:'  https://www.jianshu.com/u/e4fc161834c5',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  chooseimg:function(){
    var that = this
    wx.chooseImage({
      count:1,
      sizeType:['compressed'],
      sourceType:['album','camera'],
      success: function(res) {
        that.setData({myphoto:res.tempFilePaths})
      },
    })
  }
})
