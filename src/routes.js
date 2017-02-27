"use strict";

var router = require("express").Router();
var dateValidator = require("./date-validator");

router.get("/", function(req, res, next) {
  res.status(200).render("index");
});

router.get("/api/:params", function(req, res, next) {
  console.log(req.params.params)
  res.status(200).json(dateValidator(req.params.params));
});

router.use(function(req, res, next) {
  res.status(404).render("404");
});

module.exports = router;