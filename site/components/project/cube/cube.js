var cubeRotate = function(containerID) {
  var scene, camera, renderer;

  var WIDTH  = 300;
  var HEIGHT = 300;

  var SPEED = 0.01;

  POLYHEDRA = {
    Tetrahedron : {
    "vertex":[[0,0,1.732051],[1.632993,0,-0.5773503],[-0.8164966,1.414214,-0.5773503],[-0.8164966,-1.414214,-0.5773503]],
    "edge":[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]],
    "face":[[0,1,2],[0,2,3],[0,3,1],[1,3,2]]},

    Cube: {
    "vertex":[[0,0,1.224745],[1.154701,0,0.4082483],[-0.5773503,1,0.4082483],[-0.5773503,-1,0.4082483],[0.5773503,1,-0.4082483],[0.5773503,-1,-0.4082483],[-1.154701,0,-0.4082483],[0,0,-1.224745]],
    "edge":[[0,1],[0,2],[0,3],[1,4],[1,5],[2,4],[2,6],[3,5],[3,6],[4,7],[5,7],[6,7]],
    "face":[[0,1,4,2],[0,2,6,3],[0,3,5,1],[1,5,7,4],[2,4,7,6],[3,6,7,5]]},

    Octahedron: {
    "vertex":[[0,0,1.414214],[1.414214,0,0],[0,1.414214,0],[-1.414214,0,0],[0,-1.414214,0],[0,0,-1.414214]],
    "edge":[[0,1],[0,2],[0,3],[0,4],[1,2],[1,4],[1,5],[2,3],[2,5],[3,4],[3,5],[4,5]],
    "face":[[0,1,2],[0,2,3],[0,3,4],[0,4,1],[1,4,5],[1,5,2],[2,5,3],[3,5,4]]},

    Dodecahedron: {
    "vertex":[[0,0,1.070466],[0.7136442,0,0.7978784],[-0.3568221,0.618034,0.7978784],[-0.3568221,-0.618034,0.7978784],[0.7978784,0.618034,0.3568221],[0.7978784,-0.618034,0.3568221],[-0.9341724,0.381966,0.3568221],[0.1362939,1,0.3568221],[0.1362939,-1,0.3568221],[-0.9341724,-0.381966,0.3568221],[0.9341724,0.381966,-0.3568221],[0.9341724,-0.381966,-0.3568221],[-0.7978784,0.618034,-0.3568221],[-0.1362939,1,-0.3568221],[-0.1362939,-1,-0.3568221],[-0.7978784,-0.618034,-0.3568221],[0.3568221,0.618034,-0.7978784],[0.3568221,-0.618034,-0.7978784],[-0.7136442,0,-0.7978784],[0,0,-1.070466]],
    "edge":[[0,1],[0,2],[0,3],[1,4],[1,5],[2,6],[2,7],[3,8],[3,9],[4,7],[4,10],[5,8],[5,11],[6,9],[6,12],[7,13],[8,14],[9,15],[10,11],[10,16],[11,17],[12,13],[12,18],[13,16],[14,15],[14,17],[15,18],[16,19],[17,19],[18,19]],
    "face":[[0,1,4,7,2],[0,2,6,9,3],[0,3,8,5,1],[1,5,11,10,4],[2,7,13,12,6],[3,9,15,14,8],[4,10,16,13,7],[5,8,14,17,11],[6,12,18,15,9],[10,11,17,19,16],[12,13,16,19,18],[14,15,18,19,17]]},

    Icosahedron : {
    "vertex":[[0,0,1.175571],[1.051462,0,0.5257311],[0.3249197,1,0.5257311],[-0.8506508,0.618034,0.5257311],[-0.8506508,-0.618034,0.5257311],[0.3249197,-1,0.5257311],[0.8506508,0.618034,-0.5257311],[0.8506508,-0.618034,-0.5257311],[-0.3249197,1,-0.5257311],[-1.051462,0,-0.5257311],[-0.3249197,-1,-0.5257311],[0,0,-1.175571]],
    "edge":[[0,1],[0,2],[0,3],[0,4],[0,5],[1,2],[1,5],[1,6],[1,7],[2,3],[2,6],[2,8],[3,4],[3,8],[3,9],[4,5],[4,9],[4,10],[5,7],[5,10],[6,7],[6,8],[6,11],[7,10],[7,11],[8,9],[8,11],[9,10],[9,11],[10,11]],
    "face":[[0,1,2],[0,2,3],[0,3,4],[0,4,5],[0,5,1],[1,5,7],[1,7,6],[1,6,2],[2,6,8],[2,8,3],[3,8,9],[3,9,4],[4,9,10],[4,10,5],[5,10,7],[6,7,11],[6,11,8],[7,10,11],[8,11,9],[9,11,10]]}
  }

  function displayPolyhedron(data) {
  	polyhedronMesh = polyhedronDataToMesh(data);
  	scene.add(polyhedronMesh);
  }

  function polyhedronDataToMesh(data) {
	   var polyhedron = new THREE.Object3D();

  	// convert vertex data to THREE.js vectors
  	var vertex = []
  	for (var i = 0; i < data.vertex.length; i++)
  		vertex.push( new THREE.Vector3( data.vertex[i][0], data.vertex[i][1], data.vertex[i][2] ).multiplyScalar(100) );

  	var vertexGeometry = new THREE.SphereGeometry( 6, 12, 6 );
  	var vertexMaterial = new THREE.MeshLambertMaterial( { color: 0x222244 } );
  	var vertexSingleMesh = new THREE.Mesh( vertexGeometry );

	var vertexAmalgam = new THREE.Geometry();
	for (var i = 0; i < data.vertex.length; i++)
	{
		var vMesh = vertexSingleMesh.clone();
		vMesh.position = vertex[i];
		THREE.GeometryUtils.merge( vertexAmalgam, vMesh );
	}
	var vertexMesh = new THREE.Mesh( vertexAmalgam, vertexMaterial );
	polyhedron.add( vertexMesh );

	// convert edge data to cylinders
	var edgeMaterial = new THREE.MeshLambertMaterial( {color: 0x666666} );
	var edgeAmalgam = new THREE.Geometry();
	for (var i = 0; i < data.edge.length; i++)
	{
		var index0 = data.edge[i][0];
		var index1 = data.edge[i][1];
		var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial );
		THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
	}
	var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
	polyhedron.add( edgeMesh );

	// convert face data to a single (triangulated) geometry
	var faceMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.FrontSide, transparent:parameters.transparent, opacity:0.8 } );
	var faceColors =
	{
	    3: new THREE.Color( 0xcc0000 ),
	    4: new THREE.Color( 0x00cc00 ),
	    5: new THREE.Color( 0x0000cc ),
	    6: new THREE.Color( 0xcccc00 ),
	    7: new THREE.Color( 0x999999 ),
	    8: new THREE.Color( 0x990099 ),
	    9: new THREE.Color( 0xff6600 ),
	    10: new THREE.Color( 0x6666ff )
	};

	var geometry = new THREE.Geometry();
	geometry.vertices = vertex;
	var faceIndex = 0;
	for (var faceNum = 0; faceNum < data.face.length; faceNum++)
	{
		for (var i = 0; i < data.face[faceNum].length - 2; i++)
		{
			geometry.faces[faceIndex] = new THREE.Face3( data.face[faceNum][0], data.face[faceNum][i+1], data.face[faceNum][i+2] );
			geometry.faces[faceIndex].color = faceColors[data.face[faceNum].length];
			faceIndex++;
		}
	}

	geometry.computeFaceNormals();
	geometry.computeVertexNormals();

	faces = new THREE.Mesh(geometry, faceMaterial);
	faces.scale.multiplyScalar(1.01);
	polyhedron.add(faces);

	var interiorMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide } );

	var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
	interiorFaces.scale.multiplyScalar(0.99);
	polyhedron.add( interiorFaces );

	return polyhedron;
  }

  function cylinderMesh(point1, point2, material) {
    var direction = new THREE.Vector3().subVectors(point2, point1);
    var arrow = new THREE.ArrowHelper(direction.clone().normalize(), point1);
    var rotation = new THREE.Vector3().setEulerFromQuaternion(arrow.quaternion);
    var edgeGeometry = new THREE.CylinderGeometry( 2, 2, direction.length(), 8, 4 );
    var edge = new THREE.Mesh(edgeGeometry, material);
    edge.position = new THREE.Vector3().addVectors(point1, direction.multiplyScalar(0.5));
	   edge.rotation = rotation;
	return edge;

	// the result should align with:
	//   scene.add( new THREE.ArrowHelper( direction.clone().normalize(), point1, direction.length()) );
  }

  function animate()
{
    requestAnimationFrame( animate );
	render();
	update();
}

function update()
{
	if (camera.position.length() < 150)
		camera.position.setLength(150);
	if (camera.position.length() > 500)
		camera.position.setLength(500);
}

function render()
{
	renderer.render( scene, camera );
}

  var cubeInit = function(containerID) {
    // SCENE
    scene = new THREE.Scene();

    // CAMERA
    var SCREEN_WIDTH = WIDTH, SCREEN_HEIGHT = HEIGHT;
    var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
    camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
    scene.add(camera);
    camera.position.set(0,150,400);
    camera.lookAt(scene.position);

    // RENDERER
    renderer = new THREE.WebGLRenderer( {antialias:true} );
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    var container = document.querySelector(containerID);
    container.appendChild(renderer.domElement);

    // The polyhedron
    this.parameters = { transparent: true };
    this.polyhedronMesh = new THREE.Object3D();
    scene.add(polyhedronMesh);
    displayPolyhedron( POLYHEDRA.Tetrahedron );
  }

  cubeInit(containerID);
  animate();
}


cubeRotate('.cube__container');
