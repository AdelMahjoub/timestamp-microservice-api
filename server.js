"use strict";

var express = require("express");
var path = require("path");
var routes = require("./src/routes");
var compression = require("compression");
var favicon = require("serve-favicon");

var app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(compression());
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(routes);

app.listen(app.get("port"), function() {
  console.log("Server running on port: " + app.get("port"));
});