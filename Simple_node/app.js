// const http = require("http");

// importing the 3rd party package "express" which is a framework
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

// creating express application using express as a function
const app = express();

// using bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

// to use middleware
// ".use()", allow us to add middleware which accepts array of RequestHandler
// the function pass in use() will be executed for every incoming request, and this function will recieve 3 args: ["req", "res","next"]
// "next()", function that will be pass to "use()" function by express.js
// "next()", has to be executed to allow the request to continue to the next middleware
/*
app.use("/", (req, res, next) => {
  // console.log("In the middleware");
  next(); // if "next()" is not call then the upcoming middleware will not execute
});
*/

app.use("/add_prod", (req, res, next) => {
  // if "next()" is not called then use "res"
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add New</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body); // extracting the user send
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express</h1>");
});

// const server = http.createServer(app);
// server.listen(3000);

// PORT def, storing PORT securely in ".env" file
const PORT = process.env.PORT;

// listening
app.listen(PORT);
console.log(`App is listening @ ${PORT}`);
