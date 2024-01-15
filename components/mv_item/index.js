// components/mv_item/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    mvItem: {
      type: Object,
      value: {}
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
    clickImgHandle() {
      wx.navigateTo({
        url: `/pages/detail-video/index?id=${this.properties.mvItem.id}`,
      })
    }
  }
})