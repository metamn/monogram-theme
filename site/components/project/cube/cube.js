var scene, camera, renderer;

var WIDTH  = 300;
var HEIGHT = 300;

var SPEED = 0.01;

var cubeInit = function(containerID) {
  scene = new THREE.Scene();

  // init cube
  cube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2), new THREE.MeshNormalMaterial());
  scene.add(cube);

  // init camera
  camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 1, 10);
  camera.position.set(0, 3.5, 5);
  camera.lookAt(scene.position);

  // init renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(WIDTH, HEIGHT);

  var container = document.querySelector(containerID);
  container.appendChild(renderer.domElement);
}


var cubeRender = function() {
  requestAnimationFrame(cubeRender);
  rotateCube();
  renderer.render(scene, camera);

  function rotateCube() {
    cube.rotation.x -= SPEED * 2;
    cube.rotation.y -= SPEED;
    cube.rotation.z -= SPEED * 3;
  }
}

cubeInit('.cube__container');
cubeRender();
