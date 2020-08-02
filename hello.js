var express = require('express');
var app = express();

const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Hello World from GCE!');
});

app.listen(PORT, function() {
  console.log(`Updated example app listening on port ${PORT}!`);
});