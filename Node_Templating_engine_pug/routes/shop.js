const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;

  // this is provided by expressjs and will use the default templating engine
  // "render()" method can take 2nd parameter data that should be added into our view
  // data pass as javascript object where we map it to a key name which we then can use in the template to refer to the data we pass in prods
  res.render("shop", { prods: products, pageTitle: 'Shop', path: "/" });
});

module.exports = router;
