// pages/home/home.js
//getApp()获取App产生的实例对象 
// const app = getApp()

// const name = app.globalDate.name
// const age = app.globalDate.age

// 注册一个页面
// 每个页面也有自己的生命周期函数
Page({
  //------ 2. 初始化数据--------------
  data:{
    message:'哈哈哈',
    list:[]
  },
  handleGetUserInfo(event){
    console.log(event)
  },
  // ------ 1. 监听页面的生命周期函数--------------
  // 页面被加载出来
  onLoad(){
    console.log('onLoad')
    const _this=this
    wx.request({
      url: 'http://152.136.185.210:8000/api/n3/recommend',
      // success:(res)=>{
      //   console.log(res)
      //   const data = res.data.data.list;
      //   this.setData({
      //     list:data
      //   })
      // }
      success:function(res){
        const data=res.data.data.list
        _this.setData({
          list:data
        })
      }
    })
  },
  // 页面显示出来时
  onShow() {
    console.log('onShow')
  },
  // 页面初次渲染完成
  onReady() {
    console.log('onReady')
  },
  onHide(){
    console.log('onHide')
  },
  onUnload(){
    console.log('onUnLoad')
  },
//  ------------3.监听wxml中的一些事件---------------------
  handleGetUserInfo(event) {
    console.log(event)
  },
  handleViewClick(){
    console.log('哈哈哈哈被点击了')
  },
  // -------------4.监听其它事件---------------
  // 监听页面滚动
  onPageScroll(obj){
    // console.log(obj)
  },
  // 监听滚动到底部
  onReachBottom(){
    console.log('页面滚动到底部了')
  },
  // 监听下拉刷新
  onPullDownRefresh(){
    console.log('监听下拉刷新事件')
  }
})