var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var i18n = require("i18n");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


//config for i18n
i18n.configure({
    locales: ['en', 'vi','jp'],
    directory: __dirname + '/locales',
    defaultLocale: 'en',
    cookie: 'lang',
    api: {
        '__': 't'
    }
});

app.use(cookieParser());

//init i18n
app.use(i18n.init);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')))

app.use('/', indexRouter);
app.use('/users', usersRouter);

// set route for and save cookie for i18n
app.get('/change-lang/:lang', (req, res) => {
    res.cookie('lang', req.params.lang, { maxAge: 900000 });
    res.redirect('back');
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
