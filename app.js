var express = require('express');
var compression = require('compression');
var app = express();

var Framework = require('./modules/framework.js');

app.use(compression());
app.use('/cdn', express.static(__dirname  + '/cdn', { maxAge: Framework.setting('staticCache') }));

app.set('view engine', 'jade');

app.get('/', function(req, res) {
	res.render('index', {
		posts: [
			{
				title: 'Reference of the century or what? -Deadpool trailer',
				image: 'http://img-9gag-fun.9cache.com/photo/avLzgGZ_460s.jpg',
				user: {
					name: 'Munkkeli'
				}
			},
			{
				title: 'Well yeah',
				image: 'http://img-9gag-fun.9cache.com/photo/aMQYM26_460s_v2.jpg',
				user: {
					name: 'Munkkeli'
				}
			},
			{
				title: 'And a diet coke please.',
				image: 'http://img-9gag-fun.9cache.com/photo/aVX0ddv_460s.jpg',
				user: {
					name: 'Munkkeli'
				}
			},
			{
				title: 'Ed, Edd & Eddy',
				image: 'http://img-9gag-fun.9cache.com/photo/aQndM9z_460s.jpg',
				user: {
					name: 'Munkkeli'
				}
			},
			{
				title: 'Astronomic philosoraptor',
				image: 'http://img-9gag-fun.9cache.com/photo/aMQY5p1_460s.jpg',
				user: {
					name: 'Munkkeli'
				}
			},
			{
				title: 'The only acceptable way to shoot wild animals!',
				image: 'http://img-9gag-fun.9cache.com/photo/azV1nez_460s.jpg',
				user: {
					name: 'Munkkeli'
				}
			},
			{
				title: 'Let\'s take a poll...',
				image: 'http://img-9gag-fun.9cache.com/photo/am85nR9_460s_v1.jpg',
				user: {
					name: 'Munkkeli'
				}
			}
		]
	});
});

app.listen(Framework.port);