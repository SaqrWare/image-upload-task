var http = require('http');
var express = require('express');
var path = require('path');
global.appRoot = path.resolve(__dirname);
global.ok = require('okay');
var bodyParser = require('body-parser');

//Init app
var app = express();
var server = http.createServer(app);
app.use(express.static(path.join(__dirname, 'public')));


app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Started listening : ' + port);