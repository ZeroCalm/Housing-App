// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
var swig = require('swig');

// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// template engine
// disable swig cache for dev, set to true for prod
var swig = new swig.Swig({cache: false});
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

var db = require('mongoose');

var controllers = require('./controllers');

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */
//

app.get('/api/houses', controllers.house.index);
app.get('/api/houses/:houseId', controllers.house.show);
app.post('/api/houses', controllers.house.create);
app.delete('/api/houses/:houseId', controllers.house.destroy);
app.get('/api/houses/:houseId/', controllers.house.edit);
app.put('/api/houses/:houseId/', controllers.house.update);


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
})
