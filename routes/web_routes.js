var express = require('express');
var handleError = require(__dirname + '/../lib/handle_error');
var path = require('path');

var webRouter = module.exports = exports = express.Router();

webRouter.get('/', function (req, res) {
	res.sendFile(path.resolve(__dirname + '/../main.html'), function (err) {
		if (err) return handleError(err, res);
	});
});

webRouter.get('/jsonmenu', function (req, res) {
	res.sendFile(path.resolve(__dirname + '/../js/json-menu.js'), function (err) {
		if (err) return handleError(err, res);
	});
});