// pages/input/input.js
Page({
  data: {
    textContent:''
  },
  handleInput(event){
    console.log('用户输入内容',event)
    // console.log(event.detail.value)
    const content = event.detail.value
    this.setData({
      textContent:content
    })
  },
  handleFocus(event){
    // console.log('input获取焦点', event)
  },
  handleblur(event){
    // console.log('input失去焦点', event)
  }
})