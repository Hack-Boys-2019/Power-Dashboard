var map = function() {
	var L = window.L
	var mymap = L.map('mapid').setView([40.00001, -83.018795], 16);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 25,
		minZoom: 16,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoiY2hyaXNjbGFya2U5NDAiLCJhIjoiY2syaTFueXphMGswcTNjbnZkeWVzbjdvZCJ9.gph5LuSaU02yckZ9kVWaNQ'
	}).addTo(mymap);
	addMarkers(mymap, L);
}

function addMarkers(mymap, L){
	for(var i=0;i<2;i++){
		var marker = L.marker([40.00001+i/1000, -83.018795]).addTo(mymap);
		marker.bindPopup('<p>Hello world!<br />This is a nice popup.</p>').openPopup();
	}
}

export default map