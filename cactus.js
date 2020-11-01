function Cactus(size) {

	this.x = 0;
	this.y = 0;
	this.color = "green";
	this.rotation = 0;
	this.size = size;
	this.width = 20;
}

Cactus.prototype.draw = function(context) {
	
	context.save();
	context.translate(this.x,this.y);
	context.lineWidth = 2;
	context.rotate(this.rotation);

	context.fillStyle = this.color;
	context.beginPath();
	context.moveTo(-10, this.size);
	context.lineTo(10, this.size);
	context.lineTo(10, -this.size);
	context.lineTo(-10, -this.size);
	context.closePath();
	context.fill();

	
	
	context.fillStyle = this.color;
	context.beginPath();
	context.moveTo(this.size/2, -10);
	context.lineTo(-this.size/2, -10);
	context.lineTo(-this.size/2, 10);	
	context.lineTo(this.size/2, 10);
	context.fill();

	
	context.fillStyle = this.color;
	context.beginPath();
	context.moveTo(-this.size/2, -10);
	context.lineTo(-this.size/2+20, -10);
	context.lineTo(-this.size/2+ 20, -this.size+20);
	context.lineTo(-this.size/2, -this.size+20);
	context.fill();
	context.closePath();
	context.fill();	

	context.fillStyle = this.color;
	context.beginPath();
	context.moveTo(this.size/2, -10);
	context.lineTo(this.size/2-20, -10);
	context.lineTo(this.size/2- 20, -this.size+30);
	context.lineTo(this.size/2, -this.size+30);
	context.fill();
	context.closePath();
	context.fill();	
	
	context.restore();

};


Bar.prototype.getBounds = function() {

	return {
	      x: this.x,
	      y: this.y,
	      width: this.size+40,
	      height: -this.size+30
	};
}; 
