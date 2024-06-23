const http =  require ("http");

http.createServer((req,res) =>{
  res.write("this is my world ok")
  res.end();
}).listen(8789);