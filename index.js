console.log("Welcome to OpenZombie");

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


class Entity {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}

	move(x, y) {
		this.x += x;
		this.y += y;
	}
}

class Player extends Entity {

}
