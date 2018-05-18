var map;
function initMap() {
	var latlng3f = new google.maps.LatLng(-23.9657103, -46.3166054);
	map = new google.maps.Map(document.getElementById('map'), {
    	center: latlng3f,
        zoom: 17
    });
}