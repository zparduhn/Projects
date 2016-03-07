var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require("mongojs");
var cors = require("cors");




var app = express();
//app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var port = 3000;
var db = mongojs("bird-sighting");
var collection = db.collection("sightings");
var ObjectId = mongojs.ObjectId;

app.post('/api/sighting', function(req, res, next){
  collection.insert(req.body, function(err, result){
    if(err){
        return res.status(500).json(err);
    }
    else {
      return res.status(200).json(result);
    }
  });
});
app.get("/api/sighting", function(req, resp) {
  collection.find({name: req.query.name}, function(err, sighting) {
    return resp.status(200).send(sighting);
  });
});
app.put('/api/sighting', function(req, res, next){
  collection.update({_id: ObjectId("56dde90ff7e59b280fdd7287")}, {$set: {last_name: "NotGoose"}}, function(err, response){
    return resp.status(200).send(response);
  });
});
app.delete('/api/sighting', function(req, res, next){
  collection.remove({name: req.query.name}, function(err, sighting){
      res.status(200).send("deleted");
  });
});



app.listen(port, function() {
  console.log('listening to port ', port);
});
