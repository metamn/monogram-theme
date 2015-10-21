// Tangram Map
//
// - It uses Leaflet.js to draw on an OpenStreetMap using objects, scenes, etc. defined in a yaml file
//
var tangramMap = function(containerID) {
  var map = L.map(containerID, null, { zoomControl:false });

  // No zoom & interactions
  map.dragging.disable();
  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();
  map.boxZoom.disable();
  map.keyboard.disable();
  if (map.tap) map.tap.disable();

  // Set up Tangram
  var layer = Tangram.leafletLayer({
    scene: '/assets/maps/scene.yaml',
    attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | &copy; OSM contributors | <a href="https://mapzen.com/" target="_blank">Mapzen</a>'
  });

  layer.addTo(map);

  // Set up coordinates
  map.setView([40.70531887544228, -74.00976419448853], 15);
}

tangramMap('tangram');
