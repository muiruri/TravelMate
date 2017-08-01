/**
 * Created by kenny on 01/08/2017.
 */

NewsCollection = Backbone.Collection.extend({
    sync: app.sync.NewsSync,
    model: app.models.NewsModel
});

var app = app || {};
app.collections = app.collections || {};
app.collections.NewsCollection = NewsCollection;