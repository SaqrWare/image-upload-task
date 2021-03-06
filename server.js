var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
global.ok = require('okay');
global.appRoot = path.resolve(__dirname);
const mongoose = require('mongoose');
const config = require('./config/config');

// db connection
mongoose.connect(config.dbConnection);
mongoose.set('debug', true);

//Init app
var app = express();
var server = http.createServer(app);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}));

//Routes
var apiRouter = require('./routes/api');
app.use('/api', apiRouter);
app.get('*', (req, res, next) => {
    res.sendfile('public/index.html')
});
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

var port = process.env.PORT || 8080;
server.listen(port);
console.log('Started listening : ' + port);