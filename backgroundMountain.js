function BackMountain() {
	
	this.x = 0;
	this.y = 0;
	//this.color = "#FFDE9E";
	this.color = "#00304D";


}
BackMountain.prototype.draw = function(context) {

	context.save();
	context.translate(this.x, this.y);
	context.lineWidth = 2;
		
	context.fillStyle = this.color;
	context.beginPath();
	context.moveTo(-1000, 500);
	context.lineTo(-250, 0);
	context.lineTo(250, 500);
	context.closePath();
	context.fill();
	
	context.fillStyle = this.color;
	context.beginPath();
	context.moveTo(-125, 500);
	context.lineTo(300, 0);
	context.lineTo(725, 500);
	context.closePath();
	context.fill();

	context.restore();
	
};
