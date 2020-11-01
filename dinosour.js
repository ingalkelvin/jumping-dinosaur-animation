function Dinosour()
{
	this.x = 0; 
	this.y = 0;
	this.color = "brown";
	this.rotation = 0;
	this.walkLeft = 10;
	this.walkRigth = 0;
}	

Dinosour.prototype.draw = function(context) {

	context.save();
	context.translate(this.x, this.y);
	context.rotate(this.rotation);
	context.lineWidth = 2;

	context.fillStyle = this.color;
	context.beginPath();
	
	context.moveTo(18, 70);
	context.lineTo(18 , 90-this.walkLeft);
	context.lineTo(10 , 90-this.walkLeft);
	context.lineTo(10 , 70);	

	context.moveTo(15, 70);
	context.lineTo(-15, 80);
	context.lineTo(-40 ,50); 
	context.lineTo(-20 ,60);
	context.lineTo(10 , -10);
	context.lineTo(30 ,-30);
	context.lineTo(60 ,-35);

	context.lineTo(60 ,-40);

	context.lineTo(80 ,-30);
	context.lineTo(80 , -20);
	context.lineTo(70 , -20);
	context.lineTo(80 ,  -10);
	context.lineTo(50 ,  -10);
	context.lineTo(50 , 10);
	
	context.lineTo(80 , 0); 
	
	context.lineTo(80 , 10);
	

	context.lineTo(50 , 20);
		
	context.lineTo(80 , 20);
	context.lineTo(70 , 30); 

	context.lineTo(50 , 30);
	context.lineTo(40 , 50);
	context.lineTo(35 , 60);
	context.lineTo(30 , 70);
			
	context.lineTo(30 , 90-this.walkRigth);
	context.lineTo(20 , 90-this.walkRigth);
	


	context.closePath();
	context.fill();
	
	
		
	context.stroke();

	context.fillStyle = "#ffffff";
	context.beginPath();
	context.arc(62, -25, 5, 0, (Math.PI*2),true);
	context.closePath();
	context.fill();
	context.fillStyle = "#000000";
	context.beginPath();
	context.arc(65, -25, 3, 0, (Math.PI*2),true);
	context.closePath();
	context.fill();
	context.restore();
};
Dinosour.prototype.getBounds = function() {

      return {
      x: this.x,
      y: this.y,
      width: 120,
      height:115
	};
};
