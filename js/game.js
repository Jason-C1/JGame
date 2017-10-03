function game(imgs) {
	//	var canvas = document.getElementById("canvas");
	//	var context = canvas.getContext('2d');
	//	var rafBall;
	//	//	var paddle = createPaddle(context);
	//	var ball = createBall(context);
	//

	//	canvas.addEventListener('mouseover', function(e) {
	//		rafBall = window.requestAnimationFrame(drawBall);
	//	});
	//	canvas.addEventListener('mouseout', function(e) {
	//		window.cancelAnimationFrame(rafBall);
	//	});
	canvas(imgs);
}

function load() {
	var imgPath = {
		block: 'img/block.png',
		paddle: 'img/paddle.png',
	}
	var imgs = {
		length: 0,
	};
	var imgNum = Object.keys(imgPath).length;
	for(name in imgPath) {
		var img = new Image();
		img.src = imgPath[name];
		img.id = name;
		img.onload = function() {
			imgs[this.id] = this;
			imgs.length++;
			if(imgs.length == imgNum) {
				game(imgs);
			}
		}
	}

}

function canvas(imgs) {
	var fps = Math.floor(1000/60);;
	var game={
		paused :1,
	}
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');
	var ball = initBall();
	var paddle = initPaddle(imgs.paddle);
	var mousePosition = {
		x:250,
		y:450,
	}
	
	ball.draw = function() {
		context.beginPath();
		context.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, true);
		context.closePath();
		context.fillStyle = ball.color;
		context.fill();
	}
	paddle.draw = function() {
		context.drawImage(imgs.paddle, paddle.x, paddle.y);
	}
	ball.redarw = function() {
//		context.clearRect(0, 0, canvas.width, canvas.height);
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
		ball.draw();
		//		rafBall = window.requestAnimationFrame(ball.redarw);
	}
	paddle.move = function() {
		paddle.x += paddle.v;
		if(paddle.x < 0) {
			paddle.x = 0
		}
		if(paddle.x > canvas.width - paddle.w) {
			paddle.x = canvas.width - paddle.w
		}
	}
	paddle.redarw = function() {
		var x=mousePosition.x;
		if(x<=paddle.x){
        	paddle.v=-10;
        }else if (x>=paddle.x+paddle.w) {
        	paddle.v=+10;
        }else{
        	paddle.v=0;
        }
		paddle.move();
		paddle.draw();
	}

	window.addEventListener('keydown', function(event){
        var k = event.key;
        if (k == 'p') {
            // 暂停功能
            game.paused = !game.paused;
        }
    })
	canvas.addEventListener('mousemove', function(event){
        mousePosition.x = event.offsetX;
    })
	setInterval(function draw() {
		if(game.paused){
			return;
		}
		context.clearRect(0,0, canvas.width, canvas.height);
		paddle.redarw();
		ball.redarw();
	},fps)
}