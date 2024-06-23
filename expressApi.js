const express = require("express");
const app =  express();

app.get('',(req,res)=>{
    res.send('Hello, this is home page');
});

app.get('/about',(req,res)=>{
    res.send('hello, this is about page');
})


app.get('/messages',(req,res)=>{
    res.send('hello, this is my place');
})

app.listen(9001);