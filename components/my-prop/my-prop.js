// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 但是这样写没有默认值，所以开发时一般不用这种方法
    // title:String

    title:{
      type:String,
      value:"我是默认的标题",
      observer:function(newVal,oldVal){
        console.log(newVal,oldVal)
      }
    }
  },
  externalClasses:['titleclass']

})
