const db = require("./db.js");

require("./models/index.js");
const force = true;
const logging = false;
db.sync({ force, logging })
  .then(() => console.log(`Synced models ${force ? "(forced)" : ""}`));

module.exports = db;
