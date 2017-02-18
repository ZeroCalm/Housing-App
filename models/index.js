var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/housing");
var House = require('./house');

module.exports.House = House;
