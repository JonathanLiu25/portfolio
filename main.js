const app = require("./server");

const port = 3000;
const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});

module.exports = server;
