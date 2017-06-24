console.log("Welcome to OpenZombie");

const gridSize = {x: 10, y: 10};
var gameTable = document.getElementById("gameTable");
var grid = [];

function initGrid (x, y) {
  var row;
  for (var i = 0; i < y; i++) {
    row = gameTable.insertRow(0);
    grid[i] = [];
    for (var j = 0; j < x; j++) {
      grid[i][j] = row.insertCell(-1);
      grid[i][j].style.backgroundColor = "#6b6b6b";
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


document.onkeydown = keyPress;
function keyPress(e) {

    e = e || window.event;

    alert(e.keyCode);

    if(e.keyCode = 87){
      //Up
    }else if (e.keyCode = 83) {
      //Down
    }else if (e.keybode = 68) {
      //Right
    }else if (e.keyCode = 65) {
      //Left
    }


}
