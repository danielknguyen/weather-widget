// require all dependencies needed for app
var express = require('express'),
    // execute the express webserver
    app = express(),
    // require and configure dotenv file
    dotenv = require('dotenv').config(),
    // analyze as URL encoded data
    bodyParser = require('body-parser'),
    // templating engine to help display static web pages
    engines = require('consolidate'),
    assert = require('assert')

// set where the view templates are located
// ___dirname allows full path to directory to views
app.set('views', __dirname + '/views');
// use templating engine to render files with html extensions using nunjucks library
app.engine('html', engines.nunjucks);
// middleware to serve static files(css, javascript) into the application
app.use(express.static('public'));
// parse text as URL encoded data(how browsers tend to send data from regular forms set to post)
// data is exposed on a resulting object on req.body
app.use(bodyParser.urlencoded({ extended: true }));
// parse data as a json object
app.use(bodyParser.json());

// require routes module, pass express webserver in as a paramter
var routes = require('./public/scripts/routes.js')(app);

// listen for client connections (local host port)
// execute a callback function that logs the server is listening
// to change ports $ mongod --port #
var server = app.listen(8000, function() {
  // save port number
  var port = server.address().port;
  console.log('Express server is listening on port %s', port);
});
