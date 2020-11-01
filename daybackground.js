function BackDay() {
	
	this.x = 0;
	this.y = 0;
	this.color = "blue";
	this.sunY = 150;
}
BackDay.prototype.draw = function(context) {

	context.save();
	context.translate(this.x, this.y);
	context.lineWidth = 2;
		
	context.fillStyle = this.color;
	context.beginPath();
	context.moveTo(-550, 300);
	context.lineTo(-550, -300);
	context.lineTo(550, -300);
	context.lineTo(550, 300);
	context.closePath();
	
	context.fill();
	context.stroke();
	
	context.fillStyle = "#ffff00";
	context.beginPath();
	context.arc(10, this.sunY, 70, 0, (Math.PI*2),true);
	context.closePath();
	context.fill();	

	context.restore();
	
};
