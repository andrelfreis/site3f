function initMap() {
	var academia3f = new google.maps.LatLng(-23.965748, -46.316714);
	var mapCanvas = document.getElementById("map");
	var mapOptions = {center: academia3f, zoom: 16};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var image = 'img/icon3f.png';
    var marker = new google.maps.Marker({position:academia3f, title:"3F Artes Marciais", icon: image});
    marker.setMap(map);
    
    var contentString = '<div><p class="font-weight-bold">3F Artes Marciais</p><p>Av. Pedro Lessa, 2797 - Sala 11</p><p>Tel.: (13) 3366-0549</p></div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	marker.addListener('click', function() {
    	infowindow.open(map, marker);
  	});
}
