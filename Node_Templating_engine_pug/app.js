// importing the 3rd party package "express" which is a framework
const express = require("express");

const bodyParser = require("body-parser");
require("dotenv").config();

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const path = require("path");
const rootDir = require("./util/path");

// creating express application using express as a function
const app = express();

// configuring views engine using express app set
app.set("view engine", "pug");
// to find the templates
app.set("views", "views");

// using bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

// to access static file in public folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404);
  res.render("404", { pageTitle: 404 });
});

// PORT def, storing PORT securely in ".env" file
const PORT = process.env.PORT;

// listening
app.listen(PORT);
console.log(`App is listening @ ${PORT}`);
