// Get the packages we need
const express = require("express");
const router = express.Router();
// mongoose = require('mongoose'),
// secrets = require('./config/secrets'),
let bodyParser = require("body-parser");

const connection = require("./db");

// // Create our Express application
const app = express();

// Use environment defined port or 4000
const port = process.env.PORT || 4000;

// Allow CORS so that backend and frontend could be put on different servers
const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
};
app.use(allowCrossDomain);

// Use the body-parser package in our application
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// Use routes as a module (see index.js)
require("../routes")(app, router, connection);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
