
Page({

  data: {
    options: [{
      title: '全部',
      value: '000',
    },{
      title: 'iPhone 3GS',
      value: '001',
    }, {
      title: 'iPhone 5',
      value: '002',
    }, {
      title: 'iPhone 5S',
      value: '003',
    }, {
      title: 'iPhone 6',
      value: '004',
    }, {
      title: 'iPhone 6S',
      value: '005',
    }, {
      title: 'iPhone 6P',
      value: '006',
    }, {
      title: 'iPhone 6SP',
      value: '007',
    }, {
      title: 'iPhone SE',
      value: '008',
    }, {
      title: 'iPhone 7',
      value: '009',
    }],
    checkedValue:"",
    dropDown:false,
  },
  onShow: function () {
    this.setData({
      checkedValue: this.data.options[0].value,
    })
  },
  /**
   * 选中值改变
   */
  onSelectChange(e){
    var { value } = e.currentTarget.dataset;
    this.setData({
      checkedValue: value,
      dropDown:false
    })
    console.log(value);
  },
  /**
   * 弹窗关闭下拉框
   */
  dropDown(e){
    var { dropDown } = e.currentTarget.dataset;
    this.setData({
      dropDown
    })
  }
})