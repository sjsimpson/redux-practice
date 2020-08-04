var express = require('express');
var app = express();

const PORT = 80;

app.get('/', function (req, res) {
  res.send('Hello World from GCE! Updated using pipeline');
});

// Comment that is random for updates (one more time)
// another line after setting up in instance
// testing
app.listen(PORT, function() {
  console.log(`Updated example app listening on port ${PORT}!`);
});
