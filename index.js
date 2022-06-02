// create express instance

/**
 * Url Example : http://localhost:3000/api/query/?instance_url={instance IRL}&access_token={Session Id}&query={query}
 */
//
const express = require("express");
var app = express();
var jsforce = require("jsforce");

app.get("/api/query/", function (req, res) {
  const jsonQuery = req.query;

  const instance_url = jsonQuery.instance_url;
  const access_token = jsonQuery.access_token;
  const query = jsonQuery.query;

  conn = new jsforce.Connection({
    serverUrl: instance_url,
    sessionId: access_token,
  });
  var records = [];
  conn.query("SELECT Id, Name FROM Account", function (err, result) {
    if (err) {
      return console.error(err);
    }
    console.log("total : " + result.totalSize);
    console.log("fetched : " + result.records.length);
  });
  console.log("here ===" + conn);

  res.send("Logged in" + conn.identity);
});

// start express app on port 3000
//app.listen(3000); // http://localhost:3000/

app.listen(3000, () => console.log("Express app started on port 3000"));
