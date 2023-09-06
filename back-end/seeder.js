const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
const colors = require('colors');
const users = require('./data/users'); 
const products = require('./data/products'); 

const User = require('./models/userModel');
const Product = require('./models/productModel');
const Order = require('./models/orderModel');

const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
    try {
      // Deleting existing data in the database
      await Order.deleteMany();
      await Product.deleteMany();
      await User.deleteMany();
  
      // Inserting sample users into the database
      const createdUsers = await User.insertMany(users);
  
      // Getting the ID of the first user (assumed to be admin)
      const adminUser = createdUsers[0]._id;
      // Associating each product with the admin user
      const sampleProducts = products.map((product) => {
        return { ...product, user: adminUser };
      });
  
      // Inserting the modified products into the database
      await Product.insertMany(sampleProducts);
  
      console.log('Data Imported!'.green);
      process.exit();
    } catch (error) {
      console.error(`${error}`.red);
      process.exit(1);
    }
};

// Function to delete all data from the database
const destroyData = async () => {
    try {
      await Order.deleteMany();
      await Product.deleteMany();
      await User.deleteMany();
  
      console.log('Data Destroyed!'.red);
      process.exit();
    } catch (error) {
      console.error(`${error}`.red);
      process.exit(1);
    }
};

// If the script is run with '-d', it will delete data, otherwise it will seed data
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
