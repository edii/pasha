/*
* 2002-2016 TemplateMonster
*
* TM Google Map
*
* NOTICE OF LICENSE
*
* This source file is subject to the General Public License (GPL 2.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/GPL-2.0
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade the module to newer
* versions in the future.
*
* @author     TemplateMonster (Alexander Grosul)
* @copyright  2002-2016 TemplateMonster
* @license    http://opensource.org/licenses/GPL-2.0 General Public License (GPL 2.0)
*/

//itit google map script
function initTmgoogleMapScript(url, callback){
	var tmGoogleScript = document.createElement('script');
	if (callback) {
		tmGoogleScript.onload = callback;
	}
	tmGoogleScript.async = true;
	tmGoogleScript.type = 'text/javascript';
	tmGoogleScript.src = url;
	document.body.appendChild(tmGoogleScript);
}

//load google map api
function loadTMGoogleMapsAPI(){
	if (typeof(googleScriptStatus) != 'undefined') {
		if (!googleScriptStatus) {
			initTmgoogleMapScript('//maps.googleapis.com/maps/api/js?sensor=true&callback=initTMGoogleMap');
		} else {
			initTMGoogleMap();
		}
	}
}

$(window).load(function(){
	loadTMGoogleMapsAPI();
});

//init google map
function initTMGoogleMap(){
	if (typeof(tmdefaultLat) == 'undefined' && typeof(tmdefaultLong) == 'undefined')
		return;

	if ($('#tmmap').length < 1)
		return;

	var isDraggable = $(window).width() > 1023 ? true : false;
	var isPan = $(window).width() < 1024 ? true : false;
	tmmap = new google.maps.Map(document.getElementById('tmmap'), {
		center: new google.maps.LatLng(parseFloat(tmdefaultLat), parseFloat(tmdefaultLong)),
		zoom: map_zoom,
		mapTypeId: map_type,
		scrollwheel: map_scroll_zoom,
		mapTypeControl: map_type_control,
		streetViewControl: map_street_view,
		draggable:isDraggable,
		panControl: isPan,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
		},
		styles: google_map_style
	});

	infoWindow = new google.maps.InfoWindow();

	initTmMarkers();
}

//itit markers
function initTmMarkers(){
	tmsearchUrl += '?ajax=1&all=1';
	downloadTmUrl(tmsearchUrl, function(tmdata){
		var tmxml = parseTmXml(tmdata);
		var tmmarkerNodes = tmxml.documentElement.getElementsByTagName('marker');
		for (var i = 0; i < tmmarkerNodes.length; i++)
		{
			var tmname = tmmarkerNodes[i].getAttribute('name');
			var tmaddress = tmmarkerNodes[i].getAttribute('address');
			var tmaddressNoHtml = tmmarkerNodes[i].getAttribute('addressNoHtml');
			var tmother = tmmarkerNodes[i].getAttribute('other');
			var tmid_store = tmmarkerNodes[i].getAttribute('id_store');
			var tmhas_store_picture = tmmarkerNodes[i].getAttribute('has_store_picture');
			var tmlatlng = new google.maps.LatLng(
			parseFloat(tmmarkerNodes[i].getAttribute('lat')),
			parseFloat(tmmarkerNodes[i].getAttribute('lng')));
		
			createTmMarker(tmlatlng, tmname, tmaddress, tmother, tmid_store, tmhas_store_picture);
		}

		var tmzoomOverride = tmmap.getZoom();
		if(tmzoomOverride > map_zoom)
			tmzoomOverride = map_zoom;
		tmmap.setZoom(tmzoomOverride);
	});
}

//create marker
function createTmMarker(tmlatlng, tmname, tmaddress, tmother, tmid_store, tmhas_store_picture){
	var tmhtml = '<div class="marker_content"><div class="clearfix">'+(tmhas_store_picture == 1 ? '<img class="marker_logo" src="'+img_store_dir+parseInt(tmid_store)+'.jpg" alt="" />' : '')+'<div class="description"><b>'+tmname+'</b>'+tmaddress+'</div></div>'+tmother+'<a href="//maps.google.com/maps?saddr=&daddr='+tmlatlng+'" target="_blank">'+translation_2+'<\/a></div>';

	var tmimage = new google.maps.MarkerImage(img_ps_dir+tmlogo_store);
	var tmmarker = '';

	tmmarker = new google.maps.Marker({ map: tmmap, position: tmlatlng, icon: tmimage, title: tmname });
	google.maps.event.addListener(tmmarker, 'click', function() {
		infoWindow.setContent(tmhtml);
		infoWindow.open(tmmap, tmmarker);
	});
	markers.push(tmmarker);
}

function downloadTmUrl(url, callback){
	var tmrequest = window.ActiveXObject ?
	new ActiveXObject('Microsoft.XMLHTTP') :
	new XMLHttpRequest();

	tmrequest.onreadystatechange = function(){
		if (tmrequest.readyState === 4) {
			tmrequest.onreadystatechange = doNothing;
			callback(tmrequest.responseText, tmrequest.status);
		}
	};

	tmrequest.open('GET', url, true);
	tmrequest.send(null);
}

//function parse xml dom
function parseTmXml(str){
	if (window.ActiveXObject)
	{
		var tmdoc = new ActiveXObject('Microsoft.XMLDOM');
		tmdoc.loadXML(str);
		return tmdoc;
	}	else if (window.DOMParser) {
		return (new DOMParser()).parseFromString(str, 'text/xml');
	}
}

function doNothing(){}