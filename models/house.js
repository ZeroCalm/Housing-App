<<<<<<< HEAD
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var HouseSchema = new Schema({
    name: String,
    price: String,
    numRooms: Number,
    url: String
  });
///comment
=======

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HouseSchema = new Schema({
  Address: String,
  price: {
    type: Number,
    min: [30000, 'This is San Francisco, Are you Crazy?']
  },
  numRooms: {
    type: Number,
    required: true,
    min: [1, 'Less than 1 room!!']
  },
  url: String
});

>>>>>>> 38aee0c5a2073137c8f4e0fff6cff2b1e7a4b2da
var House = mongoose.model('House', HouseSchema);

module.exports = House;
