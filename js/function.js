//function flip() {
//	// 水平“翻转”画布
//	ctx.translate(canvas_width, 0);
//	ctx.scale(-1, 1);
//
//	// 下面画的图片是水平翻转的
//	ctx.drawImage(img, canvas_width - img.width - px, py);
//	// 画布恢复正常
//	ctx.translate(canvas_width, 0);
//	ctx.scale(-1, 1);
//}
//The circle and rectangle overlap
function crOverlap (c,r) {
	return (c.x+c.r>=r.x&&c.x-c.r<=r.x+r.w&&c.y+c.r>=r.y&&c.y-c.r<=r.y+r.h)||(c.x+c.r<=r.x&&c.x-c.r>=r.x+r.w&&c.y+c.r<=r.y&&c.y-c.r>=r.y+r.h)
}
