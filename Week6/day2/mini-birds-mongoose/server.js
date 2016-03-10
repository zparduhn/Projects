var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var cors = require("cors");
var Sighting = require("./Sighting.js");
//var Birds = require("./Birds.js");
var User = require("./User.js");





var app = express();
var port = 3000;
//app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());
//var db = mongojs("bird-sighting");


//var collection = db.collection("sightings");

mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/even-more-fun");
mongoose.connection.once("open", function(){
  console.log("Connected to MongoDB");
});

//var sighting = require("./sighting");
app.post('/api/users', function(req, res, next){
  var user = new User(req.body);
  user.save(function(err, s){
    if(err){
      return res.status(500).send(err);
    }
    else{
      return err ? res.status(500).send(err) : res.send(s);
    }
  });
});



app.post('/api/sighting', function(req, res, next){
  var sighting = new Sighting(req.body);
  sighting.save(function(err, s){
    return err ? res.status(500).send(err) : res.send(s);
  });
});
app.get("/api/sighting", function(req, res) {
  var query = {};
  if(req.query.status) query["birds.status"] = req.qury.status;
  if(req.query.user) query["user"] = req.query.user;
  var query = req.query.status ? {status: req.query.status} : {};
  Sighting.find(query).populate("user").exec(function(err, sightings){
    return res.send(sightings);
  });
});

app.put("/api/sighting", function(req, res) {
  // Step 2
  // console.log("Updating sighting:", req.query.id);
  // res.send(req.query.id);
  Sighting.findById(req.query.id, function(err, sighting) {
    sighting.update(req.body, function(err, s) {
      if (err) {
        return res.status(500).send(err);
      } else {
        Sighting.findById(req.query.id, function(e, s) {
          return res.send(s);
        });
      }
    });
  });
});

app.delete("/api/sighting", function(req, res) {
  // Step 2
  console.log("Deleting sighting:", req.query.id);
  res.send(req.query.id);
  // Step 3
  // Sighting.findByIdAndRemove(req.query.id, function(err, sighting) {
  //   return res.send("Success");
  // });
});



app.listen(port, function() {
  console.log('listening to port ', port);
});
