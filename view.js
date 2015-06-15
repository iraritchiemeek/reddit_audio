function View() {

}

View.prototype.appendElem = function(type, target, elem) {
	$("#" + target).append("<div " + type + "=" + elem + "/>")
};

View.prototype.appendImg = function(target, id, url) {
	$("#" + target).append("<img class='reddit_images' id=img_" + id + " src=" + url + "/>")
};

View.prototype.positionImg = function() {
	var height = window.innerHeight
	var width = window.innerWidth
	$.each($(".reddit_images"), function(index, image){
		$(image).css({top: randNum(height /2), left: randNum(width /2)})
	})
};

View.prototype.clickable = function(image) {
	console.log('ys')
	$(".reddit_images").css({zIndex: 0})
	$(image).css({zIndex: 1})
};