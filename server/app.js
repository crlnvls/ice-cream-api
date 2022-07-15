const express = require("express");

// Create an Express app
const app = express();

// get information from reception
// req = request
// res = response
// "/" = where the user goes
// Set up a route
app.get("/", (req, res) => {
  res.send("Welcome to the Ice Cream API!");
});

// Actually starts the server
// app.listen(3000, () => {
//   console.log("Started listening on port 3000");
// });

module.exports = app;
