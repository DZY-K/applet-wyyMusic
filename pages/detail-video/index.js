import { getVideo, getVideoInfo, getTopMv } from "../../servers/voide"

// pages/detail-video/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    mvUrl: "",
    info: {},
    otherMv: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const newId = options.id
    this.setData({ id: newId })
    // 发送网络请求
    // mv视频
    this.fetchGetMv()
    // mv信息
    this.fetchGetMvInfo()
    // 其他mv
    this.fetchGetMvOther()
  },
  // 封装请求
  async fetchGetMv() {
    const res = await getVideo(this.data.id)
    this.setData({ mvUrl: res.data.url})
  },
  async fetchGetMvInfo() {
    const res = await getVideoInfo(this.data.id)
    // console.log(res);
    this.setData({ info: res.data})
  },
  async fetchGetMvOther() {
    const res = await getTopMv()
    const newData = res.data.slice(0, 5)
    this.setData({ otherMv: newData})
  }

  
})