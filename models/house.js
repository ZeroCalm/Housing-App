
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HouseSchema = new Schema({
  name: String,
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

var House = mongoose.model('House', HouseSchema);

module.exports = House;
