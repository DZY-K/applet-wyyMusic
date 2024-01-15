// components/title-more/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      default: "默认标题"
    },
    isMore: {
      type: Boolean,
      default: true
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
    clickMoreHandle() {
      this.triggerEvent("moreclick")
    }
  }
})