var express = require("express");
var Addition = require("./Addition.js");

console.log(Addition.AddNumber(2, 5));
Addition.NodeTutorial();
Addition.NodeTutorial.pTutor();
var app = express();
app.set("View Engine", "jade");

app.get("/", function(req, res) {
  res.write("Hello World");
});

var port = 8080;

var server = app.listen(port, function() {
  console.log("I'm listening on port number " + port + "!");
});
