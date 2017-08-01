/**
 * Created by kenny on 20/06/2017.
 */

ExchangeSync = function(method, model, options) {
    if(method == "read") {
        var url = "http://api.fixer.io/";
        if(options.date != null) {
            url = url + options.date;
        } else {
            url = url + "latest";
        }
        $.ajax({
            type: "GET",
            url: url,
            contentType: "application/json",
            beforeSend: function( xhr ) {
                xhr.setRequestHeader(  "token", app.token );
            }
        }).done(function(data){
            model.set(data)

        }).fail(function(){});
    }
}

var app = app || {};
app.sync = app.sync || {};
app.sync.ExchangeSync = ExchangeSync;