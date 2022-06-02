// create express instance
const express = require("express");
var app = express();

// set the view engine to ejs
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// start express app on port 3000
//app.listen(3000); // http://localhost:3000/

app.listen(3000, () => console.log("Express app started on port 3000"));
