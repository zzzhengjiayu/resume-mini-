// pages/project/project.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    project: [
      {
        name: '饭团，饮料自动贩卖机上位机软件程序',
        time: '2017.07-至今（维护）',
        pcontent: [
          { id: 5, content: '基于web开发' },
          { id: 0, content: '该软件主要是和下位机程序协助完成用户购买----->出货一系列动作' },
          { id: 1, content: '线下购买：点击商品后选择支付方式（微信/支付宝）,出货' },
          { id: 3, content: '线上购买：用户在公众号商城购买后在线下输入取货码或是扫二维码进行取货'            },
          { id: 4, content: '将机器状态上报给后台，方便维护人员对机器的维护' }
        ],
        css: 'div1',
        content2:[
          { id: 0, content: '与第三方公司进行接口对接' },
          { id: 1, content: '了解机器上位机和下位机沟通协议' },
          { id: 4, content: '制作程序流程图' },
          { id: 3, content: '开发整个上位机软件' },
          { id: 5, content: '对机器的操作进行log记录，并上传到百度云' },
          { id: 6, content: '对机器产生的log做分割，定时删除' },
        ],
        skill:'websocket,网络，浏览器限制,下载访问资源流量问题，原生php+js编写'
      },
      {
        name: '蔚蓝诊断',
        time: '2016.12-2017.04',
        pcontent: [
          { id: 0, content: '微信app开发' },
          { id: 1, content: '该项目是医院方便有特殊体检用户所设立的' },
          { id: 3, content: '总共分为5个角色：用户，采样人员，集散中心，检测中心，医生' },
          { id: 4, content: '项目逻辑：用户下单----->采样人员进行样本采集----->由集散中心（快递）送往检测机构----->对样本进行检验----->报告结果送往用户和医生，由医生跟用户进行解读' },
          { id: 4, content: '微信公众号搜索蔚蓝诊断即可了解' }
        ],
        css: 'div2',
        content2: [
          { id: 0, content: '负责开发角色为用户和采样人员模块功能' },
          { id: 1, content: '负责项目后台rbac功能开发' },
          { id: 3, content: '负责角色为用户和采样人员模块后台功能' },
        ],
        skill: '微信开发，thinkPHP框架'
      },
      {
        name: '地胶项目',
        time: '2017.01-2017.02',
        pcontent: [
          { id: 0, content: '微信app开发' },
          { id: 1, content: '对客户地胶产品进行展示' },
          { id: 3, content: '分为公司简介，产品介绍，案例展示几个部分来展示' },
          { id: 3, content: '微信公众号搜索新动力地胶即可了解' }
        ],
        css:'div3',
        content2: [
          { id: 0, content: '负责开发公司简介，产品介绍，案例展示页面' },
          { id: 1, content: '负责后台开发' },
          { id: 2, content: '负责数据库设计' },
        ],
        skill: '微信开发，thinkPHP框架'
      },
    ],
    icon:'images/dot.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowWidth);
        if (res.windowWidth >= 360 && res.windowWidth < 414) {
          that.setData({
            left: "29px",
            width: '323px'
          });
        } else if (res.windowWidth >= 414) {
          that.setData({
            left: "40px",
            width: '346px'
          });
        } else if (res.windowWidth <= 320){
          that.setData({
            left: "33px",
            width: '250px'
          });
        }
      }
    });
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
  
  }
})