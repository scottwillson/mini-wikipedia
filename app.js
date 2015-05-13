var fs = require('fs');
var express = require('express');
var app = express();
var redis = require('redis'),
    client = redis.createClient();

app.get('/api/v1/articles/1', function(req, res) {
  client.get('article-version', function(err, articleVersion) {
    var articlePath = 'public/article-' + articleVersion + '.html';
    fs.readFile(articlePath, function(err, data) {
      if (err) return res.status(500).send(err);
      res.send(data);
    });
  });
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('mini-wikipedia started at http://%s:%s', host, port);
});
