var users = require('../models/users');
module.exports ={
  create: function(res, req, next){
    users.push(req.body);
    res.status(200).json(users[users.length -1]);
  },

  index: function(res, req, next){
    res.status(200).json(users);
  },

  show: function(res, req, next){
    var idx = parseInt(req.params.idx);
    res.status(200).json(users[idx]);
  },

  update: function(res, req, next){
    var idx = parseInt(req.params.idx);
    user[idx] = req.body;
    res.status(200).json(users[idx]);
  },

  destroy: function(res, req, next){
    var idx = parseInt(req.params.idx);
    users.splice(idx, 1);
    res.status(204).send();
  }
};
