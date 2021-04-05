

var boardSpaces= document.getElementsByClassName('boardSpace');
boardSpaces = [...boardSpaces];
boardSpaces.forEach((element)=> element.addEventListener('click', (event)=>handleBoardClick(event)));

var currentPlayer = 'X';

var boardState = {
  space1:null,
  space2:null,
  space3:null,
  space4:null,
  space5:null,
  space6:null,
  space7:null,
  space8:null,
  space9:null
}


var handleBoardClick= function (event) {
  //console.log(event)
  event.target.innerHTML= currentPlayer;
  boardState[event.target.attributes.id.value]= currentPlayer;
  //console.log(boardState)
  checkForWin();
  currentPlayer === 'X'? currentPlayer="O" : currentPlayer= 'X';
};

var checkForWin = function (){
  if (rowsHaveWinner()){
    return;
  }
  if(coulmnsHaveWinner()){
    return;
  }
  if (diagonalHaveWinner()){
    return;
  }
};


var rowsHaveWinner= function() {
  if(boardState.space1 === boardState.space2 && boardState.space1 === boardState.space3 &&  boardState.space1 !==null) {
    alert(`player ${boardState.space1} has won!`)
    return true;
  }else if(boardState.space4 === boardState.space5 && boardState.space4 === boardState.space6 &&  boardState.space4 !==null) {
    alert(`player ${boardState.space4} has won!`)
    return true;
  }else if(boardState.space7 === boardState.space8 && boardState.space7 === boardState.space9 &&  boardState.space7 !==null) {
    alert(`player ${boardState.space7} has won!`)
    return true;
  }else {
    return false;
  }
}

var coulmnsHaveWinner= function() {

}

var diagonalHaveWinner= function() {

}

var checkForTie = function () {
  // might not nees this, if there is no winner and board is full it is a tie
}
