// Initialize Google Map and markers
function initMap() {
  var center = { lat: 19.0760, lng: 72.8777 }; // Mumbai
  var map = new google.maps.Map(document.getElementById('service-map'), {
    zoom: 5,
    center: center
  });

  // Main Office Marker
  new google.maps.Marker({
    position: center,
    map: map,
    title: 'Main Office: Mumbai'
  });

  // States served
  var states = [
    { name: 'Delhi', coords: { lat: 28.6139, lng: 77.2090 } },
    { name: 'Gujarat', coords: { lat: 23.0225, lng: 72.5714 } },
    { name: 'Tamil Nadu', coords: { lat: 13.0827, lng: 80.2707 } },
    { name: 'West Bengal', coords: { lat: 22.5726, lng: 88.3639 } },
    { name: 'Karnataka', coords: { lat: 12.9716, lng: 77.5946 } },
    { name: 'Rajasthan', coords: { lat: 26.9124, lng: 75.7873 } },
    { name: 'Punjab', coords: { lat: 30.7333, lng: 76.7794 } }
  ];
  states.forEach(function(state) {
    new google.maps.Marker({
      position: state.coords,
      map: map,
      title: 'Service: ' + state.name
    });
  });
}
// Google Maps will call initMap automatically
