var express = require('express');
var app = express();

app.get('/articles/1', function(req, res) {
  res.send('OK');
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('mini-wikipedia started at http://%s:%s', host, port);
});
