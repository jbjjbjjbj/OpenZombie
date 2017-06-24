console.log("Welcome to OpenZombie");

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
      cell.style.backgroundColor = "#6b6b6b";
      cell.x = x;
      cell.y = y;
      cell.addEventListener("click", function (e) {
        console.log(e.target.x + "," + e.target.y);
      });
    }
  }
}

initGrid(gridSize.x, gridSize.y);

console.log(grid);

//
//CLASS INIT
//

player = new Player(1, 2);



//
// KEYBOARD EVENTS
//

function keyPress(e) {

    e = e || window.event;

    if (e.keyCode = 87) {
      //Up
    } else if (e.keyCode = 83) {
      //Down
    } else if (e.keybode = 68) {
      //Right
    } else if (e.keyCode = 65) {
      //Left
    }
}
document.onkeydown = keyPress;
