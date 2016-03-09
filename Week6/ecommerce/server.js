var express = require('express');
var bodyParser = require('body-parser');

var cors = require("cors");
var MainCtrl = require("./controllers/MainCtrl.js");
var mongoose = require('mongoose');
var Product = require("./product.js");


mongoose.connect('mongodb://localhost/products');



var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());
mongoose.connection.once("open", function(){
  console.log("Connected to MongoDB");
});

var port = 3000;




// var db = mongojs("ecommerce");
// var collection = db.collection("products");
// var ObjectId = mongojs.ObjectId;
app.post('/products', MainCtrl.create);
app.get('/products', MainCtrl.index);
app.get('/products/:id', MainCtrl.show);
app.put('/products/:id', MainCtrl.update);
app.delete('/products/:id', MainCtrl.destroy);



app.listen(port, function() {
  console.log('listening to port ', port);
});
