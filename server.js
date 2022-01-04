
const express=require("express");//import express mod
const mongoose = require("mongoose")
const exphbs  = require('express-handlebars');
//to extract form submitted data from from our POST request 
//req.body.nameOfFormControll
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser")

if(process.env.NODE_ENV!="production")
{
  require('dotenv').config({ path: 'config/key.env' });
}


const generalController = require('./controllers/GeneralController');
const destinationController = require('./controllers/DestinationController');
const userController = require('./controllers/UserController');
const { Mongoose } = require("mongoose");


const app=express();//call the ctor to create express app obj
//needs to know everything


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())



// app.get('/',(req,res)=>(
//     res.send("Hello World")
// ));
app.use("/",generalController);
app.use("/destination",destinationController);
app.use("/user",userController);


const HTTP_PORT = process.env.PORT || 3000; 

app.listen(HTTP_PORT, ()=>{  // 2 Parameters: PORT, callback function
    console.log(`Web Server Application is running and listening on port ${HTTP_PORT}`);
mongoose.connect(process.env.MONGODB_QUERY_STRING)
.then(()=>console.log(`Connected to MongoDB`))
.catch(err=>console.log(err))

})