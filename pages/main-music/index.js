import { getHotSongSheet, getSwper } from "../../servers/music";
import recommendStore from "../../store/recommendSongs";
import songMenuStore from "../../store/songMenus";
import { querySelect } from "../../utils/query-select";
import hythrottle from "../../utils/throttle";

// pages/main-music/index.js
const queryThrottle = hythrottle(querySelect)
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: "",
    banner: [],
    bannerHeight: 0,
    recommengInfo: [],
    ishidden: false,
    tags: [],
    Swidth: 375,
    recSongs: [],
    rankingInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 请求轮播图
    this.fetchGetSwiper()
    // 请求推荐歌曲
    // this.fetchGetRecomSongs()
    
    recommendStore.dispatch("fetchRecommendSongsAction")
    recommendStore.onState("recommendSongs", this.recommendData )
    
    // 热门歌曲
    this.fetchGetHotSongSheet()
    // 推荐歌曲
    this.fetchGetRecommendSong()
    // 获取屏幕信息
    this.setData({ Swidth: app.globalData.screenWidth})

    // 排行榜
    songMenuStore.dispatch("fetchGetRankAction")
    songMenuStore.onState("newSongs", this.newSongsData)
    songMenuStore.onState("originalSongs", this.originalSongsData)
    songMenuStore.onState("soarSongs", this.soarSongsData)

  },

// store 监听的数据
recommendData(value) {
  // console.log(value);
  if (!value.tracks) return
  this.setData({ recommengInfo: value.tracks.slice(0, 6)})
  this.setData({ishidden: true})
},
newSongsData(value) {
  const newRankingInfo = {...this.data.rankingInfo, newSongs:value}
  this.setData({ rankingInfo: newRankingInfo})
  this.setData({ishidden: true})
},
originalSongsData(value) {
  const newRankingInfo = {...this.data.rankingInfo, originalSongs:value}
  this.setData({ rankingInfo: newRankingInfo})
  this.setData({ishidden: true})
},
soarSongsData(value) {
  const newRankingInfo = {...this.data.rankingInfo, soarSongs:value}
  this.setData({ rankingInfo: newRankingInfo})
  this.setData({ishidden: true})
},
// 监听页面卸载
onUnload() {
  recommendStore.offState("recommendSongs", this.recommendData )
  songMenuStore.offState("newSongs", this.newSongsData)
  songMenuStore.offState("originalSongs", this.originalSongsData)
  songMenuStore.offState("soarSongs", this.soarSongsData)
},

  // 封装请求
  async fetchGetSwiper() {
    const res = await getSwper(0)
    // console.log(res);
    this.setData({ banner: res.banners})
  },
  // async fetchGetRecomSongs() {
  //   const res = await getRecomSongs()
  //   // console.log(res);
  //   const tracks = res.playlist.tracks.slice(0, 6)
  //   this.setData({ recommengInfo: tracks})
  // },
  // 事件监听
  async fetchGetHotSongSheet() {
    const res = await getHotSongSheet()
    // console.log(res);
    this.setData({ tags: res.playlists})
  },
  async fetchGetRecommendSong() {
    const res = await getHotSongSheet("华语", 6, 0)
    // console.log(res);
    this.setData({ recSongs: res.playlists})
  },
  // 事件监听
  onSearchHandle() {
    wx.navigateTo({
      url: '/pages/search-music/index',
    })
  },
  onImgLoad(event) {
    // 获取img组件的高度
    // const query = wx.createSelectorQuery()
    // query.select(".img").boundingClientRect()
    // query.exec((res) => {
    //   this.setData({ bannerHeight: res[0].height})
    // })
    queryThrottle(".img").then(res => {
      this.setData({ bannerHeight: res[0].height})
    })
  },
  moreMusic() {
    wx.navigateTo({
      url: '/pages/more-music/index?type=recommendSong',
    })
  },
  moreMenus() {
    wx.navigateTo({
      url: '/pages/more-menus/index',
    })
  }
  
})