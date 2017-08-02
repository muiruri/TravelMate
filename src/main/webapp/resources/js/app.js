/**
 * Created by kenny on 11/11/2016.
 */

var app = app || {};
app.initMap = function() {
    $(function () {
    if(page == "directions") {
        $("#map").css("height", app.getHeight() - 50);
        var mapView = new app.views.MapView()
        mapView.render()
    }
    });
}

$(function () {
    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/gim,
        evaluate: /\{\{(.+?)\}\}/gim,
        escape: /\{\{\-(.+?)\}\}/gim
    };
    
    $('body').on( 'keydown', '.number', function(event) {
        var code = (event.keyCode ? event.keyCode : event.which);
        if (!(
                (code >= 48 && code <= 57) || (code >= 96 && code <= 105)//numbers
                || (code == 46) //delete
                || (code == 190) //period
                || (code == 8) //Back space
                || (code == 12) //Back space
                || (code == 9) //Tab key
                || (code == 37 || code == 39) // Left & Right arrow
            )
            || (code == 190 && $(this).val().indexOf('.') != -1)
        )
            event.preventDefault();
    });

    $.notify.defaults({autoHide: false});

    app.getHeight = function() {
        return $(window).height() - 100;
    }

    app.validateEmail = function(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }



    app.getCookie = function(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    app.initialize = function() {
        $('body').on("keydown", ".number", function(event) {
            var code = (event.keyCode ? event.keyCode : event.which);
            if (!(
                    (code >= 48 && code <= 57) || (code >= 96 && code <= 105)//numbers
                    || (code == 46) //delete
                    || (code == 190) //period
                    || (code == 8) //Back space
                    || (code == 12) //Back space
                    || (code == 9) //Tab key
                    || (code == 37 || code == 39) // Left & Right arrow
                )
                || (code == 190 && $(this).val().indexOf('.') != -1)
            )
                event.preventDefault();
        });

        if(page == "index") {
            var exchangeCollection = new app.collections.ExchangeCollection();
            var exchangeModel = new app.models.ExchangeModel();
            var exchangeView = new app.views.ExchangeView({ el : document.getElementById("exchange-view"), collection: exchangeCollection, model : exchangeModel });
            exchangeView.render();
        } else if(page == "news") {
            var sourceCollection = new app.collections.SourcesCollection();
            var sourceView = new app.views.SourcesView({ el : document.getElementById("sources-view"), collection: sourceCollection });
            sourceView.render();
            sourceCollection.fetch()
        }
    }

    app.generateUUID = function() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    };

    app.deleteCookie = function(name) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };

    app.dateFormatter = function(value, row, index) {
        return moment.unix(value).format('l')
    }
    app.initialize();

});

closeNotify = function(successMessage, syncId, type) {
    if(type == null) {
        type = "success";
    }
    $(".notifyjs-bootstrap-base." + syncId).
    removeClass("notifyjs-bootstrap-info").
    addClass("notifyjs-bootstrap-" + type).
    find("[data-notify-text]").
    text(successMessage);

    close = function() {
        $(".notifyjs-bootstrap-base." + syncId).trigger("notify-hide");
    }

    setTimeout(close, 3000)
}
