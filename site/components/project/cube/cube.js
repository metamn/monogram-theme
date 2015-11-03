// Initial rotating direction
var rotationDirection = 0;

// Rotation speed in ms
var rotationSpeed = 1500;

// Initial rotation angle (as is in the CSS)
var xAngle = 0, yAngle = 0;



// On mouse over stop the rotation
var cubeMouseOver = function(containerID) {
  var faces = document.querySelectorAll(containerID);

  for (var i = 0; i < faces.length; i++) {
    faces[i].addEventListener("mouseover", function() {
      clearInterval(repeat);
      this.classList.add('mouseover');
    });

    faces[i].addEventListener("mouseout", function() {
      this.classList.remove('mouseover');

      repeat = setInterval(
        function(){
          rotationDirection = randomDirection(rotationDirection);
          cubeRotate('.cube3d', rotationDirection);
        },
        rotationSpeed
      );
    });
  }
}


// Get a random direction
var randomDirection = function(previousDirection) {
  do {
    var random = Math.floor(Math.random() * 4000);
    var direction = random % 4;
  } while (direction == previousDirection);

  return direction;
}


// Rotate the cube
var cubeRotate = function(containerID, direction) {
  var container = document.querySelector(containerID);

  switch(direction) {
    case 0: // up
      xAngle += 90;
      break;
    case 1: // down
      xAngle -= 90;
      break;
    case 2: // left
      yAngle -= 90;
      break;
    case 3: // right
      yAngle += 90;
      break;
  };

  transform(container, "rotateX(" + xAngle + "deg)" + " rotateY(" + yAngle + "deg) ");

  // Cross browser CSS transform
  function transform(container, style) {
    container.style.webkitTransform = style;

    container.style.MozTransform =
    container.style.msTransform =
    container.style.OTransform =
    container.style.transform = style;
  }
}


// Rotate the cube on keypress
// - it disables the automatic rotation
document.addEventListener('keydown', function(e) {
  clearInterval(repeat);

  switch(e.keyCode) {
    case 37: // left
      rotationDirection = 2;
      cubeRotate('.cube3d', rotationDirection);
      break;
    case 38: // up
      rotationDirection = 0;
      cubeRotate('.cube3d', rotationDirection);
      break;
    case 39: // right
      rotationDirection = 3;
      cubeRotate('.cube3d', rotationDirection);
      break;
    case 40: // down
      rotationDirection = 1;
      cubeRotate('.cube3d', rotationDirection);
      break;
    case 32: // space
      // stop the rotation
      break;
    case 27: // escape
      // restart the rotation
      repeat = setInterval(
        function(){
          rotationDirection = randomDirection(rotationDirection);
          cubeRotate('.cube3d', rotationDirection);
        },
        rotationSpeed
      );
    break;
  };

}, false);



// Rotate the cube with gestures
var cubeGestures = function(containerID) {
  var container = document.querySelector(containerID);
  var hammer = new Hammer(container);

  hammer.get('swipe').set({
    direction: Hammer.DIRECTION_ALL,
    threshold: 0,
    velocity: 0.001
  });

  hammer.on("swipeup", function() {
    clearInterval(repeat);
    cubeRotate('.cube3d', 0);
  });

  hammer.on("swipedown", function() {
    clearInterval(repeat);
    cubeRotate('.cube3d', 1);
  });

  hammer.on("swipeleft", function() {
    clearInterval(repeat);
    cubeRotate('.cube3d', 2);
  });

  hammer.on("swiperight", function() {
    clearInterval(repeat);
    cubeRotate('.cube3d', 3);
  });
}



// Infinitely rotate the cube
var repeat = setInterval(
  function() {
    rotationDirection = randomDirection(rotationDirection);
    cubeRotate('.cube3d', rotationDirection);
  },
  rotationSpeed
);


// Handle gestures
cubeGestures('body');



// Handle mouse over
cubeMouseOver('.cube3d__face');
