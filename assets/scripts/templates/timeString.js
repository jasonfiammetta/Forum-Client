const timeString = function (isodate) {
  const time = new Date(isodate).toTimeString().substring(0, 8)
  if (time.includes('Invalid')) {
    return (new Date()).toTimeString().substring(0, 8)
  }
  return time
}

module.exports = timeString
