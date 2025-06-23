// Initialize Google Map and markers
window.onload = function() {
  var mumbai = [19.0760, 72.8777];
  var map = L.map('service-map').setView(mumbai, 5);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Main Office Marker with custom icon and bold tag
  var mainOfficeIcon = L.icon({
    iconUrl: 'images/office.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    shadowSize: [41, 41]
  });
  L.marker(mumbai, {icon: mainOfficeIcon}).addTo(map)
    .bindPopup('<b>Main Office</b><br>Mumbai').openPopup();

  // States served
  var states = [
    { name: 'Delhi', coords: [28.6139, 77.2090] },
    { name: 'Gujarat', coords: [23.0225, 72.5714] },
    { name: 'Tamil Nadu', coords: [13.0827, 80.2707] },
    { name: 'West Bengal', coords: [22.5726, 88.3639] },
    { name: 'Karnataka', coords: [12.9716, 77.5946] },
    { name: 'Rajasthan', coords: [26.9124, 75.7873] },
    { name: 'Punjab', coords: [30.7333, 76.7794] }
  ];
  states.forEach(function(state) {
    L.marker(state.coords).addTo(map)
      .bindPopup('<b>Service Location</b><br>' + state.name);
  });
};
// Google Maps will call initMap automatically
