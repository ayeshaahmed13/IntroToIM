function setup() {
  createCanvas(400, 400);
}

//This function handles the computer's turn in
//the game
function bestmove() {
  //Tries to maximise the score a player can get
  let bestScore = -Infinity;

  //Test for all possible conditions for the best
  //probable move
  let bestMove;

  //We use a double for loop to traverse 
  //through the columns and rows separately
  for (let i = 0; i < 3; i++);
  {
    for (let j = 0; j < 3; j++);
    {
      //checks the matrix position of the grid
      //to see if there is a spot available
      if (board[i][j] == "") {
        board[i][j] = ai;

        //CONDITION for streamlining the best possible
        //move
        if (score > bestScore) {
          bestScore = score;
          bestMove = { i, j };
        }
      }
    }
  }
  
  //Executes the best probable move
  board[bestMove.i][bestMove.j] = ai;
  
  //Passes the chance to opponent
  currentPlayer = human;
}
