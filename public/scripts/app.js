
$(document).ready(function() {


//Get all listings
	  $.ajax({
	    method: 'GET',
	    url: '/api/houses',
	    success: renderMultipleListings
	  });

	//Create new listing
	$('.new-listing').on('submit', function(e){
		e.preventDefault();
		var formData = $(this).serialize();
		console.log('formData', formData);
	    $.post('/api/houses', formData, function(listing) {
	      console.log('listing after POST', listing);
	      renderListing(listing);  //render the server's response
	    });
	    $('body').scrollTo('#list-top');
	 console.log("anything");
	    $(this).trigger("reset");
	});



	$('.search-cities').on('submit', function(e){
		e.preventDefault();
		var data= $(this).serializeArray()
		var cityName= data[0].value;
		var listings = $('.house');
		
		var cityData= $('.city-input');
		cityData.each(function(index, value){
			$(this).closest('.house').show();
			if($(this).text()!==cityName){
				$(this).closest('.house').hide();
			}
		})
	})
		
	$('.show-all').click(function(){
		location.reload();
	})
	
});


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
//render listing to page
function renderListing(listing) {

var listingHtml=
 `<div class="row house" data-house-id="${listing._id}">
      <div class="col-md-10 col-md-offset-1">
        <div class="panel panel-default">
          <div class="panel-body">
          <!-- begin house internal row -->
            <div class="row">
              <div class="col-md-12 col-xs-12">
              <form class="edit-submit form-horizontal">
                <ul class="list-group">
                  <li class="list-group-item listing-info">
                    <h4 class="inline-header city-input">${listing.city}</h4>
            	  </li>
            	  <li class="list-group-item edit-input">
                  	<div class="form-group ">
              		 <label class="col-md-4 control-label" for="city">Neighborhood</label>
             		  <div class="col-md-4">
              		     <input id="city" name="city" value='${listing.city}' type="text" class="form-control input-md" />
             		  </div>
            	  </div>
            	  </li>
                  <li class="list-group-item listing-info">
                    <h4 class="inline-header">${listing.name}</h4>
                  </li>
                  <li class="list-group-item edit-input">
                  	<div class="form-group">
              		  <label class="col-md-4 control-label" for="address">Address</label>
             		  <div class="col-md-4">
              		     <input id="address" value= '${listing.name}'' name="name" type="text" class="form-control input-md" />
             		  </div>
            	    </div>
            	  </li>
                  <li class="list-group-item listing-info">
                    <h4 class="inline-header">Price:</h4>
                    <span class="listing-price">${listing.price}</span>
                  </li>
                  <li class="list-group-item edit-input">
				  	<div class="form-group">
              			   <label class="col-md-4 control-label" for="price">Price</label>
             			   <div class="col-md-4">
              			      <input id="price" value= '$${listing.price}' name="price" type="text" class="form-control input-md" />
             			   </div>
            	  	   </div>
                  </li>
                  <li class="list-group-item listing-info">
                    <h4 class="inline-header">Rooms:</h4>
                    <span class="room-num">${listing.numRooms}</span>
                  </li>
				  <li class="list-group-item edit-input">
                     <div class="form-group">
              		     <label class="col-md-4 control-label" for="numRooms">Number of Rooms</label>
             		     <div class="col-md-4">
              		        <input id="numRooms" value='${listing.numRooms}' name="numRooms" type="text" class="form-control input-md" />
             		     </div>
            	     </div>
            	  </li>
                  <li class="list-group-item listing-info">
                    <h4 class="inline-header">Link:</h4>
                    <a href='${listing.url}'>${listing.url}</a>
                  </li>
                  <li class="list-group-item edit-input">
                  	 <div class="form-group">
              		  <label class="col-md-4 control-label" for="url">Link</label>
             		  <div class="col-md-4">
              		     <input id="url" value='${listing.url}' name="url" type="text" class="form-control input-md" /><br>
              		     <button id="singlebutton" class="btn btn-primary submit-changes">Submit</button>
             		  </div>
            	    </div>
                  </li>
                </ul>
                </form>
              </div>
            </div>
            <!-- end of house internal row -->
            <div class="panel-footer">

                <button class="btn delete-listing">Delete Listing</button>
				<a class="btn btn-info edit-listing">Edit Listing</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;

    //append listing to page
    $('.listings-container').prepend(listingHtml);
    //hide edit box
    $('.edit-input').hide();
    //show edit box
    $('.edit-listing').click(function showEditFields(e) {
    e.preventDefault();
    $(this).closest('.house').find('.edit-input').show();
    $(this).closest('.house').find('.listing-info').hide();
    })
    //submit changes
    $('.edit-submit').on('submit', function(e){
    	e.preventDefault();
    	var listingId = $(this).parents('.house').data('house-id')
  		var dataArray= $(this).serializeArray();
  		var data= {
  			city: dataArray[0].value,
  			name: dataArray[1].value,
  			price: dataArray[2].value,
  			numRooms: dataArray[3].value,
  			url: dataArray[4].value
  		}
   	    $.ajax({
   	      url: `/api/houses/${listingId}`,
     	  type: 'PUT',
     	  dataType: 'json',
          data: data,
    	  success: function (res) {
      	  console.log("success")
     	  },
          error: function (err) {
          console.log("error");
          }
        });
        $(this).closest('.house').find('.edit-input').hide();
        $(this).closest('.house').find('.listing-info').show()
    	var listingToMove = $(this).closest('.house');
    	$('.listings-container').prepend(listingToMove);
    	location.reload();
    });
    //delete listing
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
