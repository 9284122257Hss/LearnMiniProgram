// pages/home/home.js
Page({

  data: {
    titles:[' 衣服','裤子','鞋子']
  },

  handleBtnClick(){
    console.log('按钮发生点击')
  },
  
  handleTouchStart(){
    console.log('handleTouchStart')
  },

  handleTouchMove(){
    console.log('handleTouchMove')
  },

  handleTouchEnd(){
    console.log('handleTouchEnd')
  },

  handleTag(){
    console.log('handleTag')
  },

  handleLongPress(){
    console.log('handleLongPress')
  },

  handleEventClick(event){
    console.log('ddddddddd',event)
  },

  handleEventEnd(event){
    console.log('+++++++++++++',event)
  },

  handleInner(event){
    console.log('ssssssssssss',event)
  },

  handleOuter(event){
    console.log('llllllllllll',event)
  },

  handleItemClick(event){
    console.log(event)
    const dataset = event.currentTarget.dataset
    const title = dataset.item
    const index = dataset.index
    console.log(title, index)
  },

  // 事件冒泡和事件捕获
  handleCaptureView1(){
    console.log("handleCaptureView1")
  },

  handleTapView1(){
    console.log("handleTapView1")
  },

  handleCaptureView2(){
    console.log("handleCaptureView2")
  },

  handleTapView2(){
    console.log("handleTapView1")
  },

  handleCaptureView3(){
    console.log("handleCaptureView3")
  },

  handleTapView3(){
    console.log("handleTapView3")
  },
})

