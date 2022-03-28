# Journal
## Mid-Term Project:
### Introduction to Interactive Media| New York University


#### Date: 29th February 2022
#### Initial Concept for the Project:
<img width="522" alt="Screen Shot 2022-03-01 at 9 21 23 AM" src="https://user-images.githubusercontent.com/98395837/156109939-5593c570-d6e2-4353-90e0-be70e24ce4e7.png">

The intention is to devise a game of tic-tac-toe otherwise popularly known as noughts and crosses. It is a two-player game in which two individuals attempt to compete 
with each other to get their chosen symbol appear thrice consecutively(make sequential and alternate moves), in either a straight(vertical or horizontal) or a diagonal fashion in a three by three grid. The players draw their symbol one at a time, one after the other
largely to maximize the probability of their win.

It is a solved game, with a forced draw assuming best play from both players. The terminology "solved game" implies that it is a game whose outcome (win, lose or draw) can be correctly predicted from any position, assuming that both players play perfectly.
Best play refers to  the strategy (or strategies) which produces the most favorable outcome for a player, taking other players' strategies as given.The basis of the game is that  both players play to maximize their win and our assumption of their next most likely move holds high probability.

### Most Complicated Aspect of the Project:
<img width="1425" alt="Screen Shot 2022-03-01 at 9 18 37 AM" src="https://user-images.githubusercontent.com/98395837/156119126-84b3a801-6471-4907-817e-25b692a3c80d.png">


I think the most complicated aspect of the project is the utilization of the Minimax algorithm and devising all possible outcomes at every stage of the game.In order
To maximize the probability of a player's victory, we try to maximize their win and minimize their loss.

This involves utilization of a recursive algorithm which is nothing but an algorithm that calls itself with smaller input values and returns the result for the current input by carrying out basic operations on the returned value for the smaller input.What this simply means is that on the basis of the move made by us, the game analyzes the best possible move for the other player(parallel to basic operations) and offers us with most probable move that could be made by them.

Another important understanding that I came to was that as the game proceeds, with every subsequent move the probable number of best possible moves reduce.For example, initially if six boxes are filled, then the number of best probable moves is 3 and with every subsequent turn it reduces to 2,1 and so on until the game ends in a draw or a winner.

### Workaround about MiniMax algorithm:

Firstly, I did a lot of research on what a recursive algorithm is and how exactly can we devise a game that maximizes the probability of winning.Later I figured out that perhaps the largest part of drafting the algorithm, involved setting up a nested 'for' loop followed by an 'if condition.This helps define and streamline the next move of the computer which is further scrutinized by defining a number of test cases. For example, if the code detects a symbol at the position(2,2){in terms of a a grid positionality} the next move would be made at (2,3) or (3,2) or (3,3) etc.Additionally another major problem that I faced was incorporating the randomisation of all possible moves.Even though I have largely understood what the algorithm does I believe in order to execute it with greater efficiency and to improvise it I need to work on it more.

I was able to gain a better understanding of the algorithm by watching multiple Youtube Videos and also by looking at several examples on the internet. I furthered 
my understanding of this concept by actually implementing the code and tweaking different elements so as to understand the greater need of them in the code.In the coming week I hope to deepen my understanding and improvise my code better.

#### Date: 02nd March 2022
#### Problems with the Intial Idea:
Even though I was able to figure the fundamental algorithm that governs the game, I wasn't able to devise a way to acquire user input and then utilise the same to draft subsequent moves. The version of the game that I had devised basically works on taking a randomised input from the computer and drafting subsequent moves on the basis of the algorithm. The algorithm allows for alll probable results ranging from X wins, O wins and a tie. Additionally I wasn't able to find a way to incorporate an image and object oriented programming into the game.

After realising that this may not work, I explored some other games such as Minesweepwer which is practically  a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighbouring mines in each field. The player wins the game if they clear all the squares without detonating any bombs.Even though I was able to devise the preliminary interface and the fundamental section of the game, transition between screens, incorporating images and aligning teh sound file each time a bomb denotes proved to be very herculean

![image](https://user-images.githubusercontent.com/98395837/160505476-4662e829-4d84-4f0c-abd2-505df54240b8.png)

After realising that this may not work, I explored some other games such as Minesweepwer which is practically  a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighbouring mines in each field. The player wins the game if they clear all the squares without detonating any bombs.Even though I was able to devise the preliminary interface and the fundamental section of the game, transition between screens, incorporating images and aligning teh sound file each time a bomb denotes proved to be very herculean.

#### Date: 05th March 2022
#### Intial concept for the Game:
As a person who loves travelling and is driven by the wanderlust I play the game GeoGuessr a lot which is basically a virtual reality game in which the player navigates through a virtual version of a city and looks for clues and tries to guess its location looking at signboards,cars and houses around.Inspired from this game I wanted to replicate this game, but since I wasn't able to literally translate the 3D-version, I devised a slightly modified  2D version which incolves identfying a city on the basis of famous monuments.

![image](https://user-images.githubusercontent.com/98395837/160505324-4daa46c3-ff3b-4798-af68-7e1decbce59f.png)
As a person who loves travelling and is driven by the wanderlust I play the game GeoGuessr a lot which is basically a virtual reality game in which the player navigates through a virtual version of a city and looks for clues and tries to guess its location looking at signboards,cars and houses around.Inspired from this game I wanted to replicate this game, but since I wasn't able to literally translate the 3D-version, I devised a slightly modified  2D version which incolves identfying a city on the basis of famous monuments.
#### Problems and Complications:
- Aligning the frame rate with the timer was a hassle.
- Figuring a set pattern for unpixelation.
- Devising a way to minimise loading power; basically working on unpixelation.
- Limiting the movement to a new city (new screen) only after the timer has reached zero.
- Clearing the screen everytime a city appears, to prevent overlap.
- Utilising loop function in the code judiciously to prevent repetition of the same city.
- Creating an array to store the names of the cities and their images and aligning them.

### Solutions:
I arrived at the solutions by taking help from several Youtube videos, some online Github repositories and by immense periods of trial and error.
- Alignment was of frame rate and timer was doene by setting up a counter.
- Unpixelation occurs by a square size of 13 pixels.
- When the timer reaches 0, irrespective of the amount of unpixelation, the completely unpixelated image is displayed.
- By setting a mouse pressed function only for the unpixelated picture.
- Screen is cleared by using clear()
- utilisationof loop and and no loop
- The format of navigation through each city is clearly defined.

