var mongoose = require('mongoose');

var businessSchema = new mongoose.Schema({
	businessname: String,
	city: String, 
	state: String,
	category: String,
	distance: String,
	coupons: [{
		title: String,
	}]
});

module.exports = mongoose.model("Business", businessSchema);