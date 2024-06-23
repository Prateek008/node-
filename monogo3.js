const express =require ('express')
const mongoose =require('mongoose')

const app=express();

const PORT=8002;

const courseSchema=new mongoose.Schema({
    name:{type:String,required:[true,"name is required please enter the name"]},
    age:{type:Number, require:false},
    section:{type:String,require:true}
});
const Course=mongoose.model('king',courseSchema)

app.listen(PORT,()=>{
    mongoose.connect('mongodb://127.0.0.1/prateek')
    .then(()=>{
        console.log('server is rumming on port ${PORT}')
    })
    .catch((err)=>{
        console.log('not connect')
    });
});
