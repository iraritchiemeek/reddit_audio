function Reddit() {
	this.array = []
	this.badLinks = []
	this.goodLinks = []
}

Reddit.prototype.getObj = function(done) {
	$.ajax({
      type: "GET",
      url: "http://www.reddit.com/r/glitch_art/top.json?sort=top&t=all&limit=40"
    })
    .done(function(res) {
    	done(res)
    })
}

Reddit.prototype.makeArray = function(object) {
	var self = this
	$.each(object.data.children, function(index, value){
		if (value.data.url) {
			self.array.push(value.data.url)
		}
	})
	return this.array
};

Reddit.prototype.randLinks = function(array) {
	var self = this
	for (var i = 0; i < 10; i++) {
		self.badLinks.push(array[randNum(array.length)])
	}
	return (this.cleanseLinks(this.badLinks))
};

Reddit.prototype.cleanseLinks = function(links) {
	var self = this
	$.each(links, function(index, link){
		if (!link.includes("/a/") && link.includes("imgur") && !link.includes(".jpg") && !link.includes(".gif") && !link.includes(".png")){
			self.goodLinks.push(link + ".gif")
		} else if (!link.includes("/a/") && link.includes("imgur") && (link.includes(".jpg") || link.includes(".gif") || link.includes(".png"))) {
			self.goodLinks.push(link)
		}
	})
	return this.goodLinks
};