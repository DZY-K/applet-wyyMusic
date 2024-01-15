// app.js
App({
  // 全局共享数据，但不会随着数据的改变而改变
  globalData: {
    screenWidth: 375,
    screenHeight: 667,
    statusHeight: 20
  },
  onLaunch() {
    // 获取屏幕信息
    wx.getSystemInfo({
      success : (res) => {
        // console.log(res);
        this.globalData.screenWidth = res.screenWidth
        this.globalData.screenHeight = res.screenHeight
        this.globalData.statusHeight = res.statusBarHeight
      }
    })
  }
})
