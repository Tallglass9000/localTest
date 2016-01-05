var Business = require(__dirname + '/../models/business');
var express = require('express');
var jsonParser = require('body-parser').json();
var handleError = require(__dirname + '/../handle_error');

var businessesRoute = module.exports = exports = express.Router();

businessesRoute.get('/businesses', function (req, res) {
	Business.find({}, function (err, data) {
		if (err) return handleError(err, res);
		res.json(data);
	});
});