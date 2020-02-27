function initMap() {
	// add your code here
  L.mapquest.key = 't69jGscXR3NtI8ZLv05jXO6HWnQDVL7i';
  var map = L.mapquest.map('map', {
    center: [32.88, -117.236],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });

  L.marker([32.88, -117.236]).addTo(map);
}
