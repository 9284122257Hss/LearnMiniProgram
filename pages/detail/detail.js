// pages/detail/detail.js
Page({

  /**
   * 生命周期函数--监听页面加载
   */
  data:{
    
  },
  onLoad: function (options) {
    console.log(options)
  },
  onUnload(){
    // 获取首页的页面对象
    // 1.getCurrentPages返回当前所有活跃的页面
     const pages=getCurrentPages()
     const home = pages[pages.length -2]

    //  2.调用页面对象的方法
    home.setData({
      title:"呵呵呵"
    })
    
  },
  handlePushMain(){
    wx.navigateBack({
      delta:1
    })
  }

})