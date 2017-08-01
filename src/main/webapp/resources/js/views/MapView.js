var MapView = Backbone.View.extend({
  el: $("#map-view"),

  events: {
    "click .findDirection" : "drawRoute"
  },
  initialize: function() {
    this.listenTo(this.model, "change:pickAddress change:dropAddress", this.drawRoute);
  },

  render: function() {
    //this.$el.html(this.template());
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 0, lng: 0},
      zoom: 8
    });

    var map = this.map
    setPosition = function(position) {
      map.setCenter({lat: position.coords.latitude, lng: position.coords.longitude})
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPosition);
    } else {
      
    }

    this.directionsDisplay = new google.maps.DirectionsRenderer;
    this.directionsDisplay.setMap(this.map);

    var ibOptions = {
      disableAutoPan: false
      ,maxWidth: 0
      ,pixelOffset: new google.maps.Size(-45, 0)
      ,zIndex: null
      ,boxStyle: {
        padding: "0px 0px 0px 0px",
        width: "90px",
        height: "25px"
      },
      closeBoxURL : "",
      infoBoxClearance: new google.maps.Size(1, 1),
      isHidden: false,
      pane: "floatPane",
      enableEventPropagation: false
    };
    this.initPlacesSearch();
  },

  removeMarker: function() {
    this.marker.setMap(null);
  },

  selectLocation: function(evt) {

  },

  showSourceDestination: function() {
    this.sourceDestinationView = new app.views.SourceDestinationView({ mapView : this });
    this.geoCode();
    this.$("#map-overlay").html(this.sourceDestinationView.render().el);
  },

  geoCode: function() {
    var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + this.map.getCenter().lat() + "," + this.map.getCenter().lng() + "&key=AIzaSyAP_8poecyZZHV9AQEzZPGPwFulBQXXRHY";
    mapview = this;
    $.ajax({
      url: url
    }).done(function(data) {
      mapview.sourceDestinationView.setSource(data.results[0]);
    })
  },

  initPlacesSearch: function() {
    var autocomplete = new google.maps.places.Autocomplete(document.getElementById("from"));
    autocomplete.addListener("place_changed", function() {
      var place = autocomplete.getPlace();
      this.startLatLng = {}
      this.startLatLng.lat = typeof place.geometry.location.lat == "function" ?  place.geometry.location.lat() : place.geometry.location.lat;
      this.startLatLng.lng = typeof place.geometry.location.lng == "function" ?  place.geometry.location.lng() : place.geometry.location.lng;
    }.bind(this));
    var dropcomplete = new google.maps.places.Autocomplete(document.getElementById("to"));
    dropcomplete.addListener("place_changed", function() {
      var place = dropcomplete.getPlace();
      this.endLatLng = {}
      this.endLatLng.lat = typeof place.geometry.location.lat == "function" ?  place.geometry.location.lat() : place.geometry.location.lat;
      this.endLatLng.lng = typeof place.geometry.location.lng == "function" ?  place.geometry.location.lng() : place.geometry.location.lng;
    }.bind(this));
  },


  drawRoute: function() {
    if(this.startLatLng == null || this.endLatLng == null) {
      return;
    }

    var directionsService = new google.maps.DirectionsService;

    directionsService.route({
      origin: { lat: this.startLatLng.lat, lng : this.startLatLng.lng },
      destination: { lat: this.endLatLng.lat, lng : this.endLatLng.lng },
      travelMode: 'DRIVING'
    }, (function(response, status) {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
        }
    }).bind(this));
  },

  removePath: function() {
    this.directionsDisplay.setMap(null);
  }

})

var app = app || {};
app.views = app.views || {};
app.views.MapView = MapView;
