/**
 * Created by kenny on 20/06/2017.
 */

var ExchangeModel;

ExchangeModel = Backbone.Model.extend( {
    sync: app.sync.ExchangeSync
});

var app = app || {};
app.models = app.models || {};
app.models.ExchangeModel = ExchangeModel;