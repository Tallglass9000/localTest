var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/localTest');

var Business = require(__dirname + '/../models/business');
var fs = require('fs');

var filename = __dirname + 'database.json';

fs.readFile(filename, function (err, data) {
	if (err) return console.log(err);

	var fileJSON = JSON.parse(data);

	for (var i = 0; i < fileJSON.length; i++) {
		var business = fileJSON[i];
		var newBusiness = new Business(business);
		newBusiness.save(function (err, data) {
			if (err) return console.log(err);
			console.log(data);
			return data;
		});
	}
});