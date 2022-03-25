var createError = require('http-errors');
var express = require('express');
var path = require('path');
var url = require('url');
const res = require('express/lib/response');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var index = require('./routes/index');
var users = require('./routes/users');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

/*var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');*/

var app = express();
mongoose.connect('mongodb+srv://kkswamy13:Budlight24!@cluster0.gp1ak.mongodb.net/assignment4?retryWrites=true&w=majority')


app.use(bodyparser.urlencoded({extended: false}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', index);
app.use('/users', users);




/*
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});*/

module.exports = app;
