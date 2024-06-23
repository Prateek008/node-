// get express module
// get mongoose module
const express =require ('express')
const mongoose =require('mongoose')

const app=express();
// specifying port number
const PORT=8002;
//creating database schema 

const courseSchema=new mongoose.Schema({
    id:{type:String,required:[true,"id is required please enter id"]},
    age:{type:Number, require:false},
    name:{type:String,require:true}
});

// creating model from schema
const Course=mongoose.model('student',courseSchema)

//start the server when thedatabase is successfully coonected
app.listen(PORT,()=>{
    mongoose.connect('mongodb://127.0.0.1/prateek')
    .then(()=>{
        console.log('server is rumming on port ${PORT}')
    })
    .catch((err)=>{
        console.log('not connect')
    });
});
