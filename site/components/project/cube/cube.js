var cubeRotate = function(containerID) {
  var scene, camera, renderer;

  var WIDTH  = 300;
  var HEIGHT = 300;

  var SPEED = 0.01;

  var cubeInit = function(containerID) {
    scene = new THREE.Scene();

    var verticesOfCube = [
    -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
    -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
    ];

    var indicesOfFaces = [
        2,1,0,    0,3,2,
        0,4,7,    7,3,0,
        0,1,5,    5,4,0,
        1,2,6,    6,5,1,
        2,3,7,    7,6,2,
        4,5,6,    6,7,4
    ];

    geometry = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6, 2 );
    material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    cube = new THREE.Mesh( geometry, material );

    //edges = new THREE.EdgesHelper( cube, 0x00ff00 );

    scene.add( cube );
    //scene.add( edges );


    // init camera
    camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 1, 10);
    camera.position.set(0, 3.5, 5);
    camera.lookAt(scene.position);

    // init renderer
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
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

  cubeInit(containerID);
  cubeRender();
}


cubeRotate('.cube__container');
