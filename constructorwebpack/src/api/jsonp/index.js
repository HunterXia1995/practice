import request  from '@/utils/request.js'
export function jsonp () {
  return request({
    url: '/jsonpData'
  })
}