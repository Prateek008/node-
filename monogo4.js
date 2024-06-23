const express =require ('express')
const mongoose =require('mongoose')

const app=express();

const PORT=8002;

const courseSchema=new mongoose.Schema({
    id:{type:String,required:[true,"id is required please enter the id"]},
    age:{type:Number, require:false},
    name:{type:String,require:true}
});
const Course=mongoose.model('company',courseSchema)

app.listen(PORT,()=>{
    mongoose.connect('mongodb://127.0.0.1/prateek')
    .then(()=>{
        console.log('server is rumming on port ${PORT}')
    })
    .catch((err)=>{
        console.log('not connect')
    });
});
