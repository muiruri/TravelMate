/**
 * Created by kenny on 01/08/2017.
 */

SourcesCollection = Backbone.Collection.extend({
    sync: app.sync.SourcesSync,
    model: app.models.SourcesModel
});

var app = app || {};
app.collections = app.collections || {};
app.collections.SourcesCollection = SourcesCollection;