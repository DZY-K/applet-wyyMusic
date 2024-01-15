export function parseLyric(params) {
  const newLyric = []
  const lyricArray = params.split("\n")
  const timeRe = /\[(\d{2}):(\d{2})\.(\d{2, 3})\]/
  for (const item of lyricArray) {
    const timeResult = timeRe.exec(item)
    if(!timeResult) continue
    const minuteTime = timeResult[1] * 60 * 1000
    const secondTime = timeResult[2] * 1000
    const mSecond = timeResult[3] === 3 ? timeResult[3] * 1 : timeResult[3] * 10
    const allTime = minuteTime + secondTime + mSecond
    const content = item.replace(timeRe, "").trim()
    newLyric.push({allTime, content})
  }
  return newLyric
}