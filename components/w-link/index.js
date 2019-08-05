
Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   * @param {string} url   跳转页面的url
   * @param {string} type  跳转类型，类型有 
   *                        navigateTo:保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。
   *                        redirectTo:关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
   *                        switchTab:跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
   *                        reLaunch:关闭所有页面，打开到应用内的某个页面
   *                        navigateBack:关闭当前页面，返回上一页面或多级页面。
   * @param {number} delta   当linkType值为 navigateBack 时有效，表示返回页面层数(最多十层)
   * @param {boolean} disabled  禁用
   */
  properties: {
    url: {
      type: String,
      value: '',
    },
    type: {
      type: String,
      value: 'navigateTo',
    },
    delta: {
      type: Number,
      value: 1,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    linkClass:{
      type: String,
      value: '',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 页面跳转
     */
    toView() {
      const { url, type, delta, disabled } = this.data;
      const navigateMethods = [
        'navigateTo',
        'redirectTo',
        'switchTab',
        'reLaunch',
      ];
      if (disabled) return false;
      this.triggerEvent('onClick', {}, {});
      if (!url && type !== 'navigateBack') return false;
      if (!type) throw Error('type 不能为空');
      if (navigateMethods.indexOf(type) > -1) {
        if (!url) throw Error('url 不能为空');
        wx[type].call(wx, { url });
      } else if (type === 'navigateBack') {
        if (isNaN(Number(delta))) throw Error('type 类型为 navigateBack 时，delta必须为数字');
        wx[type].call(wx, { delta });
      } else {
        throw Error('无法匹配当前的 type 类型，请检查填写是否正确！');
      }
    },
  }
})
