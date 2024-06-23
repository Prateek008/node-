const http = require('http');


const server = http.createServer((req, res) => {
    
    if (req.url === '/pizza') {
      
      
        res.end('Here is your pizza!');
    } else if (req.url === '/burger') {
      
       
        res.end('Here is your burger!');
    } else {
       
       
        res.end('Sorry, we don\'t serve that!');
    }
});


server.listen(8000, () => {
    console.log('Restaurant is open and listening on port 8080');
});
