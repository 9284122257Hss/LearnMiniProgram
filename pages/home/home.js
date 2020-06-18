// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    isShow:true
  },

  handleIncrement(event){
    console.log('+++++++++++',event)
    this.setData({
      count:this.data.count +1
    })
  },
  handleItemClick(event){
    console.log(event)
  },
  handleIncrement(){
    // 最终目的：修改my-sel组件中的count
    // 1.获取组件对象
    const my_sel = this.selectComponent('.sel-class')
    console.log(my_sel)

    // 2.通过setDate修改组件中的对象
    // my_sel.setData({
    //   count: my_sel.data.count +100
    // })

    // 3.通过方法对数据进行修改
    my_sel.incrementCount(10)
  },
  handleChangeShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  }
})