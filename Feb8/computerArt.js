function setup() {
createCanvas(500, 500, WEBGL);
background (0,0,0);
 
}

function draw() {
print(mouseX,mouseY);  
   
for (let foo = 18; foo < 492; foo = foo + 1){
  for (let foo1 = 0; foo1 < 2; foo1 = foo1 + 1){
  stroke(0, 212, 212);
 strokeWeight(4);
  line (random(-400), random(-400),random(400),random(400)); 
  
  stroke(0,0,0);
  strokeWeight(1);
   fill(0,0,0); 
  rect(random(-400), random(-400), random(400), random(400));
  
  stroke(0,0,0);
  strokeWeight(3);
  fill(200,45,60);
  circle(random(-400), random(-400), random(100));
  
  stroke(0,0,0);
  strokeWeight(2);
  fill(0,0,0);
  triangle(random(400), random(400), random(400), random (400), random(400) , random(400));

  }
}

  //background(200);
  fill(0,0,0);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1);
  box(50);
}
