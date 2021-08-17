const fs = require('fs')
module.exports = function readEnv(src) {
  let data = fs.readFileSync(src, { encoding: 'utf8' })
  data = data.replace(/\n/gm,'').replace(/\r/gm,'')
  let arr = data.split(',')
  let arr1 = []
  let obj = {}
  arr.map(i => {
    let key = i.slice(0, i.indexOf('='))
    let value = i.slice(i.indexOf('=') + 1)
    // let obj = {}
    obj[key] = `"${value}"`
  })
  return obj
}