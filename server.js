
const express=require("express");//import express mod
const exphbs  = require('express-handlebars');
//to extract form submitted data from from our POST request 
//req.body.nameOfFormControll
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail')


const generalController = require('./controllers/GeneralController');
const destinationController = require('./controllers/DestinationController');
const userController = require('./controllers/UserController');


const app=express();//call the ctor to create express app obj
//needs to know everything


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))



// app.get('/',(req,res)=>(
//     res.send("Hello World")
// ));
app.use("/",generalController);
app.use("/destination",destinationController);
app.use("/user",userController);


const PORT = 3000; 

app.listen(PORT, ()=>{  // 2 Parameters: PORT, callback function
    console.log(`Web Server Application is running and listening on port ${PORT}`);
})