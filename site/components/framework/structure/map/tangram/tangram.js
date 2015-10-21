var tangramMap = function(containerID) {
  var map = L.map(containerID);
  var layer = Tangram.leafletLayer({
      scene: '/assets/maps/scene.yaml',
      attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | &copy; OSM contributors | <a href="https://mapzen.com/" target="_blank">Mapzen</a>'
  });

  layer.addTo(map);

  map.setView([40.70531887544228, -74.00976419448853], 15);
}

tangramMap('tangram');
