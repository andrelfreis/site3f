function initMap() {
	var academia3f = new google.maps.LatLng(-23.965748, -46.316714);
	var mapCanvas = document.getElementById("map");
	var mapOptions = {center: academia3f, zoom: 16};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var image = 'img/icon3f.png';
    var marker = new google.maps.Marker({position:academia3f, title:"3F Artes Marciais", icon: image});
    marker.setMap(map);
}