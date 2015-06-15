function Reddit() {
	this.object = []
	this.badLinks = []
	this.goodLinks = []
}

Reddit.prototype.getObj = function(done) {
	$.ajax({
      type: "GET",
      url: "http://www.reddit.com/r/45thworldproblems/top.json?sort=top&t=all&limit=30"
    })
    .done(function(res) {
    	done(res)
    })
}

Reddit.prototype.makeArray = function(object) {
	var self = this
	$.each(object.data.children, function(index, value){
		if (value.data.url) {
			self.object.push(value.data.url)
		}
	})
	return this.object
};

Reddit.prototype.randLinks = function(array) {
	var self = this
	for (var i = 0; i < 7; i++) {
		self.badLinks.push(array[randNum(array)])
	}
	return (this.cleanseLinks(this.badLinks, array))
};

Reddit.prototype.cleanseLinks = function(links, array) {
	console.log(links)
	var self = this
	$.each(links, function(index, link){
		if (link.includes("imgur") && !link.includes(".jpg") && !link.includes(".gif") && !link.includes(".png")){
			self.goodLinks.push(link + ".gif")
		} else if (link.includes("imgur") && link.includes(".jpg") || link.includes(".gif") || link.includes(".png")) {
			self.goodLinks.push(link)
		}
	})
	if (this.goodLinks.length === links.length) {
		return this.goodLinks
	} else {
		this.randLinks(array)
	}
};