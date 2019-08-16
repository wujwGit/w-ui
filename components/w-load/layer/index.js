Component({
  /**
   * 组件的属性列表
   * @param {boolean} isPointer 是否可进行事件穿透
   * @param {number} diaphaneity 遮掩层不透明度
   * @param {string} bgColor 背景颜色
   * @param {number} bottom  底部留出高度
   * @param {number} top  顶部留出高度
   */
  properties: {
    isPointer: {
      type: Boolean,
      value: false,
      observer(newVal) {
        let p = "auto";
        if (newVal){
          p ="none";
        }
        this.setData({
          pointerEvents: p
        });
      }
    },
    diaphaneity: {
      type: Number,
      value: 0
    },
    bottom:{
      type:Number,
      value:100
    },
    top: {
      type: Number,
      value: 0
    },
    bgColor:{
      type:String,
      value:"#fff"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow:false,//是否显示
    pointerEvents: "auto",//事件穿透 auto 不可穿透，none可穿透
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show:function(){
      this.setData({
        isShow: true
      });
    },
    hide:function(){
      this.setData({
        isShow: false
      });
    },
  },
})
