//const dbConnect = require('./mongodb');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/',async(res,resp)=>{
    let data = await dbConnect();
    data= await data.find().toArray();
    resp.send(data);
});

app.post('/',(req,resp)=>{
    console.log(req.body)
    resp.send({name:'anil'})
})

app.listen(8002, () => {
    console.log("Server is running")
})