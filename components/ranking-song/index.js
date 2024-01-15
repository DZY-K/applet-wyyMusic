// components/ranking-song/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    rankingInfo: {
      type: Object,
      default: {}
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
    clickSkip(e) {
      const key = e.currentTarget.dataset.key
      // console.log(key);
      wx.navigateTo({
        url: `../../pages/more-music/index?type=ranking&key=${key}`
      })
    }
  }
})