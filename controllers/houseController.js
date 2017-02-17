

/************
 * DATABASE *
 ************/
//
var db = require('../models');

// GET /api/albums
function index(req, res) {
  // send back all albums as JSON
  db.House.find({}, function(err, allHouses) {
    res.json(allHouses);
  });
}


// POST /api/albums
function create(req, res) {
  // create an album based on request body and send it back as JSON
  console.log('body', req.body);

  db.House.create(req.body, function(err, house) {
    if (err) { console.log('error', err); }
    console.log(house);
    res.json(house);
  });
}

//
// // GET /api/albums/:albumId
// function show(req, res) {
//   // find one album by id and send it back as JSON
//   db.Album.findById(req.params.albumId, function(err, foundAlbum) {
//     if(err) { console.log('albumsController.show error', err); }
//     console.log('albumsController.show responding with', foundAlbum);
//     res.json(foundAlbum);
//   });
// }
//
// // DELETE /api/albums/:albumId
// function destroy(req, res) {
//   // find one album by id, delete it, and send it back as JSON
//   db.Album.findOneAndRemove({ _id: req.params.albumId }, function(err, foundAlbum){
//     // note you could send just send 204, but we're sending 200 and the deleted entity
//     res.json(foundAlbum);
//   });
// }
//
// // PUT or PATCH /api/albums/:albumId
// function update(req, res) {
//   // find one album by id, update it based on request body,
//   // and send it back as JSON
//   console.log('updating with data', req.body);
//   db.Album.findById(req.params.albumId, function(err, foundAlbum) {
//     if(err) { console.log('albumsController.update error', err); }
//     foundAlbum.artistName = req.body.artistName;
//     foundAlbum.name = req.body.name;
//     foundAlbum.releaseDate = req.body.releaseDate;
//     foundAlbum.save(function(err, savedAlbum) {
//       if(err) { console.log('saving altered album failed'); }
//       res.json(savedAlbum);
//     });
//   });
// }
//

module.exports = {
  index: index,
  create: create

};
