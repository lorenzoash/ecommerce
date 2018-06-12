var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

require('dotenv').config();
require('./config/database');

var app = express();
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(cors());
app.use(require('./config/auth'))