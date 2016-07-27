$(document).ready(function(){
	if(typeof(m_display_caroucel) != 'undefined' && m_display_caroucel)
	{
		setNbMItems();
		if (!!$.prototype.bxSlider)
			manufacturerSlider = $('#tm_manufacturers_block > ul').bxSlider({
				responsive:true,
				useCSS: false,
				minSlides: m_caroucel_nb_new,
				maxSlides: m_caroucel_nb_new,
				slideWidth: m_caroucel_slide_width,
				slideMargin: m_caroucel_slide_margin,
				infiniteLoop: m_caroucel_loop,
				hideControlOnEnd: m_caroucel_hide_controll,
				randomStart: m_caroucel_random,
				moveSlides: m_caroucel_item_scroll,
				pager: m_caroucel_pager,
				autoHover: m_caroucel_auto_hover,
				auto: m_caroucel_auto,
				speed: m_caroucel_speed,
				pause: m_caroucel_auto_pause,
				controls: m_caroucel_control,
				autoControls: m_caroucel_auto_control,
				startText:'',
				stopText:'',
			});
		
			var m_doit;
			$(window).resize(function () {
				clearTimeout(m_doit);
				m_doit = setTimeout(function() {
					resizedwm();
				}, 201);
			});

		}
});
function resizedwm(){
	setNbMItems();
	manufacturerSlider.reloadSlider({
		responsive:true,
		useCSS: false,
		minSlides: m_caroucel_nb_new,
		maxSlides: m_caroucel_nb_new,
		slideWidth: m_caroucel_slide_width,
		slideMargin: m_caroucel_slide_margin,
		infiniteLoop: m_caroucel_loop,
		hideControlOnEnd: m_caroucel_hide_controll,
		randomStart: m_caroucel_random,
		moveSlides: m_caroucel_item_scroll,
		pager: m_caroucel_pager,
		autoHover: m_caroucel_auto_hover,
		auto: m_caroucel_auto,
		speed: m_caroucel_speed,
		pause: m_caroucel_auto_pause,
		controls: m_caroucel_control,
		autoControls: m_caroucel_auto_control,
		startText:'',
		stopText:'',
	});
}

function setNbMItems()
{
	if ($('#tm_manufacturers_block').width() < 400)
		m_caroucel_nb_new = 2;
	if ($('#tm_manufacturers_block').width() >= 400)
		m_caroucel_nb_new = 3;
	if ($('#tm_manufacturers_block').width() >= 600)
		m_caroucel_nb_new = 4;
	if ($('#tm_manufacturers_block').width() >= 800)
		m_caroucel_nb_new = 5;
	if ($('#tm_manufacturers_block').width() >= 992)
		m_caroucel_nb_new = 6;
	if ($('#tm_manufacturers_block').width() >= 1200)
		m_caroucel_nb_new = 8;
	if($('#tm_manufacturers_block').width() > 1500)
		m_caroucel_nb_new = m_caroucel_nb;
}