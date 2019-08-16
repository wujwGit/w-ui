import { Loading } from '../../../components/index'
Page({
  data: {},
  onShow: function () {},
  layer(){
    Loading.layer();
    setTimeout(() => {
      Loading.hideLayer();
    }, 1000);
  },
  more(){
    Loading.more();
    setTimeout(() => {
      Loading.moreNone();
      setTimeout(() => {
        Loading.moreOver();
        setTimeout(() => {
          Loading.hideMore();
        }, 1000);
      }, 1000);
    }, 1000);
  }
})