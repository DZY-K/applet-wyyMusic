export function querySelect(params) {
  return new Promise(resolve => {
    const query = wx.createSelectorQuery()
    query.select(params).boundingClientRect()
    query.exec((res) => {
      resolve(res)
    })
  })
}