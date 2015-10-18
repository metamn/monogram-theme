var cubeRotate = function(containerID) {
  var container = document.querySelector(containerID);
  var xAngle = 0, yAngle = 0;

  document.addEventListener('keydown', function(e) {
    switch(e.keyCode) {

      case 37: // left
        yAngle -= 90;
        break;

      case 38: // up
        xAngle += 90;
        break;

      case 39: // right
        yAngle += 90;
        break;

      case 40: // down
        xAngle -= 90;
        break;
    };

    transform(container, "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)");
  }, false);


  function transform(container, style) {
    container.style.webkitTransform = style;

    container.style.MozTransform =
    container.style.msTransform =
    container.style.OTransform =
    container.style.transform = style;
  }
}

cubeRotate('.cube3d');
