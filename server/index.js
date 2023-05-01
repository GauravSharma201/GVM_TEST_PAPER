require('dotenv').config({path:'./config.env'});

const express = require('express'),
cors = require('cors'),
mongoose = require('mongoose'),
Route = require('./routes/routes.js'),
connectDB = require('./connctDB.js');


const app = express();

app.use(cors({origin:"http://localhost:3000"}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(Route);

connectDB();

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log("server listening to port: ",PORT);
});