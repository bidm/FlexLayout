var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagesArray : [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',      
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    contentArray : ['',''],
    listArray: ['', '', '', '']
  },
  swiperItemClick:function(event) {
    // wx.showToast('点击了');
    // wx.showActionSheet({
    //   itemList: ['哈哈哈'],
    // })

    // wx.showActionSheet({
    //   itemList: ['哈哈哈','嘿嘿😝'],
    //   itemColor: 'red',
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })

    console.log('点击了轮播图');
    wx.navigateTo({
      url: '../../pages/audio/index',
    })
  },

  contentItemClick : function (e) {
    console.log('点击了content');
    wx.navigateTo({
      url: '../../pages/video/index',
    })
  },
  listItemClick : function(e) {
    console.log('点击了list');
    wx.navigateTo({
      url: '../../pages/camera/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    // wx.navigateTo({
    //   url: '../../pages/camera/index',
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
  }
  
})