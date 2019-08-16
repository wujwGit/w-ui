
Component({
  /**
   * 组件的属性列表
   * @param {string} icon 图标名称
   * @param {number} fontSize 图标大小
   * @param {string} color 图标颜色
   * @param {boolean} hidden 是否隐藏
   */
  properties: {
    icon: {
      type: String,
      value: '',
    },
    fontSize: {
      type: Number,
      value: 32
    },
    color: {
      type: String,
      value: ''
    },
    hidden: {
      type: Boolean,
      value: false
    },
  },
})
