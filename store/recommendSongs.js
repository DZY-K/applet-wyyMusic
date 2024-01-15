import {HYEventStore} from "hy-event-store"
import { getRecomSongs } from "../servers/music"
const recommendStore = new HYEventStore({
  state: {
    recommendSongs: {}
  },
  actions: {
    fetchRecommendSongsAction(ctx) {
      getRecomSongs().then(res => {
        ctx.recommendSongs = res.playlist
      })
    }
  }
})
export default recommendStore