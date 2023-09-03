const express = require('express');
const products = require('./data/products'); 
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.get('/', (req, res) => { 
    res.send('Server is readyyyyy!');
});

app.get('/api/products', (req, res) => { 
    res.json(products);
});

app.get('/api/products/:id', (req, res) => { 
    const product = products.find((x) => x._id === req.params.id); 
    res.json(product);
});

app.listen(4000, () => console.log('Server running on port 4000'));

