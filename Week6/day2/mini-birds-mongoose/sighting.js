var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var birdsSchema = require("./Birds")

var sightingsSchema = new Schema({
  user: { type: String, ref: 'Birds' },
  birds: [birdsSchema],
  confirmed: { type: Boolean, default: false },
  numberSeen: { type: Number, min: 1 },
});

module.exports = mongoose.model("Sighting", sightingsSchema);
