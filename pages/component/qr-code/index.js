const app = getApp(); //全局app
Page({
  data: {
    fgColor: 'black',
  },
  onLoad() {

  },
  bindinput(e) {
    const value = e.detail.value
    const fgColor = this.randomColor()
    this.setData({
      value,
      fgColor,
    })
  },
  previewImage() {
    const that = this.selectComponent('#qrcode')
    wx.canvasToTempFilePath({
      canvasId: 'w-qrcode',
      success: (res) => {
        console.log(res.tempFilePath);
        wx.previewImage({
          urls: [res.tempFilePath]
        })
      }
    }, that)
  },
  randomColor() {
    const colorStr = Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase()
    const length = colorStr.length
    const prefixStr = `000000`.substring(0, 6 - colorStr.length)
    return `#${prefixStr}${colorStr}`
  },
})