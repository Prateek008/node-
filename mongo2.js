const express =require ('express')
const mongoose =require('mongoose')


const app=express();

const PORT=8000;

const courseSchema=new mongoose.Schema({
    name:{type:String,required:[true,"name is required please enter the name"]},
    category:{type:String, require:false},
    creator:{type:String,require:true}
})
const Course=mongoose.model('Course',courseSchema)
app.post('/register',async(req,res)=>{
   console.log("run") 
   try
   {
        const course= req.body;
        console.log(course);
        const save = await course.save();
        if(!save)
            {
                res.status(400).send('please enter the right data')
                return;
            }
            res.status(201).send(save)
        }catch(error){
            res.status(500).send('INTERNAL SERVER ERROR')

        }
    })


app.listen(PORT,()=>{
    mongoose.connect('mongodb://127.0.0.1/prateek')
    .then(()=>{console.log('server is rumming on port ${PORT}')})
    .catch((err)=>{
        console.log('not connect')
    })
})
