import { Loading } from '../../../components/index'

Page({
  data: {},
  onLoad() { this.showNoData()},
  showNoData() {
    Loading.none();
  },
})