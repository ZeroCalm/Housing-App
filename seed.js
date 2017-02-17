// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var houseList =[];
houseList.push({
              city: "San Francisco",
              price: "$250,000",
              numRooms: 4,
              url: "www.craigslist.com"
            });
houseList.push({
              city: "San Francisco",
              price: "$250,000",
              numRooms: 4,
              url: "www.craigslist.com"
            });
houseList.push({
              city: "San Francisco",
              price: "$250,000",
              numRooms: 4,
              url: "www.craigslist.com"
            });


// db.Album.remove({}, function(err, albums){

  db.House.create(houseList, function(err, houses){
    if (err) { return console.log("ERROR", err); }
    console.log("all houses:", houses);
    console.log("created", houses.length, "houses");
    process.exit();
  });
