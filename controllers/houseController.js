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
    if (err) {
      res.json(err);
    }

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


function edit(req, res) {
  db.House.findById(req.params.houseId, function(err, house) {
    if (err) {
      res.send(err);
    } else {
      // res.json(house);
      res.render('edit', {
        city: house.city,
        price: house.price,
        numRooms: house.numRooms,
        url: house.url
      });
    }
  });
}

// PUT or PATCH /api/houses/:houseId/edit
function update(req, res) {
  db.House.findById(req.params.houseId, function(err, house) {
    house.update({
      city: req.body.city,
      price: req.body.price,
      numRooms: req.body.numRooms,
      url: req.body.url
    }, function(err, houseId) {
      if (err) {
        res.send(err);
      } else {
        res.send('Updated house');
      }
    });
  });
}

module.exports = {
  index: index,
  create: create,
  destroy: destroy,
  show: show,
  edit: edit,
  update: update
};
