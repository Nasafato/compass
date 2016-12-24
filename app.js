"use strict"

/*
keys:
enigma:
6Q0LcNQt4uTWfJd1LonBtXmr2totmbTtbQplSTae2sVz47BJmBU18
https://api.enigma.io/v2/data/6Q0LcNQt4uTWfJd1LonBtXmr2totmbTtbQplSTae2sVz47BJmBU18/us.states.ny.cities.nyc.dohmh.restaurants.inspections?search[]=%40boro%20(%22MANHATTAN%22)&search[]=%40street%20(%22WEST%20%20%2034%20STREET%22)&conjunction=and


*/


var map;
var geocoder;
var locations = [];

var Location = function(addressString, name) {
    var self = this;
    this.addressString = addressString;
    this.name = name;

    this.createMarker = function() {
        geocoder.geocode({'address': addressString}, function(results, status) {
            if (status == "OK")         {
                var result = results[0].geometry.location;
                self.marker = new google.maps.Marker({
                    position: result
                });
            } else {
                alert("Geocoder was not successful: " + status);
            }
        })
    }
}


function initMap() {
    geocoder = new google.maps.Geocoder();
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.752898, lng: -73.983180},
		scrollwheel: true,
		zoom: 14,
        styles: [{"stylers":[{"color":"#22264b"}]},{"elementType":"geometry","stylers":[{"color":"#22264b"}]},{"elementType":"geometry.fill","stylers":[{"color":"#22264b"},{"weight":1}]},{"elementType":"labels.text.fill","stylers":[{"color":"#fae596"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#1a3646"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"administrative.land_parcel","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#64779e"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"color":"#334e87"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#023e58"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"color":"#fae596"},{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"color":"#fbe394"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#023e58"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#d67c7d"}]},{"featureType":"road","elementType":"labels","stylers":[{"weight":1}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"color":"#98a5be"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#d67c7d"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#255763"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#b0d5ce"}]},{"featureType":"transit","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#d67c7d"},{"visibility":"off"}]},{"featureType":"transit.line","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#3a4762"},{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0e1626"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#4e6d70"}]}]
	});
}

