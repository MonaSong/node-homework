var http = require('http');
var querystring = require('querystring');
var DomCreater = require('./DomCreater');

 var Dom = DomCreater.init();

var postHTML =
    `<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>
    <body>
    ${Dom}
    </body></html>`;

const server = http.createServer(function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
        console.log('body', chunk)
    });
    req.on('end', function () {
      console.log(arguments)
        // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });

        if (body.name && body.url) { // 输出提交的数据
            res.write("网站名：" + body.name);
            res.write("<br>");
            res.write("网站 URL：" + body.url);
        } else {  // 输出表单
            res.write(postHTML);
        }
        res.end();
    });
}).listen(30000);

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
