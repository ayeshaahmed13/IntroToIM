### Initial Concept for the Project:

<img width="522" alt="Screen Shot 2022-03-01 at 9 21 23 AM" src="https://user-images.githubusercontent.com/98395837/156109939-5593c570-d6e2-4353-90e0-be70e24ce4e7.png">

The intention is to devise a game of tic-tac-toe otherwise popularly known as noughts and crosses. It is a two-player game in which two individuals attempt to compete 
with each other to get their chosen symbol appear thrice consecutively(make sequential and alternate moves), in either a straight(vertical or horizontal) or a diagonal fashion in a three by three grid. The players draw their symbol one at a time, one after the other
largely to maximize the probability of their win.

It is a solved game, with a forced draw assuming best play from both players. The terminology "solved game" implies that it is a game whose outcome (win, lose or draw) can be correctly predicted from any position, assuming that both players play perfectly.
Best play refers to  the strategy (or strategies) which produces the most favorable outcome for a player, taking other players' strategies as given.The basis of the game is that  both players play to maximize their win and our assumption of their next most likely move holds high probability.

### Most Complicated Aspect of the Project:

<img width="1440" alt="Screen Shot 2022-01-29 at 6 23 29 PM" src="https://user-images.githubusercontent.com/98395837/156109699-2c61e50f-2228-4cbb-96ca-e3cdc1f9bcb0.png">

I think the most complicated aspect of the project is the utilization of the Minimax algorithm and devising all possible outcomes at every stage of the game.In order
To maximize the probability of a player's victory, we try to maximize their win and minimize their loss.

This involves utilization of a recursive algorithm which is nothing but an algorithm that calls itself with smaller input values and returns the result for the current input by carrying out basic operations on the returned value for the smaller input.What this simply means is that on the basis of the move made by us, the game analyzes the best possible move for the other player(parallel to basic operations) and offers us with most probable move that could be made by them.

Another important understanding that I came to was that as the game proceeds, with every subsequent move the probable number of best possible moves reduce.For example, initially if six boxes are filled, then the number of best probable moves is 3 and with every subsequent turn it reduces to 2,1 and so on until the game ends in a draw or a winner.

### Workaround about MiniMax algorithm:

Firstly, I did a lot of research on what a recursive algorithm is and how exactly can we devise a game that maximizes the probability of winning.Later I figured out that perhaps the largest part of drafting the algorithm, involved setting up a nested 'for' loop followed by an 'if condition.This helps define and streamline the next move of the computer which is further scrutinized by defining a number of test cases. For example, if the code detects a symbol at the position(2,2){in terms of a a grid positionality} the next move would be made at (2,3) or (3,2) or (3,3) etc.Additionally another major problem that I faced was incorporating the randomisation of all possible moves.Even though I have largely understood what the algorithm does I believe in order to execute it with greater efficiency and to improvise it I need to work on it more.

I was able to gain a better understanding of the algorithm by watching multiple Youtube Videos and also by looking at several examples on the internet. I furthered 
my understanding of this concept by actually implementing the code and tweaking different elements so as to understand the greater need of them in the code.In the coming week I hope to deepen my understanding and improvise my code better.
