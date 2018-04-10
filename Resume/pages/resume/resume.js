// pages/resume/resume.js
const app = getApp()
var bmap = require('../../utils/bmap-wx.min.js');
var wxMarkerData = [];  //定位成功回调对象
Page({

  /**
   * 页面的初始数据
   */
  data: {
    office:'PHP开发工程师',
    infoicon: 'images/index1.png',
    addressicon: 'images/address.png',
    phoneicon: 'images/phone.png',
    emailicon: 'images/email.png',
    urlicon: 'images/url.png',
    infoinfo: '  女 22岁 2年工作经验',
    infophone: '  158 2793 5172',
    infoaddress: '  广东东莞市寮步镇',
    infoemail: '  zzhengjiayu@gmail.com',
    infourl: 'https://www.jianshu.com',
    skillicon:'images/dot.png',
    username:"郑佳宇",
    myphoto:'images/myphoto2.jpg',
    dataarray: [
      {
        theme: '个人技能',
        content: [
          { id: 1, item: '后\r\t\r\t\r\t端：PHP+C#'},
          { id: 2, item: 'PHP框架：THINKPHP+LARAVEL+OOP+MVC'},
          { id: 6, item: '服务器\r\t：NGINX+APPACHE' },
          { id: 0, item: '前\r\t\r\t\r\t端：HTML+CSS+JQUERY+JAVASCRIPT+BOOTSTRAP+AJAX+DOM'},
          { id: 3, item: '数据库\r\t：MYSQL'},
          { id: 4, item: 'IDE\r\t\r\t\r\t\r\t：LNMP+WAMP'},
          { id: 5, item: '接触过\r\t：PYTHON+MEMCACHED+REACT+MONGODB' },
          { id: 6, item: '工\r\t\r\t\r\t具：SVN+GIT' }
        ]
      },
      {
        theme: '自我描述',
        content: [
          { id: 1, item: '热爱编程'},
          { id: 2, item: '主攻后端（PHP+MYSQL）'},
          { id: 0, item: '对web前端比较了解'},
          { id: 3, item: '喜欢学习新技术，吸取优秀开源项目的编程思想'},
          { id: 3, item: '性格开朗，逻辑清晰，擅长沟通，适应能力强,能够快速容易开发团队，工作负责，抗压能力强' },
        ]
      },
      {
        theme: '荣誉证书',
        content: [
          { id: 1, item: '‘先电杯’云计算技术与应用三等奖（国赛高职组）'},
          { id: 2, item: '2016-06-01'},
        ]
      },
    ],
    prond:"‘先电杯’云计算技术与应用三等奖（国赛高职组）",
    prondtime:'2016-06-01',
    motto:"　人最宝贵的东西是生命,生命属于人只有一次。一个人的一生应该是这样度过的：当他回首往事的时候，他不会因为虚度年华而悔恨，也不会因为碌碌无为而羞耻；这样，在临死的时候，他就能够说：“我的整个生命和全部精力，都已经献给世界上最壮丽的事业——for coding。”",
    markers: [],
    latitude: '',
    longitude: '',
    rgcData: {},
    taokouling:"https://www.jianshu.com/u/e4fc161834c5",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  /**
   * 获取用户基本信息
   */
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 点击头像进行更换
   */
  chooseimg: function () {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        that.setData({ myphoto: res.tempFilePaths })
      },
    })
  },
  /**
   * 拨打电话
   */
  callphone:function(){
    wx.makePhoneCall({
      phoneNumber: '15827935172'
    })
  },
  /**
   * 调用地图定位
   */
  calladdress:function(){
    var that = this;
    var BMap = new bmap.BMapWX({
      ak: 'GqQ6r5QA4i8eGQbAghB9WHaIrbpvKs2R'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      wxMarkerData = data.wxMarkerData;
      console.log(wxMarkerData);
      wxMarkerData[0].latitude = 23.023623;
      wxMarkerData[0].longitude = 113.874842;
      wxMarkerData[0].address = "东莞嘉丰机电设备有限公司";
      console.log(wxMarkerData);
      wx.openLocation({
        latitude: wxMarkerData[0].latitude,
        longitude: wxMarkerData[0].longitude,
        name: wxMarkerData[0].address,
        scale: 28
      });  
    }
    BMap.regeocoding({
      fail: fail,
      success: success,
      iconPath: './images/marker_red.png',
      iconTapPath: './images/img/marker_red.png'
    });
  },
  /**
   * 复制简书链接
   */
  copyTBL: function (e) {
    var self = this;
    wx.setClipboardData({
      data: self.data.taokouling,
      success: function (res) {
        // self.setData({copyTip:true}),  
        wx.showModal({
          title: '提示',
          content: '复制成功',
          success: function (res) {
            if (res.confirm) {
              console.log('确定')
            } else if (res.cancel) {
              console.log('取消')
            }
          }
        });
      }
    });
  },
  /**
   * 复制邮箱地址
   */
  copyTBL2: function (e) {
    var self = this;
    wx.setClipboardData({
      data: self.data.infoemail,
      success: function (res) {
        // self.setData({copyTip:true}),  
        wx.showModal({
          title: '提示',
          content: '复制成功',
          success: function (res) {
            if (res.confirm) {
              console.log('确定')
            } else if (res.cancel) {
              console.log('取消')
            }
          }
        });
      }
    });
  }
})