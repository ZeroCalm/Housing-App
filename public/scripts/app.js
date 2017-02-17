<<<<<<< HEAD
console.log("Hello World");
=======
$(document).ready(function() {
  console.log('app.js loaded!');

  $.ajax({
    method: 'GET',
    url: '/api/listings',
    success: renderMultipleListings
  });
})
>>>>>>> 5c9875dccca793fb3205dfdb52e8500f5eea823d
