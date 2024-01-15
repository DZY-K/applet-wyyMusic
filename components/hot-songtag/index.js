// components/hot-songtag/index.js

Component({

  /**
   * 组件的属性列表
   */

  properties: {
    songData: {
      type: Array,
      default: []
    },
    Swidth: {
      type: Number,
      default: 375
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
    menuSkip(e) {
      const id = e.currentTarget.dataset.id
      // console.log(id);
      wx.navigateTo({
        url: `/pages/more-music/index?type=menuSong&ids=${id}`,
      })
    }
  }
})