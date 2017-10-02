function game() {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');
	var raf;
	var ball = {
		x: 100,
		y: 100,
		vx: 5,
		vy: 2,
		radius: 3,
		color: 'blue',
		draw: function() {
			context.beginPath();
			context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
			context.closePath();
			context.fillStyle = this.color;
			context.fill();
		}
	}
	function draw() {
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
		raf = window.requestAnimationFrame(draw);
	}
	canvas.addEventListener('mouseover', function(e) {
		raf = window.requestAnimationFrame(draw);
	});

	canvas.addEventListener('mouseout', function(e) {
		window.cancelAnimationFrame(raf);
	});
	ball.draw();
}


