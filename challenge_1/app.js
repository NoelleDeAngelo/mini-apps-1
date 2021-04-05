

var boardSpaces= document.getElementsByClassName('boardSpace');
boardSpaces = [...boardSpaces];
boardSpaces.forEach((element)=> element.addEventListener('click', (event)=>handleBoardClick(event)))

var currentPlayer = 'x';


var handleBoardClick= function (event) {
  console.log(event);
  //console.log(event);
};

var checkForWin = function (){

};

var checkForTie = function () {
  // might not nees this, if there is no winner and board is full it is a tie
}
