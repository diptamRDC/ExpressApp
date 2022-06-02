console.log("Hello World");
// create express app
var express = require("express");
var app = express();

// set the view engine to ejs
app.get("/", function (req, res) {
  res.render("index");
});

// start express app on port 3000
app.listen(3000); // http://localhost:3000/
console.log("Express app started on port 3000");

// var server = app.listen(3000, function () {
// //   var host = server.address().address;
// //   var port = server.address().port;

// //   console.log("Example app listening at http://%s:%s", host, port);
// });
