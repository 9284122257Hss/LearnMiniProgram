// pages/home/home.js
import request from '../../service/network.js'
Page({
  data: {},

  onLoad: function (options) {
    // 1.原生发送网络请求
    this.get_date_orign()
    // 2.使用封装的request发送网络请求
    request({
      url:"http://152.136.185.210:8000/api/n3/home/multidata"
    }).then(res =>{
      console.log(res)
    }).catch(err =>{
      console.log(err)
    })
  },
  get_date_orign(){
     // 发送网络请求
    // 1.发送最简单的get请求
    // wx.request({
    //   url: 'http://152.136.185.210:8000/api/n3/home/multidata',
    //   success:function(res){
    //     console.log(res)
    //   }
    // }),
    // 2.get请求，但是携带参数
    // wx.request({
    //   url: 'http://152.136.185.210:8000/api/n3/home/data',
    //   data:{
    //     type:'pop',
    //     page:1
    //   },
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
    // 3.post请求，并且携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method:'post',
    //   data:{
    //     name:'czz',
    //     age:18
    //   },
    //   success:function(res){
    //     console.log(res)
    //   },
    //   fail:function(err){
    //     console.log(err)
    //   }
    // })
  }
})