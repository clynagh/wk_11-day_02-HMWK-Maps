var initialize = function(){
  var mainMap = new MapWrapper();
  var center = {lat: 51.507351, lng: -0.127758};
  var mainMap = new MapWrapper(mapDiv, center, 10,);
  var mapDiv = document.getElementById('main-map');
  var house = {lat: 51.484315, lng: -0.160568, title: "house", contentString: "Cheese"};
  console.log(house)
  mainMap.addMarker(center);
  mainMap.addMarker(house);
  mainMap.addClickEvent();
  var bounceButton = document.querySelector("#button-bounce-markers");
  bounceButton.addEventListener('click', mainMap.bounceMarker.bind(mainMap))
  // var uluru = {lat: -25.363, lng: 131.044};

  // var infowindow = new google.maps.InfoWindow({
  //   content: "<p>Uluru centre of australia</p>"
  // });

  // var marker = new google.maps.Marker({
  //   position: uluru,
  //   map: mainMap.googleMap,
  //   title: 'Uluru (Ayers Rock)'
  // });

  // marker.addListener('click', function() {
  //   infowindow.open(mainMap.googleMap, marker);
  // });

}





window.addEventListener('load', initialize);

