// pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '加载中ing',
      duration:3000,
      icon:'loading',
      // image:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592657873731&di=b82f528e7b3a3df9ff82445dce5c8f2d&imgtype=0&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D3843892960%2C4271081919%26fm%3D214%26gp%3D0.jpg'
      mask:true,
      success:function(){
        console.log('展示弹窗成功')
      },
      fail:function(){
        console.log('展示弹窗失败')
      },
      complete:function(){
        console.log('完成函数调用')
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title:'我是标题',
      content:'我是内容哈哈哈',
      success:function(res){
        console.log(res)
        if(res.cancel){
          console.log('用户点击了取消按钮')
        }
        if(res.confirm){
          console.log('用户点击了确定按钮')
        }
      },
      // showCancel:false
      cancelText:'退出',
      cancelColor:'red'
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: ' 加载ing',
      mask:true
    }),
    setTimeout(() =>{
      wx.hideLoading()
    },2000)
    
  },
  handleshowActionSheet(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor:'pink',
      success:function(res){
        console.log(res)
      }
    })
  },
  onShareAppMessage:function(options){
    return {
      title:'你好啊，陈正正',
      path:'/pages/about/about',
      imageUrl:'http://s11.mogucdn.com/mlcdn/c45406/180301_509b6ca365e3i1fiji2fk4kkaihd3_640x960.jpg_320x999.jpg'
    }
  }
})