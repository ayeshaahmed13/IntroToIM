#### Computer Art:
<img width="497" alt="Screen Shot 2022-02-08 at 9 39 11 AM" src="https://user-images.githubusercontent.com/98395837/152925342-d6694be5-73ee-4001-a60a-4c9be20edfa9.png">

#### Code:
````
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

````

##### Problems:
1. I theoretically understood the for() and while() loops, however I had a significant difficulty applying them practically. Additionally, I also had a lot of fun experimenting while making a rotating cube, and compiling that with a dynamic background even though it was a herculean task, it was a rewarding expereince. 
