import { getRecomSongs } from "../../servers/music"
import recommendStore from "../../store/recommendSongs"
import songMenuStore from "../../store/songMenus"
// pages/more-music/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // moreMusic: []
    type: "menuSong",
    key: "newSongs",
    songMenuData: {},
    id: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const type = options.type
    this.setData({type: type})
    if( type === "ranking"){
      const key = options.key
      this.data.key = key
      songMenuStore.onState(key, this.songMenuInfo)
    }else if(type === "recommendSong"){
      recommendStore.onState("recommendSongs", this.moreMusicInfo)
    }else if(type === "menuSong") {
      const id = options.ids
      // console.log(id);
      this.data.id = id
      this.fetchGetMenuSong()
    }
  },
// 网络请求
async fetchGetMenuSong() {
  const res = await getRecomSongs(this.data.id)
  // console.log(res);
  this.setData({songMenuData: res.playlist})
  wx.setNavigationBarTitle({
    title: res.playlist.name,
  })
},
  // 获取数据
  moreMusicInfo(value) {
    if (this.data.type === "recommendSongs") {
      value.name = "推荐歌曲"
    }
    // console.log(value);
    this.setData({songMenuData: value})
    wx.setNavigationBarTitle({
      title: value.name,
    })
  },
  songMenuInfo(value) {
    
    this.setData({songMenuData: value})
    wx.setNavigationBarTitle({
      title: value.name,
    })
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    // recommendStore.offState("recommendSongs", this.moreMusicInfo)
    if(this.data.type === "ranking") {
      songMenuStore.offState(this.data.key, this.songMenuInfo)
    }else if(this.data.type === "recommendSong"){
      recommendStore.offState("recommendSongs", this.moreMusicInfo)
    }
  }
})