var express = require('express');
var compression = require('compression');
var moment = require('moment');
var request = require('request');
var app = express();

var Framework = require('./modules/framework.js');

app.use(compression());
app.use('/cdn', express.static(__dirname  + '/cdn', { maxAge: Framework.setting('staticCache') }));

app.set('view engine', 'jade');

var posts = [];
request('https://www.reddit.com/r/funny.json', function(error, response, body) {
	body =  JSON.parse(body);
	for(var post in body.data.children) {
		post = body.data.children[post].data;
		
		if(post.domain != 'imgur.com')
			continue;

		posts.push({
			image: post.url + '.png',
			nsfw: post.over_18 ? true : (Math.random() < 0.3 ? true : false),
			time: moment(post.created_utc).fromNow()
		});
	}
});

app.get('/', function(req, res) {
	res.render('index', {
		logo: 'archives.zip',
		title: 'archives.zip',
		navColor: '#fff',
		color: '#7177FF',
		posts: posts
	});
});

app.listen(Framework.port);