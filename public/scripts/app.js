function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: earthquakeLatitude, lng: earthquakeLongitude},
      zoom: 3,
    })

    
  }

  $('#map').append(initMap());
}






$.ajax({
    method: 'GET',
    url: '/api/hubs',
    success: function getArtists(e) {
        e.data.forEach(element => {
            allArtists.push(element);
        });
        
        }
        
    });