/**
 * Created by kenny on 01/08/2017.
 */

SourcesSync = function(method, model, options) {
    if(method == "read") {
        var url = "https://newsapi.org/v1/sources?language=en";

        $.ajax({
            type: "GET",
            url: url,
        }).done(function(data){
            if(data.status == "ok") {
                if(model.models) {
                    model.add(data.sources);
                }
            }

        }).fail(function(){});
    }
}

var app = app || {};
app.sync = app.sync || {};
app.sync.SourcesSync = SourcesSync;