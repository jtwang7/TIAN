/** 个位数补齐十位数 */
function setTimeDateFmt(s: number): string {
  return s < 10 ? '0' + s : '' + s;
}

/** 日期+6位随机数 */
export default function randomNumber(): string {
  const now = new Date()
  let nMonth = now.getMonth() + 1
  let nDay = now.getDate()
  let nHour = now.getHours()
  let nMinutes = now.getMinutes()
  let nSeconds = now.getSeconds()
  let month = setTimeDateFmt(nMonth)
  let day = setTimeDateFmt(nDay)
  let hour = setTimeDateFmt(nHour)
  let minutes = setTimeDateFmt(nMinutes)
  let seconds = setTimeDateFmt(nSeconds)
  let orderCode = now.getFullYear().toString() + month.toString() + day + hour + minutes + seconds + (Math.round(Math.random() * 1000000)).toString();
  return orderCode;
}
