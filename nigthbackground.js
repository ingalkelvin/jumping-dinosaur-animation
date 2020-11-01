function BackNigth() {
	
	this.x = 0;
	this.y = 0;
	this.color = "black";
	this.nigthY = 150;

}
BackNigth.prototype.draw = function(context) {

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
	
	context.fillStyle = "#ffffff";
	context.beginPath();
	context.arc(10, this.nigthY, 70, 0, (Math.PI*2),true);
	context.closePath();
	context.fill();	


	context.restore();
	
};
