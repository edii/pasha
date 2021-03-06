$(document).ready(function(){
	countItemsRelated();
	if ($('section + section #tmrelatedproducts').length && !!$.prototype.bxSlider) {
		tmrelatedproducts_slider = $('section + section #tmrelatedproducts').bxSlider({
			minSlides: related_carousel_items,
			maxSlides: related_carousel_items,
			slideWidth: 500,
			slideMargin: 20,
			pager: false,
			nextText: '',
			prevText: '',
			moveSlides: 1,
			infiniteLoop: false,
			hideControlOnEnd: true,
			responsive: true,
			useCSS: false,
			autoHover: false,
			speed: 500,
			pause: 3000,
			controls: true,
			autoControls: false
		});
	}
});

if (!isMobile) {
	$(window).resize(function(){
		if ($('section + section #tmrelatedproducts').length) {
			resizeCarouselRelated()
		}
	});
} else {
	$(window).on("orientationchange",function(){
		var orientation_time;
		clearTimeout(orientation_time);
		orientation_time = setTimeout(function() {
			if ($('section + section #tmrelatedproducts').length) {
				resizeCarouselRelated()
			}
		}, 500);
	});
}

function resizeCarouselRelated(){
	countItemsRelated();
	tmrelatedproducts_slider.reloadSlider({
		minSlides: related_carousel_items,
		maxSlides: related_carousel_items,
		slideWidth: 500,
		slideMargin: 20,
		pager: false,
		nextText: '',
		prevText: '',
		moveSlides:1,
		infiniteLoop:false,
		hideControlOnEnd: true,
		responsive: true,
		useCSS: false,
		autoHover: false,
		speed: 500,
		pause: 3000,
		controls: true,
		autoControls: false
	});
}

function countItemsRelated()
{
	if ($('.related-block').width() < 370)
		related_carousel_items = 1;
	if ($('.related-block').width() > 370)
		related_carousel_items = 2;
	if ($('.related-block').width() >= 550)
		related_carousel_items = 3;
	if ($('.related-block').width() >= 900)
		related_carousel_items = 4;
	if ($('.related-block').width() >= 1200)
		related_carousel_items = 5;
	if ($('.related-block').width() >= 1500)
		related_carousel_items = 6;
	if ($('.related-block').width() >= 1800)
		related_carousel_items = 7;
	if ($('.related-block').width() >= 2048)
		related_carousel_items = 8;
}