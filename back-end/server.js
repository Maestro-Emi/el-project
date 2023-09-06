const express = require("express");
const products = require("./data/products");
const dotenv = require("dotenv");
const colors = require("colors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const connectDb = require("./config/db");

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();

connectDb();

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(
    `Server running in  ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
  )
);
