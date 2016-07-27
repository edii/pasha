$(document).ready(function() {
	if (typeof(homeslider_speed) == 'undefined') {
		homeslider_speed = 1200;
	}

	if (typeof(homeslider_pause) == 'undefined') {
		homeslider_pause = 6000;
	}

	if (typeof(homeslider_loop) == 'undefined') {
		homeslider_loop = true;
	}

    if (typeof(homeslider_width) == 'undefined') {
        homeslider_width = 10000;
	}

	var tl = new TimelineMax();

	if (!!$.prototype.bxSlider) {
		$('#homeslider').bxSlider({
			useCSS: false,
			maxSlides: 1,
			slideWidth: homeslider_width,
			infiniteLoop: homeslider_loop,
			hideControlOnEnd: true,
			pager: true,
			autoHover: true,
			autoControls: true,
			auto: homeslider_loop,
			speed: parseInt(homeslider_speed),
			pause: homeslider_pause,
			controls: true,
			startText:'',
			stopText:'',
			easing: 'easeInQuint',
			pagerCustom: '#bx-pager-thumb',
			onSliderLoad:function(){tl.play()},
			onSlideBefore:function(){tl.restart()},
			onSlideAfter:function(){}
		});
	}

    $('.homeslider-description').click(function() {
        window.location.href = $(this).prev('a').prop('href');
    });

	$('.bx-prev, .bx-next').addClass('btn').wrapInner('<span><span>');
});