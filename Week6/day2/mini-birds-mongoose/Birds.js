var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var birdsSchema = new Schema({
    name: {type: String, lowercase: true, },
    order: {type: String, lowercase: true, maxlength: 20},
    status: {
      type: String,
      lowercase: true,
      enum: [
      "extinct",
      "near threatened",
      "least concern"
    ]
  }


});

module.exports = birdsSchema;
