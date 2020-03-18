
//这是一个服务器程序，监听主机端口8080
//服务器内有html网页，供客户访问。
var fs = require('fs')
var http = require('http')
var url = require('url')

http.createServer(function(req,res){

  //req.url取得浏览器输入的地址字符串 url是req对象的属性
  //url.parse解析地址字符串 返回对象并赋值给q,true不写也可以
  // req.url 表示当时地址栏输入数据The full path, including localhost:8080,also including query parameters.
    var q = url.parse(req.url,true)

    //文件路径 q.host,q.pathname(获取地址对象的文件名)
    //req.url.path 相当于q.pathname not including query parameters
    var filename = "."+q.pathname

    //由中间函数决定传输什么样的参数数据给匿名函数function(err,data){}
    //实参data代表了文件在内存buffer中的数据内容。，实参名字可随意取。
    //The caller of the callback (which is the readFile method in this case) decides what arguments are passed to the callback. You need to declare your callback to match what readFile says that it will pass to the callback. You can name the arguments anything you want (the names you use do not matter), but they will get values in the order that readFile decides.
    fs.readFile(filename,function(err,data){
        if (err){
            res.writeHead(404,{'Content-Type':'text/html'})
            return res.end('404 file not found')
        }
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        return res.end()

    })
      

}).listen(8080)