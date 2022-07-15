const express = require("express");
const cors = require("cors");

const data = require("./data");

// Create an Express app
const app = express();

// Tell the app to listend to JSON bodies on POST requests
app.use(express.json());

// Add 'headers' to each response, saying that we're okay with sharing resources with others
app.use(cors());

// get = request information from reception
// req = request
// res = response
// "/" = where the user goes
// Set up a route
app.get("/", (req, res) => {
  res.send("Welcome to the Ice Cream API!");
});

// Actually starts the server --> move this to index.js to test them separetely
// app.listen(3000, () => {
//   console.log("Started listening on port 3000");
// });

app.get("/flavours", (req, res) => {
  let flavours = data;

  if (req.query.vegan === "true") {
    flavours = flavours.filter((f) => f["vegan"]);
  }

  //console.log(req.query)

  res.json({
    flavours: flavours.map((f) => f["flavour"]),
  });
});

app.get("/flavours/:id", (req, res) => {
  // res.send(req.params.id);

  //Extract the paramenter from the URL
  const id = req.params.id;

  // Filter the data for the ice cream with that id
  const filteredData = data.filter((f) => f["id"] == id);

  if (filteredData.length == 1) {
    // Send the first filtered result
    res.json({
      flavour: filteredData[0],
    });
  } else {
    res.status(404).json({
      error: "No such ice cream",
    });
  }
});

// post = create new info
app.post("/flavours", (req, res) => {
  console.log(req.body);

  const newFlavour = req.body;
  newFlavour["id"] = data.length + 1;
  data.push(newFlavour);

  res.status(201).json({
    success: true,
    flavour: newFlavour,
  });
});

module.exports = app;
