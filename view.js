function View() {

}

View.prototype.appendElem = function(type, target, elem) {
	$("#" + target).append("<div " + type + "=" + elem + "/>")
};

View.prototype.appendImg = function(target, id, url) {
	$("#" + target).append("<img id=img_" + id + " src=" + url + "/>")
};

View.prototype.resizeImg = function() {
	$.each($(images), function(index, value) {
		console.log(value)
	})
};