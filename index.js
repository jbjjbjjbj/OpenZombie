console.log("Welcome to OpenZombie");

const gridSize = {x: 10, y: 10};
var gameTable = document.getElementById("gameTable");

function initGrid (x, y) {
  var row;
  for (var i = 0; i < y; i++) {
    row = gameTable.insertRow(0);
    for (var j = 0; j < x; j++) {
      row.insertCell(-1);
    }
  }
}

initGrid(gridSize.x, gridSize.y);



player = new Player();
