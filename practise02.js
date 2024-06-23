const http = require("http")
const myServer = http.createServer((req,res)=>{
           res.write("this is my ");
           res.end();

}).listen(8009);