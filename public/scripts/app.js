$(document).ready(function() {
  console.log('app.js loaded!');

  $.ajax({
    method: 'GET',
    url: '/api/listings',
    success: renderMultipleListings
  });
})