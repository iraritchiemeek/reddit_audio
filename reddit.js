function Reddit() {
	this.object = []
	this.links = []
}

Reddit.prototype.getObj = function(done) {
	$.ajax({
      type: "GET",
      url: "https://www.reddit.com/r/OldSchoolCool/top.json"
    })
    .done(function(res) {
    	done(res)
    })
}

Reddit.prototype.makeArray = function(object) {
	var self = this
	$.each(object.data.children, function(index, value){
		self.object.push(value.data.url)
	})
	return this.object
};

Reddit.prototype.randLinks = function(array) {
	var self = this
	for (var i = 0; i < 7; i++) {
		self.links.push(array[randNum(array)])
	}
	return this.links
};