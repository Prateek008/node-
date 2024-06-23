const express = require("express");
const app =  express();

app.get('',(req,res)=>{
    res.send('<h1>Welcome, this is home page<h1>');
});

app.get("/about", (req, res) => {
    res.send(`
        <input type="text" placeholder="user name" size= "10"/ >
    `);
});


app.get('/messages',(req,res)=>{
    res.send('hello, this is my place');
})

app.listen(8001);