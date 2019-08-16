//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
        this.globalData.Windows = { 
                        width: e.windowWidth, 
                        height: e.windowHeight,
                        statusBarHeight: e.statusBarHeight};
        this.globalData.RPX = wx.getSystemInfoSync().windowWidth / 750;
        // console.log(custom);
        // console.log(e);
      }
    })
  },
  globalData: {
    userInfo: null
  }
})