class Entity {
	constructor(x, y, repr) {
		this.x = x;
		this.y = y;
		this.oldx = -1;
		this.oldy = -1;
		this.repr = repr;
		
	}

	move(x, y) {
		this.x += x;
		this.y += y;
	}

	redraw() {
		if (this.oldx !== -1)
			grid[this.oldy][this.oldx].innerHTML = "";

		grid[this.y][this.x].innerHTML = this.repr;

		this.oldx = this.x;
		this.oldy = this.y;

	}
}
