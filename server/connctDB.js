const mongoose = require("mongoose"),
SEC_KEY = process.env.DB_SECRET;


async function connectDB(){
    try {
        
        await mongoose.connect(SEC_KEY,{
           useNewUrlParser: true,
           useUnifiedTopology: true
         });

        console.log("successfully connected to mongoDB!");
        
    } catch (error) {
        console.log('mongoDB connection error',error.message);
    }
}

module.exports = connectDB;