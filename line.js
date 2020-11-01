function Line() {
	
	this.x = 0;
	this.y = 0;
	this.lineMoveX = 0;
}

Line.prototype.draw = function (context) {
	context.save();
	context.translate(this.x, this.y);
	context.rotate(this.rotation);
	context.beginPath();
	context.strokeStyle = 3;
	context.moveTo(0, 0);
	
	context.lineTo(230-this.lineMoveX , 0);
	context.lineTo(250-this.lineMoveX , -20);
	context.lineTo(270-this.lineMoveX  , 0);
	
	context.lineTo(730-this.lineMoveX  , 0);
	context.lineTo(750-this.lineMoveX , -20);
	context.lineTo(770-this.lineMoveX , 0);		

	context.lineTo(1200, 0);
	context.stroke();
	context.closePath();
//	context.fill();
	context.stroke;
	context.restore();
};

