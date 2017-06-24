class Enemy extends Entity {
	constructor(x, y, player) {
		super(x,y,'E');
		this.x = x;
		this.y = y;
		this.player = player;
	}

	turn() {
		var xOffset = player.x - this.x;
		var yOffset = player.y - this.y;
		if (abs(xOffset) > abs(yOffset)) {
			this.move(xOffset/abs(xOffset), 0);
		} else {
			this.move(0, yOffset/abs(yOffset));
		}
	}
}
