// Initializng variables to control starting pixel size, as well as amount of cities and timer amount

//Class declaration for storing info about cities

class City {
  constructor(cName, cPic) {
    //default constructor
    this.cName = cName; //stores the name of the city
    this.cPicture = cPic; //stores the corresponding image of the city
  }
}

//Initializing Variables
//array to store the city names in order of city files

answers = [
  "Rome",
  "Sydney",
  "Paris",
  "San Francisco",
  "London",
  "Moscow",
  "Rio de Janeiro",
  "Santorini",
  "Vancouver",
  "Brisbane",
  "New York City",
];

cities = []; //an array containing City objects
numCities = 11; //total number of cities
counter = 0; //index of the current city
let size = 13; //pixel size - initialized
let timer = 10; //timer initilized at 10
let font; //variable to store font

// preloading images and music, and constructing City objects
function preload() {
  for (let i = 0; i < numCities; i++) {
    temp = loadImage("data/city" + i + ".jpg"); //loads image from the files according to the format of filenames used
    cities[i] = new City(answers[i], temp); //stores City object at position i
  }
  startImg = loadImage("data/sPage.jpg"); //homescreen image
  endImg = loadImage("data/kangaroo.jpg"); //final image - kangaroo
  font = loadFont("fonts/Roboto-Black.ttf"); //font used
  music = loadSound("bell.mp3"); //sound for transitions
  music1 = loadSound("game.mp3"); //sound for game-over
}

let screen; //variable to switch between screens
//0 is home screen
//1 is the game screen

//setup function
function setup() {
  createCanvas(640, 550);
  frameRate(5);
  screen = 0; //initializing screen to show homescreen

  //initializing text parameters
  textAlign(CENTER, CENTER);
  textFont(font);

  rectMode(CENTER);
}

function draw() {
  if (screen == 0) {
    homeScreen(); //calls the homeScreen function if screen is equal to 0
  }

  if (screen == 1) {
    //goes on to the game screen
    gamePlay(); //calls the gamePlay function to start the game
  }
}

// Wait for timer to reach 0 to let user go on to the next city
function mousePressed() {
  if (timer == 0) {
    //only executes if timer has reached 0
    counter++; //increases counter to access next City object

    // reset timer to 10 and pixel size to 13 before looping
    timer = 10;
    size = 13;
    loop(); //starts looping the draw function again
  }
}

//function to define homescreen
function homeScreen() {
  strokeWeight(2);
  textFont("Courier New");
  textSize(25);
  textAlign(CENTER);
  image(startImg, 0, 0); //displays start image
  fill(0, 0, 0);
  text("CLICK ANYWHERE TO CONTINUE", width / 2, (4 * height) / 5);
  strokeWeight(4);
  textSize(50);
  text(" CITY GUESS", width / 2, height / 7);

  // Draw a rectangle with rounded corners, each having a radius of 20.
  fill(0, 0, 0, 100);
  rect(340, 270, 270, 250, 20);

  strokeWeight(4);
  fill(255, 255, 255);
  textSize(30);
  textFont("Georgia");
  text(" Instructions", 330, 200);

  strokeWeight(4);
  textSize(20);
  textFont("Georgia");
  text(" Guess the city from the image", 338, 250);
  text(" displayed on the screen", 338, 270);
  text("under 10 seconds before ", 338, 290);
  text("the timer goes off. All", 338, 310);
  text("ten cities must be correctly ", 338, 330);
  text("guessed to win the game.", 338, 350);
  text("All the best!! ", 338, 370);
}

//function to capture mouse click - switches between homeScreen and gamePlay
function mouseClicked() {
  if (screen == 0) {
    screen = 1;
  }
}

//function to start the game
function gamePlay() {
  clear(); //clear screen in every iteration to avoid overlapping to texts and images

  // Loop over entire image and move from pixelated to clear image gradually
  if (counter < numCities) {
    //execute only until the counter doesn't reach the end City object in the array

    //load current city image in screen
    for (let x = 0; x < width; x += size) {
      //size depicts the size of pixels in the image
      for (let y = 0; y < height; y += size) {
        //gradual decrease in size makes the image more clearer
        cityImg = cities[counter].cPicture; //current city image

        //displays image (pixelated)
        col = cityImg.get(x, y);
        stroke(col);
        fill(col);
        square(x, y, size);
      }
    }
    // Timer ticks down and unpixelates the image every frame
    textSize(90);
    fill(0);
    text(timer, width - 70, 50); //displays current time in the screen

    if (timer > 1) {
      timer--;
      size--; // As size decreases, the pixelation decreases
    }
    // Saves processing power not pixelating final image and directly displaying it
    else if (timer == 1) {
      timer--;
    }
    // After timer is 0, unpixellated image and the city name are displayed
    else if (timer == 0) {
      music.play(); //play sound before image reveal
      image(cityImg, 0, 0); //display the unpixellated image

      textSize(75);
      text(cities[counter].cName, width / 2, 40); //shows answer

      textSize(25);
      text("Click for", width / 2, cityImg.height - 50);
      text("next city", width / 2, cityImg.height - 30);

      noLoop(); //pauses looping in draw function
    }
  }
  // Display end screen once there are no more city images
  else if (counter == numCities) {
    music1.play(); //play game over sound
    image(endImg, 0, 0); //play final image and message
    textSize(50);
    text("Game Over", width / 2, height * 0.55);
    text("Thanks for Playing!", width / 2, height * 0.65);
    noLoop(); //pauses looping in draw function
  }
}
