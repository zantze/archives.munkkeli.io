var config = require('./../config.json');

var Framework = {
	env: config.env || 'prod',
	port: config.port || 80,
	settings: {
		devel: {
			staticCache: 86400000
		},
		prod: {
			staticCache: 0
		}
	},
	setting: function(name) {
		return this.settings[this.env];
	}
};

module.exports = Framework;