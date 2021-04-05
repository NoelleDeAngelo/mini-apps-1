

var boardSpaces= document.getElementsByClassName('boardSpace');
boardSpaces = [...boardSpaces];
boardSpaces.forEach((element)=> element.addEventListener('click', (event)=>handleBoardClick(event)));
var reset = document.getElementById('reset');
reset.addEventListener('click', (event)=> handleReset());

var gameState = {

currentPlayer:'X',

boardState: {
  space1:null,
  space2:null,
  space3:null,
  space4:null,
  space5:null,
  space6:null,
  space7:null,
  space8:null,
  space9:null
},

winner: null,

wins:{
  X:0,
  O:0
}

}

var handleBoardClick= function (event) {
  //console.log(event)
  event.target.innerHTML= gameState.currentPlayer;
  gameState.boardState[event.target.attributes.id.value]= gameState.currentPlayer;
  //console.log(gameState.boardState)
  checkForWin();
  checkForTie()
  gameState.currentPlayer === 'X'? gameState.currentPlayer="O" : gameState.currentPlayer= 'X';
};

var checkForWin = function (){
  if (rowsHaveWinner()){
    return;
  }
  if(coulmnsHaveWinner()){
    return;
  }
  if (diagonalsHaveWinner()){
    return;
  }
};


var rowsHaveWinner= function() {
  if(gameState.boardState.space1 === gameState.boardState.space2 && gameState.boardState.space1 === gameState.boardState.space3 &&  gameState.boardState.space1 !==null) {
    handleWin(gameState.boardState.space1)
    return true;
  }else if(gameState.boardState.space4 === gameState.boardState.space5 && gameState.boardState.space4 === gameState.boardState.space6 &&  gameState.boardState.space4 !==null) {
    handleWin(gameState.boardState.space4)
    return true;
  }else if(gameState.boardState.space7 === gameState.boardState.space8 && gameState.boardState.space7 === gameState.boardState.space9 &&  gameState.boardState.space7 !==null) {
    handleWin(gameState.boardState.space7)
    return true;
  }else {
    return false;
  }
}

var coulmnsHaveWinner= function() {
  if(gameState.boardState.space1 === gameState.boardState.space4 && gameState.boardState.space1 === gameState.boardState.space7 &&  gameState.boardState.space1 !==null) {
    handleWin(gameState.boardState.space1)
    return true;
  }else if(gameState.boardState.space2 === gameState.boardState.space5 && gameState.boardState.space2 === gameState.boardState.space8 &&  gameState.boardState.space2 !==null) {
    handleWin(gameState.boardState.space2)
    return true;
  }else if(gameState.boardState.space3 === gameState.boardState.space6 && gameState.boardState.space3 === gameState.boardState.space9 &&  gameState.boardState.space3 !==null) {
    handleWin(gameState.boardState.space3)
    return true;
  }else {
    return false;
  }

}

var diagonalsHaveWinner= function() {
  if(gameState.boardState.space1 === gameState.boardState.space5 && gameState.boardState.space1 === gameState.boardState.space9 &&  gameState.boardState.space1 !==null) {
    handleWin(gameState.boardState.space1)
    return true;
  }else if(gameState.boardState.space3 === gameState.boardState.space5 && gameState.boardState.space3 === gameState.boardState.space7 &&  gameState.boardState.space3 !==null) {
    handleWin(gameState.boardState.space3)
    return true;
  }else {
    return false;
  }

}

var handleWin = function (winner){
  gameState.winner=winner;
  alert(`player ${winner} has won!`);
}

var checkForTie = function () {
  for (space in gameState.boardState){
    if(gameState.boardState[space]=== null){
      return;
    }
  }
  alert('Cats\' Game!')
}

var handleReset= function () {
  boardSpaces.forEach((element)=> element.innerHTML= '');
  for (space in gameState.boardState) {
    gameState.boardState[space]= null;
  }
  gameState.currentPlayer= gameState.winner || 'X';
}