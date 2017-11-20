var app = getApp()
Page({
  data: {

  },
  onLoad: function (options) {

    wx.showLoading({
      title: '加载中...',
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })

    var that = this

    wx.request({
      url: 'http://www.huanqiuxiaozhen.com/wemall/goods/inqGoodsByTypeBrand?brand=' + '16' + "&typeid=" + '2',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log('我的返回数据 = ');
        console.log(res);
        that.setData({
          list: res.data.data
        });

        wx.hideLoading()
      }
    })
    
  }

})