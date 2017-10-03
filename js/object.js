function initBall() {
	var o = {
		x: 200,
		y: 430,
		vx: 3,
		vy: 3,
		r: 5,
		color: 'blue',
	}
	return o;
}
function initPaddle(img) {
	var o = {
		x: 250,
		y: 450,
		v: 0,
		w:img.width,
		h:img.height,
	}
	return o;
}
//var Paddle = function(game) {
//  var o = game.imageByName('paddle')
//  // var o = {
//  //     image: image,
//  //     x: 100,
//  //     y: 250,
//  //     speed: 15,
//  // }
//  o.x = 100
//  o.y = 250
//  o.speed = 15
//  var paddle = o
//  o.move = function(x) {
//      if (x < 0) {
//          x = 0
//      }
//      if (x > 400 - o.w) {
//          x = 400 - o.w
//      }
//      o.x = x
//  }
//  o.moveLeft = function() {
//      o.move(paddle.x - paddle.speed)
//  }
//  o.moveRight = function() {
//      o.move(paddle.x + paddle.speed)
//  }
//  var aInb = function(x, x1, x2) {
//      return x >= x1 && x <= x2
//  }
//  o.collide = function(ball) {
//      // if (ball.y + ball.h > o.y) {
//      //     if (ball.x > o.x && ball.x < o.x + o.w) {
//      //         log('相撞')
//      //         return true
//      //     }
//      // }
//      // return false
//      var a = o
//      var b = ball
//      if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
//          if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
//              return true
//          }
//      }
//      return false
//  }
//  return o
//}
////function game() {
////	var canvas = document.getElementById("canvas");
////	var context = canvas.getContext('2d');
////	var raf;
////	var ball = {
////		x: 100,
////		y: 100,
////		vx: 5,
////		vy: 2,
////		radius: 3,
////		color: 'blue',
////		draw: function() {
////			context.beginPath();
////			context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
////			context.closePath();
////			context.fillStyle = this.color;
////			context.fill();
////		}
////	}
////	function draw() {
////		context.clearRect(0, 0, canvas.width, canvas.height);
////		ball.draw();
////		ball.x += ball.vx;
////		ball.y += ball.vy;
////		if(ball.y + ball.vy > canvas.height - ball.radius || ball.y + ball.vy < 0 + ball.radius) {
////			ball.vy = -ball.vy;
////		}
////		if(ball.x + ball.vx > canvas.width - ball.radius || ball.x + ball.vx < 0 + ball.radius) {
////			ball.vx = -ball.vx;
////		}
////		raf = window.requestAnimationFrame(draw);
////	}
////	canvas.addEventListener('mouseover', function(e) {
////		raf = window.requestAnimationFrame(draw);
////	});
////
////	canvas.addEventListener('mouseout', function(e) {
////		window.cancelAnimationFrame(raf);
////	});
////	ball.draw();
////}