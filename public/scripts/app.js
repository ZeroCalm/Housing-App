
$(document).ready(function() {
  // console.log('app.js loaded!');

 	 $.ajax({
  	  method: 'GET',
  	  url: '/api/houses',
  	  success: renderMultipleListings
	  });

<<<<<<< HEAD
=======

/*  This will be the edit function

  $('.edit-album').click(function(){
      $.ajax({
          type: 'PUT',
          url: '/api/albums/:albumId',
          //  data: ,
          //datatype: 'html',
          //cache: 'false',
          success: function(response) {
              $('#chatroom').append(response);
              alert('Load was performed.');
          },
          error: function(){
              alert('Fuuuuuuuuuuuuuu');
          }
}); // End Ajax

alert('Fail');

}); // End onclick



*/



// var sampleListing= [];
// sampleListing.push({
// 	name: "Beaut House",
//   price: "50",
//   numRooms: 1,
//   url: "www.craigslist.com"
// })
// console.log(sampleListing)


// $('.new-listing').on('submit', function(e){
// 	e.preventDefault();
// 	// var formData = $(this).serialize();
// 	// console.log('formData', formData);
//  //    $.post('/api/listings', formData, function(listing) {
//  //      console.log('listing after POST', listing);
//  //      renderListing(listing);  //render the server's response
//  //    });
//  console.log(sampleListing)
//  console.log("anything");
//  	$('.listings-container').prepend(sampleListing);
//     $(this).trigger("reset");
// });

});
>>>>>>> 38aee0c5a2073137c8f4e0fff6cff2b1e7a4b2da

var houseId = $('house').find('form').data('house-id');

function handleDeleteListingClick(event){
	var listingId = $(this).parents('.house').data('house-id');
  console.log('someone wants to delete house id=' + houseId );
  $.ajax({
    url: '/api/houses/' + houseId,
    method: 'DELETE',
    success: handleDeleteListingSuccess
  });
}

function renderMultipleListings(listings) {
	// console.log(listings)
	// console.log("hello")
	listings.forEach(function(listing) {
		renderListing(listing);
	});
}

function renderListing(listing) {

var listingHtml=
 `<div class="row house" data-house-id="${listing.name}">
      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-default">
          <div class="panel-body">
          <!-- begin house internal row -->
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
            <!-- end of house internal row -->
            <div class="panel-footer">
<<<<<<< HEAD
=======
                <button class="btn btn-danger delete-album">Delete Listing</button>
                <a href="edit_page.html" class="btn btn-info edit-album">Edit Listing</a>
>>>>>>> 38aee0c5a2073137c8f4e0fff6cff2b1e7a4b2da
            </div>
          </div>
        </div>
      </div>
    </div>`;

    $('.listings-container').prepend(listingHtml);
    $('.delete-listing').click(function(){
		$(this).closest('.house').empty();
		$.ajax({
    	url: '/api/houses/' + houseId,
    	method: 'DELETE',
    	success: handleDeleteListingSuccess
		});
	})
}





///////////HARD-CODED DATA///////////

// var houseList =[];
// houseList.push({
//   name: "Beautiful House",
//   price: "500,000",
//   numRooms: 4,
//   url: "www.craigslist.com"
// });
// houseList.push({
//   name: "Ugly house",
//   price: "90,000",
//   numRooms: 4,
//   url: "www.craigslist.com"
// });
// houseList.push({
//   name: "another house",
//   price: "80,500",
//   numRooms: 4,
//   url: "www.craigslist.com"
// });
// houseList.push({
//   name: "house again",
//   price: "220,000",
//   numRooms: 4,
//   url: "www.craigslist.com"
// });
// console.log(houseList)
// //   $.ajax({
// //     method: 'GET',
// //     url: '/api/listings',
// //     success: renderListings
// //   });
// // })
