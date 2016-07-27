//global variables
var responsiveflag = false;
var responsiveflagTablet = false;
var toogleFlag = true;
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
var isiPad = /iPad/i.test(navigator.userAgent);

$(document).ready(function() {
	controller = new ScrollMagic();
	highdpiInit();
	responsiveResize();
	responsiveResize2();

	$(window).resize(responsiveResize);
	$(window).resize(responsiveResize2);

	if (navigator.userAgent.match(/Android/i)) {
		var viewport = document.querySelector('meta[name="viewport"]');
		viewport.setAttribute('content', 'initial-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width,height=device-height');
		window.scrollTo(0, 1);
	}

	blockHover();

	if (typeof quickView !== 'undefined' && quickView) {
		quick_view();
	}

	dropDown('#header .current', '.toogle_content');
	sitemapAccordion();
	counter();
	testimonialsSlider();
	elTransform();

	if (typeof page_name != 'undefined' && !in_array(page_name, ['index', 'product'])) {
		bindGrid();

 		$(document).on('change', '.selectProductSort', function(e) {
			if (typeof request != 'undefined' && request) {
				var requestSortProducts = request;
			}

			var splitData = $(this).val().split(':');
			var url = '';

			if (typeof requestSortProducts != 'undefined' && requestSortProducts) {
				url += requestSortProducts ;

				if (typeof splitData[0] !== 'undefined' && splitData[0]) {
					url += ( requestSortProducts.indexOf('?') < 0 ? '?' : '&') + 'orderby=' + splitData[0] + (splitData[1] ? '&orderway=' + splitData[1] : '');

					if (typeof splitData[1] !== 'undefined' && splitData[1]) {
						url += '&orderway=' + splitData[1];
					}
				}
				document.location.href = url;
			}
		});

		$(document).on('change', 'select[name="n"]', function() {
			$(this.form).submit();
		});

		$(document).on('change', 'select[name="currency_payment"]', function() {
			setCurrency($(this).val());
		});
	}

	$(document).on('change', 'select[name="manufacturer_list"], select[name="supplier_list"]', function() {
		if (this.value != '') {
			location.href = this.value;
		}
	});

	$(document).on('click', '.back', function(e) {
		e.preventDefault();
		history.back();
	});

	jQuery.curCSS = jQuery.css;

	if (!!$.prototype.cluetip) {
		$('a.cluetip').cluetip({
			local:true,
			cursor: 'pointer',
			dropShadow: false,
			dropShadowSteps: 0,
			showTitle: false,
			tracking: true,
			sticky: false,
			mouseOutClose: true,
			fx: {
				open:		'fadeIn',
				openSpeed:	'fast'
			}
		}).css('opacity', 0.8);
	}

	if (typeof(FancyboxI18nClose) !== 'undefined' && typeof(FancyboxI18nNext) !== 'undefined' && typeof(FancyboxI18nPrev) !== 'undefined' && !!$.prototype.fancybox) {
		$.extend($.fancybox.defaults.tpl, {
			closeBtn	: '<a title="' + FancyboxI18nClose + '" class="fancybox-item fancybox-close" href="javascript:;"></a>',
			next		: '<a title="' + FancyboxI18nNext + '" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
			prev		: '<a title="' + FancyboxI18nPrev + '" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
		});
	}
	// Close Alert messages
	$('.alert.alert-danger').on('click', this, function(e) {
		if (e.offsetX >= 16 && e.offsetX <= 39 && e.offsetY >= 16 && e.offsetY <= 34) {
			$(this).fadeOut();
		}
	});

	$('.scrollbar-inner').scrollbar();

	if(!device.mobile() && !device.tablet()){
		$.srSmoothscroll({
			step: 250,
			speed: 1000
		});
	}

});

function highdpiInit() {
	if (typeof highDPI === 'undefined') {
		return;
	}

	if (highDPI && $('.replace-2x').css('font-size') == '1px') {
		var els = $('img.replace-2x').get();

		for (var i = 0; i < els.length; i++) {
			src = els[i].src;
			extension = src.substr( (src.lastIndexOf('.') +1) );
			src = src.replace('.' + extension, '2x.' + extension);
			var img = new Image();
			img.src = src;
			img.height != 0 ? els[i].src = src : els[i].src = els[i].src;
		}
	}
}

// Used to compensante Chrome/Safari bug (they don't care about scroll bar for width)
function scrollCompensate() {
	var inner = document.createElement('p');
	inner.style.width = '100%';
	inner.style.height = '200px';

	var outer = document.createElement('div');
	outer.style.position = 'absolute';
	outer.style.top = '0px';
	outer.style.left = '0px';
	outer.style.visibility = 'hidden';
	outer.style.width = '200px';
	outer.style.height = '150px';
	outer.style.overflow = 'hidden';
	outer.appendChild(inner);

	document.body.appendChild(outer);
	var w1 = inner.offsetWidth;
	outer.style.overflow = 'scroll';
	var w2 = inner.offsetWidth;

	if (w1 == w2) {
		w2 = outer.clientWidth;
	}

	document.body.removeChild(outer);

	return (w1 - w2);
}

function responsiveResize() {
	compensante = scrollCompensate();

	if (($(window).width()+scrollCompensate()) <= 767 && responsiveflag == false) {
		accordion('enable');
		accordionFooter('enable');
		if (typeof mobileResize !=='undefined') {
			mobileResize('enable');
		}
		responsiveflag = true;
	} else if (($(window).width()+scrollCompensate()) >= 768) {
		accordion('disable');
		accordionFooter('disable');
		if (typeof mobileResize !=='undefined') {
			mobileResize('disable');
		}
		responsiveflag = false;

		if (typeof bindUniform !=='undefined') {
			bindUniform();
		}
	}
}

function responsiveResize2() {
	compensante = scrollCompensate();

	if (($(window).width()+scrollCompensate()) <= 991 && responsiveflagTablet == false) {
		tabletResize('enable');
		responsiveflagTablet = true;
	} else if (($(window).width()+scrollCompensate()) >= 992) {
		tabletResize('disable');
		responsiveflagTablet = false;
	}
}

function blockHover(status) {
	$(document).off('mouseenter').on('mouseenter', '.product_list.grid li.ajax_block_product .product-container', function(e) {
		if ('ontouchstart' in document.documentElement) {
			return;
		}

		if ($('body').find('#page').width() >= 1200) {
			$(this).parent().addClass('hovered');
		}
	});

	$(document).off('mouseleave').on('mouseleave', '.product_list.grid li.ajax_block_product .product-container', function(e) {
		if ($('body').find('#page').width() >= 1200) {
			$(this).parent().removeClass('hovered');
		}
	});
}

function quick_view() {
	$(document).on('click', '.quick-view:visible, .quick-view-mobile:visible', function(e) {
		e.preventDefault();
		var url = $(this).attr('data-href');
		if (!url && url == 'undefined') {
			var url = this.rel;
		}
		var anchor = '';

		if (url.indexOf('#') != -1) {
			anchor = url.substring(url.indexOf('#'), url.length);
			url = url.substring(0, url.indexOf('#'));
		}

		if (url.indexOf('?') != -1) {
			url += '&';
		} else {
			url += '?';
		}

		if (!!$.prototype.fancybox) {
			$.fancybox({
				'padding':	0,
				'width':	1170,
				'height':	500,
				'type':		'iframe',
				'href':		url + 'content_only=1' + anchor
			});
		}
	});
}

function bindGrid() {
	var storage = false;
	if (typeof(getStorageAvailable) !== 'undefined') {
		storage = getStorageAvailable();
	}

	if (!storage) {
		return;
	}

	var view = $.totalStorage('display');

	if (!view && (typeof displayList != 'undefined') && displayList) {
		view = 'list';
	}

	if (view && view != 'grid') {
		display(view);
	} else {
		$('.display').find('li#grid').addClass('selected');
	}

	if ($('body#category').hasClass('three-columns')) {
		display('list');
		$('ul.display').addClass('hidden');
	}

	$(document).on('click', '#grid', function(e) {
		e.preventDefault();
		display('grid');
	});

	$(document).on('click', '#list', function(e) {
		e.preventDefault();
		display('list');
	});
}

if (nbItemsPerLine != 'undefined' && nbItemsPerLineTablet != 'undefined') {
	var nbItemsPerLine = nbItemsPerLine;
	var nbItemsPerLineTablet = nbItemsPerLineTablet
} else {
	var nbItemsPerLine ='';
	var nbItemsPerLineTablet ='';
}

function display(view) {
	if (view == 'list') {
		$('ul.product_list').removeClass('grid').addClass('list row');
		$('.product_list > li').removeClass('col-xs-6 col-sm-'+12/nbItemsPerLineTablet+' col-md-'+ 12/nbItemsPerLine).addClass('col-xs-12');
		$('.product_list > li').each(function(index, element) {
			var html = '';

			html = '<div class="product-container"><div class="row">';
				html += '<div class="left-block col-xs-4">' + $(element).find('.left-block').html() + '</div>';
				html += '<div class="right-block col-xs-8">';
					html += '<div class="product-flags">'+ $(element).find('.product-flags').html() + '</div>';
					var daydeal = $(element).find('.discount-wrap');

					if (daydeal.length) {
						html += daydeal.clone().wrap('<div>').parent().html();
					}

					html += '<h5 itemprop="name">'+ $(element).find('h5').html() + '</h5>';

					var price = $(element).find('.content_price').html();	// check : catalog mode is enabled

					if (price != null) {
						html += '<div class="content_price">'+ price + '</div>';
					}

					var availability = $(element).find('.availability').html();	// check : catalog mode is enabled

					if (availability != null) {
						html += '<span class="availability">'+ availability +'</span>';
					}

					var hookReviews = $(element).find('.hook-reviews');

					if (hookReviews.length) {
						html += hookReviews.clone().wrap('<div>').parent().html();
					}

					html += '<p class="product-desc">'+ $(element).find('.product-desc').html() + '</p>';
					var colorList = $(element).find('.color-list-container').html();

					if (colorList != null) {
						html += '<div class="color-list-container">'+ colorList +'</div>';
					}

					html += '<div class="button-container">'+ $(element).find('.button-container').html() +'</div>';
					html += '<div class="functional-buttons">' + $(element).find('.functional-buttons').html() + '</div>';

				html += '</div>';
			html += '</div></div>';
		$(element).html(html);
		});
		$('.display').find('li#list').addClass('selected');
		$('.display').find('li#grid').removeAttr('class');
		$.totalStorage('display', 'list');
		WishlistButton();
	} else {
		$('ul.product_list').removeClass('list').addClass('grid row');
		$('.product_list > li')
			.removeClass('col-xs-12')
			.addClass('col-xs-6 col-sm-'+12/nbItemsPerLineTablet+' col-md-' + 12/nbItemsPerLine);
		$('.product_list > li').each(function(index, element) {
		var html = '';
			html += '<div class="product-container">';
			html += '<div class="left-block">' + $(element).find('.left-block').html() + '</div>';
			html += '<div class="right-block">';
			html += '<div class="product-flags">'+ $(element).find('.product-flags').html() + '</div>';
			var daydeal = $(element).find('.discount-wrap');

			if (daydeal.length) {
				html += daydeal.clone().wrap('<div>').parent().html();
			}

			var hookReviews = $(element).find('.hook-reviews');

			if (hookReviews.length) {
				html += hookReviews.clone().wrap('<div>').parent().html();
			}
			html += '<h5 itemprop="name">'+ $(element).find('h5').html() + '</h5>';

			html += '<p itemprop="description" class="product-desc">'+ $(element).find('.product-desc').html() + '</p>';
			var price = $(element).find('.content_price').html(); // check : catalog mode is enabled

			if (price != null) {
				html += '<div class="content_price">'+ price + '</div>';
			}

			var colorList = $(element).find('.color-list-container').html();

			if (colorList != null) {
				html += '<div class="color-list-container">'+ colorList +'</div>';
			}

			html += '<div itemprop="offers" itemscope itemtype="https://schema.org/Offer" class="button-container">'+ $(element).find('.button-container').html() +'</div>';

			var availability = $(element).find('.availability').html(); // check : catalog mode is enabled

			if (availability != null) {
				html += '<span class="availability">'+ availability +'</span>';
			}

			html += '</div>';
			html += '<div class="functional-buttons clearfix">' + $(element).find('.functional-buttons').html() + '</div>';
			html += '</div>';
			$(element).html(html);
		});
		$('.display').find('li#grid').addClass('selected');
		$('.display').find('li#list').removeAttr('class');
		$.totalStorage('display', 'grid');
		WishlistButton();
	}
}

function dropDown(elementClick, elementSlide) {
	elementClick = elementClick;
	elementSlide = elementSlide;
	activeClass = 'active';

	$(elementClick).on('click', function(e) {
		e.stopPropagation();
		var subUl = $(this).next(elementSlide);

		if (subUl.is(':hidden')) {
			subUl.show();
			$(this).addClass(activeClass);
		} else {
			subUl.hide();
			$(this).removeClass(activeClass);
		}

		$(elementClick).not(this).next(elementSlide).hide();
		$(elementClick).not(this).removeClass(activeClass);
		e.preventDefault();
	});

	$(elementSlide).on('click', function(e) {
		e.stopPropagation();
	});

	$(document).on('click', function(e) {
		e.stopPropagation();

		if (e.which != 3) {
			var elementHide = $(elementClick).next(elementSlide);
			$(elementHide).hide();
			$(elementClick).removeClass('active');
		}
	});
}

function accordionFooter(status) {
	if (status == 'enable') {
		$('#footer .footer-block h4, .layered-current').on('click', function(e) {
			$(this)
				.toggleClass('active')
				.parent()
				.find('.toggle-footer')
					.stop()
					.slideToggle('medium');
			e.preventDefault();
		});
		$('#footer')
			.addClass('accordion')
			.find('.toggle-footer')
				.slideUp('fast');
	} else {
		$('.footer-block h4, .layered-current').removeClass('active').off().parent().find('.toggle-footer').removeAttr('style').slideDown('fast');
		$('#footer').removeClass('accordion');
	}
}

//	TOGGLE COLUMNS
function accordion(status) {
	if (status == 'enable') {
		$('#right_column .block:not(#layered_block_left) .title_block, #left_column .block:not(#layered_block_left) .title_block, #left_column #newsletter_block_left h4, .columns-container #cmsinfo_block .elements_info h3').on('click', function() {
			$(this)
				.toggleClass('active')
				.parent()
				.find('.block_content, .text-box')
				.stop()
				.slideToggle('medium');
		});
		$('#right_column, #left_column, .columns-container #cmsinfo_block')
			.addClass('accordion')
			.find('.block:not(#layered_block_left) .block_content, .text-box')
			.slideUp('fast');
		if (typeof(ajaxCart) !== 'undefined') {
			ajaxCart.collapse();
		}
	} else {
		$('#right_column .block:not(#layered_block_left) .title_block, #left_column .block:not(#layered_block_left) .title_block, #left_column #newsletter_block_left h4, .columns-container #cmsinfo_block .elements_info h3')
			.removeClass('active')
			.off()
			.parent()
			.find('.block_content, .text-box')
			.removeAttr('style')
			.slideDown('fast');
		$('#left_column, #right_column, .columns-container #cmsinfo_block').removeClass('accordion');
	}
}
function bindUniform() {
	if (!!$.prototype.uniform) {
		$('select.form-control').not('.not_uniform').uniform();
	}
}

//	TOGGLE SITEMAP
function sitemapAccordion() {
	$('#sitemap #center_column ul.tree > li > ul')
		.addClass('accordion_content')
		.parent()
		.find('> a')
			.wrap('<p class="page-subheading accordion_current"></p>');

	$('#center_column .accordion_current').on('click', function() {
		$(this)
			.toggleClass('active')
			.parent()
			.find('.accordion_content')
				.stop()
				.slideToggle('medium');
	});

	$('#center_column')
		.addClass('accordionBox')
		.find('.accordion_content')
			.slideUp('fast');

	if (typeof(ajaxCart) !== 'undefined') {
		ajaxCart.collapse();
	}
}

function counter() {
	$('.count').each(function() {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 4000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
}

function testimonialsSlider() {
	var testimonials_slider = $('#testimonials');
	testimonials_slider.bxSlider({
		responsive:true,
		useCSS: false,
		minSlides: 1,
		maxSlides: 1,
		slideWidth: 1200,
		slideMargin: 0,
		moveSlides: 1,
		pager: false,
		autoHover: false,
		speed: 500,
		pause: 3000,
		controls: true,
		autoControls: true,
		startText:'',
		stopText:'',
		prevText:'',
		nextText:''
	});
}

function elTransform() {
	if($('body').hasClass('category')) {
		var count_li = $('#subcategories > ul > li').length;
		$('#subcategories li').width((100 / count_li) + '%').css('opacity', '1');
	}
	if($('#footer #block_contact_infos').length > 0) {
		$('#social_block').appendTo('#footer #block_contact_infos ul');
	}
	$('.pb-right-column #send_friend_button').insertAfter('#wishlist_button_nopop, #wishlist_button');
}
function tabletResize(status) {
	if (status == 'enable') {
		$('#header-account-content, #header-login-content').removeClass('toogle_content').css('display', 'block');
		if (!$('.nav .search_box').length) {
			$(".search_box").prependTo('.nav > div');
		}
		if (!$('.nav .compare_wishlist').lenght) {
			$('.compare_wishlist').prependTo('.nav > div');
		}
		if (!$('.nav > .current').length) {
			$('.nav').prepend('<span class="current"></span>');
			$('.nav > div').addClass('toogle_content').css('display', 'none');
			if (toogleFlag == false) {
				dropDown('.nav > .current', '.nav > .toogle_content');
			}
		}
		toogleFlag = true;
	} else {
		if (!$('.menu_indent #header_logo').length) {
			$("#header_logo").clone().prependTo(".menu_indent");
		}
		if (('.isStuck').length > 0) {
			$(".search_box").insertAfter(".menu_indent > ul");
		}
		$('#header-account-content, #header-login-content').addClass('toogle_content').css('display', 'none');
		if ($('.cartBox').length > 0) {
			$('.compare_wishlist').insertAfter('.cartBox');
		} else {
			$('.compare_wishlist').insertAfter('#header_logo');
		}
		if ($('.nav > .current').length) {
			$('.nav > .current').remove();
			$('.nav > div').removeClass('toogle_content').css('display', 'block');
		}
		toogleFlag = false;
	}
}

$(window).scroll(function () {
	if($('#page').width() > 479) {
		transformImage = $(this).scrollTop();
		$('#category .category-image').css('top', -transformImage / 5);
	}
});

$(document).ready(function(){
	if($('#index #homepage-blog').length > 0) {
		countItems();
		blog_carousel = $('#homepage-blog ul.row').bxSlider({
			responsive: true,
			useCSS: false,
			minSlides: carousel_items,
			maxSlides: carousel_items,
			slideWidth: 1000,
			slideMargin: 0,
			moveSlides: 1,
			pager: false,
			autoHover: false,
			speed: 500,
			pause: 3000,
			controls: true,
			autoControls: true,
			infiniteLoop: false,
			startText: '',
			stopText: '',
			prevText: '',
			nextText: ''
		});
	}
});

$(window).resize(resizeCarousel);

function resizeCarousel(){
	if($('#index #homepage-blog').length > 0) {
		countItems();
		blog_carousel.reloadSlider({
			responsive: true,
			useCSS: false,
			minSlides: carousel_items,
			maxSlides: carousel_items,
			slideWidth: 2000,
			slideMargin: 0,
			moveSlides: 1,
			pager: false,
			autoHover: false,
			speed: 500,
			pause: 3000,
			controls: true,
			autoControls: true,
			infiniteLoop: false,
			startText: '',
			stopText: '',
			prevText: '',
			nextText: ''
		});
	}
}

function countItems()
{
	if ($('#homepage-blog').width() < 500)
		carousel_items = 1;
	if ($('#homepage-blog').width() >= 500)
		carousel_items = 2;
	if ($('#homepage-blog').width() >= 768)
		carousel_items = 3;
}
