# City Guess
## Midterm Project| Introduction to Interactive Media

City Guess is a very user-friendly game in which the player(s) have to attempt to guess the city that is displayed on the screen by taking cues from a pixellated image of a city under a timer that runs down from 10 seconds onwards. The game consists of 10 popular cities from across the globe and the user navigates from one screen to another with the help of clicking on the screen with the cursor.Each time a new city is revealed a bell is chimed.The user must correctly guess all the ten cities in order to complete the game successfully. At the end of the game the user is greeted with a kangaroo that declares the conclusion of the game with a distinct "end of the game" bell chime.

The welcome screen of the game has the instructions of the game in addition to the title of the game.In order to proceed to the gamescreen, the user is required to click anywhere on the welcome screen. The users are required to go thorough the instructions carefully before beginning.

<img width="651" alt="Screen Shot 2022-03-12 at 11 22 49 PM" src="https://user-images.githubusercontent.com/98395837/158067593-6aebecbc-a4ec-4fcd-a03b-d62b5abda9a5.png">

Right after clicking on the welcome screen, the game begins by displaying a heavily pixellated image of Rome and the timer automatically begins.In order to tranistion across different cities, the user must click anywhere on the canvas as displayed in the tutorial below.

https://user-images.githubusercontent.com/98395837/158067862-3617f922-0959-4461-87b6-0b3f4a9b8494.mov

The two screens below display both the pixellated and unpixelated version of the city.The image on the left displays the extremely pixellated picture that is observable when the timer begins at 10 and the image on the right displays the completely unpixellated image when the timer reaches 0.

<p align="left"><img width="680" alt="Screen Shot 2022-03-13 at 8 11 57 PM" src="https://user-images.githubusercontent.com/98395837/158070591-01db15f2-5e02-4bb5-a839-4233c8326a36.png"> <p align="right"> <img width="657" alt="Screen Shot 2022-03-13 at 8 12 43 PM" src="https://user-images.githubusercontent.com/98395837/158070615-e13474ba-2076-4416-bb4d-30bcc2ddf202.png">
  
### Essential Elements in the code:
  - Creation of a class that helps store images of cities and their corresponding images differently.
  - Intialisation of variables by creation of an array.
  - Font utilised on each city image, sound used after the change of every city and the termination of a game is preloaded.
  - Navigation between homescreen and gamescreen is done by defining screen as a variable and setting up an if condition.
  - Setting up of an if condition to avoid transition before complete unpixellation.
  - A nested for loop that allows unpixellation of the entire image irrespective of dimensions.
  - Setting up multiple "if" and "else if" conditions to align the unpixellation with the countdown timer.
  - Adding "no loop" condition pauses the draw function and necessitates navigation onto the next city.
  
  ### User Centered Design:
   - Clear instructions on the homescreen and intialization of the game by a simple click. 
   - Transition between different cities can be done with a simple click and is clearly demarcated with a distinct sound.
   - Distinct sound at the end of the game helps clarify termination of the game.
   - When the timer is at 0, irrespective of the amount of pixellation when the timer is at 1, a completed unpixellated image is displayed which reduces the processing power and 
  
