function initBall() {
	this.x = 200;
	this.y = 430;
	this.r = 5;
	this.vx = 3;
	this.vy = 3;
	this.color = 'blue';
}
function initPaddle(img) {
	this.img = img;
	this.x =  200;
	this.y =  450;
	this.v =  0;
	this.w = img.width;
	this.h = img.height;
	
}