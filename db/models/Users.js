const { STRING } = require("sequelize");
const db = require("../db.js");

const Users = db.define("users", {
  name: STRING
});

module.exports = Users;
