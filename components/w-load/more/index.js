
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    height: {
      type: Number,
      value: 100
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow:false,
    infoClass:"loading"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //提示:加载中
    show: function () {
      this.setData({
        isShow: true,
        infoClass: "loading",
      });
    },
    //提示:我们是有底线的
    showOver: function () {
      this.setData({
        isShow: true,
        infoClass: "over",
      });
    },
    /*提示:没有更多了*/
    showNone: function () {
      this.setData({
        isShow: true,
        infoClass: "none",
      });
    },
    hide: function () {
      this.setData({
        isShow: false
      });
    },
  }
})
