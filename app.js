var fs = require('fs');
var express = require('express');
var app = express();

app.get('/articles/1', function(req, res) {
  fs.readFile('public/article.html', function(err, data) {
    if (err) return res.status(500).send(err);
    res.send(data);
  });
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('mini-wikipedia started at http://%s:%s', host, port);
});
