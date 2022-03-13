//=====================================================
// Author         : Ayesha Ahmed
// Course         : Introduction to Interactive Media
// Version        : 1.0
// Date Created   : 28 February 2022
// Date Submitted : 10 March 2022
// Description    : City Guess
//=====================================================

// Initializng variables to control starting pixel size, as well as number of cities and timer countdown
//Class declaration for storing information  about cities(images and names)

class City {
  constructor(cName, cPic) {
    //default constructor
    this.cName = cName; // constructor stores the name of the city
    this.cPicture = cPic; // constructor stores the corresponding image of the city
  }
}

//Initializing Variables
//defining an array to store the city names in order of city files

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

cities = []; // creating an array that contains city objects
numCities = 11; //stores total number of cities; defines total number of elements
counter = 0; // indicates index of the current city which helps in navigation through the array
let size = 13; // intailizes pixel size; 13 pixels taken randomly
let timer = 10; // intializes timer at 10 seconds; 10 seconds taken as normal response time
let font; // defining a variable to store font

// preloading images and music, and constructing city objects
function preload() {
  for (let i = 0; i < numCities; i++) {
    temp = loadImage("data/city" + i + ".jpg"); //loads image from the files according to the format of filenames
    cities[i] = new City(answers[i], temp); //stores city object at position i in the given format
  }
  startImg = loadImage("data/sPage.jpg"); // loads homescreen image
  endImg = loadImage("data/kangaroo.jpg"); // loads final image - kangaroo
  font = loadFont("fonts/Roboto-Black.ttf"); // loads font used
  music = loadSound("bell.mp3"); // loads sound for transitions
  music1 = loadSound("game.mp3"); //loads sound for game-over
}

let screen; // defines the variable utilised to switch between screens
//0 is home screen
//1 is the game screen

//setup function
function setup() {
  createCanvas(640, 550); //defines parameters width and height of canvas 
  frameRate(5);// controls the rate the speed of which the timer runs
  screen = 0; //initializing screen to show homescreen; homescreen is numbered 0

  //initializing text parameters
  textAlign(CENTER, CENTER);
  textFont(font);

  rectMode(CENTER);
}

function draw() {
  if (screen == 0) {
    homeScreen(); //calls the homeScreen function if screen is equal to 0; homescreen is numbered at 0
  }

  if (screen == 1) {
    //proceeds on to the game screen
    gamePlay(); //calls the gamePlay function to start the game; gamescreen is numbered at 1 
  }
}

//allows for timer to reach 0 to let user go on to the next city
function mousePressed() {
  if (timer == 0) {
    //transition to next city is executed only if timer has reached 0
    counter++; //increases counter to access next city object 

    // resets timer to 10 seconds and pixel size to 13 before looping
    timer = 10;
    size = 13;
    loop(); //starts looping the draw function again
  }
}

//function to define homescreen
function homeScreen() {
  
   image(startImg, 0, 0); //displays start image
  
  // Parameters to define text titled "CLICK ANYWHERE TO CONTINUE"
  strokeWeight(2);
  textFont("Courier New");
  textSize(25);
  textAlign(CENTER);
  fill(0, 0, 0);
  text("CLICK ANYWHERE TO CONTINUE", width / 2, (4 * height) / 5);
  
   // Parameters to define text titled "CITY GUESS"
  strokeWeight(4);
  textSize(50);
  text(" CITY GUESS", width / 2, height / 7);

  // Draw a rectangle with certain parameters
  fill(0, 0, 0, 100);// rect is black with 100 being its opacity parameter
  rect(340, 270, 270, 250, 20);// rect has rounded corners each having a radius of 20
  
  // Parameters to define heading titled "Instructions"
  strokeWeight(4);
  fill(255, 255, 255);
  textSize(30);
  textFont("Georgia");
  text(" Instructions", 330, 200);
  
  
 // Parameters to define body containing actual Instructions
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

//function to capture mouse click - switches between homeScreen and gamePlay; since homeScreen is titled 0 and gameScreen is 1; each time cursor is clicked on home Screen
// automatically navigates to gameScreen
function mouseClicked() {
  if (screen == 0) {
    screen = 1;
  }
}

//function to start the game
function gamePlay() {
  clear(); //clears screen in every iteration to avoid overlapping of texts and images; provides more clarity to the user

  // Loops over entire image and moves from pixelated to clear image gradually
  if (counter < numCities) {
    //executes until the counter doesn't reach the last city object in the array

    //loads current city image on screen
    for (let x = 0; x < width; x += size) {
      //size depicts the size of pixels on the image
      for (let y = 0; y < height; y += size) {
        //gradual decrease in size of pixelated area makes the image more clearer
        cityImg = cities[counter].cPicture; // displays current city image; unpixelated version

        //displays image (pixelated)
        col = cityImg.get(x, y); //gets the end coordinates of the small square to be pixelated
        stroke(col); //gives outline to the square based on the picture color present in the given coordinate col
        fill(col);   //fills the square with the color based on the picture color present in the given coordinate col
        square(x, y, size); //displays the sqaure based on the above defined parameters
      }
    }
    // Timer ticks down and unpixelates the image every frame
    textSize(90);
    fill(0);
    text(timer, width - 70, 50); //displays current time in the screen

    if (timer > 1) {
      timer--; // pixelation corresponds to the reducing timer
      size--; // As size decreases, the pixelation decreases
    }
    // Saves processing power by not pixelating final image and directly displaying it; irrespective of the amount of pixelation at 1 second
    // a clear image when the timer reaches 0
    else if (timer == 1) {
      timer--;
    }
    // After timer is 0, unpixelated image and the city name are displayed
    else if (timer == 0) {
      music.play(); //play sound before the image is revealed
      image(cityImg, 0, 0); //display the unpixelated image

      textSize(75);
      text(cities[counter].cName, width / 2, 40); //displays the answer at the designated position

      textSize(25);
      text("Click for", width / 2, cityImg.height - 50);// prompts user to navigate to the next city
      text("next city", width / 2, cityImg.height - 30);

      noLoop(); //pauses looping in draw function to prevent display of the same city
    }
  }
  // Display end screen once there are no more city images
  else if (counter == numCities) {
    music1.play(); //play game over sound
    image(endImg, 0, 0); //play final image and  display the message
    
    //Paramters to define end of the game message
    textSize(50);
    text("Game Over", width / 2, height * 0.55);
    text("Thanks for Playing!", width / 2, height * 0.65);
    noLoop(); //pauses looping in draw function
  }
}
