var MapView = Backbone.View.extend({
  el: $("#map"),
  template: _.template($('#map-template').html()),

  events: {
    "click .source" : "selectLocation",
    "click .reserve" : "reserve"
  },
  initialize: function() {
    this.listenTo(this.model, "change:pickAddress change:dropAddress", this.drawRoute);
  },

  render: function() {
    //this.$el.html(this.template());
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });

    this.directionsDisplay = new google.maps.DirectionsRenderer;
    this.directionsDisplay.setMap(this.map);
    this.marker = new google.maps.Marker({
      position: this.map.getCenter(),
      map: this.map,
      title: 'Click to zoom'
    });

    this.map.addListener('center_changed', (function() {
      this.marker.setPosition(this.map.getCenter());
    }).bind(this));

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

    var pickUpView = new app.views.PickupView({ mapView : this });
    ibOptions.content = pickUpView.render().el;
    this.ib = new InfoBox(ibOptions);
    this.ib.open(this.map, this.marker);
    this.map.panTo(this.ib.getPosition());
    if ("geolocation" in navigator) {
      var map = this.map;
      navigator.geolocation.getCurrentPosition((function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.map.setCenter(pos);
      }).bind(this));
    } else {
      /* geolocation IS NOT available */
    }

    var carPicker = new app.views.CarPickerView();
    this.$("#map-overlay").html(carPicker.render().el);
    carPicker.initSlider()
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

  showPlaceSearch: function(callback) {
    this.$("#place-search").removeClass("hide");
    var autocomplete = new google.maps.places.Autocomplete(
          /** @type {!HTMLInputElement} */ (
              document.getElementById('search')));
    autocomplete.addListener('place_changed', (function() {
      var place = autocomplete.getPlace();
      this.$("#place-search").addClass("hide");
      this.$("#search").val("")
      callback(place);
    }).bind(this));
  },

  reserve: function(evt) {
    var carReserveView = new app.views.CarReserveView();
    this.$el.html(carReserveView.render().el);
  },

  drawRoute: function() {
    if(app.trip.get("pickLat") == null || app.trip.get("dropLat") == null) {
      return;
    }

    var directionsService = new google.maps.DirectionsService;

    directionsService.route({
      origin: { lat: app.trip.get("pickLat"), lng : app.trip.get("pickLon") },
      destination: { lat: app.trip.get("dropLat"), lng : app.trip.get("dropLon") },
      travelMode: 'DRIVING'
    }, (function(response, status) {
      if (status === 'OK') {
        //this.directionsDisplay.setDirections(response);
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
