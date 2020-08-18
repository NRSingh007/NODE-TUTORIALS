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

// using bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

// to access static file in public folder
app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

// PORT def, storing PORT securely in ".env" file
const PORT = process.env.PORT;

// listening
app.listen(PORT);
console.log(`App is listening @ ${PORT}`);
