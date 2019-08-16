Component({
  options: {
    // multipleSlots: true,
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   * @param {string} prefixIcon 图标前缀
   * @param {string} icon 图标
   * @param {string} content 提示内容
   * @param {string} iconClass 图标样式
   * @param {string} textClass 文本样式
   * @param {string} iconColor 图标颜色
   * @param {string} textColor 文本颜色
   * @param {number} iconSize 图标字体大小
   * @param {number} textSize 文本字体大小
   * @param {string} imgUrl 图片url
   * @param {number} imgWidth 图片宽
   * @param {number} imgHeight 图片高
   * @param {number} topHeight 相对中间的高度
   * @param {boolean} show 是否显示
   */
  properties: {
    prefixIcon: {
      type: String,
      value: 'iconfont'
    },
    icon:{
      type: String,
      value: 'icon-wushuju4'
    },
    content: {
      type: String,
      value: '还没有此类数据呢'
    },
    iconClass:{
      type: String,
      value: ''
    },
    textClass: {
      type: String,
      value: ''
    },
    iconColor: {
      type: String,
      value: '',
      observer(val) {
        var value = "color:"+val+";";
        this.setIconStyle(value);
      }
    },
    textColor: {
      type: String,
      value: '',
      observer(val) {
        var value = "color:" + val + ";";
        this.setTextStyle(value);
      }
    },
    iconSize: {
      type: Number,
      value: 0,
      observer(val) {
        var value = "font-size:" + val + "rpx;";
        this.setIconStyle(value);
      }
    },
    textSize: {
      type: Number,
      value: 0,
      observer(val) {
        var value = "font-size:" + val + "rpx;";
        this.setTextStyle(value);
      }
    },
    imgUrl: {
      type: String,
      value: ""
    },
    imgWidth: {
      type: Number,
      value: 300
    },
    imgHeight: {
      type: Number,
      value: 300
    },
    marginTop:{
      type: Number,
      value: -250
    },
    show:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    iconStyle:'',
    textStyle:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setIconStyle(value){
      var iconStyle = this.data.iconStyle;
      iconStyle += value;
      this.setData({ iconStyle });
    },
    setTextStyle(value){
      var textStyle = this.data.textStyle;
      textStyle += value;
      this.setData({ textStyle });
    },
    show(options = {}) {
      this.setData({ show: true, ...options });
    },
    hide() {
      this.setData({ show: false });
    }

  },
})


