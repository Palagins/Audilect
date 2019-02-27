// Initialize and add the map
function initMap() {
// The location of Uluru
 var uluru = {lat: 57.1195236949256, lng: -2.14959933023406};
 // The map, centered at Uluru
 var map = new google.maps.Map(
 document.getElementById('maps'), {zoom: 16, center: uluru});
 // The marker, positioned at Uluru
 var marker = new google.maps.Marker({position: uluru, map: map});
 }
