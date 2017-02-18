

/************
 * DATABASE *
 ************/
//
var db = require('../models');

// GET /api/houses
function index(req, res) {
  // send back all houses as JSON
  db.House.find({}, function(err, allHouses) {
    res.json(allHouses);
  });
}

// GET /api/houses/:houseId
function show(req, res) {
  // find one house by id and send it back as JSON
  db.House.findById(req.params.houseId, function(err, foundHouse) {
    if (err) { console.log('houseController.show error', err); }
    console.log('houseController.show responding with', foundHouse);
    res.json(foundHouse);
  });
}


// POST /api/houses
function create(req, res) {
  // create a house based on request body and send it back as JSON
  console.log('body', req.body);
  db.House.create(req.body, function(err, house) {
    if (err) { console.log('error', err); }
    console.log(house);
    res.json(house);
  });
}


// DELETE /api/houses/:houseId
function destroy(req, res) {
  // find one house by id, delete it, and send it back as JSON
  db.House.findOneAndRemove({ _id: req.params.houseId }, function(err, foundHouse){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundHouse);
  });
}

// PUT or PATCH /api/houses/:houseId
function update(req, res) {
  // find one house by id, update it based on request body,
  // and send it back as JSON
  console.log('updating with data', req.body);
  db.House.findById(req.params.houseId, function(err, foundhouse) {
    if(err) { console.log('housesController.update error', err); }
    foundhouse.city = req.body.city;
    foundhouse.price = req.body.price;
    foundhouse.numRooms = req.body.numRooms;
    foundhouse.url = req.body.url;

    foundhouse.save(function(err, savedhouse) {
      if(err) { console.log('saving altered house failed'); }
      res.json(savedhouse);
    });
  });
}


module.exports = {
  index: index,
  create: create,
  destroy: destroy,
  show: show,
  update: update
};
