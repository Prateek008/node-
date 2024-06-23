const http = require('http')

const server = http.createServer((req,res) =>{
    
    if (req.method === 'GET' && req.url === '/api/get') {
        
        res.end(JSON.stringify("hi i am producer"));
    }
    res.end("i am the ceo of india")
})



const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
