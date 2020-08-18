const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// "/admin/add_prod" => GET
router.get("/add_prod", (req, res, next) => {
  // if "next()" is not called then use "res"

  // "__dirname", is a global variable that holds the absolute path of th e current project
  // instead of "../" in level up of path we can use ".."
  // res.sendFile(path.join(__dirname, "../", "views", "add_prod.html"));

  res.sendFile(path.join(rootDir, "views", "add_prod.html"));
});

// "/admin/add_prod" => POST
router.post("/add_prod", (req, res, next) => {
  // console.log(req.body); // extracting the user send
  products.push({ title: req.body.title });     // extracting the "title" from "req.body" and storing it in the title
  res.redirect("/");
});

// module.exports = router;

exports.routes = router;
exports.products = products;
