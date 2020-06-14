// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'你好，小程序',
    firstName:'陈',
    lastName:'正正',
    age:16,
    nowTime:new Date().toLocaleString(),
    isActive:false,
    isShow:true,
    score:58,
    movies:['星际穿越','盗梦空间','大话西游'],
    nums:[
      [1,2,3,4,5],
      [6,7,8,9,10],
      [11,12,13,14,15],
      [16,17,18,19,20]
    ],
    letters:['a','b','c']
  },
  onLoad: function (options) {
    setInterval(() =>{
      this.setData({
        nowTime :new Date().toLocaleString()
      })
    },1000)
  },

  handleSwitchColor(){
    this.setData({
      isActive:!this.data.isActive
    }) 
  },
  handleSwitchShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  handleIncrement(){
    this.setData({
      score:this.data.score + 6
    })
  }
})