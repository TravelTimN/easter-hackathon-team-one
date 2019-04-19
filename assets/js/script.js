$(document).ready(function () {
    
    var mapTileLayers = L.tileLayer("http://tile.stamen.com/watercolor/{z}/{x}/{y}.png", {});
    
    var map = L.map("map", {
        layers: [mapTileLayers],
        center: [53.356039, -6.337732],
        zoom: 13,
        minZoom: 7,
        maxZoom: 20,
    });
    
    var mapOverlay = L.tileLayer("http://services.arcgisonline.com/arcgis/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}");
    mapOverlay.bringToFront().addTo(map).setZIndex(9);
    
    
    var eggMarker = L.marker([53.356039, -6.337732]).addTo(map).bindPopup("<h3>Easter Egg Hunt!</h3><strong>DATE: </strong>Sunday, 21 April 2019<br><strong>TIME: </strong>12:00 - 14:00<br><strong>WHERE: </strong>Phoenix Park<br><strong>WHO: </strong>Children of all ages!").bindTooltip("click to find out more!");
    var eggIcon = new L.Icon({
        iconUrl: "assets/images/egg-hunt-marker.png",
        iconSize: [100, 100],
        iconAnchor: [25, 50]
    });
    eggMarker.setIcon(eggIcon);
    
});
// ===== Smooth Scroll ==== 
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
})

