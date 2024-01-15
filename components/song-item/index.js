// components/song-item/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    item: {
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
    songPlay() {
      const id = this.properties.item.id
      // console.log(id);
      wx.navigateTo({
        url: `/pages/music-player/index?id=${id}`
      })
    }
  }
})