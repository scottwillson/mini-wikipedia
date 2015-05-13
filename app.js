var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var redis = require('redis'),
    client = redis.createClient();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/api/v1/articles/1', showArticle);
app.post('/api/v1/articles/1', updateArticle);

function showArticle(req, res) {
  client.get('article-1-version', function(err, articleVersion) {
    var articlePath = 'public/article-' + articleVersion + '.html';
    fs.readFile(articlePath, function(err, data) {
      if (err) return res.status(500).send(err);
      res.append('Article-Version', articleVersion);
      res.send(data);
    });
  });
}

function updateArticle(req, res) {
  client.get('article-1-version', function(err, reply) {
    var articleVersion = parseInt(reply);
    var updateVersion = parseInt(req.body.version);

    if (updateVersion != articleVersion) {
      return res.status(409).send('edit conflict');
    }

    var newVersion = articleVersion + 1
    var articlePath = 'public/article-' + newVersion + '.html';
    fs.writeFile(articlePath, req.body.html, function(err, data) {
      client.set('article-1-version', newVersion);
      res.send('OK');
    });
  });
}

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('mini-wikipedia started at http://%s:%s', host, port);
});
