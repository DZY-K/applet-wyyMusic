import { getHotSongSheet, getMenus } from "../../servers/music"

// pages/more-menus/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  this.fetchGetMenus()
  },
async fetchGetMenus() {
  const res = await getMenus()
  const tags = res.tags
  const newPromise = []
  for (const tag of tags) {
    const promise = getHotSongSheet(tag.name, 6, 0)
    // console.log(promise);
    newPromise.push(promise)
  }
  Promise.all(newPromise).then(res => {
   this.setData({ menuList: res})
  })
}
  
})