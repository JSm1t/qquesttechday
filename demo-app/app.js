/**
 * Module dependencies.
 */
const express = require('express');
const bluebird = require('bluebird');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// const multer = require('multer');

/**
 * Load environment variables from .env file, where passwords are configured
 */
//TODO: set retrieval of config into seperate module
dotenv.config({path: './.env.example'});

const profile = require('./routes/profile');
const index = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**
 * Mongodb Connection
 */
// mongoose.Promise = bluebird;
// mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
// mongoose.connection.on('error', (err) => {
//   console.error(err);
//   console.error('%s MongoDB connection error. Please make sure MongoDB is running.');
//   process.exit();
// });
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/profile', profile);

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  let response = {
    result: 'error',
    message: err.message
  }

  if(app.get('env') == 'development'){
    response.stack = err.stack;
  }

  res.status(err.status || 500).send(response);
});

app.listen(3000, () => console.log('Backend-api listening on port 3000!'));