const express = require('express');
const swaggerUi = require('swagger-ui-express');

//ATTACH JSON FILE
const swaggerDocument = require('./swagger.json'); // Adjust the path if necessary

const app = express();

// MIDDLEWARE
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// GET METHOD
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Start the server
const port =  3000;
app.listen(port, () => {
  console.log('Server running on  ${port}');
});