function Reddit() {
	this.array = []
	this.badLinks = []
	this.goodLinks = []
}

Reddit.prototype.getObj = function(done) {
	$.ajax({
      type: "GET",
      url: "https://www.reddit.com/r/aww/top.json?sort=top&t=all&limit=70"
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
	for (var i = 0; i < 15; i++) {
		self.badLinks.push(array[randNum(array.length)])
	}
	return (this.cleanseLinks(this.badLinks))
};

Reddit.prototype.cleanseLinks = function(links) {
	var self = this
	$.each(links, function(index, link){
		if ((!link.includes("/a/") && !link.includes("/gallery/")) && link.includes("imgur") && !link.includes(".jpg") && !link.includes(".gif") && !link.includes(".png")){
			self.goodLinks.push(link + ".gif")
		} else if (link.includes(".gifv")) {
			self.goodLinks.push(link.slice(0, -1))
		} else if ((!link.includes("/a/") && !link.includes("/gallery/")) && link.includes("imgur") && (link.includes(".jpg") || link.includes(".gif") || link.includes(".png"))) {
			self.goodLinks.push(link)
		}
	})
	return this.goodLinks
};
