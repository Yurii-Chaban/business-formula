$(document).ready(function() {
	google.maps.event.addDomListener(window, 'load', init);
	var map;
	function init() {
		var mapOptions = {
			center: new google.maps.LatLng(55.731189,37.669266),
			zoom: 18,
			zoomControl: false,
			disableDoubleClickZoom: true,
			mapTypeControl: false,
			scaleControl: true,
			scrollwheel: true,
			panControl: false,
			streetViewControl: false,
			draggable : true,
			overviewMapControl: false,
			overviewMapControlOptions: {
				opened: false,
			},
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: [
			// { "stylers": [ { "hue": "#3d535b" }, { "saturation": -20 } ] },
			{ "featureType": "all", "stylers" : [ { "saturation": 0 }, { "lightness": -40 }, { "hue": "#e7ecf0" } ] },
			{ "elementType": "labels.text.fill", "stylers": [ { "color": "#3e4955" } ] },
			{ "elementType": "labels.text.stroke", "stylers": [ { "color": "#e8eeef" } ] },
			{ "featureType": "road.local", "elementType": "geometry.fill", "stylers": [ { "color": "#bac4cb" } ] },
			{ "featureType": "road", "elementType": "geometry.fill", "stylers": [ { "color": "#bac4cb" } ] },
			{ "featureType": "road", "elementType": "geometry.stroke", "stylers": [ { "color": "#a1adb6" } ] },
			{ "featureType": "water", "stylers": [ { "color": "#adb9bc" } ] },
			{ "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "color": "#3d535b" } ] },
			{ "featureType": "water", "elementType": "labels.text.stroke", "stylers": [ { "color": "#d1d9db" } ] },
			{ "featureType": "poi", "elementType": "geometry", "stylers": [ { "visibility": "off" } ] },
			{ "featureType": "poi.park", "elementType": "geometry", "stylers": [ { "color": "#bfc9cc" }, { "visibility": "on" } ] },
			{ "featureType": "poi.business", "elementType": "geometry", "stylers": [ { "color": "#cdd6d8" }, { "visibility": "on" } ] },
			{ "featureType": "poi.school", "elementType": "geometry", "stylers": [ { "color": "#cdd6d8" }, { "visibility": "on" } ] },
			{ "featureType": "poi.medical", "elementType": "geometry", "stylers": [ { "color": "#cdd6d8" }, { "visibility": "on" } ] },
			{ "featureType": "poi.government", "elementType": "geometry", "stylers": [ { "color": "#cdd6d8" }, { "visibility": "on" } ] },
			{ "featureType": "landscape.natural", "elementType": "geometry", "stylers": [ { "color": "#fc7gka" } ] },
			{ "featureType": "geometry.natural", "elementType": "geometry", "stylers": [ { "color": "#fc7gka" } ] }
			]
		}
		var mapElement = document.getElementById('mapWrapper');
		var map = new google.maps.Map(mapElement, mapOptions);

		var locations = [
		['Волгоградский проспект, 2', 'undefined', 'undefined', 'undefined', 'undefined', 55.731201, 37.669303, 'https://mapbuildr.com/assets/img/markers/default.png']
		];
		for (i = 0; i < locations.length; i++) {
			if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
			if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
			if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
			if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
			if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
			marker = new google.maps.Marker({
				icon: "images/icon-for-maps-blue.png",
				position: new google.maps.LatLng(locations[i][5], locations[i][6]),
				map: map,
				title: locations[i][0],
				desc: description,
				tel: telephone,
				email: email,
				web: web
			});
			link = '';            bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
		}
		function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
			var infoWindowVisible = (function () {
				var currentlyVisible = false;
				return function (visible) {
					if (visible !== undefined) {
						currentlyVisible = visible;
					}
					return currentlyVisible;
				};
			}());
			iw = new google.maps.InfoWindow();
			google.maps.event.addListener(marker, 'click', function() {
				if (infoWindowVisible()) {
					iw.close();
					infoWindowVisible(false);
				} else {
					var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4></div>";
					iw = new google.maps.InfoWindow({content:html});
					iw.open(map,marker);
					infoWindowVisible(true);
				}
			});
			google.maps.event.addListener(iw, 'closeclick', function () {
				infoWindowVisible(false);
			});
		}
	}
});