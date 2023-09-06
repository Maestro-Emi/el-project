 const mongoose = require('mongoose');

 const connectDb = async () => {
        try {
            const conn = await mongoose.connect(process.env.MONGO_URI, {
                useUnifiedTopology: true, //to use new server discovery and monitoring engine
                useNewUrlParser: true, //to use new url parser
            });
            console.log(`MongoDB connected: ${conn.connection.host}`.green.bold);
        } catch (error) {
            console.error(`Error: ${error.message}`.red.underline.bold);
            process.exit(1); //exit the process with failure
        } 
 }

 module.exports = connectDb;