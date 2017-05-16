var initialize = function(){
  var center = {lat: 51.5, lng: -0.12};
  var zoom = 10;
  var container = container;
  var mainMap = new MapWrapper(center, zoom, container);

  var button = document.querySelector('button');
  button.addEventListener('click', addOnButtonClick);

  mainMap.addMarker(center);
  // mainMap.addMarker({lat: 65, lng: -0.20});
  // mainMap.addMarker({lat: 15, lng: -100.0});
  // mainMap.addMarker({lat: 25, lng: -5.20});
  // mainMap.addMarker({lat: 5, lng: 10.20});
  mainMap.addClickEvent();
  // mainMap.addOnButtonClick();
}


window.addEventListener('load', initialize);