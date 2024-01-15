import { hyRequest } from "./index";
// 轮播图
export function getSwper(type = 0) {
  return hyRequest.get({
    url: "banner",
    data: {
      type
    }
  })
}
// 推荐歌曲
export function getRecomSongs(id = 3778678) {
  return hyRequest.get({
    url: "playlist/detail",
    data: {
      id
    }
  })
}
// 热门歌单
export function getHotSongSheet(cat = "全部", limit = 6, offset = 0 ) {
  return hyRequest.get({
    url: "top/playlist",
   data: {
     cat,
     limit,
     offset
   }
  })
}
// 歌单分类
export function getMenus() {
  return hyRequest.get({
    url: "playlist/hot"
  })
}