const express = require("express");
const exphbs = require("express-handlebars");
const clientSessions = require("client-sessions");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// if (process.env.NODE_ENV != "production") {
//   require("dotenv").config({ path: "config/key.env" });
// }

const generalController = require("./controllers/GeneralController");
const destinationController = require("./controllers/DestinationController");

const app = express();
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.use(express.static("public"));

app.use(
  clientSessions({
    cookieName: "session",
    secret: "week10example_web322",
    duration: 2 * 60 * 1000,
    activeDuration: 1000 * 60,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

app.use("/", generalController);
app.use("/destination", destinationController);
const HTTP_PORT = process.env.PORT || 3000;

app.listen(HTTP_PORT, () => {
  console.log(
    `Web Server Application is running and listening on port ${HTTP_PORT}`
  );
});
