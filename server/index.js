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

// start db and server
require("../db/index.js");
const port = 3000;
const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});

module.exports = server;
