var S, T, O, C, I, D;
var x = 0;
var y = 0;
var rotationDirection = 0;

function Init() {
  if (! SVGObjects[0]) {
    setTimeout("Init()", 100);
    return;
  }

  S = new Scene3D(SVGObjects[0], 0, 300, 300);

  C = new Cube(S, "", "", "#ffffff", 1);
  C.Zoom(0.9);
  C.SetId(2);

  /*
  T = new Tetrahedron(S, "", "", "#ffffff", 1);
  T.SetId(0);

  O = new Octahedron(S, "", "", "#ffffff", 1);
  O.Zoom(1.4);
  O.SetId(1);

  I = new Icosahedron(S, "", "", "#ffffff", 1);
  I.SetId(3);

  D=new Dodecahedron(S, "", "", "#ffffff", 1);
  D.SetId(4);
  */

  S.AutoCenter();
  S.Center.Zoom(0.0);
  S.ChangeViewer(-15, 0);
  S.Sort();
  S.Draw();
  //Rotate();
}

function cubeRotate() {
  if (typeof D != "undefined") { D.RotateZ(10,1); }

  switch (rotationDirection) {
    case 0:
      // left
      y -= 10;
      S.ChangeViewer(0, y);
      break;
    case 1:
      // right
      y += 10;
      S.ChangeViewer(0, y);
      break;
    case 2:
      // up
      x += 5;
      S.ChangeViewer(x, 0);
      break;
    case 3:
      // down
      x -= 5;
      S.ChangeViewer(x, 0);
      break;
  }
  console.log('d:' + rotationDirection + ' x:' + x + ' y:' + y);

  S.Sort();
  S.Draw();
}


// Rotate the cube on keypress
// - it disables the automatic rotation
document.addEventListener('keydown', function(e) {
  switch(e.keyCode) {
    case 37: // left
      rotationDirection = 0;
      cubeRotate();
      break;
    case 38: // up
      rotationDirection = 2;
      cubeRotate();
      break;
    case 39: // right
      rotationDirection = 1;
      cubeRotate();
      break;
    case 40: // down
      rotationDirection = 3;
      cubeRotate();
      break;
    case 32: // space
      // stop the rotation
      break;
    case 27: // escape
      // restart the rotation
    break;
  };

}, false);


Init();
