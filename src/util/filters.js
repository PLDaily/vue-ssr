import Timeago from 'timeago.js'

const timeago = new Timeago(null, 'zh_CN')

export function formatDate (date) {
  return timeago.format(date)
}

export function distanceFilter (number) {
  return number < 1000 ? number.toFixed(0) + 'm' : (number / 1000).toFixed(1) + 'km'
}

export function host (url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const parts = host.split('.').slice(-3)
  if (parts[0] === 'www') parts.shift()
  return parts.join('.')
}

export function timeAgo (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}
