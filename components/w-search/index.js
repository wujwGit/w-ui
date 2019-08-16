const app = getApp();
Component({
  /**
   * 组件的属性列表
   * @param {boolean} show 是否显示历史记录面板
   * @param {number} historyMax 最大历史记录数
   * @param {boolean} focus 输入框是否聚焦
   * @param {string} placeholder 输入框占位符
   * @param {array} recommend 推荐搜索标签
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    historyMax:{
      type: Number,
      value: 10
    },
    focus:{
      type:Boolean,
      value:false
    },
    placeholder:{
      type:String,
      value:"搜索",
    },
    recommend:{
      type: Array,
      value: [],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    key: '',
    historyKeys: [],
    statusBarHeight: app.globalData.StatusBar,
    customBar: app.globalData.CustomBar,
    titleBarHeight: app.globalData.CustomBar - app.globalData.StatusBar,
    titleRight: app.globalData.Windows.width - app.globalData.Custom.left,
    back: false,
    recordSearch: "",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 显示历史记录标签
     */
    show(){
      var search_key = wx.getStorageSync('search_key');
      var historyKeys = search_key ? search_key : [];
      this.setData({ historyKeys, show: true });
      this.triggerEvent('focus');
      if (!this.isload) {
        this.data.back = true;
      }
    },
    /**
     * 点击返回按钮
     */
    onBack(e){
      if (!this.data.back) {
        wx.navigateBack({ delta: 1 })
      }
      this.triggerEvent('back', { back: !this.data.back});
      this.setData({ 
        show: false ,
        key: this.data.recordSearch,
        showClear: this.data.recordSearch && this.data.recordSearch.length>0
      });
      this.data.back = false;
    },
    /**
     * 搜索条件
     */
    searchValue:"",
    searchkey: function (e) {
      var showClear= false;
      this.searchValue = e.detail.value
      if (e.detail.value){
        showClear=true
      }
      this.setData({ showClear })
    },
    /**
     * 清除搜索框值
     */
    clearSearch(){
      this.setData({
        key:"",
        showClear:false
      })
    },
    /**
      * 搜索
      */
    search: function () {
      var key = this.searchValue;//this.data.key;
      this.data.recordSearch=key;
      this.triggerEvent('search', { type: 'input', key: key });
      if (key && key.length > 0) {
        this.addHistory(key);
      } else {
        this.setData({ show: false })
      }
      this.data.back = false;
      this.isload = false;
    },
    /**
     * 通过key记录搜索
     */
    toNav: function (e) {
      var key = e.target.dataset.key;
      var type = e.target.dataset.type;
      this.data.recordSearch = key;
      this.setData({ key, showClear: true});
      this.triggerEvent('search', { key,type });
      this.addHistory(key);
      this.data.back = false;
      this.isload = false;
    },
    /**
     * 清除历史搜索
     */
    delKey: function () {
      var _this = this;
      wx.removeStorage({
        key: 'search_key',
        success(res) {
          _this.setData({ historyKeys: [] });
        }
      })
    },
    /**
     * 添加历史搜索
     */
    addHistory(value) {
      var historyKeys = this.data.historyKeys;
      let arrnum = historyKeys.indexOf(value);
      if (arrnum != -1) {
        historyKeys.splice(arrnum, 1);
      }
      historyKeys.unshift(value);
      if (historyKeys.length > this.data.historyMax) {
        historyKeys.pop();
      }
      wx.setStorage({
        key: "search_key",
        data: historyKeys
      })
      this.setData({
        show:false,
      })
    }
  },
  isload: false,
  pageLifetimes: {
    show: function () {
      if(this.data.focus)this.isload = true;
    }
  }
})
