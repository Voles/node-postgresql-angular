var express     = require('express'),
  path          = require('path'),
  favicon       = require('serve-favicon'),
  logger        = require('morgan'),
  cookieParser  = require('cookie-parser'),
  bodyParser    = require('body-parser');

// application setup
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// webapp directory
app.use(express.static(path.join(__dirname, 'webapp')));

// API routes
var routes  = require('./api/routes/index'),
  events    = require('./api/routes/events');

app.use('api/', routes);
app.use('api/events', events);

module.exports = app;
