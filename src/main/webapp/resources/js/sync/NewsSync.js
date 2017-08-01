/**
 * Created by kenny on 01/08/2017.
 */

NewsSync = function(method, model, options) {
    if(method == "read") {
        var source = "";
        if(options.source != null) {
            source = options.source;
        }
        var url = "https://newsapi.org/v1/articles?source=" + source + "&apiKey=33b779c799c7450e8830475dbcc622e1";

        $.ajax({
            type: "GET",
            url: url
        }).done(function(data){
            if(model.models) {
                model.add(data.articles);
            }
        }).fail(function(){});
    }
}

var app = app || {};
app.sync = app.sync || {};
app.sync.NewsSync = NewsSync;