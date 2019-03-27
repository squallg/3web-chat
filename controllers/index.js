/*
 * index.js file. This file is the index controller.
 */

//module exports
module.exports = {

	//Page render
	render: function(res) {
		res.render("index", {title: "chat"});
	}
}