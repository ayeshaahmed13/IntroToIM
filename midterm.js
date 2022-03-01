function setup() {
  createCanvas(400, 400);
}

function bestmove() {
  //AI makes its turn
  let bestScore = -Infinity;
  let bestMove;
  
  for(let i=0; i<3;i++);{
  for(let j=0; j<3;j++);{
    //is the spot avialable?
    if ( board[i][j] == ''){
       board[i][j] = ai;
      if (score > bestScore){
        bestScore = score;
        bestMove = { i, j };
      } 
    }
  } 
}
  board[bestMove.i][bestMove.j] = ai;
  currentPlayer = human;
}
