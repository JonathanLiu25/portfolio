const { resolve } = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app

  // body parsing middleware
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))

  // static files from public
  .use(express.static(resolve(__dirname, "..", "public")));

module.exports = app;
