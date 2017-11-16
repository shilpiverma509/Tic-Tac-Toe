//Basic setup
//Determine winner
//Basic AI and winner Notification
//Minimas algo

//array of X or O
var board;
const humanPlayer = 'O';
const aiPlayer = 'X';
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]

]

const cells = document.querySelectorAll('.col');
startGame();

function startGame() {
    document.querySelector('.end-game').style.display = "none";
    board = Array.from(Array(9).keys());
    console.log(board);
    for(var i=0;i<cells.length;i++){
        cells[i].innerText="";
        cells[i].addEventListener('click',humanPlayerClick,false);
        }
}

function humanPlayerClick(cell) {
    clickSymbol(cell.target.id,humanPlayer);
    
}

function clickSymbol(cellID,player) {
    board[cellID] = player;
    document.getElementById(squareID).innerText = player;
    
}