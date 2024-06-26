// crudoperation.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 8008;

// Middleware 
app.use(bodyParser.json());

// Connect toMongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase');

// scehma
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    phoneno: Number
});

const Person = mongoose.model('Person', personSchema);

//post method
app.post('/create', async (req, res) => {
    try {
        const { name, age, city, phoneno } = req.body;
        const newPerson = new Person({ name, age, city,phoneno });
        const savedPerson = await newPerson.save();
        res.status(201).json(savedPerson);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get method
app.get('/persons', async (req, res) => {
    try {
        const persons = await Person.find();
        res.status(200).json(persons);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a person by ID
app.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, city,phoneno } = req.body;
        const updatedPerson = await Person.findByIdAndUpdate(
            id,
            { name, age, city,phoneno },
            { new: true }
        );
        if (!updatedPerson) {
            return res.status(404).json({ message: 'Person not found' });
        }
        res.status(200).json(updatedPerson);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a person by ID
app.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPerson = await Person.findByIdAndDelete(id);
        if (!deletedPerson) {
            return res.status(404).json({ message: 'Person not found' });
        }
        res.status(200).json({ message: 'Person deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
