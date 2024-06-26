const express = require('express');
const mongoose = require('mongoose');
const app = express()
mongoose.connect('mongodb://127.0.0.1:27017/prateek')
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
const UserModel  = mongoose.model("users",UserSchema)
app.post("/PostUsers",async(req,res)=>{
     const user=new UserModel()
    //user.name=req.body.name
     //user.age=req.body.age
     console.log(req.body);
     const save=  await user.save()
     res.send(save)
})
app.listen(3001, () => {
    console.log("Server is running")
})