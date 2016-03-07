var express = require('express');
var bodyParser = require('body-parser');

var cors = require("cors");
var MainCtrl = require("./controllers/MainCtrl.js");



var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

var port = 3000;
// var db = mongojs("ecommerce");
// var collection = db.collection("products");
// var ObjectId = mongojs.ObjectId;
app.post('/products', MainCtrl.create);
app.get('/products', MainCtrl.index);
app.get('/products/:name', MainCtrl.show);
app.put('/products/:name/:newname', MainCtrl.update);
app.delete('/products/:name', MainCtrl.destroy);



app.listen(port, function() {
  console.log('listening to port ', port);
});
