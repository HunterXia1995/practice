const fs = require('fs')

var querystring = require('querystring');
const http = require('http')
var server = http.createServer()
function test () {
  return 123
};
server.on('request',function (req, res) {

  // jsonp返回设置
  // res.writeHead(200, { 'Content-Type': 'text/javascript' });
  let data = fs.readFileSync('../files/index.html')
  res.write(data);

  res.end();
})
server.listen('3000', function () {
  console.log('监听3000端口号')
})