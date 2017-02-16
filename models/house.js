var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var HouseSchema = new Schema({
    city: String,
    price: Number,
    NumRooms: Number,
    url: String
  });

var House = mongoose.model('House', HouseSchema);

module.exports = House;
