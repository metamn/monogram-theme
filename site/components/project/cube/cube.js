var S, T, O, C, I, D;
//useSVG=true;//you can also change this by hand
function Init()
{ if (useSVG)
  { if (! SVGObjects[0])
    { setTimeout("Init()",100);
      return;
    }
    S=new Scene3D(SVGObjects[0],0,500,500);
  }
  else S=new Scene3D(document.getElementById("Scene1"),1);
  T=new Tetrahedron(S, "#0080ff", "#0000ff", "#000000", 1);
  T.Shift(1,1,1);
  T.SetId(0);
  T.SetEventAction("click", parent.ClickMsg);
  O=new Octahedron(S, "#0080ff", "#0000ff", "#000000", 1);
  O.Zoom(1.4);
  O.Shift(-1,1,-1);
  O.SetId(1);
  O.SetEventAction("click", parent.ClickMsg);
  C=new Cube(S, "#0080ff", "#0000ff", "#000000", 1);
  C.Zoom(0.9);
  C.Shift(1,-1,-1);
  C.SetId(2);
  C.SetEventAction("click", parent.ClickMsg);
  I=new Icosahedron(S, "#0080ff", "#0000ff", "#000000", 1);
  I.Shift(-1,-1,1);
  I.SetId(3);
  I.SetEventAction("click",parent.ClickMsg);
  D=new Dodecahedron(S, "#0080ff", "#0000ff", "#000000", 1);
  D.SetId(4);
  D.SetEventAction("click", parent.ClickMsg);
  S.AutoCenter();
  S.Center.Zoom(0.0);
  S.ZoomAll*=1.4;
  S.ChangeViewer(-15,0);
  S.ChangeLight(-20,-30);
  S.Sort();
  S.Draw();
}
function ClickMsg(evt)
{ var oo=new Array("tetrahedron","octahedron","cube","icosahedron","dodecahedron");
  if (evt) alert("You clicked on the "+oo[evt.target.id]+"."); //SVG
  else alert("You clicked on the "+oo[this.id]+"."); //VML
}
function Rotate()
{ if (! isRotating) return;
  D.RotateZ(10,1);
  S.ChangeViewer(0,-5);
  S.ChangeLight(0,-5);
  S.Sort();
  S.Draw();
  setTimeout("Rotate()",100);
}
function ChangeViewer(vv)
{ S.ChangeViewer(vv, 0);
  if (! isRotating)
  { S.Sort();
    S.Draw();
  }
}
function ChangeLight(ttheta, ffi)
{ S.ChangeLight(ttheta, ffi);
  if (! isRotating) S.Draw();
}
var viewerzoomed=0;
function ZoomViewer(vv)
{ if ((viewerzoomed+vv>5)||(viewerzoomed+vv<-5)) return;
  viewerzoomed+=vv;
  if (vv>0) S.Dist*=0.8;
  else S.Dist/=0.8;
  if (! isRotating)
  { S.Sort();
    S.Draw();
  }
}
function Shift(hh, vv)
{ S.XM+=hh;
  S.YM+=vv;
  if (! isRotating) S.Draw();
}
var picturezoomed=0;
function ZoomPicture(vv)
{ if ((picturezoomed+vv>5)||(picturezoomed+vv<-5)) return;
  picturezoomed+=vv;
  if (vv>0) S.ZoomAll*=1.1;
  else S.ZoomAll/=1.1;
  if (! isRotating) S.Draw();
}
var isRotating=false;
function StartStop()
{ if (isRotating)
  { isRotating=false;
    document.getElementById("StartStop").value="rotate";
  }
  else
  { isRotating=true;
    document.getElementById("StartStop").value="stop";
    Rotate();
  }
}
onload=Init;
