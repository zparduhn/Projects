var mongojs = require("mongojs");
var db = mongojs("ecommerce");
var collection = db.collection("products");
var ObjectId = mongojs.ObjectId;



module.exports = {
  create: function(req, res, next) {
    collection.insert(req.body, function(err, result){
      if(err){
          return res.status(500).json(err);
      }
      else {
        return res.status(200).json("Success");
      }
    });
  },

  index: function(req, res, next) {
    collection.find(function(err, products) {
      return res.status(200).send(products);
    });
  },

  show: function(req, res, next) {
    collection.find({name: req.params.name}, function(err, products) {
      return res.status(200).send(products);
    });
  },

  update: function(req, res, next) {
    collection.update({name: req.params.name}, {$set: {name: req.params.newname}}, function(err, response){
      return res.status(200).send(response);
    });
  },

  destroy: function(req, res, next) {
    collection.remove({name: req.params.name}, function(err, products){
        res.status(200).send("deleted");
    });
  }
};
