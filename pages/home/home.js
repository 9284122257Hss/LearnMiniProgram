Page({
  data:{
    name:'Czz',
    age:18,
    students:[
      {id:1,name:'hss',age:20},
      {id:2,name:'fcc',age:19},
      {id:3,name:'wcy',age:25},
      {id:4,name:'dlrb',age:28}
    ],
    count:0
  },
  // methods:{

  // }
  Add(){
    //1.错误做法，数据会改变但是界面并不会跟着刷新的
    // this.data.count++
    // console.log(this.data.count)
    // console.log('++++++++')

    //2.this.setData()
    this.setData({
      count:this.data.count+1
    })
  },
  Del(){
    this.setData({
      count:this.data.count-1
    })
  }
})