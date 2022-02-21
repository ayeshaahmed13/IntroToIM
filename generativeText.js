let fufu;// image name

function preload() { // ensures image loads before function is executed
  fufu = loadImage("fufu2.png");// upload image
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  let w = width / fufu.width;// defines width variable
  let h = height / fufu.height;// defines height variable
  fufu.loadPixels();// loads a pixalated image of the original picture

  for (let i = 0; i < fufu.width; i++) { // sets a condition for repetition of 
    for (let j = 0; j < fufu.height; j++) {
      const pixelI = (i + j * fufu.width) * 4;// defines transparency of each pixel
      const r = fufu.pixels[pixelI + 0];// gives constant r value for every pixel
      const g = fufu.pixels[pixelI + 2];// gives constant g value for every pixel
      const b = fufu.pixels[pixelI + 4];// gives constant b value for every pixel
      const avg = (r + g + b) / 2;

      noStroke();// text has no stroke
      fill(avg);// each letter on the canvas is filled with average calculated previously
      textSize(10);// defines size of the text
      textAlign(CENTER, CENTER);// alignment of the letters
      text("G", i * w + w * 0.5, j * h + h * 0.5);// defines the letters, the positionality of image on canvas
    }
  }
}

