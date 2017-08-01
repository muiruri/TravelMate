/**
 * Created by kenny on 01/08/2017.
 */

var NewsModel;

NewsModel = Backbone.Model.extend( {
    sync: app.sync.NewsSync
});

var app = app || {};
app.models = app.models || {};
app.models.NewsModel = NewsModel;