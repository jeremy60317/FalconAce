import moment from 'moment'

function diffDate(diffTime) {
  const momentNow = moment()
  const momentDiffTime = moment(diffTime)
  const year = momentNow.diff(momentDiffTime, 'y')
  if (year >= 1) {
    return `${year}年前`
  }
  const month = momentNow.diff(momentDiffTime, 'month')
  if (month >= 1) {
    return `${month}月前`
  }
  const day = momentNow.diff(momentDiffTime, 'd')
  if (day >= 1) {
    return `${day}天前`
  }
  const hour = momentNow.diff(momentDiffTime, 'h')
  if (hour >= 1) {
    return `${hour}小時前`
  }
  const min = momentNow.diff(momentDiffTime, 'm')
  if (min >= 1) {
    return `${min}分鐘前`
  }
  const sec = momentNow.diff(momentDiffTime, 's')
  if (sec >= 1) {
    return `${sec}秒前`
  }
}

export { diffDate }
