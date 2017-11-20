// pages/home/index.js

var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftTableArray : [],
    rightTableArray : [],
    sectionIndex : 0,
    rowIndex : 0,
    imagesArray: ['', '', '', '',],
    itemsArray: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/goodstype/typebrandList',
      method: 'GET',
      data: {},
      header : {
        'Accept' : 'application/json',
      },
      success : function (responseData) {
        console.log(responseData)
        // wx.setStorageSync('homeData', responseData)
      }
    })
  
  },

})