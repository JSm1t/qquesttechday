const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/profile', (req, res, next) => {
  
});

app.post('/profile', (req, res, next) => {

});

app.put('/profile', (req, res, next) => {

});

app.delete('/profile', (req, res, next) => {
  
});

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