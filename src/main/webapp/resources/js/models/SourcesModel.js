/**
 * Created by kenny on 01/08/2017.
 */

var SourcesModel;

SourcesModel = Backbone.Model.extend( {
    sync: app.sync.SourcesSync
});

var app = app || {};
app.models = app.models || {};
app.models.SourcesModel = SourcesModel;