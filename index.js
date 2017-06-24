console.log("Welcome to OpenZombie");

//Farver
var noMark = "#6b6b6b";
var marked = "#870101";

var turn = 0;


var markedPos = {x : -1, y : -1};

mapLenght = 100;
mapHeight = 100;

//
// GRID
//
const gridSize = {x: 10, y: 10};
var gameTable = document.getElementById("gameTable");
var grid = [];

function initGrid (maXx, maXy) {
  let row;
  let cell;
  for (var y = 0; y < maXy; y++) {
    row = gameTable.insertRow(0);
    grid[y] = [];
    for (var x = 0; x < maXx; x++) {
      grid[y][x] = row.insertCell(-1);
      cell = grid[y][x];
      cell.style.backgroundColor = noMark;
      cell.x = x;
      cell.y = y;
      cell.addEventListener("click", function (e) {
        console.log(e.target.x + "," + e.target.y);
        if(markedPos.x !== -1 && markedPos.y !== -1){
          grid[markedPos.y][ markedPos.x ].style.backgroundColor = noMark;
        }

        markedPos = {x : e.target.x, y : e.target.y}
        grid[markedPos.y][ markedPos.x   ].style.backgroundColor = marked;


      });
    }
  }
}

initGrid(gridSize.x, gridSize.y);

console.log(grid);

function clearGrid () {
  for (var y = 0; y < grid.length; y++) {
    for (var x = 0; x < grid[y].length; x++) {
      grid[y][x].innerHTML = "";
    }
  }
}

var entities = new Array(mapHeight);
for(i = 0; i < mapHeight; i++){
  entities[i] = new Array(mapLenght);
}

console.log(entities);

//
//CLASS INIT
//
entities[2][1] = new Player(1, 2);

//
//TURN STUFF
//
var turnCounter = document.getElementById("turnCounter");
function addTurn(turns){
  turn += turns;
  turnCounter.innerHTML = turn.toString();
}

function drawInterval(startX, startY, endX, endY){
  clearGrid();

  let currentEntity;
  for(y = startY; y < endY; y++){
    for(x = startX; x < endX; x++){
      currentEntity = entities[y][x];
      console.log(x + "  " + y + currentEntity)
      if(typeof currentEntity !== "undefined"){
        grid[currentEntity.y][currentEntity.x].innerHTML = "P";
      }
    }
  }
}

function nextTurn(){
  //Check if next turn is posible
  addTurn(1);

  console.log("New turn");


  drawInterval(0, 0, 11, 11);



}

addTurn(0);

document.getElementById("newTurn").addEventListener("click", function () {
  nextTurn();
});

//
// KEYBOARD EVENTS
//

function keyPress(e) {

    e = e || window.event;

    if (e.keyCode === 87) {
      //Up
    } else if (e.keyCode === 83) {
      //Down
    } else if (e.keyCode === 68) {
      //Right
    } else if (e.keyCode === 65) {
      //Left
    } else if (e.keyCode === 32){
      nextTurn();
    }
}
document.onkeypress = keyPress;
