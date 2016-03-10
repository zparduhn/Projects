var User = require("../userModel.js");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = {
   create: function(req, res, next){
     var user = new User(req.body);
     user.save(function(err, s){
       if(err){
         return res.status(500).send(err);
       }
       else{
         return err ? res.status(500).send(err) : res.send(s);
       }
    });


  },
  show: function(req, res, next) {
    User
    //console.log(req.params.user_id);
    .findById(req.params.user_id)
    .populate('cart.item')
    .exec()
    .then(function(results){
      res.status(200).json(results);
    }, function(err){
      res.status(500).send(err);
    })

    // User.findById(req.params.user_id).exec(function(err, response){
    //   //console.log(response)
    //   if(err) {
    //     res.status(500).json(err);
    //   } else {
    //     res.json(response);
    //   }
    // });
  },

};
