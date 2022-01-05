const express = require("express"); //import express mod
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const clientSessions = require("client-sessions");

//to extract form submitted data from from our POST request
//req.body.nameOfFormControll
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

if (process.env.NODE_ENV != "production") {
  require("dotenv").config({ path: "config/key.env" });
}

const generalController = require("./controllers/GeneralController");
const destinationController = require("./controllers/DestinationController");
const userController = require("./controllers/UserController");
const { Mongoose } = require("mongoose");

const app = express(); //call the ctor to create express app obj

app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.use(express.static("public"));

app.use(
  clientSessions({
    cookieName: "session", // this is the object name that will be added to 'req'
    secret: "week10example_web322", // this should be a long un-guessable string.
    duration: 2 * 60 * 1000, // duration of the session in milliseconds (2 minutes)
    activeDuration: 1000 * 60, // the session will be extended by this many ms each request (1 minute)
  })
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.locals.session = req.session; //what locals???
  next();
});

app.use("/", generalController);
app.use("/destination", destinationController);
app.use("/user", userController);

const HTTP_PORT = process.env.PORT || 3000;

app.listen(HTTP_PORT, () => {
  // 2 Parameters: PORT, callback function
  console.log(
    `Web Server Application is running and listening on port ${HTTP_PORT}`
  );
  mongoose
    .connect(process.env.MONGODB_QUERY_STRING)
    .then(() => console.log(`Connected to MongoDB`))
    .catch((err) => console.log(err));
});
