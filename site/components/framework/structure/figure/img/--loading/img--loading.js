// Adding the class `img--loaded` for images after they are all fully loaded
// - 'containerID' can be like '.hero' or '.articles .article'
var imagesLoading = function(containerID) {
  var containers = document.querySelectorAll(containerID);

  for (var i = 0; i < containers.length; i++) {
    imageLoading(containers[i]);
  }
}

// Adding the class `img-loaded` for images inside a single container
// - uses the imagesLoaded external library
var imageLoading = function(container) {
  var images = container.querySelectorAll('.img');
  var figures = container.querySelectorAll('.figure');

  imagesLoaded(container, function(instance) {
    for (var i = 0; i < images.length; i++) {
      figures[i].classList.add('figure--loaded');
      images[i].classList.add('img--loaded');
    }
  });
}
