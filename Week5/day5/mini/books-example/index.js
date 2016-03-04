var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var BookController = require('./controllers/BookController');

var config = require('./config.json');

var logger = function(req, res, next) {
  console.log('body --> ', req.body);
  console.log('params --> ', req.params);
  console.log('session -->', req.session);
  next();
};

var app = express();

app.use(bodyParser.json());

app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: false,//If you set these to true, it will create a session id regardless of the response. False says I will only create one if I need to.
    resave: false
}));

app.get('/books', logger, BookController.index);
app.get('/books/:idx', BookController.show);
app.put('/books/:idx', BookController.update);
app.post('/books', BookController.create);
app.delete('/books/:idx', BookController.destroy);

app.get('/cart', function( req, res, next){
  res.status(200).json(req.session.cart);
});

app.post('/cart', function(req, res, next){
  if(!req.session.cart) req.session.cart = [];
  req.session.cart.push(req.body);//body is whats in the array you are pushing
  res.status(204).send();
});

var port = 3000;
app.listen(port, function() {
  console.log('listening to port ', port);
});
