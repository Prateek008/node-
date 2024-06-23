const http =  require("http");

http.createServer((req,res) => {
    res.write("this is my world")
    res.end();
}).listen(8008);
