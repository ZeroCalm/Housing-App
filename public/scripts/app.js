
$(document).ready(function() {
  console.log('app.js loaded!');

var houseList =[];
houseList.push({
  name: "Beautiful House",
  price: "500,000",
  numRooms: 4,
  url: "www.craigslist.com"
});
houseList.push({
  name: "Ugly house",
  price: "90,000",
  numRooms: 4,
  url: "www.craigslist.com"
});
houseList.push({
  name: "another house",
  price: "80,500",
  numRooms: 4,
  url: "www.craigslist.com"
});
houseList.push({
  name: "house again",
  price: "220,000",
  numRooms: 4,
  url: "www.craigslist.com"
});
console.log(houseList)
//   $.ajax({
//     method: 'GET',
//     url: '/api/listings',
//     success: renderListings
//   });
// })

renderMultipleListings(houseList);
})

function renderMultipleListings (listings){
	listings.forEach(function(listing){
		renderListing(listing);
	});
}
function renderListing(listing){

var listingHtml=
 `<div class="row album" data-album-id="${listing.name}">
      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-default">
          <div class="panel-body">
          <!-- begin album internal row -->
            <div class="row">
              <div class="col-md-12 col-xs-12">
                <ul class="list-group">
                  <li class="list-group-item">
                    <h4 class="inline-header">${listing.name}</h4>
                  </li>
                  <li class="list-group-item">
                    <h4 class="inline-header">Price:</h4>
                    <span class="listing-price">${listing.price}</span>
                  </li>
                  <li class="list-group-item">
                    <h4 class="inline-header">Rooms:</h4>
                    <span class="room-num">${listing.numRooms}</span>
                  </li>
                  <li class="list-group-item">
                    <h4 class="inline-header">Link:</h4>
                    <span>${listing.url}</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- end of album internal row -->
            <div class="panel-footer">
                <button class="btn btn-danger delete-album">Delete Listing</button>
                <button class="btn btn-info edit-album">Edit Listing</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;

    $('.listings-container').append(listingHtml);
}
