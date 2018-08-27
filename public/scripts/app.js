console.log("hello");
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.755634, lng: -122.403748},
      zoom: 11.5
    });
}
initMap();
function addMarker(latlng) {
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var icon = {
      url: "./images/earthquake.png", // url
      scaledSize: new google.maps.Size(50, 50), // scaled size
    };
    new google.maps.Marker({
      position: latlng,
      map: map,
      title: 'Hello',
      icon: icon,
    });
}
var latlng = {lat: 37.755634, lng: -122.403748}
addMarker(latlng);

$.ajax({
    method: 'GET',
    url: '/api/hubs',
    success: function getArtists(e) {
        e.data.forEach(element => {
            allArtists.push(element);
        });
        
        }
        
    });
