function game(imgs) {
	main_scene(imgs);
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