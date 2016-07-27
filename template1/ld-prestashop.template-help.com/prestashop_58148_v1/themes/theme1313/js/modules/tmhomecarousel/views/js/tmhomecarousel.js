$(document).ready(function(){
	if(typeof(carousel_status) != 'undefined' && carousel_status)
	{
		setNbItems();
		if (!!$.prototype.bxSlider)
			tmhomecarousel_slider = $('#homepage-carousel').bxSlider({
				responsive:true,
				useCSS: false,
				minSlides: carousel_item_nb_new,
				maxSlides: carousel_item_nb_new,
				slideWidth: carousel_item_width,
				slideMargin: carousel_item_margin,
				infiniteLoop: carousel_loop,
				hideControlOnEnd: carousel_hide_control,
				randomStart: carousel_random,
				moveSlides: carousel_item_scroll,
				pager: carousel_pager,
				autoHover: carousel_auto_hover,
				auto: carousel_auto,
				speed: carousel_speed,
				pause: carousel_auto_pause,
				controls: carousel_control,
				autoControls: carousel_auto_control,
				startText:'',
				stopText:'',
				prevText:'',
				nextText:'',
			});
	
		start_content = $('#index .tab-content ul:first').html();
		$('#homepage-carousel').append(start_content);
		tmhomecarousel_slider.reloadSlider();
		$('#home-page-tabs li').on('click', function(e){
			e.preventDefault();
			thisClass = $(this).children('a').attr('class');
			content = $('.tab-content ul.'+thisClass).html();
			$('#homepage-carousel').empty();
			$('#homepage-carousel').append(content);
			tmhomecarousel_slider.reloadSlider();
		});
		var doit;
		window.onresize = function() {
			clearTimeout(doit);
			doit = setTimeout(function() {
				resizedw();
			}, 200);
		};
	}
});

function resizedw(){
	setNbItems();
	console.log(carousel_item_nb_new);
	tmhomecarousel_slider.reloadSlider({
		responsive:true,
		useCSS: false,
		minSlides: carousel_item_nb_new,
		maxSlides: carousel_item_nb_new,
		slideWidth: carousel_item_width,
		slideMargin: carousel_item_margin,
		infiniteLoop: carousel_loop,
		hideControlOnEnd: carousel_hide_control,
		randomStart: carousel_random,
		moveSlides: carousel_item_scroll,
		pager: carousel_pager,
		autoHover: carousel_auto_hover,
		auto: carousel_auto,
		speed: carousel_speed,
		pause: carousel_auto_pause,
		controls: carousel_control,
		autoControls: carousel_auto_control,
		startText:'',
		stopText:'',
		prevText:'',
		nextText:'',
	});
}

function setNbItems()
{
	if ($('.tab-content').width() < 480)
		carousel_item_nb_new = 1;
	if ($('.tab-content').width() >= 480)
		carousel_item_nb_new = 2;
	if ($('.tab-content').width() >= 800)
		carousel_item_nb_new = 3;
	if ($('.tab-content').width() >= 1150)
		carousel_item_nb_new = 4;
	if ($('.tab-content').width() >= 1400)
		carousel_item_nb_new = 5;
	if ($('.tab-content').width() >= 1700)
		carousel_item_nb_new = 6;
	if($('.tab-content').width() > 2000)
		carousel_item_nb_new = carousel_item_nb;
}
