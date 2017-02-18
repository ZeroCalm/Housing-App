
$(document).ready(function() {
  console.log('app.js loaded!');

 	 $.ajax({
  	  method: 'GET',
  	  url: '/api/houses',
  	  success: renderMultipleListings
	  });

	

	$('.new-listing').on('submit', function(e){
		e.preventDefault();
		 var formData = $(this).serialize();
		 console.log('formData', formData);
 	    $.post('/api/houses', formData, function(listing) {
 	      console.log('listing after POST', listing);
 	      renderListing(listing);  //render the server's response
 	    });
 		console.log()
 		console.log("anything");
 		
		$(this).trigger("reset");
	});

 
	//$('.house').on('click', '.delete-listing', handleDeleteListingClick);

});

function handleDeleteListingSuccess(listing){
	console.log("listing deleted", listing);
}


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

function renderMultipleListings (listings){
	console.log(listings)
	console.log("hello")
	listings.forEach(function(listing){
		renderListing(listing);
	});
}
function renderListing(listing){

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
                <button class="btn btn-danger delete-listing">Delete Listing</button>
                <button class="btn btn-info edit-listing">Edit Listing</button>
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
