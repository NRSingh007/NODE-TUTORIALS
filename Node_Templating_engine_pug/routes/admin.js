const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

// "products", even though it's constant,
// the array can receive new elements because the array itself is still the same object
const products = [];

// "/admin/add_prod" => GET
router.get("/add_prod", (req, res, next) => {
  res.render("add_prod", { pageTitle: "Add Product", path: "/admin/add_prod" });
});

// "/admin/add_prod" => POST
router.post("/add_prod", (req, res, next) => {
  // console.log(req.body); // extracting the user send
  products.push({ title: req.body.title }); // extracting the "title" from "req.body" and storing it in javascript variable "title"
  res.redirect("/");
});

// module.exports = router;

exports.routes = router;
exports.products = products;
