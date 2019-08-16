// pages/component/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 搜索
   */
  search(e){
    var {key,type} = e.detail;
    console.log(key, "====", type);
  },
  /**
   * 返回
   */
  back(e){
    var { back } =e.detail;
    
  },
  /**
   * 聚焦
   */
  focus(){

  },
})