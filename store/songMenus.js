import {HYEventStore} from "hy-event-store"
import { getRecomSongs } from "../servers/music";
const rankingMap = {
  newSongs:3779629,
  originalSongs: 2884035,
  soarSongs: 19723756
}
const songMenuStore = new HYEventStore({
  state: {
    newSongs: {},
    originalSongs: {},
    soarSongs: {}
  },
  actions: {
    fetchGetRankAction(ctx) {
      for (const key in rankingMap) {
        const id = rankingMap[key]
        getRecomSongs(id).then(res => {
          ctx[key] = res.playlist
        })
      }
    }
  }
})
export default songMenuStore