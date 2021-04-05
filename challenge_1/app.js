

var boardSpaces= document.getElementsByClassName('boardSpace');
boardSpaces = [...boardSpaces];
boardSpaces.forEach((element)=> element.addEventListener('click', (event)=>handleBoardClick(event)));
var reset = document.getElementById('reset');
reset.addEventListener('click', (event)=> handleReset());

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
  checkForTie()
  currentPlayer === 'X'? currentPlayer="O" : currentPlayer= 'X';
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
  if(boardState.space1 === boardState.space4 && boardState.space1 === boardState.space7 &&  boardState.space1 !==null) {
    alert(`player ${boardState.space1} has won!`)
    return true;
  }else if(boardState.space2 === boardState.space5 && boardState.space2 === boardState.space8 &&  boardState.space2 !==null) {
    alert(`player ${boardState.space2} has won!`)
    return true;
  }else if(boardState.space3 === boardState.space6 && boardState.space3 === boardState.space9 &&  boardState.space3 !==null) {
    alert(`player ${boardState.space3} has won!`)
    return true;
  }else {
    return false;
  }

}

var diagonalsHaveWinner= function() {
  if(boardState.space1 === boardState.space5 && boardState.space1 === boardState.space9 &&  boardState.space1 !==null) {
    alert(`player ${boardState.space1} has won!`)
    return true;
  }else if(boardState.space3 === boardState.space5 && boardState.space3 === boardState.space7 &&  boardState.space3 !==null) {
    alert(`player ${boardState.space3} has won!`)
    return true;
  }else {
    return false;
  }

}

var checkForTie = function () {
  for (space in boardState){
    if(boardState[space]=== null){
      return;
    }
  }
  alert('Cats\' Game!')
}

var handleReset= function () {
  boardSpaces.forEach((element)=> element.innerHTML= '');
  for (space in boardState) {
    boardState[space]= null;
  }
  currentPlayer= "X";
}