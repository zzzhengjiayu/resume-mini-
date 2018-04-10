// pages/work/work.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    work: [
      {
        company:'东莞嘉丰机电设备有限公司',
        worktime:'2017.04-至今',
        job:'PHP研发工程师',
        workcontent:[
          { id: 0, content: '该公司自主研发各种类型的自动贩卖机'},
          { id: 1, content: '主要负责饭团，饮料自动贩卖机国内版上位机软件（线下，商城）'},
          { id: 5, content: '编写软件前端样式' },
          { id: 3, content: '协助解决饭团，饮料自动贩卖机香港版软件问题'},
          { id: 4, content: '负责软件测试，编写测试文档，跟踪测试结果'},
          { id: 4, content: '编写项目相关文档，后台操作文档，饭团机软件使用文档，软件著作权等' },
          { id: 5, content: '除了UI界面图片整个项目都是一个人独立完成' }
        ],
        css:'div1'
      },
      {
        company: '武汉企秀网络科技有限公司',
        worktime: '2016.10-2017.04',
        job: 'PHP开发实习生',
        workcontent: [
          { id: 0, content: '该公司是一家针对企业需求量身定制开发软件的IT公司' },
          { id: 1, content: '主要负责微信开发app，网站二次开发' },
          { id: 3, content: '编写接口供Android调用' },
          { id: 5, content: '数据库设计' },
          { id: 4, content: '小组分工，模块化开发项目'}
        ],
        css: 'div2'
      }
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
        } else if (res.windowWidth <= 320 && res.windowWidth > 300) {
          that.setData({
            left: "37px",
            width: '250px'
          });
        } else if(res.windowWidth <= 300){
          that.setData({
            left: "28px",
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