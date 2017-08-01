/**
 * Created by kenny on 20/06/2017.
 */

ExchangeCollection = Backbone.Collection.extend({
    model: app.models.ExchangeModel
});

var app = app || {};
app.collections = app.collections || {};
app.collections.ExchangeCollection = ExchangeCollection;