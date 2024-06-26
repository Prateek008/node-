const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port  = 8006;


app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/prateek');

const studentschema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    classname: Number
})

const Student = mongoose.model('Student',studentschema)

//POST  METHOD 
app.post('/create', async (req, res) => {
    try {
        const { name, age, city, classname } = req.body;
        const newStudent = new Student ({ name, age, city, classname });
        const savedStudent= await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//UPDATE METHOD

app.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, city,classname } = req.body;
        const updatedStudent = await Student.findByIdAndUpdate(
            id,
            { name, age, city,classname },
            { new: true }
        );
        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE METHOD

app.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStudent = await Student.findByIdAndDelete(id);
        if (!deletedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.listen(port,() => {
    console.log('server is running')
});