var MapWrapper = function(container, coords, zoom){
  var container = document.getElementById('main-map');
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  // this.infowindow = new google.maps.InfoWindow({
  //   content: infoWindowContent,
  //   title: title
  // });
  this.markers = [];
}

// MapWrapper.prototype.addMarker = function(coords){
//   var marker = new google.maps.Marker({
//     position: coords,
//     map: this.googleMap
//   });
//   this.markers.push(marker);
    // var infowindow = new google.maps.InfoWindow({
//   content: contentString,
// 
// }); 
// }

MapWrapper.prototype.addMarker = function(coords) {
  // var infowindow = new google.maps.InfoWindow({
  //     content: contentString
  //   });
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      // title: title
    });
    this.markers.push(marker);
    return marker;

   // marker.addListener('click', function() {
   //    infowindow.open(this.googleMap, marker);
   //  });
  },

MapWrapper.prototype.addClickEvent = function(){
  google.maps.event.addListener(this.googleMap, "click", function(event){
    var position = { lat: event.latlng.lat(), lng: event.latlng.lng() }
    this.addMarker(position);
  }.bind(this));
}

MapWrapper.prototype.addClickEvent = function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var position = { lat: event.latLng.lat(), lng: event.latLng.lng() }  
      this.addMarker(position);
    }.bind(this));
  },

MapWrapper.prototype.bounceMarker = function(){
  this.markers.forEach(function(marker){
    marker.setAnimation(google.maps.Animation.BOUNCE)
  })
}

MapWrapper.prototype.addInfoWindow = function(coords, text) {
  var marker = this.addMarker(coords);
  marker.addListener('click', function(){
    var infoWindow = new google.maps.InfoWindow({
        content: text
  })
  infoWindow.open(this.map, marker);
})
}

// var infowindow = new google.maps.InfoWindow({
//   content: infoWindowContent,
//   title: title
// }); 
// var uluru = {lat: -25.363, lng: 131.044};

// var infowindow = new google.maps.InfoWindow({
//   content: infoWindowContent
// });

// var marker = new google.maps.Marker({
//   position: coords,
//   map: this.googleMap,
//   title: title;
// });

// marker.addListener('click', function() {
//   infowindow.open(this.googleMap, marker);
// });



// // Initialise the inforWindow
//     var infoWindow = new google.maps.InfoWindow({
//         content: infoWindowContent
//     });
                
//     // Add a marker to the map based on our coordinates
//     var marker = new google.maps.Marker({
//         position: myLatlng,
//         map: map,
//         title: 'London Eye, London'
//     });

//     // Display our info window when the marker is clicked
//     google.maps.event.addListener(marker, 'click', function() {
//         infoWindow.open(map, marker);
//     });

// function initMap() {
//        var uluru = {lat: -25.363, lng: 131.044};
//        var map = new google.maps.Map(document.getElementById('map'), {
//          zoom: 4,
//          center: uluru
//        });

       // var contentString = '<div id="content">'+
       //     '<div id="siteNotice">'+
       //     '</div>'+
       //     '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
       //     '<div id="bodyContent">'+
       //     '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
       //     'sandstone rock formation in the southern part of the '+
       //     'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
       //     'south west of the nearest large town, Alice Springs; 450&#160;km '+
       //     '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
       //     'features of the Uluru - Kata Tjuta National Park. Uluru is '+
       //     'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
       //     'Aboriginal people of the area. It has many springs, waterholes, '+
       //     'rock caves and ancient paintings. Uluru is listed as a World '+
       //     'Heritage Site.</p>'+
       //     '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
       //     'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
       //     '(last visited June 22, 2009).</p>'+
       //     '</div>'+
       //     '</div>';

       // var infowindow = new google.maps.InfoWindow({
       //   content: contentString
       // });

       // // var marker = new google.maps.Marker({
       // //   position: uluru,
       // //   map: map,
       // //   title: 'Uluru (Ayers Rock)'
       // // });
       // this.markers[0].addListener('click', function() {
       //   infowindow.open(map, marker);
       // });
     // }









