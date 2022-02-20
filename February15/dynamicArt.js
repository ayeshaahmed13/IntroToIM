// draw multiple spinning toruses
//WEBGL helps make the torus interactive
function setup() {
  createCanvas(400, 400, WEBGL);
  rectMode(CORNERS);
}

function draw() { // defining main object( aqua coloured torus)

  fill(10, 240, 224);
  stroke(0,0,0);
  strokeWeight(1);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(60, 15);
  
  obj = new Torus();// defining new objects
  obj.blueTorus();
  obj.redTorus();
  obj.background();
  

}

class Torus//create torus class to include other two torsuses
{

  constructor()
  {
    //empty as there is no need
  }
  
  redTorus()// largest red revolving torus
  {
    fill(245, 2, 83);
    stroke(0,0,0);
    strokeWeight(3);
    rotateX(frameCount * 0.03);
    rotateY(frameCount * 0.03);
    torus(100, 30)
  }
  
   darkblueTorus()//middle dark blue revolving torus
  {
    fill(63, 2, 245);
    stroke(0,0,0);
    strokeWeight(2);
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.02);
    torus(80, 23);
  }
  
  background()// absence of background allows creation of black sphere and helps coloured toruses leave a trail
  {
    if (frameCount % 1 == 0) {
      fill(10,240,224);
      push();
      translate(200, 200);
      rotate(radians(frameCount));
      rect(0, 0, 300, 20);
      pop();
    }
  }
}
