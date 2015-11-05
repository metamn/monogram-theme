var S, T, O, C, I, D;
var x = 0;
var y = 0;
var direction = 0;

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
  Rotate();
}

function Rotate() {
  random = Math.floor(Math.random() * 4);

  switch (direction) {
    case 0:
      x += 5 * random;
      break;
    case 1:
      x -= 5 * random;
      break;
    case 2:
      y += 5 * random;
      break;
    case 3:
      y -= 5 * random;
      break;
  }

  console.log('d:' + direction + ' x:' + x + ' y:' + y);

  direction = random;

  if (typeof D != "undefined") { D.RotateZ(10,1); }
  S.ChangeViewer(x, y);
  S.Sort();
  S.Draw();
  setTimeout("Rotate()", 200);
}



Init();
