var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/housing");
var House = require('./house');
// var Price = require()

module.exports.House = House;

//WIll add line below after citySchema is created.
//module.exports.City = require('./city');
