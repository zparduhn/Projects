//Requires
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var userCtrl = require('./controllers/userCtrl');
var profileCtrl = require('./controllers/profileCtrl');
var config = require('./config.js');


// Dependicies
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));


//Configs
var corsOptions = {
    origin: 'http://localhost:8999'
};
app.use(session({ secret: config.sessionSecret }));

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.friends);


var port = 8999;
app.listen(port, function() {
  console.log('listening to port ', port);
});




// app.get('/books', logger, BookController.index);
// app.get('/books/:idx', BookController.show);
// app.put('/books/:idx', BookController.update);
// app.post('/books', BookController.create);
// app.delete('/books/:idx', BookController.destroy);

// app.get('/cart', function( req, res, next){
//   res.status(200).json(req.session.cart);
// });

// app.post('/cart', function(req, res, next){
//   if(!req.session.cart) req.session.cart = [];
//   req.session.cart.push(req.body);//body is whats in the array you are pushing
//   res.status(204).send();
// });



// var BookController = require('./controllers/BookController');

// var config = require('./config.json');

// var logger = function(req, res, next) {
//   console.log('body --> ', req.body);
//   console.log('params --> ', req.params);
//   console.log('session -->', req.session);
//   next();
// };
