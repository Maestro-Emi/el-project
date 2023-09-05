 const mongoose = require('mongoose');

 const connectDb = async () => {
        try {
            const conn = await mongoose.connect(process.env.MONGO_URI, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            });
            console.log(`MongoDB connected: ${conn.connection.host}`.green.bold);
        } catch (error) {
            console.error(`Error: ${error.message}`.red.underline.bold);
            process.exit(1);
        } 
 }

 module.exports = connectDb;