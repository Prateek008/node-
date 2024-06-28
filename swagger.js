const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
//middleware h
app.use(express.json());

//  Swagger h
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Datastore in item
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];

// GET METHOD
app.get('/items', (req, res) => {
  res.json(items);
});

// POST METYHD
app.post('/items', (req, res) => {
  const newItem = { id: items.length + 1, name: req.body.name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// GET items/:id
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

// PUT items/:id
app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (item) {
    item.name = req.body.name;
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

// DELETE items/:id
app.delete('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index !== -1) {
    items.splice(index, 1);
    res.status(200).send('Item deleted');
  } else {
    res.status(404).send('Item not found');
  }
});

//      server
const port =  8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
