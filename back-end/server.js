const express = require('express');
const products = require('./data/products'); 
const dotenv = require('dotenv');
const colors = require('colors');
const connectDb = require('./config/db');
const app = express();
const productRoutes = require('./routes/productRoutes');

dotenv.config();

connectDb();


app.get('/', (req, res) => { 
    res.send('Server is readyyyyy!');
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running in  ${process.env.NODE.ENV} mode on port ${PORT}`.yellow));

