
function game() {
	var rafBall;
	var paddle = createPaddle(context);
	var ball = createBall(context);
	function drawBall() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		ball.draw();
		ball.x += ball.vx;
		ball.y += ball.vy;
		if(ball.y + ball.vy > canvas.height - ball.radius || ball.y + ball.vy < 0 + ball.radius) {
			ball.vy = -ball.vy;
		}
		if(ball.x + ball.vx > canvas.width - ball.radius || ball.x + ball.vx < 0 + ball.radius) {
			ball.vx = -ball.vx;
		}
		rafBall = window.requestAnimationFrame(drawBall);
	}
	canvas.addEventListener('mouseover', function(e) {
		rafBall = window.requestAnimationFrame(drawBall);
	});
	canvas.addEventListener('mouseout', function(e) {
		window.cancelAnimationFrame(rafBall);
	});
	draw();
}
function draw(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');
	var images = {
        block: 'img/block.png',
        paddle: 'img/paddle.png',
    }
	
	
        var names = Object.keys(g.images)
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            var path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function() {
                // 存入 g.images 中
                g.images[name] = img
                // 所有图片都成功载入之后, 调用 run
                loads.push(1)
                log('load images', loads.length, names.length)
                if (loads.length == names.length) {
                    log('load images', g.images)
                    g.__start()
                }
            }
        }
    }
}

