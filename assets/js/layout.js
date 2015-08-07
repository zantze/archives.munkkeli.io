var logo = function() {
	var canvas = $('.logo')[0];
	canvas.width = $('.logo').width();
	canvas.height = $('.logo').height();

	var ctx = canvas.getContext('2d');

	ctx.font = 'bold 32px Roboto';
	ctx.fillStyle = Page.color;
	ctx.fillText(Page.logo, 0, 40);

	ctx.globalCompositeOperation = 'source-out';

	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = Page.navColor;
	ctx.fill();

	$('.back').css('background', Page.color);
	$('.back h1').hide();
};

WebFontConfig = {
  google: { families: [ 'Roboto:700:latin' ] },
  active: logo,
};

(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

$(window).load(function() {
	imagesLoaded('.grid', function() {
		minigrid('.grid', '.block', 0);
	});
});

$(window).resize(function() {
	logo();

	imagesLoaded('.grid', function() {
		minigrid('.grid', '.block', 0);
	});
});