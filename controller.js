$(window).load(function(){

	var audio = new Audio()
	var reddit = new Reddit()
	var view = new View()

	reddit.getObj(function(object){
		var id = 0
		var array = reddit.makeArray(object)
		var links = reddit.randLinks(array)

		$.each(links, function(index, value){
			id += 1
			view.appendImg("imgs", id, value)
			view.positionImg()
			view.draggable()
		})
	})
	$(document).on("click", ".reddit_images", function(){
		view.clickable(this)
	})

})