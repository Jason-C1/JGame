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
function initBlock(imgs,position) {
	this.x =  position[0];
	this.y =  position[1];
	this.hp =  position[2]||1;
	this.img = imgs.block;
	this.w = this.img.width;
	this.h = this.img.height;
}
function initlevels () {
	var levels = [
	    [
	        [0, 0,],
	    ],
	    [
	        [50, 0,],
	        [100, 100,],
	    ],
	    [
	        [50, 30,],
	        [100, 100, 2],
	        [200, 100, 2],
	    ],
	]
	return levels;
}
