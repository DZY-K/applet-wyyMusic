import { getTopMv } from "../../servers/voide"

// pages/main-video/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvList: [],
    offset: 0,
    hasMore: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.onGetMvList()
  },

  // 封装请求 得到mv数据 
  async onGetMvList() {
    wx.showLoading({
      title: '加载中',
    })
    const res = await getTopMv(20, this.data.offset)
    // console.log(res);
    // 追加数据
    const newMvList = [...this.data.mvList, ...res.data]
    this.setData({
      mvList: newMvList
    })
    this.data.offset = this.data.mvList.length
    this.data.hasMore = res.hasMore
    wx.hideLoading()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if(!this.data.hasMore) {
     return wx.showToast({
        title: '没有数据了',
        icon:'error',
        duration:500,
        mask:true   
      })
    }
    this.onGetMvList()
  },

  // 下拉刷新
  async onPullDownRefresh() {
    // 清除数据
    this.setData({mvList: []})
    this.data.offset = 0
    this.data.hasMore = true
    // 重新请求
    await this.onGetMvList()

    // 停止刷新
    wx.stopPullDownRefresh()
  }
})