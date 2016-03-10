var mongoose = require('mongoose');
var cart     = require('./cartSchema.js');
//"var orders = require('./order.js');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name     : {type: String, required: true},
    email    : {type: String, required: true, unique: true, index: true},
    password : {type: String, required: true},
    cart     : [cart],
    orders   : [],
  });

module.exports = mongoose.model('User', userSchema);
