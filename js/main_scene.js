function main_scene (imgs) {
	//初始化
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');
	var ball =new initBall();
	var paddle = new initPaddle(imgs.paddle);
	var fps = Math.floor(1000/60);;
	this.paused=1;
	var mousePosition = {
		x:250,
		y:450,
	}
	//画图像
	drawBall(context,ball);
	draw(context,paddle);
	//重画图像
	var redarw = function() {
		//球运动
		ball.x += ball.vx;
		ball.y += ball.vy;
		if(ball.y + ball.vy > canvas.height - ball.r || ball.y + ball.vy < 0 + ball.r) {
			ball.vy = -ball.vy;
		}
		if(ball.x + ball.vx > canvas.width - ball.r || ball.x + ball.vx < 0 + ball.r) {
			ball.vx = -ball.vx;
		}
		if(crOverlap(ball,paddle)){
			ball.vy = -ball.vy;
		}
		//控制滑块
		var x=mousePosition.x;
		if(x<=paddle.x){
        	paddle.v=-10;
        }else if (x>=paddle.x+paddle.w) {
        	paddle.v=+10;
        }else{
        	paddle.v=0;
        }
		//滑块滑动
		paddle.x += paddle.v;
		if(paddle.x < 0) {
			paddle.x = 0
		}
		if(paddle.x > canvas.width - paddle.w) {
			paddle.x = canvas.width - paddle.w
		}
		context.clearRect(0,0, canvas.width, canvas.height);
		drawBall(context,ball);
		draw(context,paddle);
	}
	window.addEventListener('keydown', function(event){
		log('keydown');
        var k = event.key;
        if (k == 'p') {
            // 暂停功能
            paused = !paused;
        }
    })
	canvas.addEventListener('mousemove', function(event){
        mousePosition.x = event.offsetX;
    })
	canvas.addEventListener('mouseover', function(event) {
		paused=0;
	});
	canvas.addEventListener('mouseout', function(event) {
		paused=1;
	});
	setInterval(function draw() {
		if(paused){
			return;
		}
		redarw();
	},fps)

}