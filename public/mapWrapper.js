var MapWrapper = function(coords, zoom, container){
  var container = document.getElementById("main-map");

  this.googleMap = new google.maps.Map(container, {
    zoom: zoom, 
    center: coords,
  });

  this.markers =[];
}

MapWrapper.prototype ={
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })
    this.markers.push(marker);
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };

      this.addMarker(position);

      addOnButtonClick: function(){
        google.maps.event.addClickEvent(this.googleMap, 'click', function(event){
          var position = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
          };

          this.markers.push(marker);
          console.log(markers);

    }.bind(this));

  },

  // addOnButtonClick: function(){
  //   google.maps.event.addClickEvent(this.googleMap, 'click', function(event){
  //     var position = {
  //       lat: event.latLng.lat(),
  //       lng: event.latLng.lng()
  //     };

  //     this.markers.push(marker);
  //     console.log(markers);

  //   }.bind(this));
  // }
}

// Learning objectives:

// practice adding event listeners to items in the DOM
// practice using the Google Maps API
// use documentation and online research to add features to your map
// Tasks

// Add an Info Window to one of the markers on your map (see the Google Maps API documentation) with some information about the place it's marking.

// Add a button below the map that says 'Take me to Chicago' (or another city) which moves the center of the map to be the co-ordinates of that city. Tip: look up the 'setCenter' method for Google Maps.

// Extension:

// Add a button below the map with the text 'Where Am I?'. When the user clicks the button, use geolocation to set the center of the map to their current location.


