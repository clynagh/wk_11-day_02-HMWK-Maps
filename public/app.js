var initialize = function(){
  var mainMap = new MapWrapper();
  var center = {lat: 51.507351, lng: -0.127758};
  var mainMap = new MapWrapper(mapDiv, center, 10);
  var mapDiv = document.getElementById('main-map');
  var house = {lat: 51.484315, lng: -0.160568};
  mainMap.addMarker(center);
  mainMap.addMarker(house);
  mainMap.addClickEvent();
  var bounceButton = document.querySelector("#button-bounce-markers");
  bounceButton.addEventListener('click', mainMap.bounceMarker.bind(mainMap))

}





window.addEventListener('load', initialize);

