import { hyRequest } from "./index";

export function getTopMv(limit=20, offset=0) {
  return hyRequest.get({
    url: "top/mv",
    data: {
      limit,
      offset
    }
  })
}
export function getVideo(id) {
  return hyRequest.get({
    url: "mv/url",
    data: {
      id
    }
  })
}
export function getVideoInfo(mvid) {
  return hyRequest.get({
    url: "mv/detail",
    data: {
      mvid
    }
  })
}
export function getOtherVideo(id) {
  return hyRequest.get({
    url: "related/allvideo",
    data: {
      id
    }
  })
}