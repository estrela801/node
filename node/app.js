const http = require("http")

http.createServer(function (req, res){
    res.end('ola, ta atualizando')
}).listen(2010)
console.log('Foi');

