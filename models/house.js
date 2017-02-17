var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var HouseSchema = new Schema({
    city: String,
    price: Number,
    numRooms: Number,
    url: String
  });
///comment
var House = mongoose.model('House', HouseSchema);

module.exports = House;
