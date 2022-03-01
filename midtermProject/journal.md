### Initial Concept for the Project

The intention is to devise a game of tic-tac-toe otherwise popularly known as noughts and crosses. It is a two-player game in which two indiividuals attempt to compete 
with each other to get their chosen symbol appear thrice consecutively(make sequential and alternate moves), in either a straight(vertical or horizontal) or a diagonal fashion in a three by three grid. The players draw their symbol one at a time, one after the other
largely to maximise the probablity of their win.

It is a solved game, with a forced draw assuming best play from both players. The terminology "solved game" implies that it is a game whose outcome (win, lose or draw) can be correctly predicted from any position, assuming that both players play perfectly.
Best play refers to  the strategy (or strategies) which produces the most favorable outcome for a player, taking other players' strategies as given.The basis of the game is that
both players play to maximise their win and our assumption of thier next most likely move holds high probablity.

### Most Complicated Aspect of the Project

I think the most complicated aspect of the project is the utilisation of the Minimax algorithm and devising all possible outcomes at every stage of the game.In order
to maximise the probablity of a player's victory, we try to maximise their win and minimise their loss.This involves utilisation of a recursive algorithm which is nothing but an
algorithm that calls itself with smaller input values and returns the result for the current input by carrying out basic operations on the returned value for the smaller input.
