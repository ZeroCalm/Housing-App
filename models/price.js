var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var HouseSchema = new Schema({
    Address: {type: String, isRequired: true},
    price: {type: Number, isRequired: true, min: 30000}
    numRooms: Number,
    url: String
  });



///comment
var House = mongoose.model('House', HouseSchema);

module.exports = House;
