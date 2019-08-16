import qrjs from './lib/index';
const app = getApp();
Component({
  /**
   * 组件的属性列表
   * @param {number} errorCorrectLevel 纠错级别
   * @param {number} width 宽度
   * @param {number} height  高度
   * @param {string} fgColor 前景颜色
   * @param {string} bgColor 背景颜色
   * @param {string} data 携带数据
   * @param {boolean} typeNumber 编码模式
   */
  properties: {
    errorCorrectLevel: {
      type: Number,
      value: 2,
      observer() { this.draw() },
    },
    width: {
      type: Number,
      value: 400,
      observer() {this.draw()},
    },
    height: {
      type: Number,
      value: 400,
      observer() { this.draw() },
    },
    fgColor: {
      type: String,
      value: 'black',
      observer() { this.draw() },
    },
    bgColor: {
      type: String,
      value: 'white',
      observer() { this.draw() },
    },
    data: {
      type: String,
      value: '',
      observer() { this.draw() },
    },
    typeNumber: {
      type: Number,
      value: -1,
      observer() { this.draw() },
    },
  },
  data:{
    canvasId: 'w-qrcode',
  },
  methods: {
    /**
     * 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中
     */
    draw(opts = {}) {
      opts.width = this.data.width * app.globalData.RPX;
      opts.height = this.data.height * app.globalData.RPX;
      const { typeNumber, errorCorrectLevel, width, height, fgColor, bgColor, canvasId, data } = Object.assign({}, this.data, opts)
      const qrcode = qrjs(data, { typeNumber, errorCorrectLevel})
      const cells = qrcode.modules
      const tileW = width / cells.length
      const tileH = height / cells.length

      this.ctx = this.ctx || wx.createCanvasContext(canvasId, this)
      this.ctx.scale(1, 1)
      cells.forEach((row, rdx) => {
          row.forEach((cell, cdx) => {
              this.ctx.setFillStyle(cell ? fgColor : bgColor)
              const w = (Math.ceil((cdx + 1) * tileW) - Math.floor(cdx * tileW))
              const h = (Math.ceil((rdx + 1) * tileH) - Math.floor(rdx * tileH))
              this.ctx.fillRect(Math.round(cdx * tileW), Math.round(rdx * tileH), w, h)
          })
      })
      this.ctx.draw()
    },
    /**
     * 点击
     */
    onClick() {
        this.triggerEvent('click')
    },
  },
  lifetimes: {
    attached: function () {
      this.draw()
    },
    detached: function () {
      this.ctx = null
    },
  },
})
