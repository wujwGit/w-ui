var util = require('../../../utils/util.js');
var app = getApp()
Page({

  data: {
    hide_good_box: true,
  },
  onLoad() {
    this.busPos = {};
    this.busPos['x'] = app.globalData.Windows.width - 290;
    this.busPos['y'] = app.globalData.Windows.height;
  },
 
  /*************************加入购物车动画开始****************************/
  touchOnGoods: function (e) {
    this.finger = {}; 
    var topPoint = {};
    this.finger['x'] = e.touches["0"].clientX;
    this.finger['y'] = e.touches["0"].clientY;

    if (this.finger['y'] < this.busPos['y']) {
      topPoint['y'] = this.finger['y'] - 150;
    } else {
      topPoint['y'] = this.busPos['y'] - 150;
    }

    if (this.finger['x'] > this.busPos['x']) {
      topPoint['x'] = (this.finger['x'] - this.busPos['x']) / 2 + this.busPos['x'];
    } else {
      topPoint['x'] = (this.busPos['x'] - this.finger['x']) / 2 + this.finger['x'];
    }
    console.log(this.busPos, topPoint, this.finger);
    this.linePos = util.bezier([this.busPos, topPoint, this.finger], 30);
    this.startAnimation();
  },
  startAnimation: function () {
    var index = 0, that = this,
      bezier_points = that.linePos['bezier_points'];
    this.setData({
      hide_good_box: false,
      bus_x: that.finger['x'],
      bus_y: that.finger['y']
    })
    index = bezier_points.length;
    this.timer = setInterval(function () {
      index--;
      that.setData({
        bus_x: bezier_points[index]['x'],
        bus_y: bezier_points[index]['y']
      })
      if (index < 1) {
        clearInterval(that.timer);
        that.setData({
          hide_good_box: true
        })
      }
    }, 33);
  },
/*************************加入购物车动画结束****************************/
})