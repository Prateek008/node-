const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());

// Connect toMongodb
mongoose.connect('mongodb://localhost:27017/yourDatabaseName')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// SChema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
});

const Person = mongoose.model('Person', personSchema);

// POST method 
app.post('/create', async (req, res) => {
    try {
        const person = new Person(req.body);
        const savedPerson = await person.save();
        res.status(201).send(savedPerson);
    } catch (error) {
        res.status(500).send(error);
    }
});

// PUT method 
app.put('/update/:id', async (req, res) => {
    try {
        const updatedPerson = await Person.findByIdAndUpdate(
            req.params.id,
          
            req.body,
            { new: true }
        );
        res.status(200).send(updatedPerson);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete('/delete/:id', async (req, res) => {
    try {
        const deletedPerson = await Person.findByIdAndDelete(req.params.id);
        if (!deletedPerson) {
            return res.status(404).send({ message: 'Person not found' });
        }
        res.status(200).send({ message: 'Person deleted successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});


