
$(document).ready(function() {



  $.ajax({
    method: 'GET',
    url: '/api/houses',
    success: renderMultipleListings
  });


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


$('.new-listing').on('submit', function(e){
	e.preventDefault();
	var formData = $(this).serialize();
	console.log('formData', formData);
    $.post('/api/houses', formData, function(listing) {
      console.log('listing after POST', listing);
      renderListing(listing);  //render the server's response
    });
 console.log("anything");
    $(this).trigger("reset");
});

$('#edit-house').on('submit', function(e) {
    e.preventDefault();
    console.log('Submitted!!!!');
    console.log(this)
    $.ajax({
      url: '/api/houses/:id/edit',
      type: 'PUT',
      dataType: 'json',
      data: $(this).serialize(),
      success: function (res) {
        console.log(res);
        console.log(this)
      },
      error: function (err) {
        console.log();
      }
    });


 });


$('.search-cities').on('submit', function(e){
	e.preventDefault();
	var formData = this.val;
	console.log(formData);
	$.ajax({
   	  method: 'GET',
      url: '/api/houses',
      success: renderByCity
  });
	function renderByCity(listings){
	//listings.forEach(function(listing){
		console.log("happy")

		listings.forEach(function(listing){
			console.log(formData)
			console.log(listing.city)
			if(listing.city===formData){
				renderListing(listing)
			}
		})
	}

})



});




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

function handleDeleteListingSuccess(){
	console.log("seccusful delete!")
}


function renderMultipleListings(listings) {
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
                    <h4 class="inline-header">${listing.city}</h4>
                  </li>
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
                    <a href='${listing.url}'>${listing.url}</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- end of house internal row -->
            <div class="panel-footer">

                <button class="btn delete-listing">Delete Listing</button>
                <a href="api/houses/${listing._id}/edit" class="btn btn-info edit-listing">Edit Listing</a>

            </div>
          </div>
        </div>
      </div>
    </div>`;

    $('.listings-container').prepend(listingHtml);
    $('.delete-listing').click(function(){
    	console.log("ff")
		$.ajax({
    	url: '/api/houses/' + listing._id,
    	method: 'DELETE',
    	success: handleDeleteListingSuccess
		});
		$(this).closest('.house').empty();
	})
	
}
