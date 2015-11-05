var S, T, O, C, I, D;

function Init() {
  if (useSVG){
    if (! SVGObjects[0]) {
      setTimeout("Init()", 100);
      return;
    }
    S = new Scene3D(SVGObjects[0], 0, 300, 300);
  } else {
    S = new Scene3D(document.getElementById("Scene1"),1);
  }

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
  S.ZoomAll *= 1.4;
  S.ChangeViewer(-15, 0);
  S.ChangeLight(-20, -30);
  S.Sort();
  S.Draw();
}

function Rotate() {
  if (! isRotating) return;
  if (typeof D != "undefined") { D.RotateZ(10,1); }
  S.ChangeViewer(0,-5);
  S.ChangeLight(0,-5);
  S.Sort();
  S.Draw();
  setTimeout("Rotate()",100);
}

function ChangeViewer(vv) {
  S.ChangeViewer(vv, 0);
  if (! isRotating) {
    S.Sort();
    S.Draw();
  }
}

function ChangeLight(ttheta, ffi) {
  S.ChangeLight(ttheta, ffi);
  if (! isRotating) S.Draw();
}

var viewerzoomed=0;
function ZoomViewer(vv) {
  if ((viewerzoomed + vv > 5) || (viewerzoomed + vv <- 5)) return;
  viewerzoomed += vv;

  if (vv > 0) S.Dist *= 0.8;
  else S.Dist /= 0.8;

  if (! isRotating) {
    S.Sort();
    S.Draw();
  }
}

function Shift(hh, vv) {
  S.XM += hh;
  S.YM += vv;
  if (! isRotating) S.Draw();
}

var picturezoomed=0;
function ZoomPicture(vv) {
  if ((picturezoomed + vv > 5) || (picturezoomed + vv < -5)) return;
  picturezoomed+=vv;

  if (vv > 0) S.ZoomAll *= 1.1;
  else S.ZoomAll /= 1.1;
  if (! isRotating) S.Draw();
}

var isRotating=false;
function StartStop() {
  if (isRotating) {
    isRotating = false;
    document.getElementById("StartStop").value="rotate";
  } else {
    isRotating = true;
    document.getElementById("StartStop").value="stop";
    Rotate();
  }
}
onload=Init;
